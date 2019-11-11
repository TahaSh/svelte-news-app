<script context="module">
  export function preload (page, session) {
    if (!session.user) {
      return this.redirect(302, 'login')
    }
  }
</script>

<script>
  import StoryForm from './_StoryForm.svelte'

  let story = { title: '', type: 'link', content: '' }
</script>

<StoryForm {story}/>
