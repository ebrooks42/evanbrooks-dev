<script lang="ts">
	export let href: string;
</script>

<a {href} class="text-purple-800 decoration-purple-800 hover:underline">
	<slot />
</a>
