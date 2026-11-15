import { error } from '@sveltejs/kit';
import { posts, getPost } from '../../../lib/data/posts';
import type { PageLoad } from './$types';

export function entries() {
	return posts.map((p) => ({ slug: p.slug }));
}

export const load: PageLoad = ({ params }) => {
	const post = getPost(params.slug);
	if (!post) error(404, 'Article not found');
	const related = posts.filter((p) => p.slug !== post.slug);
	return { post, related };
};
