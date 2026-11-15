import { error } from '@sveltejs/kit';
import { team, getTeamMember } from '../../../lib/data/team';
import type { PageLoad } from './$types';

export function entries() {
	return team.map((m) => ({ slug: m.slug }));
}

export const load: PageLoad = ({ params }) => {
	const member = getTeamMember(params.slug);
	if (!member) error(404, 'Attorney not found');
	const others = team.filter((m) => m.slug !== member.slug);
	return { member, others };
};
