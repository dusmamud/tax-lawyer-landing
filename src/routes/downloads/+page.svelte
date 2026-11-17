<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import Reveal from '#lib/components/Reveal.svelte';
	import CtaBanner from '#lib/components/CtaBanner.svelte';

	const guides = [
		{
			href: '/downloads/income-tax-notice-checklist.pdf',
			title: 'Income Tax Notice — First 48 Hours Checklist',
			desc: 'Got an income tax notice? Ten steps for the first 48 hours: what to note, what to check on the e-filing portal, what to gather — and what not to do before you reply.',
			meta: '1 page · 3.6 KB · PDF',
			tag: 'Income Tax'
		},
		{
			href: '/downloads/gst-notice-reply-checklist.pdf',
			title: 'GST Notice Reply Checklist',
			desc: 'Got a GST notice? Ten steps before you reply: section 73 vs 74, the DRC-01 details, reconciling GSTR-2B and GSTR-1 with GSTR-3B, and drafting a point-wise reply.',
			meta: '1 page · 3.4 KB · PDF',
			tag: 'GST'
		}
	];
</script>

<svelte:head>
	<title>Free Guides &amp; Checklists — MSY Law | Downloads</title>
	<meta name="description" content="Free tax guides from MSY Law: an income tax notice checklist for the first 48 hours, and a GST notice reply checklist. No email needed — just download." />
</svelte:head>

<PageHero
	eyebrow="Free Downloads"
	title="Free guides & checklists"
	subtitle="Short, practical checklists written by our tax lawyers. Download them, print them, and keep them next to the notice — they are free, and you do not need to give us your email."
	crumb="Downloads"
/>

<section class="bg-cream py-16 lg:py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-5 lg:px-8">
		<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
			{#each guides as guide, i}
				<Reveal delay={i * 90}>
					<article class="flex h-full flex-col rounded-3xl bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8">
						<div class="flex items-center justify-between gap-3">
							<span class="rounded-full bg-navy px-3 py-1 text-[11px] font-bold tracking-wide text-white uppercase">{guide.tag}</span>
							<span class="text-[12.5px] font-semibold text-muted">{guide.meta}</span>
						</div>
						<span class="mt-6 flex h-14 w-14 items-center justify-center rounded-full bg-cream text-navy" aria-hidden="true">
							<svg viewBox="0 0 24 24" class="h-7 w-7" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2h9l5 5v15H6z" /><path d="M14 2v6h6M9 13h6M9 17h6" /></svg>
						</span>
						<h2 class="mt-5 font-serif text-[23px] leading-snug font-semibold">{guide.title}</h2>
						<p class="mt-2 flex-1 text-[14.5px] leading-relaxed text-muted">{guide.desc}</p>
						<a
							href={guide.href}
							download
							class="mt-6 inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-navy px-6 py-3 text-[14px] font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-navy-3"
						>
							<svg viewBox="0 0 24 24" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3v12m0 0l-4-4m4 4l4-4M4 21h16" /></svg>
							Download PDF
						</a>
					</article>
				</Reveal>
			{/each}
		</div>

		<Reveal class="mt-10">
			<p class="rounded-2xl bg-navy p-6 text-center text-[14px] leading-relaxed text-white/85">
				Both guides are free — no email, no sign-up, no catch. They are general information, not legal
				advice. If a notice has a deadline, talk to a lawyer: call
				<a href="tel:+919811012345" class="font-bold text-white underline underline-offset-2">+91 98110 12345</a>
				or book a
				<a href="/free-consultation" class="font-bold text-white underline underline-offset-2">free 30-minute consultation</a>.
			</p>
		</Reveal>
	</div>
</section>

<CtaBanner />
