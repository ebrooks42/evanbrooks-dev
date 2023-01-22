<script>
	import Header from './Header.svelte';
	import '../app.css';

	let year = new Date().getFullYear();
</script>

<div class="bg-slate-100 min-h-screen">
	<Header />

	<main class="mb-[56px] pb-2">
		<slot />
	</main>

	<footer class="fixed inset-x-0 bottom-0 w-full text-center p-4 bg-slate-200">
		<p>© {year} Evan Brooks</p>
	</footer>
</div>
