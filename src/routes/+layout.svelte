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
			'Trusted tax attorneys in India — income tax, GST, appeals and planning. New Delhi · Mumbai · Bengaluru · Hyderabad · Chennai · Kolkata.',
		url: siteUrl,
		telephone: '+91-98110-12345',
		email: 'hello@msylaw.in',
		priceRange: '₹₹',
		address: {
			'@type': 'PostalAddress',
			streetAddress: 'Statesman House, Barakhamba Road, Connaught Place',
			addressLocality: 'New Delhi',
			addressRegion: 'Delhi',
			postalCode: '110001',
			addressCountry: 'IN'
		},
		geo: { '@type': 'GeoCoordinates', latitude: 28.6315, longitude: 77.2167 },
		openingHoursSpecification: {
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
			opens: '10:00',
			closes: '19:00'
		},
		areaServed: [
			{ '@type': 'City', name: 'New Delhi' },
			{ '@type': 'City', name: 'Mumbai' },
			{ '@type': 'City', name: 'Bengaluru' },
			{ '@type': 'City', name: 'Hyderabad' },
			{ '@type': 'City', name: 'Chennai' },
			{ '@type': 'City', name: 'Kolkata' },
			{ '@type': 'Country', name: 'India' }
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
	<title>MSY Law — Tax Lawyer in India | Income Tax, GST &amp; Appeals</title>
	<meta
		name="description"
		content="Trusted tax attorneys in India — income tax, GST, appeals and planning. New Delhi · Mumbai · Bengaluru · Hyderabad · Chennai · Kolkata."
	/>
	<link rel="canonical" href={canonical} />
	<meta property="og:title" content="MSY Law — Tax Lawyer in India | Income Tax, GST & Appeals" />
	<meta
		property="og:description"
		content="Trusted tax attorneys in India — income tax, GST, appeals and planning. New Delhi · Mumbai · Bengaluru · Hyderabad · Chennai · Kolkata."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:url" content={canonical} />
	<meta property="og:image" content="{siteUrl}/og-image.jpg" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:site_name" content="MSY Law" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="MSY Law — Tax Lawyer in India | Income Tax, GST & Appeals" />
	<meta
		name="twitter:description"
		content="Trusted tax attorneys in India — income tax, GST, appeals and planning. New Delhi · Mumbai · Bengaluru · Hyderabad · Chennai · Kolkata."
	/>
	<meta name="twitter:image" content="{siteUrl}/og-image.jpg" />
	{@html `<script type="application/ld+json">${JSON.stringify(legalService)}</script>`}
</svelte:head>

<Header />
{@render children()}
<Footer />
<!-- Spacer for the mobile sticky call bar (fixed, ~62px + safe area): without
	it the bar covers the footer's legal links and disclaimer when scrolled
	to the very bottom. Hidden on desktop, where the bar does not render. -->
<div class="h-[4.5rem] lg:hidden" aria-hidden="true"></div>
<BackToTop />
<LiveChat />
<CookieBanner />
<StickyCallBar />
