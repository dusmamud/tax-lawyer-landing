<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import Reveal from '#lib/components/Reveal.svelte';

	const sections = [
		{ h: 'Our commitment', p: 'MSY Law is committed to making this website usable by everyone, including people with disabilities. We aim to meet the Web Content Accessibility Guidelines (WCAG) 2.1, Level AA, across the site.' },
		{ h: 'What we do', p: 'Our site uses clear headings and a logical page structure, sufficient colour contrast, text that can be resized, keyboard navigation for menus, forms and sliders, and descriptive labels on every form field and button. Images carry alternative text, and decorative elements are hidden from screen readers.' },
		{ h: 'Known limitations', p: 'Some older photographs and third-party content may not yet have perfect descriptions. We are working through them. If you find any part of the site difficult to use, please tell us — we will fix it and, in the meantime, help you by phone or email.' },
		{ h: 'Need help another way?', p: 'If you cannot use this website comfortably, you can reach us by phone at +91 98110 12345 (Mon–Sat, 10 AM – 7 PM IST), by email at hello@msylaw.in, or in person at our New Delhi office. We will happily take your enquiry in whatever way works best for you.' },
		{ h: 'Feedback', p: 'Accessibility is ongoing work, not a one-time fix. If you have a suggestion or hit a barrier, email hello@msylaw.in with the subject “Accessibility”. We review every report and aim to respond within two business days.' }
	];
</script>


<PageHero eyebrow="Legal" title="Accessibility statement" subtitle="Everyone should be able to use this website — including you. Here is what we do about it, and how to tell us when we fall short." crumb="Accessibility" />

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
