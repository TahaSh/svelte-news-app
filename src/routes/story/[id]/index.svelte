<script context="module">
  import * as api from 'api'

  export async function preload ({ params }) {
    let story = await api.stories.getStory({ storyId: params.id })
    return { story }
  }
</script>

<script>
  import Story from '../../_components/Stories/Story.svelte'
  import CommentContainer from '../_CommentContainer.svelte'

  export let story
</script>

<svelte:head>
  <title>{story.title}</title>
</svelte:head>

<div class="item-page page">
  <Story {story}/>
  {#if story.type === 'text'}
    <div class="story-content">
      {story.content}
    </div>
  {/if}
  <CommentContainer storyId="{story._id}"/>
</div>
