<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import Reveal from '#lib/components/Reveal.svelte';

	const sections = [
		{ h: 'Information we collect', p: 'When you contact us through this website — by form, email or phone — we collect the information you provide: your name, email address, phone number, and the details of your tax matter. We also collect basic technical information (browser type, pages visited) to keep the site secure and working.' },
		{ h: 'How we use it', p: 'We use your information only to respond to your enquiry, schedule a consultation, and provide legal services if you engage us. We do not sell, rent or share your personal information with third parties for marketing. We never use your tax information for any purpose other than your case.' },
		{ h: 'Confidentiality', p: 'Communications with our lawyers are protected by advocate–client privilege where a relationship exists. Even before you hire us, we treat every enquiry as confidential and do not disclose it to anyone outside the firm without your permission, except where the law requires it.' },
		{ h: 'Data security', p: 'Your information is stored on secure systems with access limited to the lawyers and staff working on your matter. Contact forms are transmitted over encrypted connections. We keep records only as long as needed for your matter and as required by law.' },
		{ h: 'Cookies', p: 'This website uses only essential cookies needed for the site to function. We do not use advertising trackers or sell browsing data.' },
		{ h: 'Your rights', p: 'Under the Digital Personal Data Protection Act, 2023, you may ask us at any time what information we hold about you, ask us to correct it, or ask us to delete it (subject to our legal record-keeping duties). To make a request, email hello@msylaw.in or call +91 98110 12345.' },
		{ h: 'Changes to this policy', p: 'We may update this policy from time to time. The version on this page is the current one, and the date below shows when it was last updated.' }
	];
</script>

<svelte:head>
	<title>Privacy Policy — MSY Law</title>
	<meta name="description" content="MSY Law privacy policy: what information we collect, how we use it, confidentiality, security and your rights." />
</svelte:head>

<PageHero eyebrow="Legal" title="Privacy Policy" subtitle="Last updated: November 15, 2026. Your information is yours — here is exactly what we do with it." crumb="Privacy Policy" />

<section class="bg-white py-14 lg:py-20">
	<div class="mx-auto max-w-3xl px-4 sm:px-5">
		{#each sections as section, i}
			<Reveal delay={Math.min(i * 40, 120)}>
				<h2 class="mt-10 font-serif text-[24px] font-semibold first:mt-0">{section.h}</h2>
				<p class="mt-3 text-[15.5px] leading-relaxed text-muted">{section.p}</p>
			</Reveal>
		{/each}
		<Reveal>
			<p class="mt-10 rounded-2xl bg-cream/70 p-6 text-[14.5px] leading-relaxed text-muted">
				Questions about this policy? Contact us at <a href="mailto:hello@msylaw.in" class="font-bold text-navy">hello@msylaw.in</a> or <a href="tel:+919811012345" class="font-bold text-navy">+91 98110 12345</a>.
			</p>
		</Reveal>
	</div>
</section>
