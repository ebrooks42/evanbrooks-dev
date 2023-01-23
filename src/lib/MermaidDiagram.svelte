<script lang="ts">
	import mermaid from 'mermaid';
	import invariant from 'tiny-invariant';
	import { onMount } from 'svelte';

	let element: HTMLElement | null = null;
	mermaid.initialize({ startOnLoad: false });
	onMount(() => {
		invariant(element, 'After mount, element should be defined.');
		mermaid.init(undefined, element);
	});
</script>

<pre bind:this={element}>
    <slot />
</pre>
