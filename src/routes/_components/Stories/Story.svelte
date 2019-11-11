<script>
  import { goto, stores } from '@sapper/app'
  import * as api from 'api'
  import Voter from '../Voter.svelte'
  import formatDistanceToNow from 'date-fns/formatDistanceToNow'

  const { session } = stores()

  export let story
  export let inList = false

  $: domain = story.type === 'link'
      ? new URL(story.content).hostname
      : 'self'

  $: storyLink = `/story/${story._id}`

  $: link = story.type === 'link'
    ? story.content
    : storyLink

  $: commentsCountTitle = story.commentsCount === 0
    ? 'no comments'
    : `${story.commentsCount} comment${story.commentsCount > 1 ? 's' : ''}`

  $: date = formatDistanceToNow(new Date(story.createdAt), { addSuffix: true })

  $: isStoryOwner = story.user._id === ($session.user && $session.user._id)

  function upvote () {
    story.score++
    api.stories.upvoteStory({ storyId: story._id })
  }

  async function deleteStory () {
    await api.stories.deleteStory({
      storyId: story._id,
      token: $session.user.token
    })
    goto('/')
  }
</script>

<li class="story-item">
  <Voter
    score="{story.score}"
    on:upvote="{upvote}"
  />
  <div class="main">
    <div class="details">
      <a
        class="title"
        href="{link}"
        rel="prefetch"
      >
        {story.title}
      </a>
      <span class="domain">
        {domain}
      </span>
      {#if !inList && isStoryOwner}
        <div class="story-actions">
          <a
            class="story-action-button"
            href="{`story/${story._id}/edit`}"
          >
            edit
          </a>
          <span
            class="story-action-button"
            on:click="{deleteStory}"
          >
            delete
          </span>
        </div>
      {/if}
    </div>
    <div class="byline">
      by {story.user.username} {date} |
      <a
        class="comments-link"
        href="{storyLink}"
        rel="prefetch"
      >
        {commentsCountTitle}
      </a>
    </div>
  </div>
</li>
