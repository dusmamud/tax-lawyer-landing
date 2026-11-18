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
	import ScrollProgress from '#lib/components/ScrollProgress.svelte';
	import WhatsAppButton from '#lib/components/WhatsAppButton.svelte';
	import { getSeo, DEFAULT_OG_IMAGE } from '../lib/data/seo';

	let { children }: LayoutProps = $props();

	const siteUrl = 'https://tax-lawyer-landing.pages.dev';
	const canonical = $derived(`${siteUrl}${page.url.pathname}`);

	// One title + one description per page, from src/lib/data/seo.ts. Pages
	// must not emit their own <title> / meta description — SvelteKit keeps
	// the innermost <title> but emits BOTH description tags, which is how
	// 53/54 pages ended up with a duplicate description (audit 2026-11-18).
	const seo = $derived(getSeo(page.url.pathname, page.status));
	const ogImageWidth = $derived(seo.ogImage === DEFAULT_OG_IMAGE ? 1200 : seo.ogImageWidth);
	const ogImageHeight = $derived(seo.ogImage === DEFAULT_OG_IMAGE ? 630 : seo.ogImageHeight);
	// City pages render their own complete LegalService block (that city's
	// address + geo); the layout block must not also emit the Delhi HQ geo
	// on those pages, or the two blocks contradict each other.
	const isCityPage = $derived(page.route.id === '/locations/[city]');

	// LegalService structured data — the same name, address and phone that
	// appear on the page, so Google can match the site to the firm's
	// Google Business Profile. Update these values when the real firm's
	// details replace the demo ones.
	const legalService = {
		'@context': 'https://schema.org',
		'@type': 'LegalService',
		'@id': `${siteUrl}/#legal-service`,
		name: 'MSY Law',
		description:
			'Trusted tax attorneys in India — income tax, GST, appeals and planning. New Delhi · Mumbai · Bengaluru · Hyderabad · Chennai · Kolkata.',
		url: siteUrl,
		image: `${siteUrl}/og-image.jpg`,
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
		aggregateRating: { '@type': 'AggregateRating', ratingValue: 4.9, reviewCount: 312 },
		sameAs: [
			'https://www.linkedin.com/company/msy-law',
			'https://www.facebook.com/msylaw',
			'https://x.com/msylaw',
			'https://www.youtube.com/@msylaw'
		]
	};
</script>

<svelte:head>
	<title>{seo.title}</title>
	<meta name="description" content={seo.description} />
	<link rel="canonical" href={canonical} />
	<meta property="og:title" content={seo.title} />
	<meta property="og:description" content={seo.description} />
	<meta property="og:type" content={seo.ogType} />
	<meta property="og:url" content={canonical} />
	<meta property="og:image" content={seo.ogImage} />
	{#if ogImageWidth}<meta property="og:image:width" content={String(ogImageWidth)} />{/if}
	{#if ogImageHeight}<meta property="og:image:height" content={String(ogImageHeight)} />{/if}
	<meta property="og:site_name" content="MSY Law" />
	{#if seo.ogType === 'article'}
		{#if seo.articlePublishedTime}<meta property="article:published_time" content={seo.articlePublishedTime} />{/if}
		{#if seo.articleModifiedTime}<meta property="article:modified_time" content={seo.articleModifiedTime} />{/if}
		{#if seo.articleAuthor}<meta property="article:author" content={seo.articleAuthor} />{/if}
		{#if seo.articleSection}<meta property="article:section" content={seo.articleSection} />{/if}
	{/if}
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={seo.title} />
	<meta name="twitter:description" content={seo.description} />
	<meta name="twitter:image" content={seo.ogImage} />
	{#if seo.hreflang}
		<!-- Only / and /hi have a version in the other language. -->
		<link rel="alternate" hreflang="en" href="{siteUrl}/" />
		<link rel="alternate" hreflang="hi" href="{siteUrl}/hi" />
		<link rel="alternate" hreflang="x-default" href="{siteUrl}/" />
	{/if}
	{#if !isCityPage}
		{@html `<script type="application/ld+json">${JSON.stringify(legalService)}</script>`}
	{/if}
</svelte:head>

<ScrollProgress />
<Header />
<main>{@render children()}</main>
<Footer />
<!-- Spacer for the mobile sticky call bar (fixed, ~62px + safe area): without
	it the bar covers the footer's legal links and disclaimer when scrolled
	to the very bottom. Hidden on desktop, where the bar does not render. -->
<div class="h-[4.5rem] lg:hidden" aria-hidden="true"></div>
<BackToTop />
<WhatsAppButton />
<LiveChat />
<CookieBanner />
<StickyCallBar />
