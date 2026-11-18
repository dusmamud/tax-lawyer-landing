export type PostSection = { heading?: string; paragraphs: string[]; list?: string[] };

export type Post = {
	slug: string;
	tag: string;
	date: string;
	published: string;
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
		slug: 'income-tax-notice-what-to-do-first',
		tag: 'Income Tax',
		date: 'Nov 14, 2026',
		published: '2026-11-14T10:00:00+05:30',
		read: '6 min read',
		title: 'Income tax notice? 5 things to do first',
		excerpt: 'The first 48 hours decide how your notice goes. Here is the exact checklist our lawyers use.',
		author: 'Ananya Rao',
		authorRole: 'Attorney · Compliance & Appeals',
		authorImg: '/lawyer-young-woman.webp',
		grad: 'from-navy to-navy-2',
		sections: [
			{
				paragraphs: [
					'The envelope — or the email — looks ordinary. The notice inside is not. An income tax notice is the most stressful piece of mail most people will ever receive, and the first 48 hours decide how the whole thing goes.',
					'After handling more than 200 assessments, we can tell you this: the notice itself is rarely the problem. The problem is what people do in the first two days. Here is the exact checklist we give our clients.'
				]
			},
			{
				heading: '1. Do not ignore it — and do not panic',
				paragraphs: [
					'Every notice carries a deadline. Missing it is the single most expensive mistake you can make: the department will simply decide your tax for you, and their number is never in your favour.',
					'At the same time, a notice is not an accusation. Most notices are routine — a mismatch between your return and the information the department already has, such as bank interest or a high-value transaction. Stay calm, and start the clock.'
				]
			},
			{
				heading: '2. Read the notice carefully — what year, what issue?',
				paragraphs: [
					'The notice tells you exactly which tax year and which items are being examined. Read it twice. A notice about a mismatch in interest income is a very different matter from a full scrutiny assessment.',
					'Write down the response deadline, the assessing officer’s details, and the reference number. Keep the notice itself somewhere safe — you will need it. And check that the notice is genuine: real notices appear on the income tax portal, and any demand can be verified there before you pay a rupee.'
				]
			},
			{
				heading: '3. Do not reply alone — and do not volunteer extra',
				paragraphs: [
					'Everything you write in a reply becomes part of the record. A casual line — “I think my accountant handled that” — can open a whole new line of questions.',
					'You have the right to be represented. With a signed authorisation, we handle every reply and hearing for you. Most of our clients never speak to the assessing officer at all. Gather the documents the notice actually asks about — bank statements, Form 26AS and the Annual Information Statement, salary slips, investment proofs — but do not send anything the notice does not ask for. Extra documents create extra questions.'
				],
				list: [
					'The notice and all department correspondence',
					'Your income tax return for the year in question',
					'Form 26AS and the Annual Information Statement',
					'Bank statements and proofs for the items listed'
				]
			},
			{
				heading: '4. Get professional help this week, not next month',
				paragraphs: [
					'Notices settled early cost less. In our experience, clients who call within a week of receiving the notice pay significantly less than those who wait — because we can shape the assessment before it shapes itself.',
					'Our first consultation is free, and honest: if your notice is simple enough to handle alone, we will tell you how. If it is not, we will tell you exactly what it will cost to fix it.'
				]
			}
		]
	},
	{
		slug: 'itr-filing-deadline-guide',
		tag: 'ITR Filing',
		date: 'Nov 12, 2026',
		published: '2026-11-12T10:00:00+05:30',
		read: '8 min read',
		title: 'ITR filing: deadlines, the new Act, and what changed',
		excerpt: 'The 2026-27 deadlines, the Income-tax Act, 2025, and what a late return really costs you.',
		author: 'Mohan S. Yadav',
		authorRole: 'Founding Partner · Tax Litigation',
		authorImg: '/lawyer-senior.webp',
		grad: 'from-leaf-dark to-leaf',
		sections: [
			{
				paragraphs: [
					'Every year, the return filing season ends the same way: a rush in the last week, a crashed portal, and thousands of people discovering — too late — that a late return costs real money. This year there is one more thing to understand: a brand-new Income-tax Act is now in force.',
					'Here are the deadlines that actually matter for assessment year 2026-27, what the new Act changes, and what happens if you miss the date.'
				]
			},
			{
				heading: 'The deadlines for AY 2026-27',
				paragraphs: [
					'The due date depends on who you are. Individuals and Hindu Undivided Families who do not need an audit must file by 31 July 2026. Businesses that do not need an audit get until 31 August 2026. And taxpayers whose accounts must be audited have until 21 November 2026.',
					'Missed the date? You can still file a belated return until 31 December 2026, and a return can be revised until 31 March 2027. But a belated return is not free — read on.'
				],
				list: [
					'31 July 2026 — individuals and HUFs (no audit)',
					'31 August 2026 — businesses not requiring audit',
					'21 November 2026 — cases where audit is required',
					'31 December 2026 — last date for a belated return',
					'31 March 2027 — last date to revise a return'
				]
			},
			{
				heading: 'The Income-tax Act, 2025 — what actually changed',
				paragraphs: [
					'The Income-tax Act, 2025 came into force on 1 April 2026. It replaces the 1961 Act with a shorter, simpler law — and it renames the basics: the old “previous year” and “assessment year” are gone, replaced by a single “tax year”.',
					'One thing that has not changed: returns for assessment year 2026-27 are still filed under the 1961 Act. The new Act applies from the tax year beginning 1 April 2026. So this filing season, the deadlines and the law you file under are the old ones — but the concepts you will hear from next year onwards are the new ones.'
				]
			},
			{
				heading: 'What a late return really costs',
				paragraphs: [
					'File late and a late fee of up to ₹5,000 applies under section 234F. That is only the start: a late filer cannot carry forward most losses, cannot choose the old regime in some cases, and pays interest on any unpaid tax until the return is filed.',
					'The cheapest return is the one filed on time. If you are already late, file now — every week of delay adds interest, and a belated return is always better than no return at all.'
				]
			}
		]
	},
	{
		slug: 'gst-notice-reply-guide',
		tag: 'GST',
		date: 'Nov 10, 2026',
		published: '2026-11-10T10:00:00+05:30',
		read: '6 min read',
		title: 'GST notice? How to reply and what not to say',
		excerpt: 'A show-cause notice is not a demand yet. Here is how to reply well — and the mistakes that turn it into one.',
		author: 'Sara Iyer',
		authorRole: 'Partner · GST & International',
		authorImg: '/lawyer-woman.webp',
		grad: 'from-navy-3 to-navy',
		sections: [
			{
				paragraphs: [
					'A GST notice usually arrives as a show-cause notice on the GST portal: the department believes tax is short-paid, input tax credit is wrongly claimed, or a return does not match. The notice asks you to show cause — to explain why a demand should not be raised.',
					'That is the key point most people miss. At this stage, there is no demand yet. A good reply can end the matter here. A bad one creates the demand.'
				]
			},
			{
				heading: '1. Read what the notice actually alleges',
				paragraphs: [
					'Every show-cause notice states the period, the amount, and the reason — a mismatch between GSTR-1 and GSTR-3B, credit claimed on a blocked item, or turnover that does not match your returns. Read it twice, and match each allegation to your own records before you write a word.',
					'Note the reply deadline and the officer’s details. GST notices have strict timelines, and a missed reply means the demand is confirmed by default.'
				]
			},
			{
				heading: '2. Reconcile before you reply',
				paragraphs: [
					'Most GST notices come from mismatches the department’s system spotted automatically: sales reported in GSTR-1 that do not appear in GSTR-3B, or credit claimed that does not match your suppliers’ filings. Before replying, reconcile your books — GSTR-1 against GSTR-3B, and your purchase register against the credit shown on the portal.',
					'In our experience, a large share of notices close once the reconciliation is shown clearly. The department’s system flags a difference; a clean, documented reply explains it.'
				]
			},
			{
				heading: '3. What not to say — and when to get help',
				paragraphs: [
					'Do not admit liability you have not verified, do not attach documents the notice does not ask for, and do not argue the law in your first reply without checking it. A short, factual reply with the reconciliation attached beats a long letter full of arguments.',
					'If the amount is large, or the notice alleges suppression or misstatement, get professional help before replying. The words in your first reply will be read again if the matter goes to appeal — and a badly written reply is very hard to take back.'
				],
				list: [
					'The show-cause notice and the annexures attached to it',
					'GSTR-1 and GSTR-3B for the period in question',
					'Purchase and sales registers, reconciled',
					'Invoices and e-way bills for the disputed transactions'
				]
			}
		]
	},
	{
		slug: 'advance-tax-due-dates-guide',
		tag: 'Tax Planning',
		date: 'Nov 8, 2026',
		published: '2026-11-08T10:00:00+05:30',
		read: '7 min read',
		title: 'Advance tax: the four dates every business must know',
		excerpt: '15 June, 15 September, 15 December, 15 March — miss one and interest starts running at 1% a month.',
		author: 'Arvind Kapoor',
		authorRole: 'Senior Attorney · Corporate Tax',
		authorImg: '/lawyer-man.webp',
		grad: 'from-navy-2 to-navy-3',
		sections: [
			{
				paragraphs: [
					'If your tax liability for the year, after TDS, is more than ₹10,000, you are expected to pay it in advance — in four instalments, through the year. Wait until March to pay everything and interest starts running at 1% per month on the shortfall.',
					'Most businesses we meet know advance tax exists. Far fewer know the exact dates and percentages — and that is where the interest comes from.'
				]
			},
			{
				heading: 'The four instalments',
				paragraphs: [
					'Advance tax is paid in four parts. By 15 June you should have paid 15% of your total tax for the year. By 15 September, 45%. By 15 December, 75%. And by 15 March, the full 100%.',
					'The percentages are cumulative — each date is a checkpoint on the year’s total tax, not a fresh 15% or 30%. The simplest discipline is to estimate your year’s profit honestly in June and pay on that estimate, then correct it in December when the year is clearer.'
				],
				list: [
					'15 June — 15% of the year’s tax',
					'15 September — 45% of the year’s tax',
					'15 December — 75% of the year’s tax',
					'15 March — 100% of the year’s tax'
				]
			},
			{
				heading: 'What happens if you miss an instalment',
				paragraphs: [
					'Interest runs at 1% per month on the amount you should have paid but did not, for each month of delay. It is charged instalment by instalment, so a shortfall in June costs more than the same shortfall in March.',
					'The interest is real money — on a ₹10 lakh shortfall, a few months of delay can cost tens of thousands. And unlike a penalty, interest is almost never waived. The only cure is paying on time.'
				]
			},
			{
				heading: 'How to get the estimate right',
				paragraphs: [
					'The hardest part of advance tax is the estimate itself. Our advice: work from your actual profit to date, not last year’s figure. A growing business that pays on last year’s numbers will always be short in December; a business in a slow year that pays on last year’s numbers will have overpaid and waited months for a refund.',
					'Revisit the estimate every quarter — June, September, December. Fifteen minutes with your books four times a year is all it takes to never pay interest again.'
				]
			}
		]
	},
	{
		slug: 'section-270a-penalty-waiver',
		tag: 'Penalties',
		date: 'Nov 6, 2026',
		published: '2026-11-06T10:00:00+05:30',
		read: '6 min read',
		title: 'Section 270A penalty: how to get it reduced or waived',
		excerpt: '50% for under-reporting, 200% for misreporting — and the routes that can reduce it to nothing.',
		author: 'Ananya Rao',
		authorRole: 'Attorney · Compliance & Appeals',
		authorImg: '/lawyer-young-woman.webp',
		grad: 'from-leaf to-leaf-dark',
		sections: [
			{
				paragraphs: [
					'Section 270A is the penalty provision that follows an assessment. If the assessing officer finds that income was under-reported, the penalty is 50% of the tax on the under-reported income. If the officer finds misreporting — concealment, false entries, or suppression of facts — it rises to 200%.',
					'The difference between those two numbers is often the whole case. And in our practice, penalties are reduced or deleted entirely in more than 80% of the matters we take on.'
				]
			},
			{
				heading: 'Under-reporting vs misreporting: the line that matters',
				paragraphs: [
					'Under-reporting covers mistakes and omissions: income left out of the return, a deduction claimed wrongly, a mismatch the officer picks up. Misreporting is different — it needs an act: concealing income, recording false entries, or suppressing facts.',
					'The department often frames an ordinary under-reporting case as misreporting to reach the 200% rate. The first job in any penalty matter is to push the case back across that line, with evidence: the return, the books, and a clear explanation of how the error happened.'
				]
			},
			{
				heading: 'The routes to reduction or waiver',
				paragraphs: [
					'The strongest route is the facts themselves. If the addition that caused the penalty is deleted in appeal, the penalty falls with it — there is no tax on under-reported income if the income itself is not sustained. That is why the assessment and the penalty must be fought together, not one after the other.',
					'There is also a statutory route to immunity: a taxpayer who pays the tax and interest on the under-reported income and does not appeal the assessment can seek immunity from the penalty. And where the error was a genuine, bona fide mistake — supported by records — the penalty can be contested on the ground that there was no deliberate default at all.'
				],
				list: [
					'Fight the underlying addition first — a deleted addition deletes the penalty',
					'Challenge a 200% misreporting charge with evidence of how the error happened',
					'Consider the immunity route: pay the tax and interest, do not appeal',
					'If the mistake was bona fide, put the records on file to prove it'
				]
			},
			{
				heading: 'What does not work',
				paragraphs: [
					'"I did not know" is not a defence on its own — but a documented, genuine mistake, explained with records, often is. What never works is silence: a penalty order that is not challenged becomes final, and the department will collect it.',
					'If your penalty is large, get help before you reply to the penalty notice. The reply you file is the record the appellate authorities will read — and a badly written first reply can be used against you in the appeal.'
				]
			}
		]
	},
	{
		slug: 'vivad-se-vishwas-settle-tax-dispute',
		tag: 'Settlement',
		date: 'Nov 4, 2026',
		published: '2026-11-04T10:00:00+05:30',
		read: '7 min read',
		title: 'Vivad se Vishwas: settle your tax dispute for less',
		excerpt: 'Pay the disputed tax, close the case, and stop the interest clock — when settlement beats an appeal.',
		author: 'Arvind Kapoor',
		authorRole: 'Senior Attorney · Corporate Tax',
		authorImg: '/lawyer-man.webp',
		grad: 'from-navy-3 to-navy',
		sections: [
			{
				paragraphs: [
					'Vivad se Vishwas — “no dispute, no trust deficit” — is the government’s settlement scheme for tax disputes. The idea is simple: instead of fighting an appeal for years, you settle the disputed demand by paying the tax, plus part of the interest and penalty, and the case closes.',
					'For the right taxpayer, it is the cheapest way out of a dispute. For the wrong one, it gives away a case that would have been won. The difference is knowing which one you are.'
				]
			},
			{
				heading: 'How the scheme works',
				paragraphs: [
					'You apply for the disputed demand, pay the tax amount in question along with a portion of the interest and penalty, and the department withdraws the demand. The appeal ends, the interest clock stops, and no further proceedings follow on that demand.',
					'The saving comes from the interest and penalty you no longer pay — and from the years of litigation you no longer fund. A dispute that would take five years through the ITAT and the High Court can be closed in months.'
				]
			},
			{
				heading: 'When settlement beats an appeal',
				paragraphs: [
					'Settlement wins when the addition is likely to survive — the facts are against you, the law is settled, or the amount at stake is smaller than the cost of fighting. It also wins when certainty matters more than principle: a business raising funds, selling, or closing its books cannot carry an open demand for years.',
					'Appeal wins when the addition is weak — a penalty that should not have been levied, an addition the department cannot prove, or a question of law that higher courts have already decided in the taxpayer’s favour. We have had penalties of crores deleted in appeal that a settlement would have made us pay.'
				]
			},
			{
				heading: 'What to check before you settle',
				paragraphs: [
					'Before applying, get an honest read on the appeal: what is the addition, how strong is the department’s case, and what would the appeal realistically cost in time and fees? Settlement is final — once you pay, the case is closed, and you cannot reopen it because a later judgment went your way.',
					'We evaluate every disputed demand on both tracks in a free consultation and tell you honestly which one fits. Sometimes the answer is “settle — the addition will survive.” Sometimes it is “appeal — this one is winnable.” That honesty is worth more than a fast settlement.'
				]
			}
		]
	},
	{
		slug: 'nri-taxation-india-guide',
		tag: 'NRI Tax',
		date: 'Nov 2, 2026',
		published: '2026-11-02T10:00:00+05:30',
		read: '8 min read',
		title: 'NRI taxation: the complete guide for Indians abroad',
		excerpt: 'Residential status, DTAA relief, TDS on property sales, and the mistakes that cost NRIs the most.',
		author: 'Sara Iyer',
		authorRole: 'Partner · GST & International',
		authorImg: '/lawyer-woman.webp',
		grad: 'from-navy to-leaf-dark',
		sections: [
			{
				paragraphs: [
					'If you are an Indian living abroad with income or property in India, you probably have an Indian tax filing to make every year — and the rules are the most misunderstood in the tax code. Miss a filing and the penalty can exceed the tax itself.',
					'The rules sound scary. In practice, most NRIs who come forward voluntarily fix the problem with modest tax — or none at all.'
				]
			},
			{
				heading: 'Residential status: the question that decides everything',
				paragraphs: [
					'Whether you are taxed in India, and on what income, depends on your residential status — and that depends mainly on how many days you spend in India during the year. A non-resident is taxed only on income earned or received in India. A resident is taxed on worldwide income.',
					'Get the status wrong and everything downstream is wrong: the return, the tax, and the refunds. Before you file anything, work out your status for that year — it can change from year to year as your travel changes.'
				]
			},
			{
				heading: 'DTAA: the treaty that stops double taxation',
				paragraphs: [
					'India has Double Taxation Avoidance Agreements with most countries. A DTAA decides which country gets to tax which income, and lets you claim credit in one country for the tax paid in the other — so the same salary or rent is not taxed twice.',
					'Claiming treaty relief needs paperwork: a tax residency certificate from your country of residence and the right forms with your Indian return. Many NRIs pay tax twice simply because nobody filed the treaty claim.'
				]
			},
			{
				heading: 'Property, TDS, and the mistakes that cost the most',
				paragraphs: [
					'When an NRI sells property in India, the buyer must deduct TDS on the sale — and the rate is high, which surprises most sellers. The TDS is not the final tax: file the return, claim the correct capital gains treatment, and the excess comes back as a refund.',
					'The three mistakes we see most: not filing a return in India at all because “I live abroad now”, keeping all income in an NRO account without checking the tax on it, and selling property without planning the TDS. Each one is fixable — but only before the department writes to you.'
				],
				list: [
					'Work out your residential status for the year before filing',
					'Claim DTAA relief with a tax residency certificate',
					'File the return after a property sale — excess TDS is refunded',
					'Keep NRE and NRO accounts separate and know what is taxable in each'
				]
			}
		]
	},
	{
		slug: 'gst-registration-threshold-guide',
		tag: 'GST',
		date: 'Oct 30, 2026',
		published: '2026-10-30T10:00:00+05:30',
		read: '7 min read',
		title: 'GST registration: who must register and when',
		excerpt: '₹40 lakh for goods, ₹20 lakh for services — and the cases where the threshold does not apply at all.',
		author: 'Sara Iyer',
		authorRole: 'Partner · GST & International',
		authorImg: '/lawyer-woman.webp',
		grad: 'from-leaf-dark to-navy',
		sections: [
			{
				paragraphs: [
					'Every growing business reaches the same question: do I need GST registration yet? The answer is a number — your aggregate turnover — but the number is different for goods and services, and in several cases the threshold does not apply at all.',
					'Register too late and you face tax, interest and penalty on the unregistered period. Register too early and you take on monthly filings you did not need. Here is how to get the timing right.'
				]
			},
			{
				heading: 'The thresholds: ₹40 lakh and ₹20 lakh',
				paragraphs: [
					'A business supplying goods must register once its aggregate turnover crosses ₹40 lakh in a financial year. A business supplying services must register once turnover crosses ₹20 lakh. Aggregate turnover means all your taxable supplies, exempt supplies and exports added together — not just the taxable part.',
					'Once you cross the limit, you must apply for registration within 30 days. The department can also register you on its own if it finds you should have registered — and then the tax for the unregistered period is demanded with interest.'
				]
			},
			{
				heading: 'When the threshold does not apply',
				paragraphs: [
					'Some businesses must register from the very first rupee, whatever their turnover. If you supply goods or services to buyers in another state, you need registration. If you sell through an e-commerce platform, you need registration. And if you are liable to pay tax under reverse charge, you need registration too.',
					'This is the trap most small sellers fall into: turnover is only ₹8 lakh, but the first interstate sale or the first order through a marketplace already made registration compulsory.'
				]
			},
			{
				heading: 'GSTR-1, GSTR-3B — and the new GST 2.0 slabs',
				paragraphs: [
					'Once registered, the monthly rhythm is simple: GSTR-1, reporting your outward supplies, is due by the 11th of the following month, and GSTR-3B, the summary return with the tax payment, is due by the 20th. Miss the dates and late fees and interest start running automatically.',
					'And remember the rates changed: under GST 2.0, in force from 22 September 2025, there are three slabs — 5%, 18% and 40%. Check the rate on your goods or services before you invoice, because charging the old rate is the most common reason for a mismatch notice.'
				]
			}
		]
	},
];

export function getPost(slug: string) {
	return posts.find((p) => p.slug === slug);
}
