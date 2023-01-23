<script lang="ts">
	import MdPersonOutline from 'svelte-icons/md/MdPersonOutline.svelte';
	import MdLaptop from 'svelte-icons/md/MdLaptop.svelte';
	import headshot from '$lib/images/evan-professional-headshot.jpeg';
	import RecentProject from '$lib/RecentProject.svelte';
	import Link from '$lib/Link.svelte';
</script>

<svelte:head>
	<title>Evan Brooks</title>
	<meta name="description" content="Evan Brooks' personal site" />
</svelte:head>

<section class="grid grid-cols-1 md:grid-cols-2 place-items-center space-y-4 my-8">
	<img class="max-w-[300px] rounded-full" src={headshot} alt="Evan Brooks headshot" />
	<div class="space-y-4">
		<h1 class="text-3xl text-center">Nice to meet you!</h1>
		<p>
			I'm Evan Brooks, a software engineer with passion for both
			<span class="w-4 h-4 inline-block align-middle">
				<MdPersonOutline />
			</span>
			people and
			<span class="w-4 h-4 inline-block align-middle">
				<MdLaptop />
			</span>
			code. Some of my recent (non-corporate) work is below. If you want to see what I've been learning
			lately, check out my
			<Link href="/lessons">lessons learned</Link>.
		</p>
		<p />
	</div>
</section>

<section>
	<h2 class="text-center text-2xl">What I've been working on</h2>
	<ul class="space-y-4">
		<li>
			<RecentProject
				title="Queen B Events"
				href="https://www.queenb.events/"
				technologies={[
					'Typescript',
					'React',
					'NextJS',
					'Tailwind CSS',
					'Google Business APIs',
					'Sendgrid Email APIs',
					'Github'
				]}
			>
				<p>
					A simple site I built for my friend to showcase her boutique event planning business. I
					used the opportunity to learn NextJS, Tailwind CSS, and dip my toes into the Google
					Business APIs.
				</p>
			</RecentProject>
		</li>
		<li>
			<RecentProject
				title="evanbrooks.dev"
				href="https://www.evanbrooks.dev/"
				technologies={['Typescript', 'Svelte', 'SvelteKit', 'Tailwind CSS', 'Vercel']}
			>
				<p>
					This site! Working with Svelte & SvelteKit for the first time to build a personal site has
					expanded my front-end templating library knowlege. I'm now
					<span class="italic">passable</span>
					in Angular, React, Vue, and Svelte.
				</p>
			</RecentProject>
		</li>
		<li>
			<RecentProject
				title="Audiobook Buddy"
				href="https://github.com/ebrooks42/audiobook-buddy"
				technologies={[
					'Typescript',
					'React',
					'Redux',
					'Firebase',
					'Electron',
					'Github Actions',
					'Material UI React',
					'Jest',
					'React Testing Library'
				]}
			>
				<p>
					A desktop application which makes recording multiple voice parts for an audiobook easy as
					pie. Electron plus Material UI React creates a great cross-platform experience with no
					sacrifices in developer experience. End to end test coverage on the UI is also excellent,
					leading to multiple quick refactors.
				</p>
			</RecentProject>
		</li>
		<li>
			<RecentProject
				title="use-poll"
				href="https://github.com/ebrooks42/use-poll"
				technologies={['React', 'Typescript', 'NPM']}
			>
				A cutom React Hook to create polls for asynchronous fetch operations. Polling and the
				<code>useEffect</code>
				hook are very easy to screw up&mdash;I've done it many times! 100% test coverage in React Testing
				Library, plus active use at my old company (Mutual of Omaha).
			</RecentProject>
		</li>
	</ul>
</section>
