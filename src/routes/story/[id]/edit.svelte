<script context="module">
  import * as api from 'api'

  export async function preload ({ params }, session) {
    if (!session.user) {
      return this.redirect(302, '/login')
    }
    let story = await api.stories.getStory({ storyId: params.id })
    if (session.user._id !== story.user._id) {
      return this.error(404, 'Not found')
    }
    return { story }
  }
</script>

<script>
  import StoryForm from '../_StoryForm.svelte'

  export let story
</script>

<svelte:head>
  <title>Edit your story</title>
</svelte:head>

<StoryForm {story}/>
