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
	},
	{
		slug: 'irs-penalty-abatement-how-it-works',
		tag: 'IRS Penalties',
		date: 'Nov 14, 2026',
		read: '6 min read',
		title: 'IRS penalty abatement: how to get penalties removed',
		excerpt: 'Reasonable cause, first-time abatement, and what actually works with the IRS.',
		author: 'Emily Ross',
		authorRole: 'Attorney · Compliance & Audits',
		authorImg: '/lawyer-young-woman.webp',
		grad: 'from-navy-2 to-navy-3',
		sections: [
			{
				paragraphs: [
					'Penalties are often the biggest part of an IRS bill — sometimes larger than the tax itself. The good news: the IRS removes penalties far more often than people think. In our practice, penalties are abated in full in more than 80% of the cases we take on.',
					'There are two main routes: first-time abatement, for taxpayers with a clean compliance history, and reasonable-cause abatement, for people who had a genuine reason for the failure.'
				]
			},
			{
				heading: 'First-time abatement: the easy win',
				paragraphs: [
					'If you have filed and paid on time for the previous three years, you usually qualify for first-time abatement of failure-to-file and failure-to-pay penalties. It is a single phone call or letter — and it works for one tax year at a time.',
					'Most people never ask. The IRS does not offer it; you have to claim it.'
				]
			},
			{
				heading: 'Reasonable cause: tell the real story',
				paragraphs: [
					'Reasonable cause covers serious illness, a natural disaster, a death in the family, bad advice from a professional you reasonably relied on, or records destroyed through no fault of yours. The key is documentation: the IRS believes paper, not stories.',
					'We build the file the way an examiner expects to see it — timeline, evidence, and a short letter that connects the two. Vague requests get denied; specific ones get approved.'
				]
			},
			{
				heading: 'What does not work',
				paragraphs: [
					'"I did not know" is not reasonable cause. Neither is "my accountant messed up" without proof that you gave them everything on time. And penalties on tax you never reported are much harder to remove than penalties on tax you reported late.',
					'If your penalties are large, get help before you write to the IRS. A badly written first request can be used against you in the second one.'
				],
				list: [
					'Check your compliance history — 3 clean years usually means first-time abatement',
					'Gather documents that prove the cause, with dates',
					'Request abatement in writing, with the penalty amounts itemised',
					'If denied, appeal — many denials are reversed on appeal'
				]
			}
		]
	},
	{
		slug: 'offer-in-compromise-settle-irs-debt',
		tag: 'IRS Debt',
		date: 'Nov 12, 2026',
		read: '7 min read',
		title: 'Offer in Compromise: settle your IRS debt for less',
		excerpt: 'When the IRS accepts less than you owe — and when it does not.',
		author: 'David Carter',
		authorRole: 'Senior Attorney · Business Tax',
		authorImg: '/lawyer-man.webp',
		grad: 'from-leaf to-leaf-dark',
		sections: [
			{
				paragraphs: [
					'You have probably seen the ads: “Settle your IRS debt for pennies!” The truth is less dramatic, but still good news for many people. An Offer in Compromise lets you settle for less than you owe when paying the full amount would cause real financial hardship — and the IRS accepts a meaningful share of the offers it receives.',
					'The catch is the application. It is long, detailed, and the IRS rejects offers that are sloppy, incomplete, or simply too low.'
				]
			},
			{
				heading: 'How the IRS decides',
				paragraphs: [
					'The IRS calculates your “reasonable collection potential”: your assets plus your monthly disposable income over 12 or 24 months. Offer at least that number, with clean financial statements to prove it, and you have a real chance.',
					'Offer less than that without a good reason and the answer is no — and you have wasted months. This is why the first step is always the maths, not the form.'
				]
			},
			{
				heading: 'The three mistakes that kill offers',
				paragraphs: [
					'First, applying while you are not current on filings. The IRS will not even look at an offer if returns are missing. Second, hiding assets — the IRS checks, and a hidden asset ends the offer and can start a criminal referral. Third, stopping payments during the review: you must keep paying your current taxes and the offer instalments while you wait.'
				]
			},
			{
				heading: 'What if an offer is not right for you?',
				paragraphs: [
					'Many clients are better off with an installment agreement — monthly payments the IRS accepts — or with currently-not-collectible status, where the IRS agrees you cannot pay right now and leaves you alone. The right answer depends on your income, assets, and how much you owe.',
					'We evaluate all three options in a free consultation and tell you honestly which one fits. Sometimes the answer is “none of these yet — file the missing returns first.” That honesty is worth more than a fast application.'
				]
			}
		]
	},
	{
		slug: 'texas-property-tax-protest-guide',
		tag: 'Property Tax',
		date: 'Nov 8, 2026',
		read: '6 min read',
		title: 'Texas property tax protest: a step-by-step guide',
		excerpt: 'How to protest your appraisal in Texas, meet the May 15 deadline, and win.',
		author: 'Michael S. Young',
		authorRole: 'Founding Partner · Tax Litigation',
		authorImg: '/lawyer-senior.webp',
		grad: 'from-navy-3 to-navy',
		sections: [
			{
				paragraphs: [
					'Every spring, Texas homeowners open an appraisal notice and wonder how their house gained 15% in value while nothing changed. It probably did not — appraisal districts value thousands of properties at once, and they get it wrong often. The good news: Texas gives you a formal right to protest, and it works.',
					'Our average successful appeal cuts the annual bill by 22%. Here is how the process works.'
				]
			},
			{
				heading: 'Step 1: Check the deadline',
				paragraphs: [
					'In Texas the protest deadline is usually May 15 — or 30 days after your appraisal notice arrives, whichever is later. Miss it and you wait a whole year. Put it in your calendar the day the notice arrives.'
				]
			},
			{
				heading: 'Step 2: Find your evidence',
				paragraphs: [
					'The strongest evidence is comparable sales: similar homes nearby that sold for less than your assessed value. Photos of damage, repair estimates, and a survey showing a smaller lot also help. The appraisal district has its own comparables — yours need to be better.'
				],
				list: [
					'3–5 comparable sales from the last 12 months',
					'Photos of any damage or deferred maintenance',
					'Your survey or lot dimensions, if the district has them wrong',
					'Any exemption you qualify for: homestead, senior, veteran, agricultural'
				]
			},
			{
				heading: 'Step 3: File, negotiate, and if needed, appeal',
				paragraphs: [
					'File the protest online or by mail, then attend the informal hearing. Many cases settle there — the appraiser would rather agree than go to the review board. If not, you present your case to the Appraisal Review Board, and after that to a court if the value is still wrong.',
					'We handle the whole process for a share of the first year’s savings — and if we cannot reduce your assessment, you pay us nothing for the appeal.'
				]
			}
		]
	},
	{
		slug: 'fbar-fatca-foreign-accounts-guide',
		tag: 'International Tax',
		date: 'Nov 5, 2026',
		read: '8 min read',
		title: 'FBAR & FATCA: the foreign account guide',
		excerpt: 'Who must file, what the penalties really are, and how streamlined disclosure works.',
		author: 'Sarah Mitchell',
		authorRole: 'Partner · Estate & International',
		authorImg: '/lawyer-woman.webp',
		grad: 'from-navy to-leaf-dark',
		sections: [
			{
				paragraphs: [
					'If you are a U.S. citizen or resident with money in a foreign bank account, you probably have two filings to make every year — and the penalties for missing them are the harshest in the tax code. Miss an FBAR and the fine can exceed the account balance itself.',
					'The rules sound scary. In practice, most people who come forward voluntarily fix the problem with modest penalties — or none at all.'
				]
			},
			{
				heading: 'FBAR: the $10,000 rule',
				paragraphs: [
					'If the combined value of all your foreign financial accounts exceeded $10,000 at any point in the year, you must file an FBAR (FinCEN Form 114). It is not a tax return — it is a report, filed separately, and it is due April 15 with an automatic extension to October 15.',
					'Accounts include bank accounts, brokerage accounts, pensions, and accounts you only have signature authority over — like a parent’s account you can access.'
				]
			},
			{
				heading: 'FATCA and Form 8938: the second filing',
				paragraphs: [
					'FATCA requires a separate form — Form 8938, attached to your tax return — with higher thresholds: $50,000 for single filers living in the U.S., $200,000 for single filers living abroad. Many people need one filing but not the other; some need both.'
				]
			},
			{
				heading: 'Missed years? Streamlined disclosure',
				paragraphs: [
					'The IRS streamlined procedures let non-willful filers catch up on 3 years of returns and 6 years of FBARs with a single 5% penalty — and no penalty at all for people living abroad. We have removed $860k in penalties through this program.',
					'The key word is non-willful. If the IRS contacts you first, the streamlined program is closed to you. Come forward before that happens.'
				]
			}
		]
	},
	{
		slug: 'llc-vs-scorp-tax-which-entity',
		tag: 'Business Tax',
		date: 'Oct 28, 2026',
		read: '7 min read',
		title: 'LLC vs S-Corp: which entity saves you more tax?',
		excerpt: 'The honest comparison — including the self-employment tax trap most owners miss.',
		author: 'David Carter',
		authorRole: 'Senior Attorney · Business Tax',
		authorImg: '/lawyer-man.webp',
		grad: 'from-leaf-dark to-navy',
		sections: [
			{
				paragraphs: [
					'Every new business owner asks the same question, and the internet gives the same wrong answer: “Just form an LLC.” An LLC is a legal structure, not a tax choice — and the tax choice that saves you money is often an S-corp election on top of that LLC.',
					'Here is the honest comparison, with real numbers.'
				]
			},
			{
				heading: 'The self-employment tax trap',
				paragraphs: [
					'A single-member LLC taxed as a sole proprietorship pays self-employment tax — 15.3% — on every dollar of profit. Earn $120,000 and that is $18,360, before income tax even starts.',
					'An S-corp splits the same $120,000 into a reasonable salary (say $70,000, which still pays payroll tax) and a $50,000 distribution, which pays no self-employment tax at all. The saving is roughly $7,650 a year — every year.'
				]
			},
			{
				heading: 'When an S-corp is the wrong choice',
				paragraphs: [
					'S-corps cost more to run: payroll, a separate return, and stricter rules about who can own shares. Below about $50,000–$60,000 of profit, the extra costs eat the saving. And if you plan to take on foreign investors or issue different classes of shares, an S-corp is not allowed at all.',
					'The right answer depends on your profit, your growth plans, and your state — Texas has no state income tax, which changes the maths again.'
				]
			},
			{
				heading: 'Review your entity every year',
				paragraphs: [
					'The entity that was right when you started is often wrong once you grow. We review entity choice as part of quarterly planning — it takes one meeting, and the saving usually pays for the year’s planning several times over.'
				]
			}
		]
	},
];

export function getPost(slug: string) {
	return posts.find((p) => p.slug === slug);
}
