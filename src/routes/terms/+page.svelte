<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import Reveal from '#lib/components/Reveal.svelte';

	const sections = [
		{ h: 'Our services', p: 'MSY Law provides tax legal services, including income-tax appeals, GST disputes, corporate tax planning, international tax, tax planning and compliance, and search & seizure settlement. The exact scope of any engagement is set out in a written engagement letter signed by you and the firm.' },
		{ h: 'Fees', p: 'Before any work begins, you receive a written, fixed-fee quote. The quoted fee is the fee you pay for the agreed scope. If the scope changes, we agree the new fee with you in writing first. Consultation fees, where they apply, are disclosed before the consultation.' },
		{ h: 'No guarantee of results', p: 'Tax outcomes depend on your facts, the law, and the decisions of tax authorities and courts. We work to achieve the best lawful outcome for you, but we do not guarantee any particular result. Past results described on this site do not guarantee similar outcomes.' },
		{ h: 'Your responsibilities', p: 'You agree to provide complete and accurate information, to meet deadlines we agree together, and to tell us promptly about any new correspondence from a tax authority. Delays or incomplete information can affect the outcome of your matter.' },
		{ h: 'Website content', p: 'The articles and information on this website are general information, not legal advice for your specific situation. Reading this site, or contacting us through it, does not create a lawyer–client relationship. That relationship begins only when we both sign an engagement letter.' },
		{ h: 'Limitation of liability', p: 'To the maximum extent permitted by law, our liability for any claim is limited to the fees you paid for the matter in question. Nothing in these terms limits liability that cannot be limited by law.' },
		{ h: 'Governing law', p: 'These terms are governed by the laws of India. Any dispute will be resolved in the courts of New Delhi.' }
	];
</script>


<PageHero eyebrow="Legal" title="Terms of Service" subtitle="Last updated: November 15, 2026. The plain-English terms under which we work together." crumb="Terms of Service" />

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
