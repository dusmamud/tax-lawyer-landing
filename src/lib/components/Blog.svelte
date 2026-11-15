<script lang="ts">
	import Reveal from '#lib/components/Reveal.svelte';
	import Icon from '#lib/components/Icon.svelte';

	import { posts as postData } from '../data/posts';

	const posts = postData.map((p) => ({ slug: p.slug, tag: p.tag, date: p.date, read: p.read, title: p.title, text: p.excerpt, grad: p.grad }));
</script>

<section id="blog" class="bg-cream py-16 lg:py-24">
	<div class="mx-auto max-w-7xl px-4 sm:px-5 lg:px-8">
		<Reveal class="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
			<div>
				<span class="inline-block rounded-md bg-white px-3 py-1 text-[12px] font-semibold tracking-wide text-navy shadow-sm">Our Blog</span>
				<h2 class="mt-4 font-serif text-[32px] leading-tight font-semibold text-ink sm:text-[40px]">Tax insights, in plain English</h2>
			</div>
			<a href="/blog" class="text-[14px] font-bold text-navy underline underline-offset-4 hover:text-leaf-dark">View all articles <Icon name="arrow-right" class="ml-1 inline h-4 w-4 align-middle" /></a>
		</Reveal>

		<div class="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
			{#each posts as post, i}
				<Reveal delay={i * 90}>
					<a href="/blog/{post.slug}" class="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition duration-300 hover:-translate-y-1.5 hover:shadow-xl">
						<div class="relative flex h-44 items-end bg-gradient-to-br {post.grad} p-5">
							<span class="rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold text-navy">{post.tag}</span>
							<span class="absolute top-4 right-4 font-serif text-5xl text-white/20" aria-hidden="true">§</span>
						</div>
						<div class="flex flex-1 flex-col p-6">
							<p class="text-[12.5px] font-medium text-muted">{post.date} · {post.read}</p>
							<h3 class="mt-2 font-serif text-[21px] leading-snug font-semibold transition group-hover:text-navy">{post.title}</h3>
							<p class="mt-2 flex-1 text-[14px] leading-relaxed text-muted">{post.text}</p>
							<span class="mt-4 text-[13px] font-bold text-navy">Read article <Icon name="arrow-right" class="inline h-3.5 w-3.5 transition-transform group-hover:translate-x-1" /></span>
						</div>
					</a>
				</Reveal>
			{/each}
		</div>
	</div>
</section>
