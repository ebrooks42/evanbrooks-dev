<script lang="ts">
	import ExternalLink from './Link.svelte';
	import TechStack from './TechStack.svelte';

	export let title: string;
	export let href: string;
	export let technologies: string[];
</script>

<div class="space-y-2">
	<h3 class="text-xl">
		<ExternalLink {href}>{title}</ExternalLink>
	</h3>
	<slot />
	<TechStack {technologies} />
</div>
