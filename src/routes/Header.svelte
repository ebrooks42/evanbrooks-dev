<script lang="ts">
	import classNames from 'classnames';
	import { page } from '$app/stores';

	$: pageLinks = [
		{
			pathname: '/',
			name: 'Home',
			active: $page.url.pathname === '/'
		}
	];
</script>

<header>
	<nav class="shadow-sm bg-slate-200">
		<ul class="flex flex-row justify-center space-x-4">
			{#each pageLinks as pageLink}
				<li
					class={classNames(
						'relative text-purple-800  decoration-purple-800 hover:underline py-4',
						{
							'underline ': pageLink.active
						}
					)}
					aria-current={pageLink.active ? 'page' : undefined}
				>
					<a href={pageLink.pathname}>
						{pageLink.name}
					</a>
				</li>
			{/each}
		</ul>
	</nav>
</header>

<style>
	li[aria-current='page']::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid theme('colors.purple.800');
	}
</style>
