<script>
  export let buttons = []
  export let value
  export let disabled = false
</script>

<div
  class="button-group"
  class:disabled="{disabled}"
>
  {#each buttons as button}
    <button
      class="button"
      type="button"
      class:active="{button.value === value}"
      on:click="{() => !disabled ? value = button.value : ''}"
    >
      {button.title}
    </button>
  {/each}
</div>
