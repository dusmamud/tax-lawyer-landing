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
		slug: 'mohan-s-yadav',
		img: '/lawyer-senior.webp',
		name: 'Mohan S. Yadav',
		role: 'Founding Partner · Tax Litigation',
		tag: 'Tax Litigation',
		exp: '15+ yrs',
		focus: ['Tax Litigation', 'Income Tax Appeals', 'Search & Seizure'],
		education: ['LL.B., Faculty of Law, University of Delhi', 'B.Com. (Hons.), University of Delhi'],
		admissions: ['Bar Council of Delhi', 'Supreme Court of India', 'Delhi High Court', 'Income Tax Appellate Tribunal (ITAT)'],
		bio: [
			'Mohan founded MSY Law in 2011 after a decade at a national firm, where he watched ordinary people get crushed by a tax system they did not understand. He built this firm on a simple idea: a tax lawyer should explain your problem in plain English, tell you the honest odds, and then fight like your future depends on it — because it does.',
			'He has led more than 400 appeals before the ITAT, the Delhi High Court and the Supreme Court, including search and seizure cases that ended with no prosecution and penalties of crores deleted in appeal. The department knows him, and that matters: cases settle faster when the other side knows your lawyer will not blink.',
			'When he is not in court, Mohan teaches tax litigation at a Delhi law school and volunteers at a free clinic helping small traders and salaried taxpayers resolve income tax demands.'
		]
	},
	{
		slug: 'arvind-kapoor',
		img: '/lawyer-man.webp',
		name: 'Arvind Kapoor',
		role: 'Senior Attorney · Corporate Tax',
		tag: 'Corporate Tax',
		exp: '13 yrs',
		focus: ['Corporate Tax', 'Transfer Pricing', 'Tax Planning'],
		education: ['LL.B., Faculty of Law, University of Delhi', 'B.Com., University of Delhi'],
		admissions: ['Bar Council of Delhi', 'Delhi High Court', 'Income Tax Appellate Tribunal (ITAT)'],
		bio: [
			'Arvind is the lawyer business owners call when growth creates tax problems. He has guided more than 300 companies through restructuring, MAT planning, transfer pricing assessments and multi-state expansion — usually without the business ever missing a day of work.',
			'Before joining MSY Law he spent six years inside a Big Four firm, where he learned how the department actually assesses companies. That inside view is why his clients rarely face the same problem twice.',
			'Arvind leads the firm’s corporate tax and planning practice and writes the quarterly planning brief every MSY Law client receives.'
		]
	},
	{
		slug: 'sara-iyer',
		img: '/lawyer-woman.webp',
		name: 'Sara Iyer',
		role: 'Partner · GST & International',
		tag: 'GST & International',
		exp: '11 yrs',
		focus: ['GST', 'International Tax', 'NRI Taxation'],
		education: ['LL.M. (Taxation), National Law University, Delhi', 'LL.B., University of Mumbai'],
		admissions: ['Bar Council of Delhi', 'Delhi High Court', 'Income Tax Appellate Tribunal (ITAT)'],
		bio: [
			'Sara believes good tax advice is an act of care, not paperwork. She has handled GST disputes, DTAA claims and FEMA matters for more than 500 clients — from young founders registering for GST to NRIs untangling years of Indian tax filings.',
			'Her international practice grew from her own family: the daughter of parents who worked abroad, she understands the fear of a notice from a tax authority in a country you no longer live in. She has resolved cross-border cases for clients in 14 countries, often reducing demands to a fraction of what was threatened.',
			'Sara is a frequent speaker on GST and cross-border tax, and her plain-English guides are the most-read articles on this site.'
		]
	},
	{
		slug: 'ananya-rao',
		img: '/lawyer-young-woman.webp',
		name: 'Ananya Rao',
		role: 'Attorney · Compliance & Appeals',
		tag: 'Tax Appeals',
		exp: '7 yrs',
		focus: ['Income Tax Appeals', 'Scrutiny Assessments', 'Penalty Proceedings'],
		education: ['LL.B., National Law School of India University, Bengaluru'],
		admissions: ['Bar Council of Delhi', 'Delhi High Court', 'Income Tax Appellate Tribunal (ITAT)'],
		bio: [
			'Ananya is the first person most clients speak to — and the reason most of them stop being afraid. She specialises in income tax notices: the scrutiny assessments, the penalty proceedings, the deadlines, and the art of getting penalties reduced or removed entirely.',
			'In seven years she has handled over 200 assessments and appeals, with penalties reduced or deleted in more than 80% of cases. Clients describe her the same way every time: calm, fast, and completely clear about what happens next.',
			'Ananya runs the firm’s notice response team and its free first-call service, where anyone can get 15 minutes of honest guidance — even if they never hire us.'
		]
	}
];

export function getTeamMember(slug: string) {
	return team.find((m) => m.slug === slug);
}
