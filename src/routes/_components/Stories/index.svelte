<script>
  import { stores } from '@sapper/app'
  import * as api from 'api'
  import Story from './Story.svelte'

  const { page } = stores()

  export let currentPage

  let limit = 10
  let stories
  let storiesCount
  let error = null
  let loaded = false

  $: sort = $page.query.sort || 'recent'
  $: offset = (currentPage - 1) * limit
  $: lastPage = storiesCount && Math.ceil(storiesCount / limit)
  $: nextPageLink = `/page/${currentPage + 1}?sort=${sort}`
  $: prevPageLink = `/page/${currentPage - 1}?sort=${sort}`

  $: currentPage && sort && loadData()

  async function loadData () {
    try {
      stories = null
      const response = await api.stories.getStories({
        offset,
        limit,
        sort
      })
      stories = response.data
      storiesCount = response.totalCount
    } catch (e) {
      error = e
    }
  }
</script>

<ul class="sort-options">
  <li
    class="sort-option active"
    class:active="{sort === 'recent'}"
  >
    <a href="{`/page/${currentPage}?sort=recent`}">
      Recent
    </a>
  </li>
  <li
    class="sort-option"
    class:active="{sort === 'top'}"
  >
    <a href="{`/page/${currentPage}?sort=top`}">
      Top
    </a>
  </li>
</ul>

{#if error}
  {error.message}
{:else if !stories}
  Loading stories...
{:else if stories.length === 0}
  No stories yet!
{:else}
  <ol class="story-list">
    {#each stories as story (story._id)}
      <Story {story} inList="{true}"/>
    {/each}
  </ol>
{/if}

{#if storiesCount && storiesCount > limit}
  <div class="pagination-links">
    {#if currentPage > 1}
      <a href="{prevPageLink}">
        &lt; Back
      </a>
    {/if}
    {#if currentPage < lastPage}
      <a href="{nextPageLink}">
        Next &gt;
      </a>
    {/if}
  </div>
{/if}
