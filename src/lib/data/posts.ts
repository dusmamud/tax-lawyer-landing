export type PostSection = { heading?: string; paragraphs: string[]; list?: string[] };

export type Post = {
	slug: string;
	tag: string;
	date: string;
	read: string;
	title: string;
	excerpt: string;
	author: string;
	authorRole: string;
	authorImg: string;
	grad: string;
	sections: PostSection[];
};

export const posts: Post[] = [
	{
		slug: 'irs-audit-letter-5-things-first',
		tag: 'IRS Audits',
		date: 'Nov 10, 2026',
		read: '6 min read',
		title: 'Got an IRS audit letter? Do these 5 things first',
		excerpt: 'The first 48 hours decide how your audit goes. Here is the exact checklist our attorneys use.',
		author: 'Emily Ross',
		authorRole: 'Attorney · Compliance & Audits',
		authorImg: '/lawyer-young-woman.webp',
		grad: 'from-navy to-navy-2',
		sections: [
			{
				paragraphs: [
					'The envelope looks ordinary. The letter inside is not. An IRS audit notice is the most stressful piece of mail most people will ever receive — and the first 48 hours decide how the whole thing goes.',
					'After handling more than 200 audits, we can tell you this: the audit itself is rarely the problem. The problem is what people do in the first two days. Here is the exact checklist we give our clients.'
				]
			},
			{
				heading: '1. Do not ignore it — and do not panic',
				paragraphs: [
					'Every audit letter has a deadline, usually 30 days. Missing it is the single most expensive mistake you can make: the IRS will simply decide your tax for you, and their number is never in your favour.',
					'At the same time, an audit letter is not an accusation. Most audits are random, or triggered by a simple mismatch — a 1099 the IRS has that your return does not. Stay calm, and start the clock.'
				]
			},
			{
				heading: '2. Read the letter carefully — what year, what issue?',
				paragraphs: [
					'The letter tells you exactly which tax year and which items are being examined. Read it twice. A letter about 2024 business expenses is a very different audit from one about foreign accounts.',
					'Write down the response deadline, the examiner’s name and phone number, and the reference number. Keep the letter itself somewhere safe — you will need it.'
				]
			},
			{
				heading: '3. Do not call the IRS alone',
				paragraphs: [
					'Everything you say to an examiner can be used in the audit. A casual comment — “I think my accountant handled that” — can open a whole new line of questions.',
					'You have the right to representation. With a signed power of attorney, we handle every call and letter for you. Most of our clients never speak to the IRS at all.'
				]
			},
			{
				heading: '4. Gather documents — but do not volunteer extra',
				paragraphs: [
					'Collect receipts, bank statements and records for the items the letter actually asks about. Organise them by year and category.',
					'Do not send anything the letter does not ask for. Extra documents create extra questions. Your attorney will decide what the IRS needs to see — and what it does not.'
				],
				list: [
					'The audit letter and all IRS correspondence',
					'Tax returns for the years under audit',
					'Receipts and records for the items listed',
					'Bank and credit card statements for those years'
				]
			},
			{
				heading: '5. Get professional help this week, not next month',
				paragraphs: [
					'Audits settled early cost less. In our experience, clients who call within a week of receiving the letter pay significantly less than those who wait — because we can shape the audit before it shapes itself.',
					'Our first consultation is free, and honest: if your audit is simple enough to handle alone, we will tell you how. If it is not, we will tell you exactly what it will cost to fix it.'
				]
			}
		]
	},
	{
		slug: '2026-tax-changes-business-owners',
		tag: 'Tax Planning',
		date: 'Nov 2, 2026',
		read: '8 min read',
		title: '2026 tax changes every business owner should know',
		excerpt: 'New deductions, new deadlines — and the three mistakes that cost owners the most this year.',
		author: 'David Carter',
		authorRole: 'Senior Attorney · Business Tax',
		authorImg: '/lawyer-man.webp',
		grad: 'from-leaf-dark to-leaf',
		sections: [
			{
				paragraphs: [
					'Every year, the tax code changes in ways that matter to business owners — and every year, most owners find out too late. This year is no different. Here are the changes that actually affect your bottom line, and the three mistakes we see owners make most often.'
				]
			},
			{
				heading: 'What changed in 2026',
				paragraphs: [
					'Standard deduction and bracket thresholds have risen with inflation, which helps — but several business provisions have tightened. Bonus depreciation continues to phase down, and the rules for deducting research costs remain stricter than they were a few years ago.',
					'On the positive side, the qualified business income deduction remains available for most pass-through owners, and several states have expanded their own credits for hiring and equipment. The details depend on your state and your entity type.'
				],
				list: [
					'Bonus depreciation phases down further — plan equipment purchases early',
					'Research and experimental costs must still be amortised over 5 years',
					'The QBI deduction survives, but income thresholds matter more than ever',
					'Several states added hiring and equipment credits worth checking'
				]
			},
			{
				heading: 'Mistake 1: Waiting until April to plan',
				paragraphs: [
					'By April, the tax year is over. Every deduction, every timing decision, every retirement contribution that could have saved you money is already locked in. Planning happens in October and November — not in tax season.'
				]
			},
			{
				heading: 'Mistake 2: The wrong entity for your size',
				paragraphs: [
					'The entity that was right when you started is often wrong once you grow. An LLC taxed as a sole proprietorship can cost a profitable owner tens of thousands in self-employment tax that an S-corp election would have saved. Review your entity every year, not every decade.'
				]
			},
			{
				heading: 'Mistake 3: Mixing business and personal money',
				paragraphs: [
					'One personal expense in the business account gives an auditor a reason to question everything. Separate accounts, separate cards, and a clean paper trail are not bureaucracy — they are the cheapest audit insurance you will ever buy.'
				]
			},
			{
				heading: 'What to do now',
				paragraphs: [
					'Book a year-end planning session before December. Bring your profit-and-loss statement, your payroll records, and your biggest plans for next year. In one hour we can usually find savings that pay for the session many times over — and set up next year so April is boring, the way it should be.'
				]
			}
		]
	},
	{
		slug: 'estate-planning-not-just-wealthy',
		tag: 'Estate Tax',
		date: 'Oct 24, 2026',
		read: '5 min read',
		title: 'Estate planning is not just for the wealthy',
		excerpt: 'If you own a home or a business, you already have an estate plan — the IRS wrote it for you.',
		author: 'Sarah Mitchell',
		authorRole: 'Partner · Estate & International',
		authorImg: '/lawyer-woman.webp',
		grad: 'from-navy-3 to-navy',
		sections: [
			{
				paragraphs: [
					'Most people hear “estate planning” and think of mansions and trust funds. That is the wrong picture. If you own a home, have children, or run a business, you need an estate plan — and if you do not write one, the state has already written one for you. It is called intestacy, and it rarely matches what you would have chosen.'
				]
			},
			{
				heading: 'What happens without a plan',
				paragraphs: [
					'Without a will, a court decides who raises your children and who gets your home. Without a power of attorney, nobody can legally pay your bills if you are incapacitated — not even your spouse, without a court order. The process is slow, public, and expensive.',
					'A basic plan fixes all of this in a few weeks. It is one of the highest-value legal documents most families will ever sign.'
				]
			},
			{
				heading: 'The four documents every family needs',
				paragraphs: [
					'You do not need a 200-page trust to start. Most families need four documents, and a good attorney can prepare them in two meetings.'
				],
				list: [
					'A will — who gets what, and who raises the children',
					'A revocable living trust — to avoid probate and keep things private',
					'A durable power of attorney — so someone can act for you if you cannot',
					'A healthcare directive — your medical wishes, in writing'
				]
			},
			{
				heading: 'The tax part people miss',
				paragraphs: [
					'For most families, federal estate tax is not the issue — the exemption is high. State estate tax is the surprise: several states tax estates far below the federal threshold. And for business owners, the real tax is the one your family pays when they have to sell the business quickly to cover a tax bill. Planning now prevents a forced sale later.'
				]
			},
			{
				heading: 'Start with one conversation',
				paragraphs: [
					'You do not need to have all the answers. You need one honest conversation about what matters to you: who you trust, what you own, and what you want protected. We will handle the rest — and your family will never have to guess what you wanted.'
				]
			}
		]
	}
];

export function getPost(slug: string) {
	return posts.find((p) => p.slug === slug);
}
