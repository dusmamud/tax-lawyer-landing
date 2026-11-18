<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import Faq from '#lib/components/Faq.svelte';
	import CtaBanner from '#lib/components/CtaBanner.svelte';
	import { faqs } from '../../lib/data/faqs';

	const faqSchema = {
		'@context': 'https://schema.org',
		'@type': 'FAQPage',
		mainEntity: faqs.map((f) => ({
			'@type': 'Question',
			name: f.q,
			acceptedAnswer: { '@type': 'Answer', text: f.a }
		}))
	};
</script>

<svelte:head>
	{@html `<script type="application/ld+json">${JSON.stringify(faqSchema)}</script>`}
</svelte:head>

<PageHero
	eyebrow="FAQ"
	title="Frequently asked questions"
	subtitle="Honest answers about fees, audits, confidentiality and timelines. Can’t find your question? Call us — a real lawyer answers."
	crumb="FAQ"
/>

<Faq />
<CtaBanner />
