// Single source of truth for <title>, meta description, Open Graph / Twitter
// tags and hreflang for every prerendered route. The layout renders exactly
// ONE title + ONE description from here — pages must NOT emit their own
// <title> or meta description, or the duplicate-description bug the
// 2026-11-18 audit found on 53/54 pages comes back (SvelteKit keeps the
// innermost <title> but emits BOTH meta description tags).
// Titles are kept to 50-60 characters, keyword first; descriptions to ~160.
// Two descriptions correct stale pre-rebrand copy (wrong lawyer names on
// /team, US practice areas on /practice-areas) instead of repeating it.
import { getPracticeArea } from './practice-areas';
import { getPost } from './posts';
import { getCity } from './locations';
import { getTeamMember } from './team';

export const SITE_URL = 'https://tax-lawyer-landing.pages.dev';
export const SITE_NAME = 'MSY Law';
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`;

export type Seo = {
	title: string;
	description: string;
	ogType: 'website' | 'article';
	ogImage: string;
	ogImageWidth?: number;
	ogImageHeight?: number;
	articlePublishedTime?: string;
	articleModifiedTime?: string;
	articleAuthor?: string;
	articleSection?: string;
	hreflang?: boolean;
};

const HOME: Seo = {
	title: 'MSY Law — Tax Lawyer in India | Income Tax, GST & Appeals',
	description:
		'Trusted tax attorneys in India — income tax, GST, appeals and planning. New Delhi · Mumbai · Bengaluru · Hyderabad · Chennai · Kolkata.',
	ogType: 'website',
	ogImage: DEFAULT_OG_IMAGE,
	ogImageWidth: 1200,
	ogImageHeight: 630
};

const STATIC_SEO: Record<string, Seo> = {
	'/about': {
		title: 'About Us — MSY Law | Tax Lawyers in India',
		description:
			'Meet MSY Law: a tax law firm founded in New Delhi in 2011. Our story, our values, and the team behind 1,200+ resolved tax cases.',
		ogType: 'website',
		ogImage: DEFAULT_OG_IMAGE
	},
	'/accessibility': {
		title: 'Accessibility — MSY Law',
		description:
			'MSY Law accessibility statement: our commitment to WCAG 2.1 AA, what we do, known limitations and how to reach us another way.',
		ogType: 'website',
		ogImage: DEFAULT_OG_IMAGE
	},
	'/blog': {
		title: 'Blog — MSY Law | Tax Insights in Plain English',
		description:
			'Tax insights in plain English: income tax notices, ITR deadlines, GST, advance tax, NRI taxation and more — written by MSY Law attorneys.',
		ogType: 'website',
		ogImage: DEFAULT_OG_IMAGE
	},
	'/careers': {
		title: 'Careers — MSY Law | Join Our Tax Team in India',
		description:
			'Careers at MSY Law: tax advocate, paralegal and client intake roles in New Delhi and Mumbai. Competitive pay, no billable-hour targets, hybrid working.',
		ogType: 'website',
		ogImage: DEFAULT_OG_IMAGE
	},
	'/case-evaluator': {
		title: 'Case Evaluator — What Your Tax Problem Needs | MSY Law',
		description:
			'Answer 4 quick questions and find out what kind of help your tax problem needs — instantly, free, and confidential. No data leaves your browser.',
		ogType: 'website',
		ogImage: DEFAULT_OG_IMAGE
	},
	'/case-results': {
		title: 'Case Results — MSY Law | Real Tax Case Outcomes',
		description:
			'Real MSY Law case results: ₹4.2 Cr penalty deleted at ITAT, ₹86 lakh GST refund recovered, ₹1.8 Cr demand settled for ₹12 lakh.',
		ogType: 'website',
		ogImage: DEFAULT_OG_IMAGE
	},
	'/client-portal': {
		title: 'Client Portal — MSY Law | Case Status, Documents & Payments',
		description:
			'Existing MSY Law clients: check your case status, download documents, message your lawyer, and pay your balance online.',
		ogType: 'website',
		ogImage: DEFAULT_OG_IMAGE
	},
	'/contact': {
		title: 'Contact Us — MSY Law | Tax Lawyers in New Delhi, India',
		description:
			'Contact MSY Law: call +91 98110 12345, email hello@msylaw.in, or book a free 30-minute consultation. A lawyer replies within one business day.',
		ogType: 'website',
		ogImage: DEFAULT_OG_IMAGE
	},
	'/cookie-policy': {
		title: 'Cookie Policy — MSY Law',
		description:
			'MSY Law cookie policy: this site uses only strictly necessary cookies. No advertising trackers, no data selling.',
		ogType: 'website',
		ogImage: DEFAULT_OG_IMAGE
	},
	'/disclaimer': {
		title: 'Disclaimer — MSY Law',
		description:
			'MSY Law disclaimer: lawyer advertising, not legal advice, no lawyer–client relationship from browsing, and past results.',
		ogType: 'website',
		ogImage: DEFAULT_OG_IMAGE
	},
	'/downloads': {
		title: 'Free Guides & Checklists — MSY Law | Downloads',
		description:
			'Free tax guides from MSY Law: an income tax notice checklist for the first 48 hours, and a GST notice reply checklist. No email needed — just download.',
		ogType: 'website',
		ogImage: DEFAULT_OG_IMAGE
	},
	'/faq': {
		title: 'FAQ — MSY Law | Frequently Asked Questions',
		description:
			'Frequently asked questions about MSY Law: fees, income-tax notices, confidentiality, timelines and how a tax lawyer can help you.',
		ogType: 'website',
		ogImage: DEFAULT_OG_IMAGE
	},
	'/fees': {
		title: 'Fees & Pricing — MSY Law | Tax Lawyer Fees in India',
		description:
			'Clear fixed fees: income-tax notice & scrutiny from ₹9,999, tax demand & settlement from ₹14,999, ITR filing from ₹2,499, GST disputes with no win, no fee.',
		ogType: 'website',
		ogImage: DEFAULT_OG_IMAGE
	},
	'/free-consultation': {
		title: 'Free Consultation — MSY Law | Tax Lawyer',
		description:
			'Book a free 30-minute consultation with an MSY Law tax lawyer. Leave with a clear plan and a fixed-fee quote — no obligation.',
		ogType: 'website',
		ogImage: DEFAULT_OG_IMAGE
	},
	'/hi': {
		title: 'भारत में टैक्स वकील — MSY Law | हिन्दी में',
		description:
			'भारत में टैक्स वकील: आयकर अपील, जीएसटी विवाद, कॉर्पोरेट टैक्स प्लानिंग और अंतरराष्ट्रीय कर। 30 मिनट की मुफ़्त सलाह। हम हिन्दी में बात करते हैं।',
		ogType: 'website',
		ogImage: DEFAULT_OG_IMAGE
	},
	'/locations': {
		title: 'Locations & Service Areas — MSY Law | Tax Attorney in India',
		description:
			'MSY Law is based in New Delhi and serves clients in Mumbai, Bengaluru, Hyderabad, Chennai and Kolkata — and across India for income tax and GST matters.',
		ogType: 'website',
		ogImage: DEFAULT_OG_IMAGE
	},
	'/news': {
		title: 'News — MSY Law | Firm News & Updates',
		description: 'MSY Law news: awards, case wins, community tax clinics and new team members.',
		ogType: 'website',
		ogImage: DEFAULT_OG_IMAGE
	},
	'/practice-areas': {
		title: 'Practice Areas — MSY Law | Tax Attorney & Tax Lawyer',
		description:
			'Six tax practice areas: income tax appeals, GST disputes, corporate tax planning, international tax, tax planning & compliance, and search & settlement.',
		ogType: 'website',
		ogImage: DEFAULT_OG_IMAGE
	},
	'/privacy-policy': {
		title: 'Privacy Policy — MSY Law',
		description:
			'MSY Law privacy policy: what information we collect, how we use it, confidentiality, security and your rights.',
		ogType: 'website',
		ogImage: DEFAULT_OG_IMAGE
	},
	'/resources': {
		title: 'Free Resources — MSY Law | Tax Guides, Deadlines & Glossary',
		description:
			'Free tax resources from MSY Law: the 2026-27 ITR and GST deadline calendar, a plain-English Indian tax glossary, and guides written by our lawyers.',
		ogType: 'website',
		ogImage: DEFAULT_OG_IMAGE
	},
	'/search': {
		title: 'Search — MSY Law',
		description:
			'Search every page of the MSY Law website: practice areas, lawyers, fees, locations, blog articles and more.',
		ogType: 'website',
		ogImage: DEFAULT_OG_IMAGE
	},
	'/sitemap': {
		title: 'Sitemap — MSY Law',
		description:
			'Full sitemap of the MSY Law website: every page, practice area, lawyer profile and article.',
		ogType: 'website',
		ogImage: DEFAULT_OG_IMAGE
	},
	'/team': {
		title: 'Our Team — MSY Law | Tax Attorneys',
		description:
			'Meet the MSY Law attorneys: Mohan S. Yadav, Arvind Kapoor, Sara Iyer and Ananya Rao. Real people, direct phone numbers, a named attorney on every case.',
		ogType: 'website',
		ogImage: DEFAULT_OG_IMAGE
	},
	'/terms': {
		title: 'Terms of Service — MSY Law',
		description:
			'MSY Law terms of service: our services, fees, no guarantee of results, your responsibilities and governing law.',
		ogType: 'website',
		ogImage: DEFAULT_OG_IMAGE
	},
	'/testimonials': {
		title: 'Testimonials & Case Results — MSY Law',
		description:
			'What MSY Law clients say: 4.9/5 from 1,200+ clients, with real case results — ₹4.2 Cr penalty deleted, ₹86 lakh GST refund recovered, ₹1.8 Cr demand settled.',
		ogType: 'website',
		ogImage: DEFAULT_OG_IMAGE
	},
	'/tools': {
		title: 'Free Tax Calculators — Income Tax, GST | MSY Law',
		description:
			'Free Indian tax calculators: compare old vs new income tax regimes, work out advance tax instalments, and add or remove GST. FY 2026-27 rules.',
		ogType: 'website',
		ogImage: DEFAULT_OG_IMAGE
	},
	'/tools/advance-tax-calculator': {
		title: 'Advance Tax Calculator FY 2026-27 — MSY Law',
		description:
			'Work out your advance tax for FY 2026-27: how much is due on 15 June, 15 September, 15 December and 15 March, and whether the ₹10,000 threshold applies.',
		ogType: 'website',
		ogImage: DEFAULT_OG_IMAGE
	},
	'/tools/gst-calculator': {
		title: 'GST Calculator — Add or Remove GST | MSY Law',
		description:
			'Add or remove GST from any amount at 5%, 12%, 18%, 28% or 40% — with the CGST + SGST split for intra-state sales or IGST for inter-state sales.',
		ogType: 'website',
		ogImage: DEFAULT_OG_IMAGE
	},
	'/tools/income-tax-calculator': {
		title: 'Income Tax Calculator FY 2026-27 — MSY Law',
		description:
			'Compare income tax under the old and new regimes for FY 2026-27: slab-by-slab breakdown, Section 87A rebate and marginal relief, cess and surcharge.',
		ogType: 'website',
		ogImage: DEFAULT_OG_IMAGE
	}
};

// Blog <title>s: "{post.title} — MSY Law" is over 60 characters for five
// posts, so those five get a shortened title here. The on-page H1 keeps the
// full post title — only the <title> tag is shortened.
const BLOG_TITLES: Record<string, string> = {
	'itr-filing-deadline-guide': 'ITR filing deadlines & the new Act — MSY Law',
	'advance-tax-due-dates-guide': 'Advance tax: the four dates to know — MSY Law',
	'section-270a-penalty-waiver': 'Section 270A penalty: reduce or waive it — MSY Law',
	'vivad-se-vishwas-settle-tax-dispute': 'Vivad se Vishwas: settle your tax dispute — MSY Law',
	'nri-taxation-india-guide': 'NRI taxation guide for Indians abroad — MSY Law'
};

function practiceSeo(slug: string): Seo | undefined {
	const area = getPracticeArea(slug);
	if (!area) return undefined;
	return {
		title: `${area.title} — MSY Law`,
		description: area.short,
		ogType: 'website',
		ogImage: DEFAULT_OG_IMAGE
	};
}

function postSeo(slug: string): Seo | undefined {
	const post = getPost(slug);
	if (!post) return undefined;
	return {
		title: BLOG_TITLES[slug] ?? `${post.title} — MSY Law`,
		description: post.excerpt,
		ogType: 'article',
		ogImage: `${SITE_URL}${post.authorImg.replace('.webp', '.jpg')}`,
		ogImageWidth: 1600,
		ogImageHeight: 1600,
		articlePublishedTime: post.published,
		articleModifiedTime: post.published,
		articleAuthor: post.author,
		articleSection: post.tag
	};
}

function citySeo(slug: string): Seo | undefined {
	const city = getCity(slug);
	if (!city) return undefined;
	return {
		title: `Tax Attorney in ${city.name}, India — MSY Law`,
		description: `Tax attorney in ${city.name}, India: income tax appeals, GST disputes, corporate tax and search & settlement. Free 30-minute consultation.`,
		ogType: 'website',
		ogImage: DEFAULT_OG_IMAGE
	};
}

function teamSeo(slug: string): Seo | undefined {
	const member = getTeamMember(slug);
	if (!member) return undefined;
	return {
		title: `${member.name} — ${member.role} | MSY Law`,
		description: `${member.name}, ${member.role} at MSY Law. ${member.exp} experience in ${member.focus.join(', ')}.`,
		ogType: 'website',
		ogImage: DEFAULT_OG_IMAGE
	};
}

const NOT_FOUND: Seo = {
	title: 'Page Not Found — MSY Law',
	description: 'The page you are looking for does not exist. Return home or contact MSY Law for help.',
	ogType: 'website',
	ogImage: DEFAULT_OG_IMAGE
};

export function getSeo(pathname: string, status = 200): Seo {
	if (status === 404) return NOT_FOUND;
	if (pathname === '/') return { ...HOME, hreflang: true };
	if (pathname === '/hi') return { ...STATIC_SEO['/hi'], hreflang: true };
	const staticSeo = STATIC_SEO[pathname];
	if (staticSeo) return staticSeo;
	if (pathname.startsWith('/practice-areas/')) return practiceSeo(pathname.slice(16)) ?? HOME;
	if (pathname.startsWith('/blog/')) return postSeo(pathname.slice(6)) ?? HOME;
	if (pathname.startsWith('/locations/')) return citySeo(pathname.slice(11)) ?? HOME;
	if (pathname.startsWith('/team/')) return teamSeo(pathname.slice(6)) ?? HOME;
	return HOME;
}
