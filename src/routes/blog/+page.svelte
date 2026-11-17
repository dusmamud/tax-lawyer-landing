<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import Reveal from '#lib/components/Reveal.svelte';
	import Picture from '#lib/components/Picture.svelte';
	import Icon from '#lib/components/Icon.svelte';
	import CtaBanner from '#lib/components/CtaBanner.svelte';
	import { posts } from '../../lib/data/posts';

	const tags = ['All', ...Array.from(new Set(posts.map((p) => p.tag)))];
	let activeTag = $state('All');
	let filtered = $derived(activeTag === 'All' ? posts : posts.filter((p) => p.tag === activeTag));
</script>

<svelte:head>
	<title>Blog — MSY Law | Tax Insights in Plain English</title>
	<meta name="description" content="Tax insights in plain English: income tax notices, ITR deadlines, GST, advance tax, NRI taxation and more — written by MSY Law attorneys." />
</svelte:head>

<PageHero
	eyebrow="Our Blog"
	title="Tax insights, in plain English"
	subtitle="No jargon, no scare tactics — just what the law actually says, and what it means for you. Written by the attorneys who handle these cases every day."
	crumb="Blog"
/>

<section class="bg-cream py-16 lg:py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-5 lg:px-8">
		<Reveal>
			<div class="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:px-0" role="group" aria-label="Filter articles by topic">
				{#each tags as tag}
					<button
						onclick={() => (activeTag = tag)}
						aria-pressed={activeTag === tag}
						class="min-h-11 shrink-0 rounded-full border px-4 py-2.5 text-[13.5px] font-semibold whitespace-nowrap transition {activeTag === tag
							? 'border-navy bg-navy text-white shadow-md'
							: 'border-navy/20 bg-white text-navy hover:bg-cream-2'}"
					>
						{tag}
					</button>
				{/each}
			</div>
			<p class="mt-3 text-[13.5px] text-muted">
				Showing {filtered.length} of {posts.length} articles{activeTag !== 'All' ? ` in “${activeTag}”` : ''}.
			</p>
		</Reveal>
		<div class="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
			{#each filtered as post, i}
				<Reveal delay={(i % 3) * 90}>
					<a href="/blog/{post.slug}" class="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition duration-300 hover:-translate-y-1.5 hover:shadow-xl">
						<div class="relative flex h-44 items-end bg-gradient-to-br {post.grad} p-5">
							<span class="rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold text-navy">{post.tag}</span>
							<span class="absolute top-4 right-4 font-serif text-5xl text-white/20" aria-hidden="true">§</span>
						</div>
						<div class="flex flex-1 flex-col p-6">
							<p class="text-[12.5px] font-medium text-muted">{post.date} · {post.read}</p>
							<h2 class="mt-2 font-serif text-[21px] leading-snug font-semibold transition group-hover:text-navy">{post.title}</h2>
							<p class="mt-2 flex-1 text-[14px] leading-relaxed text-muted">{post.excerpt}</p>
							<span class="mt-4 flex items-center gap-3">
								<Picture src={post.authorImg} alt={post.author} class="h-9 w-9 rounded-full object-cover object-top" />
								<span class="text-[13px] font-semibold">{post.author}</span>
							</span>
							<span class="mt-4 text-[13px] font-bold text-navy">Read article <Icon name="arrow-right" class="inline h-3.5 w-3.5 transition-transform group-hover:translate-x-1" /></span>
						</div>
					</a>
				</Reveal>
			{/each}
		</div>
		<Reveal class="mt-12 rounded-2xl bg-navy p-7 text-white sm:p-8">
			<div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
				<div>
					<h2 class="font-serif text-[24px] font-semibold">Have a tax question the blog does not answer?</h2>
					<p class="mt-1 text-[14px] text-white/75">Ask an attorney directly — the first 30 minutes are free.</p>
				</div>
				<a href="/resources" class="shrink-0 rounded-full border border-white/30 px-6 py-3 text-center text-[14px] font-semibold text-white transition hover:bg-white/10">Browse free resources</a>
				<a href="/free-consultation" class="shrink-0 rounded-full bg-leaf px-6 py-3 text-center text-[14px] font-bold text-navy-3 transition hover:bg-leaf-2">Ask for free</a>
			</div>
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
