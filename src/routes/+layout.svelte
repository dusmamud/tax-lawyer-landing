<script lang="ts">
	import '../app.css';
	import type { LayoutProps } from './$types';
	import Header from '#lib/components/Header.svelte';
	import Footer from '#lib/components/Footer.svelte';
	import BackToTop from '#lib/components/BackToTop.svelte';

	let { children }: LayoutProps = $props();
</script>

<svelte:head>
	<title>MSY Law — Tax Attorney &amp; Tax Lawyer</title>
	<meta
		name="description"
		content="We handle every case professionally. Trusted tax attorneys for tax audits, compliance, estate planning and tax solutions."
	/>
	<meta property="og:title" content="MSY Law — We Handle Every Case Professionally" />
	<meta
		property="og:description"
		content="With a track record of successfully resolving a wide range of tax-related issues, we're committed to protecting your financial interests."
	/>
	<meta property="og:type" content="website" />
</svelte:head>

<Header />
{@render children()}
<Footer />
<BackToTop />
