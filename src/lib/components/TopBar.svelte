<script>
	import Icon from '#lib/components/Icon.svelte';
</script>

<div class="hidden bg-navy-3 text-white md:block">
	<div
		class="mx-auto flex max-w-7xl items-center justify-between px-5 py-2 text-[12.5px] lg:px-8"
	>
		<div class="flex items-center gap-6">
			<a href="tel:+18005550199" class="flex items-center gap-2 text-white/85 hover:text-white">
				<Icon name="phone" class="h-3.5 w-3.5" /> +1 (800) 555-0199
			</a>
			<a
				href="mailto:hello@msylaw.com"
				class="flex items-center gap-2 text-white/85 hover:text-white"
			>
				<Icon name="mail" class="h-3.5 w-3.5" /> hello@msylaw.com
			</a>
		</div>
		<div class="flex items-center gap-5">
			<span class="text-white/70">Mon–Fri · 9:00 AM – 6:00 PM</span>
			<span class="flex items-center gap-1.5 rounded-full bg-leaf/20 px-3 py-1 font-semibold text-leaf-2">
				<span class="h-2 w-2 rounded-full bg-leaf-2"></span> Free 30-min consultation
			</span>
		</div>
	</div>
</div>
