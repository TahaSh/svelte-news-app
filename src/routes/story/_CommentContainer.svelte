<script>
  import CommentInput from './_CommentInput.svelte'
  import Comment from './_Comment.svelte'
  import * as api from 'api'

  export let storyId
  let comments

  $: storyId && loadData()

  async function loadData () {
    comments = await api.stories.getStoryComments({ storyId })
  }
</script>

<CommentInput
  {storyId}
  on:created="{({ detail }) => comments = [...comments, detail.comment]}"
/>

<div class="comment-list">
  {#if !comments}
    <span class="loading-comments">
      Loading comments...
    </span>
  {:else if comments.length === 0}
    <span class="no-comments">
      No comments!
    </span>
  {:else}
    {#each comments as comment (comment._id)}
      <Comment
        {comment}
        {storyId}
      />
    {/each}
  {/if}
</div>
