<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import Reveal from '#lib/components/Reveal.svelte';
	import Picture from '#lib/components/Picture.svelte';
	import Icon from '#lib/components/Icon.svelte';
	import CtaBanner from '#lib/components/CtaBanner.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
	const post = $derived(data.post);
	const related = $derived(data.related);

	// Author name -> team profile slug (for the Article author url).
	const authorSlug: Record<string, string> = {
		'Ananya Rao': 'ananya-rao',
		'Mohan S. Yadav': 'mohan-s-yadav',
		'Sara Iyer': 'sara-iyer',
		'Arvind Kapoor': 'arvind-kapoor'
	};

	const articleSchema = $derived({
		'@context': 'https://schema.org',
		'@type': 'Article',
		headline: post.title,
		description: post.excerpt,
		// The author's photo (1600x1600 JPEG) is the article's image — the
		// page has no hero image. 1600px wide, 1:1 (an accepted ratio).
		image: `https://tax-lawyer-landing.pages.dev${post.authorImg.replace('.webp', '.jpg')}`,
		author: {
			'@type': 'Person',
			name: post.author,
			jobTitle: post.authorRole,
			url: `https://tax-lawyer-landing.pages.dev/team/${authorSlug[post.author] ?? 'mohan-s-yadav'}`
		},
		publisher: {
			'@type': 'Organization',
			name: 'MSY Law',
			url: 'https://tax-lawyer-landing.pages.dev/',
			logo: {
				'@type': 'ImageObject',
				url: 'https://tax-lawyer-landing.pages.dev/og-image.jpg',
				width: 1200,
				height: 630
			}
		},
		// Full ISO 8601 with timezone (was the display string "Nov 14, 2026",
		// which the validator flagged as an invalid datetime).
		datePublished: post.published,
		// Posts are never edited after publication, so modified = published.
		dateModified: post.published,
		mainEntityOfPage: `https://tax-lawyer-landing.pages.dev/blog/${post.slug}`
	});
</script>

<svelte:head>
	{@html `<script type="application/ld+json">${JSON.stringify(articleSchema)}</script>`}
</svelte:head>

<PageHero
	eyebrow={post.tag}
	title={post.title}
	subtitle={post.excerpt}
	crumb="Blog"
/>

<article class="bg-white py-14 lg:py-20">
	<div class="mx-auto max-w-3xl px-4 sm:px-5">
		<Reveal>
			<div class="flex flex-wrap items-center gap-4 border-b border-black/5 pb-6">
				<Picture src={post.authorImg} alt={post.author} class="h-13 w-13 rounded-full object-cover object-top ring-2 ring-cream" sizes="52px" />
				<div>
					<p class="text-[15px] font-bold">{post.author}</p>
					<p class="text-[13px] text-muted">{post.authorRole}</p>
				</div>
				<span class="ml-auto text-[13px] font-medium text-muted">{post.date} · {post.read}</span>
			</div>
		</Reveal>

		{#each post.sections as section, i}
			<Reveal delay={Math.min(i * 40, 120)}>
				{#if section.heading}
					<h2 class="mt-10 font-serif text-[26px] leading-tight font-semibold text-ink sm:text-[30px]">{section.heading}</h2>
				{/if}
				{#each section.paragraphs as para}
					<p class="mt-4 text-[16px] leading-relaxed text-ink/85">{para}</p>
				{/each}
				{#if section.list}
					<ul class="mt-4 space-y-2.5">
						{#each section.list as item}
							<li class="flex items-start gap-3 rounded-xl bg-cream/60 px-4 py-3 text-[15px] font-medium">
								<span class="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-leaf/20 text-leaf-dark"><Icon name="check" class="h-3 w-3" /></span>
								{item}
							</li>
						{/each}
					</ul>
				{/if}
			</Reveal>
		{/each}

		<Reveal>
			<div class="mt-12 rounded-2xl bg-navy p-7 text-white">
				<h2 class="font-serif text-[22px] font-semibold">Dealing with this exact issue?</h2>
				<p class="mt-2 text-[14px] leading-relaxed text-white/75">Do not guess — ask an attorney. Your first 30-minute consultation is free, and you will leave with a clear plan.</p>
				<a href="/free-consultation" class="mt-5 inline-block rounded-full bg-leaf px-6 py-3 text-[14px] font-bold text-navy-3 transition hover:bg-leaf-2">Book a free consultation</a>
			</div>
		</Reveal>
	</div>
</article>

<section class="bg-cream py-14 lg:py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-5 lg:px-8">
		<Reveal>
			<h2 class="font-serif text-[28px] font-semibold text-ink sm:text-[32px]">More from the blog</h2>
		</Reveal>
		<div class="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
			{#each related as rel}
				<Reveal>
					<a href="/blog/{rel.slug}" class="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
						<div class="relative flex h-36 items-end bg-gradient-to-br {rel.grad} p-5">
							<span class="rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold text-navy">{rel.tag}</span>
						</div>
						<div class="flex flex-1 flex-col p-6">
							<p class="text-[12.5px] font-medium text-muted">{rel.date} · {rel.read}</p>
							<h3 class="mt-2 font-serif text-[20px] leading-snug font-semibold transition group-hover:text-navy">{rel.title}</h3>
							<p class="mt-2 flex-1 text-[14px] leading-relaxed text-muted">{rel.excerpt}</p>
							<span class="mt-4 text-[13px] font-bold text-navy">Read article <Icon name="arrow-right" class="inline h-3.5 w-3.5" /></span>
						</div>
					</a>
				</Reveal>
			{/each}
		</div>
	</div>
</section>

<CtaBanner />
