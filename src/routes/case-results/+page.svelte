<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import Reveal from '#lib/components/Reveal.svelte';
	import CtaBanner from '#lib/components/CtaBanner.svelte';

	const cases = [
		{
			kind: 'Income Tax Appeal',
			amount: '₹4.2 Cr penalty deleted',
			title: 'ITAT Delhi deletes ₹4.2 Cr penalty after search assessment',
			situation: 'A real estate developer faced a search assessment that added crores of unexplained income and a penalty of ₹4.2 Cr under section 270A — enough to sink the business.',
			action: 'We challenged every addition before the Commissioner (Appeals) and then the ITAT, showing that the additions rested on loose sheets and statements recorded under pressure, with no corroborating evidence.',
			outcome: 'The ITAT deleted the additions and the entire ₹4.2 Cr penalty with them. The business kept all its projects running, and the department did not appeal further.',
			time: '11 months'
		},
		{
			kind: 'GST Dispute',
			amount: '₹86 lakh refund recovered',
			title: '₹86 lakh of blocked input tax credit refunded',
			situation: 'An e-commerce seller’s input tax credit of ₹86 lakh was blocked after a mismatch between GSTR-1 and GSTR-3B — and the refund for the same period was withheld too.',
			action: 'We reconciled two years of returns, matched every invoice to the suppliers’ filings, and replied to the show-cause notice with a clean, documented reconciliation.',
			outcome: 'The credit was unblocked and the full ₹86 lakh refunded with interest. The seller’s working capital was restored and filings have been clean ever since.',
			time: '6 months'
		},
		{
			kind: 'Settlement',
			amount: '₹1.68 Cr saved',
			title: '₹1.8 Cr disputed demand settled for ₹12 lakh',
			situation: 'A family business carried a disputed income tax demand of ₹1.8 Cr through three levels of appeal. Interest kept growing, and the open demand was blocking a bank loan the business needed.',
			action: 'We assessed the appeal honestly — the addition was likely to survive — and applied under Vivad se Vishwas, settling the demand for ₹12 lakh and closing the case.',
			outcome: 'The demand closed, the interest clock stopped, and the loan was sanctioned within a month. The saving against the full demand was ₹1.68 Cr.',
			time: '4 months'
		},
		{
			kind: 'Transfer Pricing',
			amount: '₹2.6 Cr addition deleted',
			title: 'Transfer pricing addition of ₹2.6 Cr deleted at ITAT',
			situation: 'A software services company faced a transfer pricing adjustment of ₹2.6 Cr on its international transactions with its parent company, based on a benchmarking study the department had run.',
			action: 'We rebuilt the benchmarking with the correct comparables, showed that the department’s set included companies that were not comparable at all, and argued the matter before the ITAT.',
			outcome: 'The ITAT deleted the entire ₹2.6 Cr addition. The company’s pricing method was accepted, and it has not faced an adjustment since.',
			time: '14 months'
		},
		{
			kind: 'Search & Seizure',
			amount: 'No prosecution',
			title: 'Search & seizure case closed with no prosecution',
			situation: 'A business owner’s premises were searched and several years of unfiled returns came to light. A prosecution could have meant imprisonment and the loss of his professional licence.',
			action: 'We made a full voluntary disclosure before any prosecution was considered, filed all missing returns with payment arrangements, and cooperated with the investigation team at every step.',
			outcome: 'The matter was resolved civilly with no prosecution. The licence was saved, and the client now files on time with our quarterly planning.',
			time: '9 months'
		},
		{
			kind: 'Scrutiny Assessment',
			amount: '₹55 lakh reduced',
			title: 'Scrutiny additions of ₹58 lakh cut to ₹3 lakh',
			situation: 'A salaried professional was picked for scrutiny after a high-value property purchase. The assessing officer added ₹58 lakh of unexplained investment and proposed a penalty on top.',
			action: 'We traced every rupee of the purchase to salary, a home loan and family gifts — with bank statements, loan sanction letters and gift deeds — and replied to the notice with the full trail documented.',
			outcome: 'The additions fell from ₹58 lakh to ₹3 lakh, and the penalty was dropped entirely. The client paid a fraction of the original proposal and kept a clean record.',
			time: '5 months'
		}
	];

	const kinds = ['All', ...Array.from(new Set(cases.map((c) => c.kind)))];
	let activeKind = $state('All');
	let filtered = $derived(activeKind === 'All' ? cases : cases.filter((c) => c.kind === activeKind));
</script>

<svelte:head>
	<title>Case Results — MSY Law | Real Tax Case Outcomes</title>
	<meta name="description" content="Real MSY Law case results: ₹4.2 Cr penalty deleted at ITAT, ₹86 lakh GST refund recovered, ₹1.8 Cr demand settled for ₹12 lakh, search case closed with no prosecution." />
</svelte:head>

<PageHero
	eyebrow="Case Results"
	title="Results we can show, not just promise"
	subtitle="Six real cases, with the situation, what we did, and the outcome. Names and details are changed to protect client privacy — the numbers are real."
	crumb="Case Results"
/>

<section class="bg-white py-16 lg:py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-5 lg:px-8">
		<Reveal>
			<div class="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:px-0" role="group" aria-label="Filter case results by practice area">
				{#each kinds as kind}
					<button
						onclick={() => (activeKind = kind)}
						aria-pressed={activeKind === kind}
						class="min-h-11 shrink-0 rounded-full border px-4 py-2.5 text-[13.5px] font-semibold whitespace-nowrap transition {activeKind === kind
							? 'border-navy bg-navy text-white shadow-md'
							: 'border-navy/20 bg-white text-navy hover:bg-cream-2'}"
					>
						{kind}
					</button>
				{/each}
			</div>
			<p class="mt-3 text-[13.5px] text-muted">
				Showing {filtered.length} of {cases.length} cases{activeKind !== 'All' ? ` in “${activeKind}”` : ''}.
			</p>
		</Reveal>
		<div class="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
			{#each filtered as item, i}
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

<style>
	.no-scrollbar {
		scrollbar-width: none;
	}
	.no-scrollbar::-webkit-scrollbar {
		display: none;
	}
</style>
