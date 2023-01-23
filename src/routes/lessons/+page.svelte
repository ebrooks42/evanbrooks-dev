<script lang="ts">
	const posts = [
		{
			slug: 'learning-federated-id',
			title: 'How does federated identity with Open ID Connect (OIDC) actually work?',
			summary: `At First National Bank of Omaha, we needed to single sign on users from outside of our network boundary. Moreover, once SSO'd (authenticated) and enrolled (authorized), users' profiles needed to support OAuth authorization for granting 3rd parties access to their personal data. Join me as I learn Okta, OIDC, and OAuth.`
		}
	];
</script>

<h1 class="text-3xl text-center">Lessons Learned</h1>
<p>
	A collection of notes and lesssons that I'm keeping around for myself and for others. Check out
	the links below for anything that interests you.
</p>

<ul>
	{#each posts as post}
		<li class="shadow-md rounded-lg p-4 transition duration-300 hover:shadow-lg hover:bg-slate-200">
			<a href="/lessons/{post.slug}" class="space-y-4">
				<h2 class="text-xl">{post.title}</h2>
				<p>{post.summary}</p>
			</a>
		</li>
	{/each}
</ul>
