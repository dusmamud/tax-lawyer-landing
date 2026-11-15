export type TeamMember = {
	slug: string;
	img: string;
	name: string;
	role: string;
	tag: string;
	exp: string;
	focus: string[];
	education: string[];
	admissions: string[];
	bio: string[];
};

export const team: TeamMember[] = [
	{
		slug: 'michael-young',
		img: '/lawyer-senior.webp',
		name: 'Michael S. Young',
		role: 'Founding Partner · Tax Litigation',
		tag: 'IRS Defence',
		exp: '15+ yrs',
		focus: ['IRS Defence', 'Criminal Tax Law', 'Tax Litigation'],
		education: ['J.D., Harvard Law School', 'LL.M. in Taxation, New York University', 'B.A. Economics, University of Texas'],
		admissions: ['U.S. Tax Court', 'U.S. District Court', 'State Bar of Texas', 'State Bar of New York'],
		bio: [
			'Michael founded MSY Law in 2011 after a decade at a national firm, where he watched ordinary people get crushed by a tax system they did not understand. He built this firm on a simple idea: a tax attorney should explain your problem in plain English, tell you the honest odds, and then fight like your future depends on it — because it does.',
			'He has represented clients in over 400 IRS matters, including criminal investigations that ended with no charges filed. The IRS knows him, and that matters: cases settle faster when the other side knows your lawyer will not blink.',
			'When he is not in the office, Michael teaches tax litigation at a local law school and volunteers at a free clinic helping low-income taxpayers resolve IRS debts.'
		]
	},
	{
		slug: 'david-carter',
		img: '/lawyer-man.webp',
		name: 'David Carter',
		role: 'Senior Attorney · Business Tax',
		tag: 'Corporate Tax',
		exp: '12 yrs',
		focus: ['Business Tax', 'State & Local Tax', 'Tax Planning'],
		education: ['J.D., University of Chicago Law School', 'B.S. Accounting, University of Illinois'],
		admissions: ['U.S. Tax Court', 'State Bar of Illinois', 'State Bar of Texas'],
		bio: [
			'David is the attorney business owners call when growth creates tax problems. He has guided more than 300 companies through entity changes, multi-state expansion and state audits — usually without the business ever missing a day of work.',
			'Before joining MSY Law he spent six years inside a Big Four accounting firm, where he learned how the IRS and state agencies actually audit. That inside view is why his clients rarely face the same problem twice.',
			'David leads the firm’s tax planning practice and writes the quarterly planning brief every MSY Law client receives.'
		]
	},
	{
		slug: 'sarah-mitchell',
		img: '/lawyer-woman.webp',
		name: 'Sarah Mitchell',
		role: 'Partner · Estate & International',
		tag: 'Estate Planning',
		exp: '11 yrs',
		focus: ['Estate Planning', 'International Tax', 'Trusts'],
		education: ['J.D., Stanford Law School', 'LL.M. in Taxation, Georgetown University', 'B.A., Wellesley College'],
		admissions: ['U.S. Tax Court', 'State Bar of California', 'State Bar of New York'],
		bio: [
			'Sarah believes estate planning is an act of care, not paperwork. She has built estate plans for more than 500 families — from young parents writing their first will to founders passing a business to the next generation.',
			'Her international practice grew from her own family: the daughter of immigrants, she understands the fear of a letter from a foreign tax authority. She has resolved FBAR and FATCA cases for clients in 14 countries, often reducing penalties to a fraction of what was threatened.',
			'Sarah is a frequent speaker on estate and cross-border tax, and her plain-English guides are the most-read articles on this site.'
		]
	},
	{
		slug: 'emily-ross',
		img: '/lawyer-young-woman.webp',
		name: 'Emily Ross',
		role: 'Attorney · Compliance & Audits',
		tag: 'Tax Audits',
		exp: '6 yrs',
		focus: ['Tax Audits', 'Compliance', 'Penalty Abatement'],
		education: ['J.D., Columbia Law School', 'B.A. Political Science, NYU'],
		admissions: ['U.S. Tax Court', 'State Bar of New York'],
		bio: [
			'Emily is the first person most clients speak to — and the reason most of them stop being afraid. She specialises in audits: the letters, the deadlines, the examiners, and the art of getting penalties removed entirely.',
			'In six years she has handled over 200 audits, with penalties abated in full in more than 80% of cases. Clients describe her the same way every time: calm, fast, and completely clear about what happens next.',
			'Emily runs the firm’s audit response team and its free first-call service, where anyone can get 15 minutes of honest guidance — even if they never hire us.'
		]
	}
];

export function getTeamMember(slug: string) {
	return team.find((m) => m.slug === slug);
}
