<script>
	import '@fontsource/sofia-sans';
	import Header from './Header.svelte';
	import '../app.css';

	let year = new Date().getFullYear();
</script>

<Header />

<main class="main-container container mx-auto max-w-screen-lg">
	<slot />
</main>

<footer class="fixed inset-x-0 bottom-0 w-full text-center p-4 bg-slate-200">
	<p>© {year} Evan Brooks</p>
</footer>

<style>
	.main-container {
		margin-top: theme('margin.4');
		/* Bottom margin takes into account height of footer. */
		margin-bottom: calc(56px + theme('margin.4'));
	}
</style>
