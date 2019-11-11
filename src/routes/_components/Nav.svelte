<script>
  import { goto, stores } from '@sapper/app'
  import axios from 'axios'

  const { session } = stores()

  async function logout () {
    await axios.post('/auth/logout')
    $session.user = null
    goto('/')
  }
</script>

<nav class="navbar">
  <div class="navbar-left">
  	<a
  		class="logo"
  		href="/"
  	>
  		News App
  	</a>
  </div>
  <div class="navbar-right">
    {#if $session.user}
      <span class="username">
        {$session.user.username}
        <span
          class="logout-button"
          on:click="{logout}"
        >
          logout
        </span>
      </span>
      <a
        href="/story/create"
        class="new-story-button primary-button"
      >
        New Story
      </a>
    {:else}
      <a
        class="navbar-link"
        href="/login"
      >
        Log in
      </a>
      <a
        class="navbar-link"
        href="/signup"
      >
        Sign up
      </a>
    {/if}
  </div>
</nav>
