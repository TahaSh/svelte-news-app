<script>
	import Nav from './_components/Nav.svelte'
  import LoadingBar from './_components/LoadingBar.svelte'
</script>

<LoadingBar/>
<Nav/>

<main>
	<slot></slot>
</main>
