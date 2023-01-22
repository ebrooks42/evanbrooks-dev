<script lang="ts">
	import Badge from './Badge.svelte';

	export let technologies: string[];
</script>

<ul class="space-x-2 space-y-1">
	{#each technologies as tech}
		<li class="inline-block"><Badge>{tech}</Badge></li>
	{/each}
</ul>
