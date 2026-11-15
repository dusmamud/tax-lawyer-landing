<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import Reveal from '#lib/components/Reveal.svelte';
	import Icon from '#lib/components/Icon.svelte';
	import CtaBanner from '#lib/components/CtaBanner.svelte';

	const plans = [
		{ name: 'Income Tax Notice & Scrutiny', price: 'from ₹9,999', per: 'per notice, fixed fee', items: ['Reply drafting — we handle all department contact', 'Full document review and scrutiny strategy', 'Representation before the Assessing Officer', 'Penalty and interest reduction (Section 270A)', 'Weekly updates until the notice closes'] },
		{ name: 'Tax Demand & Settlement', price: 'from ₹14,999', per: 'per matter, fixed fee', items: ['Demand analysis and Vivad se Vishwas evaluation', 'Rectification and stay of demand', 'Penalty waiver requests', 'Instalment / stay applications', 'Attachment and recovery protection'] },
		{ name: 'ITR Filing', price: 'from ₹2,499', per: 'per return · HUF & trust planning from ₹24,999', items: ['ITR-1 to ITR-7 — individuals, HUF, firms, trusts', 'Capital gains, foreign assets and F&O schedules', 'HUF and family trust planning (from ₹24,999)', 'Advance tax planning so you never pay interest', 'Free review every year before the 31 July deadline'] },
		{ name: 'GST Disputes', price: 'No win, no fee', per: '25% of the amount recovered in the first year', items: ['Show-cause notice replies and DRC-01 drafting', 'GSTR-9 / 9C reconciliation and audit defence', 'Input tax credit (ITC) recovery and refunds', 'Appeals before the GST Appellate Tribunal', 'If we cannot reduce it, you pay nothing'] },
		{ name: 'Corporate Tax Planning', price: 'from ₹49,999', per: 'per year, quarterly sessions', items: ['Quarterly planning sessions', 'Entity choice and review (Pvt Ltd, LLP, partnership)', 'Income-tax and GST return preparation', 'Advance tax and TDS optimisation', 'Notices, scrutiny and penalty defence'] },
		{ name: 'Appeals & Litigation', price: '₹5,000 / hour', per: 'hourly, for court cases', items: ['CIT(A) and ITAT representation', 'High Court writs and appeals (quoted in stages)', 'Search & seizure and settlement commission work', 'Itemised billing, reviewed monthly', 'Written estimate before we start'] }
	];

	const faqs = [
		{ q: 'Do I pay anything before we start?', a: 'No. The first 30-minute consultation is free, and you get a written fixed-fee quote before any work begins. You approve the fee before we start.' },
		{ q: 'Can I pay in instalments?', a: 'Yes. Most fixed-fee matters can be split into monthly payments — usually 3 to 6 months, interest-free. Tell us what works and we will put it in writing.' },
		{ q: 'What if my case costs more than quoted?', a: 'Fixed means fixed. If the scope changes — for example, a scrutiny expands to a second assessment year — we tell you first and agree the new fee in writing before doing the extra work.' }
	];

	let openFaq = $state(0);
</script>

<svelte:head>
	<title>Fees &amp; Pricing — MSY Law | Tax Lawyer Fees in India</title>
	<meta name="description" content="Clear fixed fees: income-tax notice & scrutiny from ₹9,999, tax demand & settlement from ₹14,999, ITR filing from ₹2,499, GST disputes with no win, no fee. Free 30-minute consultation." />
</svelte:head>

<PageHero
	eyebrow="Fees & Pricing"
	title="Clear fees. No surprises."
	subtitle="Every case starts with a free consultation and a written fixed-fee quote. You approve the price before we do any work — and fixed means fixed."
	crumb="Fees & Pricing"
/>

<section class="bg-white py-16 lg:py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-5 lg:px-8">
		<div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
			{#each plans as plan, i}
				<Reveal delay={(i % 3) * 90}>
					<article class="flex h-full flex-col rounded-3xl border border-black/5 bg-cream/50 p-7 transition hover:-translate-y-1 hover:shadow-xl">
						<h2 class="font-serif text-[22px] font-semibold">{plan.name}</h2>
						<p class="mt-3 font-serif text-[30px] leading-none font-bold text-navy">{plan.price}</p>
						<p class="mt-1.5 text-[13px] text-muted">{plan.per}</p>
						<ul class="mt-5 flex-1 space-y-2.5">
							{#each plan.items as item}
								<li class="flex items-start gap-2.5 text-[14px] leading-relaxed text-ink/85">
									<span class="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-leaf/20 text-leaf-dark"><Icon name="check" class="h-3 w-3" /></span>
									{item}
								</li>
							{/each}
						</ul>
						<a href="/free-consultation" class="mt-6 block rounded-full bg-navy py-3 text-center text-[14px] font-semibold text-white transition hover:bg-navy-3">Get a free quote</a>
					</article>
				</Reveal>
			{/each}
		</div>

		<Reveal class="mt-12">
			<div class="rounded-3xl bg-navy p-8 text-white sm:p-10">
				<div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
					<div>
						<h2 class="font-serif text-[24px] font-semibold">Always included, every matter</h2>
						<p class="mt-2 text-[14px] leading-relaxed text-white/75">These are not extras. They are how we work.</p>
					</div>
					<ul class="space-y-2.5 text-[14.5px] text-white/85 lg:col-span-2">
						<li class="flex items-start gap-2.5"><span class="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-leaf/25 text-leaf"><Icon name="check" class="h-3 w-3" /></span>Free 30-minute consultation with a lawyer — not a sales rep</li>
						<li class="flex items-start gap-2.5"><span class="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-leaf/25 text-leaf"><Icon name="check" class="h-3 w-3" /></span>Written fixed-fee quote before any work starts</li>
						<li class="flex items-start gap-2.5"><span class="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-leaf/25 text-leaf"><Icon name="check" class="h-3 w-3" /></span>Weekly updates and a named lawyer you can call directly</li>
						<li class="flex items-start gap-2.5"><span class="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-leaf/25 text-leaf"><Icon name="check" class="h-3 w-3" /></span>Interest-free monthly payment plans on most matters</li>
						<li class="flex items-start gap-2.5"><span class="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-leaf/25 text-leaf"><Icon name="check" class="h-3 w-3" /></span>No hidden charges — if the scope changes, we agree the new fee first</li>
					</ul>
				</div>
			</div>
		</Reveal>

		<Reveal class="mx-auto mt-14 max-w-3xl">
			<h2 class="text-center font-serif text-[28px] font-semibold">Questions about fees?</h2>
			<div class="mt-6 space-y-3">
				{#each faqs as faq, i}
					<div class="overflow-hidden rounded-2xl border border-black/5 bg-cream/50 transition {openFaq === i ? 'bg-white shadow-md' : ''}">
						<button onclick={() => (openFaq = openFaq === i ? -1 : i)} aria-expanded={openFaq === i} aria-controls="fees-faq-{i}" class="flex w-full items-center justify-between gap-4 px-5 py-4 text-left">
							<span class="text-[15px] font-bold">{faq.q}</span>
							<span class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-navy text-lg text-white transition-transform duration-300 {openFaq === i ? 'rotate-45' : ''}" aria-hidden="true">+</span>
						</button>
						<div id="fees-faq-{i}" class="grid transition-all duration-500 ease-in-out {openFaq === i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}">
							<div class="overflow-hidden">
								<p class="px-5 pb-5 text-[14.5px] leading-relaxed text-muted">{faq.a}</p>
							</div>
						</div>
					</div>
				{/each}
			</div>
			<p class="mt-6 text-center text-[14px] text-muted">Prices are typical starting points for straightforward matters, exclusive of GST. Your exact quote depends on your situation — and it is free to find out.</p>
		</Reveal>
	</div>
</section>

<CtaBanner />
