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
		slug: 'austin',
		name: 'Austin',
		tag: 'Headquarters',
		detail: 'Main office — 1200 Congress Ave, Suite 400',
		address: '1200 Congress Ave, Suite 400, Austin, TX 78701',
		parking: 'Free validated parking in the Congress garage — bring your ticket.',
		about: [
			'Our main office is in downtown Austin, a short walk from the Texas Capitol. This is where the firm started in 2011, and where most of our attorneys work every day. Walk-ins are welcome during office hours, but a booked consultation means an attorney is waiting for you — not a receptionist.',
			'From Austin we serve the whole of Texas and clients nationwide. Federal tax matters — audits, IRS debt, international tax — are handled the same way whether you live in Travis County or anywhere else in the country.'
		],
		areas: ['Downtown Austin', 'Round Rock', 'Cedar Park', 'Georgetown', 'Pflugerville', 'Travis County'],
		attorneys: ['Michael S. Young', 'David Carter', 'Sarah Mitchell', 'Emily Ross'],
		mapQuery: '1200 Congress Ave, Austin, TX 78701',
		faqs: [
			{ q: 'Can I walk in without an appointment?', a: 'Yes, during office hours (Mon–Fri, 9 AM–6 PM). For a guaranteed 30 minutes with an attorney, book a free consultation in advance.' },
			{ q: 'Is parking really free?', a: 'Yes — park in the Congress garage and bring your ticket. We validate it at the front desk.' }
		]
	},
	{
		slug: 'dallas',
		name: 'Dallas',
		tag: 'By appointment',
		detail: 'Serving clients across the Dallas–Fort Worth metro',
		address: 'Ross Tower, 500 N Akard St, Dallas, TX 75201',
		parking: 'Validated parking in the Ross Tower garage for in-person meetings.',
		about: [
			'Dallas is home to thousands of growing businesses — and to some of the most aggressive state tax audits in Texas. Our Dallas clients are usually business owners facing a Comptroller audit, a sales tax assessment, or a multi-state nexus problem that started when they expanded.',
			'We meet Dallas clients in person by appointment at our downtown meeting office, and most matters are handled by phone and video after the first meeting. For federal matters — IRS audits, tax debt, international tax — location does not matter at all: the law is the same in Dallas as it is in Austin.'
		],
		areas: ['Downtown Dallas', 'Plano', 'Frisco', 'Irving', 'Arlington', 'Fort Worth metro'],
		attorneys: ['David Carter', 'Michael S. Young'],
		mapQuery: 'Ross Tower, 500 N Akard St, Dallas, TX 75201',
		faqs: [
			{ q: 'Do I need to travel to Austin for my case?', a: 'No. Most Dallas matters are handled by phone, video and secure document sharing. In-person meetings are available by appointment in downtown Dallas.' },
			{ q: 'Can you handle a Texas Comptroller sales tax audit?', a: 'Yes — state audits are one of our core practices. We have reduced multi-state assessments from hundreds of thousands to a fraction of the original amount on appeal.' }
		]
	},
	{
		slug: 'houston',
		name: 'Houston',
		tag: 'By appointment',
		detail: 'Serving clients across Greater Houston',
		address: 'JPMorgan Chase Tower, 600 Travis St, Houston, TX 77002',
		parking: 'Visitor parking in the Chase Tower garage; street parking on Travis St.',
		about: [
			'Houston’s energy, healthcare and shipping industries create tax problems most firms never see: foreign income, complex partnerships, and audits that span multiple years and entities. Our Houston clients range from independent contractors to mid-size companies with operations overseas.',
			'We meet Houston clients by appointment downtown, and handle almost everything remotely after that. If you received an IRS letter, do not wait for an in-person meeting — call us the same day and we will start protecting your deadlines immediately.'
		],
		areas: ['Downtown Houston', 'The Woodlands', 'Sugar Land', 'Katy', 'Pasadena', 'Galveston County'],
		attorneys: ['Sarah Mitchell', 'David Carter'],
		mapQuery: 'JPMorgan Chase Tower, 600 Travis St, Houston, TX 77002',
		faqs: [
			{ q: 'I work in energy and have foreign income. Can you help?', a: 'Yes. International tax — FBAR, FATCA, foreign tax credits and treaty planning — is a core practice. We have resolved foreign-account penalties for clients in 14 countries.' },
			{ q: 'How fast can you respond to an audit letter?', a: 'Same day. Call before the deadline in the letter passes — in most cases we can take over all IRS contact within 24 hours of your first call.' }
		]
	},
	{
		slug: 'san-antonio',
		name: 'San Antonio',
		tag: 'By appointment',
		detail: 'Serving clients across Bexar County and South Texas',
		address: 'Frost Tower, 111 W Houston St, San Antonio, TX 78205',
		parking: 'Free street parking after 6 PM; garage parking on Houston St.',
		about: [
			'San Antonio’s mix of military families, small businesses and cross-border trade with Mexico creates a distinctive set of tax issues — from military tax benefits to international filings for families with ties on both sides of the border.',
			'We serve Bexar County and all of South Texas by phone, video and in-person meetings by appointment. Property tax appeals are especially common here: Bexar County assessments rise fast, and most homeowners who appeal pay less every year after.'
		],
		areas: ['Downtown San Antonio', 'Alamo Heights', 'Stone Oak', 'Boerne', 'New Braunfels', 'South Texas'],
		attorneys: ['Emily Ross', 'Sarah Mitchell'],
		mapQuery: 'Frost Tower, 111 W Houston St, San Antonio, TX 78205',
		faqs: [
			{ q: 'Can you help with a Bexar County property tax appeal?', a: 'Yes. We challenge residential and commercial assessments with comparable sales and a formal appeal record — and if we cannot reduce your assessment, you pay nothing for the appeal.' },
			{ q: 'Do you work with military families?', a: 'Yes. We advise on military tax benefits, multi-state filing issues from PCS moves, and residency questions — starting with a free consultation.' }
		]
	},
	{
		slug: 'fort-worth',
		name: 'Fort Worth',
		tag: 'By appointment',
		detail: 'Serving clients across Tarrant County',
		address: 'Burnett Plaza, 801 Cherry St, Fort Worth, TX 76102',
		parking: 'Garage parking at Burnett Plaza; free evenings and weekends.',
		about: [
			'Fort Worth businesses — from the Stockyards to the Alliance corridor — face the same state and federal tax pressure as Dallas, often with smaller teams and tighter margins. A single audit can feel existential, which is why our first job is usually to slow things down and get the client a clear plan.',
			'We meet Fort Worth clients by appointment downtown and handle most work remotely. Estate planning is a large part of our Fort Worth practice: ranch and family-business succession, where the tax bill can force a sale if nobody plans ahead.'
		],
		areas: ['Downtown Fort Worth', 'Alliance', 'Arlington', 'Keller', 'Southlake', 'Tarrant County'],
		attorneys: ['David Carter', 'Sarah Mitchell'],
		mapQuery: 'Burnett Plaza, 801 Cherry St, Fort Worth, TX 76102',
		faqs: [
			{ q: 'My family business is in Fort Worth. Can you help with succession?', a: 'Yes — business succession is part of our estate planning practice. We structure the handover so the next generation keeps the business instead of selling it to pay tax.' },
			{ q: 'Do you offer video consultations?', a: 'Yes. Most Fort Worth clients meet us once in person and then work with us entirely by video and phone.' }
		]
	},
	{
		slug: 'el-paso',
		name: 'El Paso',
		tag: 'By appointment',
		detail: 'Serving clients across West Texas',
		address: 'One San Jacinto Plaza, 111 E San Jacinto Blvd, El Paso, TX 79901',
		parking: 'Street parking on San Jacinto Blvd; garage parking nearby.',
		about: [
			'El Paso is the most cross-border city we serve: families and businesses with income, property and family on both sides of the U.S.–Mexico border. That means international tax filings, dual-residency questions, and FBAR issues are everyday work here — not edge cases.',
			'We serve all of West Texas from El Paso by appointment, phone and video. Se habla español: our team can handle your consultation in Spanish, and our Spanish-language page (/es) covers the basics.'
		],
		areas: ['Downtown El Paso', 'Las Cruces, NM', 'Midland–Odessa', 'West Texas', 'Ciudad Juárez (U.S. tax matters)'],
		attorneys: ['Sarah Mitchell', 'Emily Ross'],
		mapQuery: 'One San Jacinto Plaza, El Paso, TX 79901',
		faqs: [
			{ q: '¿Hablan español?', a: 'Sí. We can handle your consultation in Spanish — call +1 (800) 555-0199 and ask for the Spanish line, or visit /es.' },
			{ q: 'I have income in Mexico and the U.S. What do I file?', a: 'Usually both — but tax treaties and the foreign tax credit exist so you are not taxed twice. Bring your documents to a free consultation and we will map out exactly what you owe and where.' }
		]
	}
];

export function getCity(slug: string) {
	return cities.find((c) => c.slug === slug);
}
