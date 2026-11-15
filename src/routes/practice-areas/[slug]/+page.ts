import { error } from '@sveltejs/kit';
import { practiceAreas, getPracticeArea } from '../../../lib/data/practice-areas';
import type { PageLoad } from './$types';

export function entries() {
	return practiceAreas.map((a) => ({ slug: a.slug }));
}

export const load: PageLoad = ({ params }) => {
	const area = getPracticeArea(params.slug);
	if (!area) error(404, 'Practice area not found');
	const others = practiceAreas.filter((a) => a.slug !== area.slug);
	return { area, others };
};
