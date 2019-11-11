<script>
  import { createEventDispatcher } from 'svelte'

  const dispatch = createEventDispatcher()

  export let score = 0
</script>

<div class="voter">
  <span
    class="upvoter"
    on:click="{() => dispatch('upvote')}"
  >
    <span class="arrow"></span>
  </span>
  <span class="score">{score}</span>
</div>
