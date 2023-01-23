<script lang="ts">
	export let href: string;
	let clazz: string = '';
	export { clazz as class };
</script>

<a {href} class={`text-purple-800 decoration-purple-800 hover:underline ${clazz}`}>
	<slot />
</a>
