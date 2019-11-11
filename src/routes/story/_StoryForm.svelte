<script>
  import { goto, stores } from '@sapper/app'
  import * as api from 'api'
  import ButtonGroup from '../../components/ButtonGroup.svelte'

  const { session } = stores()

  export let story

  let inProgress = false

  async function submit () {
    inProgress = true
    const data = story._id
      ? await api.stories.updateStory({
        storyId: story._id,
        story,
        token: $session.user.token
      })
      : await api.stories.createStory({
        story,
        token: $session.user.token
      })
    goto(`/story/${data._id}`)
  }
</script>

<form
  class="story-form"
  on:submit|preventDefault="{submit}"
>
  <input
    class="text-input"
    bind:value="{story.title}"
    type="text"
    placeholder="Title"
    required
  >
  <ButtonGroup
    bind:value="{story.type}"
    disabled="{story._id}"
    buttons="{[
      {
        value: 'link',
        title: 'Link'
      },
      {
        value: 'text',
        title: 'Text'
      }
    ]}"
  />
  {#if story.type === 'link'}
    <input
      class="text-input link-input content-input"
      bind:value="{story.content}"
      type="url"
      placeholder="URL"
      required
    >
  {:else}
    <textarea
      class="content-text-input content-input"
      bind:value="{story.content}"
      placeholder="Text (optional)"
    ></textarea>
  {/if}
  <button
    class="primary-button submit-button"
    disabled="{inProgress}"
  >
    {#if story._id}
      SAVE
    {:else}
      POST
    {/if}
  </button>
</form>
