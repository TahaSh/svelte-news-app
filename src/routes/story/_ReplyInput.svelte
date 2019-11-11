<script>
  import { createEventDispatcher } from 'svelte'
  import { stores } from '@sapper/app'
  import * as api from 'api'

  const dispatch = createEventDispatcher()
  const { session } = stores()

  export let storyId
  export let parentCommentId

  let comment = {
    content: '',
    parent: parentCommentId
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
    dispatch('created', { comment: newComment })
  }
</script>

<form
  class="reply-form"
  on:submit|preventDefault="{submit}"
>
  <textarea
    class="reply-input"
    bind:value="{comment.content}"
    disabled="{inProgress}"
  ></textarea>
  <div class="reply-buttons-container">
    <button
      type="button"
      class="cancel-reply-button text-button"
      on:click="{() => dispatch('cancel')}"
      disabled="{inProgress}"
    >
      Cancel
    </button>
    <button
      class="reply-button primary-button"
      disabled="{inProgress}"
    >
      Reply
    </button>
  </div>
</form>
