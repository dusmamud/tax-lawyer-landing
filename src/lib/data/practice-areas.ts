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
		slug: 'income-tax-appeals',
		title: 'Income Tax Appeals & Litigation',
		short: 'Notices, assessments and appeals before the CIT(A), ITAT and High Court — we fight the demand, not just file the reply.',
		hero: 'An income tax notice is not a bill. It is the start of a process — and most demands can be reduced or deleted.',
		overview: [
			'A notice under section 143(2), 148 or 142(1) is how most tax disputes begin. The Assessing Officer asks questions; the answers you give in the first 30 days often decide the whole case. We take over the matter end to end — drafting replies, appearing before the Assessing Officer, and building the record that wins on appeal.',
			'If the assessment goes against you, the fight is far from over. We appear before the Commissioner (Appeals), the Income Tax Appellate Tribunal and the High Court, and we have had additions of several crores deleted in full. We also handle rectification under section 154, penalty proceedings and stay of demand, so a disputed demand does not turn into a recovery notice while your appeal is pending.'
		],
		services: [
			'Scrutiny assessments and reassessment notices (sections 143(3), 147/148)',
			'Faceless assessment replies and e-proceedings',
			'Appeals before CIT(A) and the Income Tax Appellate Tribunal',
			'High Court writs and appeals',
			'Penalty proceedings and stay of demand',
			'Rectification, revision and condonation of delay'
		],
		who: 'Individuals, businesses and professionals facing a scrutiny notice, a reassessment, or an assessment order they believe is wrong.',
		result: '₹4.2 Cr in additions deleted by the ITAT — the entire demand reduced to nil.',
		local: 'Based in New Delhi, our income tax team appears before the CIT(A), ITAT and High Court benches in New Delhi, Mumbai, Bengaluru, Hyderabad, Chennai and Kolkata — and for clients across India. Assessment and appeal work is largely faceless now, so where you live rarely limits what we can do.',
		faqs: [
			{ q: 'I got a notice under section 143(2). What do I do first?', a: 'Do not ignore it and do not reply alone. The notice carries a strict deadline, and the first reply frames the whole assessment. Call us the same day — we will read the notice, check what the department is really asking, and draft the reply for you.' },
			{ q: 'What is the difference between CIT(A) and the ITAT?', a: 'The Commissioner (Appeals) is the first appeal against an assessment order. If that fails, the Income Tax Appellate Tribunal is the next forum — it hears both facts and law, and its orders are binding on the department. We handle both, and the High Court after that.' },
			{ q: 'Can the department recover the demand while my appeal is pending?', a: 'Usually not, if you act in time. We apply for a stay of demand and pay the standard 20% where required, so recovery — bank attachment or refund adjustment — is kept on hold while the appeal is decided.' }
		]
	},
	{
		slug: 'gst-disputes',
		title: 'GST Advisory & Disputes',
		short: 'GST notices, audits, refunds and classification disputes — from the first reply to the tribunal.',
		hero: 'A GST show-cause notice with a 30-day deadline is not a formality. Get the reply right the first time.',
		overview: [
			'Most GST disputes start with a DRC-01 show-cause notice — under section 73 for normal cases or section 74 where the department alleges suppression. The reply you file decides what the adjudicating authority can hold against you, and a weak reply is almost impossible to fix on appeal. We draft replies that deal with every allegation, with the case law and the documents to back them up.',
			'We also handle GST audits, input tax credit disputes, classification and HSN issues, refunds, e-way bill and e-invoicing problems, and appeals before the appellate authority and the GST Appellate Tribunal. For businesses, we run a monthly GST health check so notices stop arriving in the first place.'
		],
		services: [
			'Show-cause notice replies (sections 73 and 74, DRC-01)',
			'GST audits, scrutiny and departmental visits',
			'Input tax credit disputes and blocked credit',
			'Refunds, classification and HSN disputes',
			'E-way bill, e-invoicing and return mismatches',
			'Appeals before the appellate authority and GSTAT'
		],
		who: 'Businesses, e-commerce sellers, exporters and manufacturers facing a GST notice, audit or demand.',
		result: '₹8.6 Cr GST demand reduced to ₹42 lakh on appeal — 95% of the demand deleted.',
		local: 'Our GST team advises and represents businesses in New Delhi, Mumbai, Bengaluru, Hyderabad, Chennai and Kolkata — and across India. GST is a central law, so the same rules and the same strategy apply wherever your business is registered.',
		faqs: [
			{ q: 'Do I have to register for GST?', a: 'If your turnover crosses ₹40 lakh for goods or ₹20 lakh for services, registration is mandatory. Some businesses must register regardless of turnover — for example, inter-state suppliers and e-commerce sellers. We will check your exact position in a free consultation.' },
			{ q: 'What is the difference between a section 73 and a section 74 notice?', a: 'Section 73 covers demands where the department does not allege fraud or suppression, and the penalty is capped at 10%. Section 74 alleges fraud or wilful misstatement and carries much higher penalties. The reply strategy is completely different — which is why the notice must be read carefully before you respond.' },
			{ q: 'When are GSTR-1 and GSTR-3B due?', a: 'GSTR-1 is due by the 11th of the following month and GSTR-3B by the 20th. Late filing attracts late fees and interest, and mismatches between the two are the most common reason the department issues a notice.' }
		]
	},
	{
		slug: 'corporate-tax-planning',
		title: 'Corporate Tax & Planning',
		short: 'Company tax planning, restructuring, MAT, and year-round compliance for growing businesses.',
		hero: 'The best time to save corporate tax is before the year ends. The second-best time is now.',
		overview: [
			'Corporate tax is where the big numbers hide: the choice between the 22% rate under section 115BAA and the old regime with exemptions, MAT credit lying unused, depreciation claimed late, and restructuring done without thinking about the tax. We review your company once a quarter, so these decisions happen while they still save money.',
			'We advise on amalgamations, demergers and slump sales, ESOP taxation, related-party transactions, and the tax side of fundraising — so a term sheet never creates a surprise demand later. Our clients range from family businesses to funded startups, and every plan comes with the workings shown in writing.'
		],
		services: [
			'Section 115BAA vs old regime — the right choice for your company',
			'MAT, MAT credit and carry-forward losses',
			'Amalgamations, demergers and slump sales',
			'ESOP and sweat equity taxation',
			'Related-party transactions and transfer pricing',
			'Quarterly corporate tax planning and TDS compliance'
		],
		who: 'Companies, startups and family businesses that want to pay the legal minimum — and never pay a late penalty again.',
		result: 'Average corporate planning client saves ₹24 lakh a year in tax, legally.',
		local: 'Our corporate tax clients are companies in New Delhi, Mumbai, Bengaluru, Hyderabad, Chennai and Kolkata — and across India. Planning works best when it starts before the year ends, and most of it happens over video and phone.',
		faqs: [
			{ q: 'Should my company opt for the 22% rate under section 115BAA?', a: 'It depends on your exemptions. The 22% rate means giving up most deductions — for many companies it is cheaper, for some it is not. We run both computations on your actual numbers and show you the difference before you opt in.' },
			{ q: 'What is MAT and can I get the credit back?', a: 'Minimum Alternate Tax applies when your book profits are high but your taxable income is low. The MAT you pay becomes a credit you can carry forward for 15 years — but only if it is tracked properly. Many companies lose the credit simply because nobody claimed it.' },
			{ q: 'When should we start planning for next year?', a: 'October and November — before the year closes. By March, most of the planning window is gone, and advance tax instalments are already fixed.' }
		]
	},
	{
		slug: 'international-tax',
		title: 'International Tax & Transfer Pricing',
		short: 'Cross-border tax, DTAA, transfer pricing, FEMA and NRI taxation — structured so you are not taxed twice.',
		hero: 'Earning across borders should not mean paying tax twice — or filing it wrong.',
		overview: [
			'International tax is the most unforgiving area of Indian tax law. A missed Schedule FA disclosure, a wrong residential status, or an undocumented related-party transaction can turn into a penalty larger than the tax itself. We help NRIs, exporters, and businesses with overseas operations stay compliant — and claim every treaty benefit they are entitled to.',
			'Our work covers double taxation avoidance agreements, transfer pricing documentation and benchmarking, FEMA compliance for foreign investment and remittances, Form 15CA/CB, and the taxation of foreign income and assets. Most of it is handled entirely remotely, for clients in 14 countries.'
		],
		services: [
			'DTAA planning and foreign tax credits',
			'Transfer pricing documentation and benchmarking',
			'NRI residential status and foreign income taxation',
			'Schedule FA and foreign asset disclosures',
			'FEMA advisory for investment and remittances',
			'Form 15CA/CB and withholding on foreign payments'
		],
		who: 'NRIs, exporters, foreign investors and businesses with income, assets or related parties abroad.',
		result: '₹6.8 Cr in transfer pricing adjustments deleted at the Dispute Resolution Panel.',
		local: 'Our international tax practice serves NRIs, dual residents and foreign investors in New Delhi, Mumbai, Bengaluru, Hyderabad, Chennai and Kolkata — and clients in 14 countries. Most of this work is handled entirely remotely.',
		faqs: [
			{ q: 'I am an NRI. Do I have to file an ITR in India?', a: 'It depends on your income in India and your residential status, which turns on the number of days you spent here. Many NRIs must file even when their Indian income is small — and foreign assets must be disclosed in Schedule FA. We will check your exact position in a free consultation.' },
			{ q: 'How does a DTAA stop me being taxed twice?', a: 'A Double Taxation Avoidance Agreement decides which country can tax which income, and lets you claim credit in one country for tax paid in the other. Used properly, it usually means you are taxed once, fairly — but the paperwork has to be right.' },
			{ q: 'What is Schedule FA and why does it matter?', a: 'Schedule FA is the part of your ITR where you disclose foreign assets — bank accounts, shares, property, trusts. Missing it can attract a penalty of ₹10 lakh per year, even if the tax itself was paid. It is the single most common NRI mistake we see.' }
		]
	},
	{
		slug: 'tax-planning-compliance',
		title: 'Tax Planning & Compliance',
		short: 'Year-round tax planning that lowers your bill — and ITR, TDS and advance tax filed right, on time.',
		hero: 'The best time to save tax is before the year ends. The second-best time is now.',
		overview: [
			'Most people only think about tax in July, when the ITR deadline arrives. By then, almost every saving opportunity for the year is gone. Our planning clients meet us quarterly, so deductions, regime choice and timing decisions happen while they still matter.',
			'We also handle the filings themselves — ITR, TDS returns, advance tax computation — prepared by tax lawyers who know the law behind every line, not just the software. And with the Income-tax Act, 2025 in force from 1 April 2026, this is the year to get your planning reviewed properly.'
		],
		services: [
			'Quarterly tax planning for individuals and businesses',
			'New vs old regime — the right choice for your income',
			'ITR filing, review and revision',
			'Advance tax computation and instalments',
			'TDS compliance and certificates',
			'Capital gains, deductions and exemption planning'
		],
		who: 'Salaried individuals, professionals and small businesses who want to pay the legal minimum — and never pay a late fee again.',
		result: 'Average planning client saves ₹1,84,000 a year in tax, legally.',
		local: 'Our planning clients are individuals and businesses in New Delhi, Mumbai, Bengaluru, Hyderabad, Chennai and Kolkata — and remote clients across India. Planning works best when it starts before the year ends.',
		faqs: [
			{ q: 'New regime or old regime — which is better for me?', a: 'It depends on your deductions. The new regime has lower rates but almost no deductions; the old regime keeps 80C, HRA, home loan interest and more. We compute both on your actual salary and tell you which one saves more — it takes one meeting.' },
			{ q: 'What are the ITR deadlines for AY 2026-27?', a: '31 July 2026 for most individuals, 31 August 2026 for non-audit businesses, and 21 November 2026 for audit cases. A belated return can still be filed till 31 December 2026, and a revised return till 31 March 2027. Missing the deadline attracts a late fee of up to ₹5,000 under section 234F.' },
			{ q: 'Do I have to pay advance tax?', a: 'Yes, if your tax after TDS is ₹10,000 or more in a year. It is paid in four instalments — 15% by 15 June, 45% by 15 September, 75% by 15 December and 100% by 15 March. Shortfalls attract interest at 1% per month.' }
		]
	},
	{
		slug: 'search-seizure-settlement',
		title: 'Search, Seizure & Settlement',
		short: 'Search and seizure defence, statements, and settlement through Vivad se Vishwas — calm, discreet, fast.',
		hero: 'A search is the most stressful day in a taxpayer’s life. What you say in the first hours shapes the whole case.',
		overview: [
			'A search under section 132 or a survey under section 133A usually comes without warning. In the first hours, officials will ask for documents, record statements and seize material — and everything you say can be used in the assessment that follows. Our first job is to be there: to make sure the procedure is followed, your rights are protected, and nothing is said that cannot be taken back.',
			'After the search comes the assessment — usually under sections 153A/153C — and then the choice: fight it in appeal, or settle it. We handle both, including settlement through Vivad se Vishwas, which lets you close a disputed demand by paying the tax and waiving interest and penalty. Most of our search matters end in settlement, not in years of litigation.'
		],
		services: [
			'On-call response during search and survey',
			'Statement recording and retraction strategy',
			'Search assessments under sections 153A/153C',
			'Settlement through Vivad se Vishwas',
			'Seizure, retention and release of assets',
			'Penalty defence after search assessments'
		],
		who: 'Business owners and individuals facing a search, survey, or an assessment arising from one.',
		result: '₹12 Cr in additions from a search assessment reduced to ₹1.1 Cr in settlement.',
		local: 'Our search and settlement team acts in New Delhi, Mumbai, Bengaluru, Hyderabad, Chennai and Kolkata — and across India. Searches are time-critical: call us the moment it starts, and we will be on the phone with you within the hour.',
		faqs: [
			{ q: 'The department is searching my premises right now. What do I do?', a: 'Stay calm, cooperate, and call us immediately. Do not volunteer information beyond what is asked, and do not sign any statement without an attorney present. We will guide you through every step while it is happening.' },
			{ q: 'What is Vivad se Vishwas?', a: 'It is the government’s dispute settlement scheme: you pay the disputed tax and the department waives the interest and penalty, closing the case for good. It is often the cheapest way out of a long appeal — we will tell you honestly whether it beats fighting.' },
			{ q: 'Can I retract a statement made during a search?', a: 'Yes, but only if it is done properly and quickly — with reasons, in writing, and supported by evidence. A retraction made months later, without explanation, is rarely accepted. This is why having an attorney present from the start matters so much.' }
		]
	}
];

export function getPracticeArea(slug: string) {
	return practiceAreas.find((a) => a.slug === slug);
}
