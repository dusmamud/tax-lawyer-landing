<script lang="ts">
	import '../app.css';
	import type { LayoutProps } from './$types';
	import { page } from '$app/state';
	import Header from '#lib/components/Header.svelte';
	import Footer from '#lib/components/Footer.svelte';
	import BackToTop from '#lib/components/BackToTop.svelte';
	import LiveChat from '#lib/components/LiveChat.svelte';
	import CookieBanner from '#lib/components/CookieBanner.svelte';
	import StickyCallBar from '#lib/components/StickyCallBar.svelte';

	let { children }: LayoutProps = $props();

	const siteUrl = 'https://tax-lawyer-landing.pages.dev';
	const canonical = $derived(`${siteUrl}${page.url.pathname}`);

	// LegalService structured data — the same name, address and phone that
	// appear on the page, so Google can match the site to the firm's
	// Google Business Profile. Update these values when the real firm's
	// details replace the demo ones.
	const legalService = {
		'@context': 'https://schema.org',
		'@type': 'LegalService',
		name: 'MSY Law',
		description:
			'Trusted tax attorneys for tax audits, compliance, estate planning and tax solutions in Austin, Texas and nationwide.',
		url: siteUrl,
		telephone: '+1-800-555-0199',
		email: 'hello@msylaw.com',
		priceRange: '$$',
		address: {
			'@type': 'PostalAddress',
			streetAddress: '1200 Congress Ave, Suite 400',
			addressLocality: 'Austin',
			addressRegion: 'TX',
			postalCode: '78701',
			addressCountry: 'US'
		},
		geo: { '@type': 'GeoCoordinates', latitude: 30.2711, longitude: -97.7431 },
		openingHoursSpecification: {
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
			opens: '09:00',
			closes: '18:00'
		},
		areaServed: [
			{ '@type': 'City', name: 'Austin' },
			{ '@type': 'City', name: 'Dallas' },
			{ '@type': 'City', name: 'Houston' },
			{ '@type': 'City', name: 'San Antonio' },
			{ '@type': 'City', name: 'Fort Worth' },
			{ '@type': 'City', name: 'El Paso' },
			{ '@type': 'Country', name: 'United States' }
		],
		aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '312' },
		sameAs: [
			'https://www.linkedin.com/company/msy-law',
			'https://www.facebook.com/msylaw',
			'https://x.com/msylaw',
			'https://www.youtube.com/@msylaw'
		]
	};
</script>

<svelte:head>
	<title>MSY Law — Tax Attorney &amp; Tax Lawyer</title>
	<meta
		name="description"
		content="We handle every case professionally. Trusted tax attorneys for tax audits, compliance, estate planning and tax solutions."
	/>
	<link rel="canonical" href={canonical} />
	<meta property="og:title" content="MSY Law — We Handle Every Case Professionally" />
	<meta
		property="og:description"
		content="With a track record of successfully resolving a wide range of tax-related issues, we're committed to protecting your financial interests."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:url" content={canonical} />
	<meta property="og:image" content="{siteUrl}/og-image.jpg" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:site_name" content="MSY Law" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="MSY Law — Tax Attorney & Tax Lawyer" />
	<meta
		name="twitter:description"
		content="Trusted tax attorneys for tax audits, compliance, estate planning and tax solutions."
	/>
	<meta name="twitter:image" content="{siteUrl}/og-image.jpg" />
	{@html `<script type="application/ld+json">${JSON.stringify(legalService)}</script>`}
</svelte:head>

<Header />
{@render children()}
<Footer />
<BackToTop />
<LiveChat />
<CookieBanner />
<StickyCallBar />
