<script context="module">
  export function preload ({ params }) {
    return {
      currentPage: +params.page
    }
  }
</script>

<script>
  import Home from '../_components/Home.svelte'

  export let currentPage
</script>

<Home {currentPage}/>
