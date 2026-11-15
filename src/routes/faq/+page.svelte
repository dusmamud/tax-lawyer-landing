<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import Faq from '#lib/components/Faq.svelte';
	import CtaBanner from '#lib/components/CtaBanner.svelte';
</script>

<svelte:head>
	<title>FAQ — MSY Law | Frequently Asked Questions</title>
	<meta name="description" content="Frequently asked questions about MSY Law: fees, IRS audits, confidentiality, timelines and how a tax attorney can help you." />
</svelte:head>

<PageHero
	eyebrow="FAQ"
	title="Frequently asked questions"
	subtitle="Honest answers about fees, audits, confidentiality and timelines. Can’t find your question? Call us — a real attorney answers."
	crumb="FAQ"
/>

<Faq />
<CtaBanner />
