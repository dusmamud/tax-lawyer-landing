<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import Reveal from '#lib/components/Reveal.svelte';

	const sections = [
		{ h: 'Lawyer advertising', p: 'This website is lawyer advertising. It is designed to provide general information about MSY Law and the services we offer. It is not an offer to represent you in any specific matter.' },
		{ h: 'Not legal advice', p: 'Nothing on this website is legal advice. Tax law depends heavily on your individual facts, and information that applies to one person may not apply to you. Do not act — or refrain from acting — based on anything you read here without speaking to a lawyer about your situation.' },
		{ h: 'No lawyer–client relationship', p: 'Visiting this website, reading its content, or sending us a message through a contact form does not create a lawyer–client relationship. That relationship begins only when we both sign a written engagement letter.' },
		{ h: 'Past results', p: 'Case results and client testimonials on this site describe past matters. Every case is different. Past results do not guarantee, and are not a prediction of, a similar outcome in your case.' },
		{ h: 'Jurisdiction', p: 'MSY Law is enrolled with the Bar Council of Delhi and practises before the Income Tax Appellate Tribunal, the High Courts and the Supreme Court of India. We accept matters in other jurisdictions only where we are permitted to do so, or in association with locally enrolled counsel.' },
		{ h: 'Contact us', p: 'If you need advice about your tax situation, book a free consultation or call +91 98110 12345. In 30 minutes, a lawyer will tell you honestly where you stand.' }
	];
</script>

<svelte:head>
	<title>Disclaimer — MSY Law</title>
	<meta name="description" content="MSY Law disclaimer: lawyer advertising, not legal advice, no lawyer–client relationship from browsing, and past results." />
</svelte:head>

<PageHero eyebrow="Legal" title="Disclaimer" subtitle="Last updated: November 15, 2026. Please read this before relying on anything on this site." crumb="Disclaimer" />

<section class="bg-white py-14 lg:py-20">
	<div class="mx-auto max-w-3xl px-4 sm:px-5">
		{#each sections as section, i}
			<Reveal delay={Math.min(i * 40, 120)}>
				<h2 class="mt-10 font-serif text-[24px] font-semibold first:mt-0">{section.h}</h2>
				<p class="mt-3 text-[15.5px] leading-relaxed text-muted">{section.p}</p>
			</Reveal>
		{/each}
	</div>
</section>
