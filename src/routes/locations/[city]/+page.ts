import { error } from '@sveltejs/kit';
import { cities, getCity } from '../../../lib/data/locations';
import type { PageLoad, EntryGenerator } from './$types';

export const entries: EntryGenerator = () => cities.map((c) => ({ city: c.slug }));

export const load: PageLoad = ({ params }) => {
	const city = getCity(params.city);
	if (!city) error(404, 'City not found');
	return { city };
};
