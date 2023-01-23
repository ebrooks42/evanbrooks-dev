import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (({ params }) => {
	if (params.slug === 'learning-federated-id') {
		return {
			title: 'How does federated identity with Open ID Connect (OIDC) actually work?',
			content: `<p>Welcome to my blog. Lorem ipsum dolor sit amet...</p><p>I'll be adding some content to this on Monday or Tuesday!</p>`
		};
	}

	throw error(404, 'Not found');
}) satisfies PageLoad;
