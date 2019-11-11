<script>
	import Nav from './_components/Nav.svelte'
  import LoadingBar from './_components/LoadingBar.svelte'

	export let segment
</script>

<LoadingBar/>
<Nav {segment}/>

<main>
	<slot></slot>
</main>