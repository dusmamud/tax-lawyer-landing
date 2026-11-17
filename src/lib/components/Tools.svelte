<script lang="ts">
	import Reveal from '#lib/components/Reveal.svelte';
	import Icon from '#lib/components/Icon.svelte';
	import type { IconName } from '#lib/components/Icon.svelte';

	const tools: { href: string; title: string; text: string; icon: IconName }[] = [
		{
			href: '/tools/income-tax-calculator',
			title: 'Income Tax Calculator',
			text: 'Compare the new and old regimes side by side for FY 2026-27 — slabs, rebate, cess and surcharge included.',
			icon: 'calc'
		},
		{
			href: '/tools/advance-tax-calculator',
			title: 'Advance Tax Calculator',
			text: 'Work out your four instalments — 15 Jun, 15 Sep, 15 Dec, 15 Mar — and never miss a due date.',
			icon: 'calendar'
		},
		{
			href: '/tools/gst-calculator',
			title: 'GST Calculator',
			text: 'Add or strip GST at 5%, 12%, 18%, 28% or 40% — with the CGST + SGST split or IGST, done right.',
			icon: 'receipt'
		},
		{
			href: '/downloads',
			title: 'Free Guides & Checklists',
			text: 'Step-by-step PDF checklists for income-tax and GST notices — free to download, no email needed.',
			icon: 'doc'
		}
	];
</script>

<section class="bg-cream py-16 lg:py-24">
	<div class="mx-auto max-w-7xl px-4 sm:px-5 lg:px-8">
		<Reveal class="text-center">
			<span class="inline-block rounded-md bg-white px-3 py-1 text-[12px] font-semibold tracking-wide text-navy shadow-sm">Free Tools</span>
			<h2 class="mt-5 font-serif text-[32px] font-semibold text-ink sm:text-[44px]">Do the maths before you call us</h2>
			<p class="mx-auto mt-3 max-w-xl text-[15px] text-muted">Free calculators and checklists built on the current FY 2026-27 rules. No sign-up, nothing uploaded — everything runs in your browser.</p>
		</Reveal>

		<div class="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
			{#each tools as tool, i}
				<Reveal delay={(i % 4) * 90}>
					<a href={tool.href} class="group flex h-full flex-col rounded-2xl bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1.5 hover:shadow-xl">
						<span class="flex h-14 w-14 items-center justify-center rounded-full bg-cream text-navy transition group-hover:bg-navy group-hover:text-white">
							<Icon name={tool.icon} class="h-7 w-7" />
						</span>
						<h3 class="mt-5 font-serif text-[20px] font-semibold text-ink">{tool.title}</h3>
						<p class="mt-2 flex-1 text-[14px] leading-relaxed text-muted">{tool.text}</p>
						<span class="mt-5 inline-flex items-center gap-1.5 text-[13px] font-bold text-ink">
							Use it free <Icon name="arrow-right" class="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
						</span>
					</a>
				</Reveal>
			{/each}
		</div>
	</div>
</section>
