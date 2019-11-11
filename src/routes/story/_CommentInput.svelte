<script>
  import { stores } from '@sapper/app'
  import * as api from 'api'
  import { createEventDispatcher } from 'svelte'

  const dispatch = createEventDispatcher()
  const { session } = stores()

  export let storyId

  let comment = {
    content: '',
    parent: null
  }

  let inProgress = false

  async function submit () {
    inProgress = true
    const newComment = await api.stories.addComment({
      storyId,
      comment,
      token: $session.user.token
    })
    inProgress = false
    comment = {
      content: '',
      parent: null
    }
    dispatch('created', { comment: newComment })
  }
</script>

<form
  class="comment-form"
  on:submit|preventDefault="{submit}"
>
  <textarea
    class="comment-input"
    bind:value="{comment.content}"
    placeholder="{$session.user ? 'Write your comment' : 'Log in to comment'}"
    disabled="{inProgress || !$session.user}"
    required
  ></textarea>

  {#if $session.user}
    <button
      class="add-comment-button primary-button"
      disabled="{inProgress}"
    >
      Add Comment
    </button>
  {/if}
</form>
