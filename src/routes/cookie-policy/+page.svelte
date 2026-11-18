<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import Reveal from '#lib/components/Reveal.svelte';

	const sections = [
		{ h: 'What cookies are', p: 'Cookies are small text files stored on your device when you visit a website. They help the site remember your preferences and work correctly. This page explains which cookies this site uses and why.' },
		{ h: 'Cookies we use', p: 'This website uses only strictly necessary cookies — the ones required for the site to load, navigate and submit forms securely. We do not use advertising cookies, tracking cookies, or cookies that follow you to other websites.' },
		{ h: 'What we do not do', p: 'We do not sell your browsing data. We do not use third-party advertising trackers. We do not build advertising profiles from your visit to this site.' },
		{ h: 'Managing cookies', p: 'Because this site uses only essential cookies, there is nothing to opt out of — the site cannot function without them. You can still delete cookies or block them in your browser settings, but some parts of the site (such as forms) may stop working.' },
		{ h: 'Changes to this policy', p: 'If we ever add non-essential cookies — for example, analytics to understand which pages are most useful — we will update this page first and ask for your consent before they are set.' }
	];
</script>


<PageHero eyebrow="Legal" title="Cookie Policy" subtitle="Last updated: November 15, 2026. Short version: this site uses only the cookies it needs to work — nothing else." crumb="Cookie Policy" />

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
				Questions? Contact us at <a href="mailto:hello@msylaw.in" class="font-bold text-navy">hello@msylaw.in</a> or <a href="tel:+919811012345" class="font-bold text-navy">+91 98110 12345</a>.
			</p>
		</Reveal>
	</div>
</section>
