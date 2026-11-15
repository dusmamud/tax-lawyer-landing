export type City = {
	slug: string;
	name: string;
	tag: string;
	detail: string;
	address: string;
	parking: string;
	about: string[];
	areas: string[];
	attorneys: string[];
	mapQuery: string;
	faqs: { q: string; a: string }[];
};

export const cities: City[] = [
	{
		slug: 'new-delhi',
		name: 'New Delhi',
		tag: 'Headquarters',
		detail: 'Main office — Statesman House, Barakhamba Road, Connaught Place',
		address: 'Statesman House, Barakhamba Road, Connaught Place, New Delhi 110001',
		parking: 'Paid parking at Statesman House; Barakhamba Road Metro (Blue Line) is a 2-minute walk.',
		about: [
			'Our main office is in Connaught Place, a short walk from the Barakhamba Road Metro station and minutes from the Income Tax Appellate Tribunal and the Delhi High Court. This is where the firm started in 2011, and where most of our attorneys work every day. Walk-ins are welcome during office hours, but a booked consultation means an attorney is waiting for you — not a receptionist.',
			'From New Delhi we serve the whole of India. Income tax appeals, GST disputes, search matters and international tax are handled the same way whether you live in Connaught Place or anywhere else in the country — and most of the work is faceless now, so location rarely matters at all.'
		],
		areas: ['Connaught Place', 'Karol Bagh', 'South Delhi', 'Gurugram', 'Noida', 'Ghaziabad'],
		attorneys: ['Mohan S. Yadav', 'Arvind Kapoor', 'Sara Iyer', 'Ananya Rao'],
		mapQuery: 'Statesman House, Barakhamba Road, Connaught Place, New Delhi',
		faqs: [
			{ q: 'Can I walk in without an appointment?', a: 'Yes, during office hours (Mon–Sat, 10 AM–7 PM IST). For a guaranteed 30 minutes with an attorney, book a free consultation in advance.' },
			{ q: 'How do I reach the office by Metro?', a: 'Take the Blue Line to Barakhamba Road station — the office is a 2-minute walk from Gate 1. Paid parking is also available at Statesman House.' }
		]
	},
	{
		slug: 'mumbai',
		name: 'Mumbai',
		tag: 'By appointment',
		detail: 'Serving clients across Mumbai and Maharashtra',
		address: 'One World Centre, Senapati Bapat Marg, Lower Parel, Mumbai 400013',
		parking: 'Valet and visitor parking at One World Centre.',
		about: [
			'Mumbai is India’s financial capital — and home to some of the most complex corporate tax, transfer pricing and GST disputes in the country. Our Mumbai clients are usually companies and promoters dealing with a scrutiny assessment, a transfer pricing adjustment, or a GST demand that started with a single notice.',
			'We meet Mumbai clients in person by appointment at our Lower Parel meeting office, and most matters are handled by phone and video after the first meeting. For income tax and GST matters, the law is the same in Mumbai as it is in New Delhi — and most proceedings are faceless, so your case moves just as fast.'
		],
		areas: ['Lower Parel', 'Bandra Kurla Complex', 'Andheri', 'Thane', 'Navi Mumbai', 'South Mumbai'],
		attorneys: ['Arvind Kapoor', 'Mohan S. Yadav'],
		mapQuery: 'One World Centre, Senapati Bapat Marg, Lower Parel, Mumbai',
		faqs: [
			{ q: 'Do I need to travel to New Delhi for my case?', a: 'No. Most Mumbai matters are handled by phone, video and secure document sharing. In-person meetings are available by appointment in Lower Parel.' },
			{ q: 'Can you handle a transfer pricing adjustment?', a: 'Yes — transfer pricing is one of our core practices. We have had adjustments of several crores deleted at the Dispute Resolution Panel and the ITAT.' }
		]
	},
	{
		slug: 'bengaluru',
		name: 'Bengaluru',
		tag: 'By appointment',
		detail: 'Serving clients across Bengaluru and Karnataka',
		address: 'UB City, Vittal Mallya Road, Bengaluru 560001',
		parking: 'Visitor parking at UB City; Vidhana Soudha Metro is nearby.',
		about: [
			'Bengaluru’s startups and global capability centres create tax problems most firms never see: ESOP taxation, transfer pricing for captives, GST on software exports, and founders with income in two countries. Our Bengaluru clients range from first-time founders to listed companies.',
			'We meet Bengaluru clients by appointment at UB City, and handle almost everything remotely after that. If you received an income tax or GST notice, do not wait for an in-person meeting — call us the same day and we will start protecting your deadlines immediately.'
		],
		areas: ['UB City', 'Koramangala', 'Whitefield', 'Electronic City', 'HSR Layout', 'Indiranagar'],
		attorneys: ['Sara Iyer', 'Ananya Rao'],
		mapQuery: 'UB City, Vittal Mallya Road, Bengaluru',
		faqs: [
			{ q: 'My startup gives ESOPs. How are they taxed?', a: 'ESOPs are taxed twice — once as a perquisite when you exercise, and again as capital gains when you sell. The timing and the valuation decide how much. We plan both events so employees are not surprised by a demand.' },
			{ q: 'Can you help with GST on software exports?', a: 'Yes. Exports are zero-rated, but refunds get stuck on documentation — LUT filings, FIRC, and invoice matching. We fix the paperwork and follow up the refund until it is credited.' }
		]
	},
	{
		slug: 'hyderabad',
		name: 'Hyderabad',
		tag: 'By appointment',
		detail: 'Serving clients across Hyderabad and Telangana',
		address: 'Financial District, Nanakramguda, Hyderabad 500032',
		parking: 'Visitor parking in the Financial District towers.',
		about: [
			'Hyderabad’s pharma, IT and life-sciences industries bring a distinctive mix of tax work — R&D deductions, GST on clinical trials and contract manufacturing, and transfer pricing for global captives. Our Hyderabad clients are usually CFOs and founders who need a straight answer fast, not a 40-page memo.',
			'We serve Hyderabad and all of Telangana by phone, video and in-person meetings by appointment in the Financial District. GST audits are especially common here: the department’s data analytics flag mismatches automatically, and a well-drafted reply usually closes the matter at the first stage.'
		],
		areas: ['Financial District', 'HITEC City', 'Gachibowli', 'Jubilee Hills', 'Secunderabad', 'Begumpet'],
		attorneys: ['Ananya Rao', 'Arvind Kapoor'],
		mapQuery: 'Financial District, Nanakramguda, Hyderabad',
		faqs: [
			{ q: 'Can you handle a GST audit for my company?', a: 'Yes. We review the audit questionnaire, prepare the reconciliations, and attend the proceedings with you — most audits close at the reply stage when the workings are clean.' },
			{ q: 'We are a pharma company. What tax issues should we watch?', a: 'R&D deductions, GST on contract manufacturing, and transfer pricing on inter-company charges. A quarterly review catches all three before they become demands.' }
		]
	},
	{
		slug: 'chennai',
		name: 'Chennai',
		tag: 'By appointment',
		detail: 'Serving clients across Chennai and Tamil Nadu',
		address: 'Express Avenue, Whites Road, Royapettah, Chennai 600014',
		parking: 'Mall parking at Express Avenue; Royapettah is well connected by bus and Metro.',
		about: [
			'Chennai’s manufacturing base, auto ancillaries and a large NRI community create a distinctive set of tax issues — from GST on job work and exports to NRI residential status and foreign asset disclosures for families with members abroad.',
			'We serve Chennai and all of Tamil Nadu by phone, video and in-person meetings by appointment at Express Avenue. NRI taxation is a large part of our Chennai practice: residential status, Schedule FA, and DTAA claims for families with income in two countries.'
		],
		areas: ['Royapettah', 'T. Nagar', 'Anna Nagar', 'Adyar', 'OMR', 'Ambattur'],
		attorneys: ['Sara Iyer', 'Mohan S. Yadav'],
		mapQuery: 'Express Avenue, Whites Road, Royapettah, Chennai',
		faqs: [
			{ q: 'I am an NRI with property in Chennai. What do I need to file?', a: 'It depends on your rental income, capital gains and residential status — and foreign assets must be disclosed in Schedule FA. Bring your documents to a free consultation and we will map out exactly what you owe and where.' },
			{ q: 'Can you help with a GST notice on job work?', a: 'Yes. Job work has its own GST rules — and most notices come from a mismatch between the principal’s and the job worker’s returns. We reconcile both sides and draft the reply.' }
		]
	},
	{
		slug: 'kolkata',
		name: 'Kolkata',
		tag: 'By appointment',
		detail: 'Serving clients across Kolkata and West Bengal',
		address: 'Camac Street, Park Street Area, Kolkata 700017',
		parking: 'Street and mall parking on Camac Street; Park Street Metro is nearby.',
		about: [
			'Kolkata’s family businesses — some in their third generation — face a particular problem: succession. A business built over decades can be broken by a single tax demand if nobody plans the handover. Our Kolkata practice is built around that: succession planning, settlement of old disputes, and restructuring so the next generation keeps the business.',
			'We serve Kolkata and all of West Bengal by appointment, phone and video. Vivad se Vishwas settlements are especially common here — many families have disputes pending for years, and the scheme lets them close the matter by paying the tax and waiving the interest and penalty.'
		],
		areas: ['Camac Street', 'Park Street', 'Salt Lake', 'New Town', 'Howrah', 'Alipore'],
		attorneys: ['Ananya Rao', 'Mohan S. Yadav'],
		mapQuery: 'Camac Street, Park Street Area, Kolkata',
		faqs: [
			{ q: 'My family business is in Kolkata. Can you help with succession?', a: 'Yes — business succession is a core part of our practice. We structure the handover so the next generation keeps the business instead of selling it to pay tax.' },
			{ q: 'We have a tax dispute pending for years. Can it be settled?', a: 'Very likely, yes. Vivad se Vishwas lets you close a disputed demand by paying the tax and waiving the interest and penalty. We will tell you honestly whether settlement beats fighting.' }
		]
	}
];

export function getCity(slug: string) {
	return cities.find((c) => c.slug === slug);
}
