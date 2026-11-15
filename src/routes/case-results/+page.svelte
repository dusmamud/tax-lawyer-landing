<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import Reveal from '#lib/components/Reveal.svelte';
	import CtaBanner from '#lib/components/CtaBanner.svelte';

	const cases = [
		{
			kind: 'IRS Debt Settlement',
			amount: '$2.4M saved',
			title: 'Family business: $3.1M IRS debt settled for $680k',
			situation: 'A second-generation manufacturing business fell behind on payroll taxes during a slow year. The IRS filed liens, levied the operating account, and threatened to shut the business down.',
			action: 'We negotiated a release of the levy within 72 hours, proved the business could not pay the full amount, and submitted an Offer in Compromise backed by a full financial disclosure.',
			outcome: 'The IRS accepted $680k — a $2.4M saving. The liens were released, the business kept all 42 employees, and it is still operating today.',
			time: '7 months'
		},
		{
			kind: 'Audit Defence',
			amount: '$860k penalties removed',
			title: 'Three-year audit ends with every penalty abated',
			situation: 'A freelance consultant was audited for three tax years. The examiner disallowed most business expenses and proposed $860k in tax and penalties.',
			action: 'We rebuilt the expense records from bank statements, calendars and contracts, and showed the examiner that the expenses were ordinary and necessary — with a penalty abatement request for reasonable cause.',
			outcome: 'All penalties removed and the tax reduced by 78%. The client paid a fraction of the original proposal and kept their business running throughout.',
			time: '5 months'
		},
		{
			kind: 'Estate Planning',
			amount: '$1.2M tax saved',
			title: 'Estate restructured before a major asset sale',
			situation: 'A couple planned to sell a commercial property they had owned for 30 years. Without planning, the sale would have triggered over $1.2M in combined estate and capital gains tax.',
			action: 'We restructured ownership through a family trust and a staged gifting plan, and timed the sale across two tax years to use available exemptions.',
			outcome: 'The family saved $1.2M in tax, the property sold on schedule, and the estate plan now protects the next generation automatically.',
			time: '3 months'
		},
		{
			kind: 'Criminal Tax',
			amount: 'No charges filed',
			title: 'IRS criminal investigation closed — no charges',
			situation: 'A business owner discovered the IRS Criminal Investigation division was looking into several years of unfiled returns. A conviction could have meant prison and the loss of his professional licence.',
			action: 'We made a voluntary disclosure before charges were considered, filed all missing returns with full payment arrangements, and negotiated directly with the investigation team.',
			outcome: 'The investigation was closed with no criminal charges. The matter was resolved civilly, the licence was saved, and the client now files on time with our quarterly planning.',
			time: '9 months'
		},
		{
			kind: 'State Tax',
			amount: '$372k reduced',
			title: 'Four-state sales tax assessment cut by 91%',
			situation: 'An e-commerce seller received sales tax assessments from four states at once, totalling $410k, for years when the company had no idea it owed tax in those states.',
			action: 'We proved the company had no nexus in two states, negotiated voluntary disclosure agreements in the other two, and got interest and penalties waived as a first-time filer.',
			outcome: 'The total assessment fell from $410k to $38k. The company is now registered and compliant in every state where it sells.',
			time: '6 months'
		},
		{
			kind: 'Property Tax',
			amount: '22% bill cut',
			title: 'Commercial property assessment reduced every year since',
			situation: 'A warehouse owner’s assessment rose 40% in a single year, adding $31,000 to the annual tax bill — even though comparable warehouses nearby were assessed far lower.',
			action: 'We filed a formal appeal with comparable sales, an independent appraisal, and a detailed valuation report, and represented the owner at the review board hearing.',
			outcome: 'The assessment was reduced by 22%, cutting the annual bill by $18,400 — and we now monitor the assessment every year so it never jumps like that again.',
			time: '4 months'
		}
	];
</script>

<svelte:head>
	<title>Case Results — MSY Law | Real Tax Case Outcomes</title>
	<meta name="description" content="Real MSY Law case results: $2.4M IRS debt settled, $860k penalties removed, $1.2M estate tax saved, criminal investigation closed with no charges." />
</svelte:head>

<PageHero
	eyebrow="Case Results"
	title="Results we can show, not just promise"
	subtitle="Six real cases, with the situation, what we did, and the outcome. Names and details are changed to protect client privacy — the numbers are real."
	crumb="Case Results"
/>

<section class="bg-white py-16 lg:py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-5 lg:px-8">
		<div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
			{#each cases as item, i}
				<Reveal delay={(i % 2) * 90}>
					<article class="flex h-full flex-col rounded-3xl border border-black/5 bg-cream/50 p-7 transition hover:-translate-y-1 hover:shadow-xl sm:p-8">
						<div class="flex flex-wrap items-center justify-between gap-3">
							<span class="rounded-full bg-navy px-3 py-1 text-[11px] font-bold tracking-wide text-white uppercase">{item.kind}</span>
							<span class="text-[12.5px] font-semibold text-muted">Resolved in {item.time}</span>
						</div>
						<p class="mt-5 font-serif text-4xl font-bold text-leaf-dark">{item.amount}</p>
						<h2 class="mt-2 font-serif text-[23px] leading-snug font-semibold">{item.title}</h2>
						<div class="mt-5 space-y-4 text-[14.5px] leading-relaxed">
							<p><strong class="text-navy">The situation:</strong> <span class="text-muted">{item.situation}</span></p>
							<p><strong class="text-navy">What we did:</strong> <span class="text-muted">{item.action}</span></p>
							<p><strong class="text-navy">The outcome:</strong> <span class="text-muted">{item.outcome}</span></p>
						</div>
					</article>
				</Reveal>
			{/each}
		</div>
		<Reveal class="mt-10">
			<p class="rounded-2xl bg-navy p-6 text-center text-[13.5px] leading-relaxed text-white/75">
				Past results do not guarantee similar outcomes. Every case depends on its own facts, the law, and the decisions of tax authorities and courts.
			</p>
		</Reveal>
	</div>
</section>

<CtaBanner />
