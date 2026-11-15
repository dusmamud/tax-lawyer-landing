export type PracticeArea = {
	slug: string;
	title: string;
	short: string;
	hero: string;
	overview: string[];
	services: string[];
	who: string;
	result: string;
	local: string;
	faqs: { q: string; a: string }[];
};

export const practiceAreas: PracticeArea[] = [
	{
		slug: 'criminal-tax-law',
		title: 'Criminal Tax Law',
		short: 'Defence against criminal tax charges, investigations and IRS criminal referrals.',
		hero: 'When the IRS treats a tax problem as a crime, you need a defence attorney — not just an accountant.',
		overview: [
			'Criminal tax cases are different from ordinary tax disputes. The stakes are not a bill — they are your freedom, your licence and your reputation. The IRS Criminal Investigation division builds cases quietly, often for months, before you ever hear a word.',
			'Our criminal tax team has defended business owners, professionals and executives against charges of tax evasion, failure to file, false returns and payroll tax fraud. We act fast to protect you: controlling what you say, securing documents, and negotiating with investigators before charges are filed.'
		],
		services: [
			'IRS criminal investigations and voluntary disclosure',
			'Tax evasion and false return defence',
			'Failure to file and failure to pay charges',
			'Payroll tax and trust fund recovery penalties',
			'Offshore accounts and FBAR matters',
			'Grand jury and trial representation'
		],
		who: 'Business owners, executives and professionals under IRS investigation or facing criminal tax charges.',
		result: '$2.4M in criminal tax exposure reduced to a civil settlement — no charges filed.',
		local: 'Based in Austin, Texas, our criminal tax team defends clients across Texas — in Dallas, Houston, San Antonio, Fort Worth and El Paso — and in federal court nationwide. IRS Criminal Investigation cases are federal, so where you live rarely limits what we can do.',
		faqs: [
			{ q: 'Am I going to jail?', a: 'Most criminal tax investigations end without charges, especially when an attorney gets involved early. Call before you speak to any investigator — what you say in the first conversation matters enormously.' },
			{ q: 'What is a voluntary disclosure?', a: 'It is a formal way to come forward about unreported income or accounts before the IRS finds them. Done correctly, it usually means civil penalties instead of criminal prosecution.' },
			{ q: 'How much does a criminal tax defence cost?', a: 'Every case starts with a free consultation and a written fixed-fee quote. Complex investigations are quoted in stages, so you always know what the next step costs before we take it.' }
		]
	},
	{
		slug: 'estate-planning-taxation',
		title: 'Estate Planning & Taxation',
		short: 'Wills, trusts and estate plans that protect your family and minimise estate tax.',
		hero: 'A good estate plan is a gift to your family. A bad one is a tax bill they never expected.',
		overview: [
			'Estate planning is not just for the wealthy. If you own a home, a business, or retirement savings, you already have an estate plan — the state wrote it for you. We write one that actually reflects your wishes.',
			'We combine wills, trusts and tax planning so your family keeps more of what you built. That includes minimising federal and state estate tax, protecting assets for children, and making sure a business passes smoothly to the next generation.'
		],
		services: [
			'Wills, revocable living trusts and powers of attorney',
			'Federal and state estate tax planning',
			'Business succession planning',
			'Charitable giving and family foundations',
			'Probate avoidance and trust administration',
			'Special-needs and guardianship planning'
		],
		who: 'Families, homeowners and business owners who want their wishes honoured and their tax kept low.',
		result: '$1.2M in estate tax saved by restructuring a plan before a major asset sale.',
		local: 'We build estate plans for families across Austin and all of Texas — Dallas, Houston, San Antonio, Fort Worth and El Paso — including Texas-specific issues like homestead protection and community property.',
		faqs: [
			{ q: 'Do I need a trust, or is a will enough?', a: 'A will is enough for many families. A trust is worth it when you want to avoid probate, keep things private, or control how and when children receive assets. We will tell you honestly which one fits your situation.' },
			{ q: 'How much does an estate plan cost?', a: 'A basic will package starts at $1,500 and a full trust plan at $3,500 — fixed fees, quoted in writing before we start. See our Fees page for the full list.' },
			{ q: 'What is Texas community property?', a: 'In Texas, most property acquired during a marriage belongs to both spouses. That changes how wills and trusts must be written — a plan copied from another state often gets it wrong.' }
		]
	},
	{
		slug: 'state-local-taxation',
		title: 'State & Local Taxation',
		short: 'State audits, nexus issues, sales tax and multi-state compliance, handled end to end.',
		hero: 'One state audit can shut a growing business down. We keep you compliant in every state you operate in.',
		overview: [
			'State and local tax is where growing businesses get caught out. Nexus rules change constantly, sales tax applies differently in every state, and a single audit can produce assessments going back years.',
			'We represent businesses in state audits, negotiate voluntary disclosure agreements, and build compliance systems that scale with you — so expansion never creates a surprise tax bill.'
		],
		services: [
			'State tax audits and appeals',
			'Nexus studies and multi-state registration',
			'Sales and use tax compliance',
			'Voluntary disclosure agreements',
			'Property and local business tax disputes',
			'State tax credits and incentives'
		],
		who: 'Businesses operating in more than one state, e-commerce sellers and companies facing a state audit.',
		result: 'A 4-state sales tax assessment of $410k reduced to $38k on appeal.',
		local: 'Our state tax team represents Texas businesses before the Texas Comptroller and in courts across the state — from Austin to Dallas, Houston, San Antonio, Fort Worth and El Paso — plus multi-state matters nationwide.',
		faqs: [
			{ q: 'What is nexus, and why does it matter?', a: 'Nexus is the connection that makes a state able to tax you. Selling into a state, having employees there, or even storing inventory there can create nexus — and a tax bill going back years.' },
			{ q: 'The Comptroller says I owe $200,000. Is that final?', a: 'No. Most assessments are negotiable. We review the audit, challenge what is wrong, and settle for what is actually owed — often a fraction of the original number.' },
			{ q: 'Can you set up sales tax compliance for my online store?', a: 'Yes. We register you where you have nexus, set up filing calendars, and build a system that scales as you grow into new states.' }
		]
	},
	{
		slug: 'tax-planning-compliance',
		title: 'Tax Planning & Compliance',
		short: 'Year-round tax planning that lowers your bill — and filings done right, on time.',
		hero: 'The best time to save tax is before the year ends. The second-best time is now.',
		overview: [
			'Most people only think about tax in April. By then, almost every saving opportunity for the year is gone. Our planning clients meet us quarterly, so deductions, credits and timing decisions happen while they still matter.',
			'We also handle the filings themselves — federal, state and local — prepared by attorneys who know the law behind every line, not just the software.'
		],
		services: [
			'Quarterly tax planning for individuals and businesses',
			'Entity choice: LLC, S-corp, C-corp and partnerships',
			'Retirement and compensation planning',
			'Federal and state return preparation and review',
			'Estimated tax and withholding optimisation',
			'IRS notices and penalty abatement'
		],
		who: 'Individuals and businesses who want to pay the legal minimum — and never pay a late penalty again.',
		result: 'Average planning client saves $18,400 a year in tax, legally.',
		local: 'Our planning clients are individuals and businesses across Austin, Texas — Dallas, Houston, San Antonio, Fort Worth and El Paso — and remote clients in all 50 states. Planning works best when it starts before the year ends.',
		faqs: [
			{ q: 'How much can tax planning actually save me?', a: 'Our average planning client saves $18,400 a year, legally. The exact number depends on your income, entity and timing — we will show you the maths before you commit to anything.' },
			{ q: 'When should I start planning for next year?', a: 'October and November. By April, the tax year is over and almost every saving opportunity is locked in.' },
			{ q: 'Do you prepare the returns too?', a: 'Yes — federal, state and local returns, prepared by attorneys who know the law behind every line, not just the software.' }
		]
	},
	{
		slug: 'international-taxation',
		title: 'International Taxation',
		short: 'Cross-border tax, expat filings, foreign accounts and treaty planning.',
		hero: 'Earning money across borders should not mean paying tax twice — or filing wrong.',
		overview: [
			'International tax is the most complex area of the code, and the penalties for getting it wrong are the harshest. Miss an FBAR or a Form 8938 and the fine can exceed the account balance itself.',
			'We help expats, foreign investors, and businesses with overseas operations stay compliant, claim every treaty benefit, and structure cross-border income so it is taxed once — fairly.'
		],
		services: [
			'Expat tax returns and foreign earned income exclusion',
			'FBAR, FATCA and Form 8938 compliance',
			'Foreign tax credits and treaty planning',
			'Offshore voluntary disclosure',
			'Cross-border business structuring',
			'Non-resident and foreign investor taxation'
		],
		who: 'Expats, dual citizens, foreign investors and businesses with income or assets abroad.',
		result: '$860k in foreign-account penalties removed through streamlined disclosure.',
		local: 'Our international tax practice serves expats, dual citizens and foreign investors in Austin, across Texas — Dallas, Houston, San Antonio and El Paso — and clients in 14 countries. Most of this work is handled entirely remotely.',
		faqs: [
			{ q: 'I missed FBAR filings for years. Am I in serious trouble?', a: 'Probably not as much as you fear. The IRS streamlined disclosure procedures exist exactly for this — we have removed $860k in penalties through them. The key is to come forward before the IRS contacts you.' },
			{ q: 'Do I pay tax twice on foreign income?', a: 'Usually not. The foreign earned income exclusion and foreign tax credit exist so you are taxed once, fairly. The rules are complex, which is why the planning matters.' },
			{ q: 'Can you help if I live abroad?', a: 'Yes — most of our international clients have never set foot in our office. Everything is handled by video, phone and secure document sharing.' }
		]
	},
	{
		slug: 'property-taxes',
		title: 'Property Taxes',
		short: 'Property tax assessments challenged and reduced — for homes and commercial property.',
		hero: 'Your property is probably over-assessed. Most are — and most owners never challenge it.',
		overview: [
			'Local assessors value thousands of properties at once, and they get it wrong often. An over-assessment of 15% means you overpay every single year — and the overpayment compounds.',
			'We challenge residential and commercial assessments with real comparable sales, independent appraisals and a formal appeal record. If we cannot reduce your assessment, you pay us nothing for the appeal.'
		],
		services: [
			'Residential assessment appeals',
			'Commercial and industrial property appeals',
			'Assessment review and comparable-sales analysis',
			'Exemptions: homestead, senior, veteran and agricultural',
			'Tax certiorari and tribunal representation',
			'Annual assessment monitoring'
		],
		who: 'Homeowners and commercial property owners who believe their assessment is too high.',
		result: 'Average successful appeal cuts the annual property tax bill by 22%.',
		local: 'We challenge property tax assessments across Texas — Austin (Travis County), Dallas, Houston (Harris County), San Antonio (Bexar County), Fort Worth (Tarrant County) and El Paso — for homeowners and commercial owners.',
		faqs: [
			{ q: 'How do I know if my property is over-assessed?', a: 'Compare your assessed value with recent sales of similar properties nearby. If yours is higher with no good reason, it is probably over-assessed. We will review it free and tell you honestly.' },
			{ q: 'What does a property tax appeal cost?', a: 'Nothing upfront. If we cannot reduce your assessment, you pay us nothing for the appeal. If we succeed, our fee is a share of the first year’s savings.' },
			{ q: 'When is the deadline to protest in Texas?', a: 'Usually May 15 — or 30 days after your appraisal notice arrives, whichever is later. Miss it and you wait a whole year, so start early.' }
		]
	}
];

export function getPracticeArea(slug: string) {
	return practiceAreas.find((a) => a.slug === slug);
}
