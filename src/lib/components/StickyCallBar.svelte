<script lang="ts">
	import Icon from '#lib/components/Icon.svelte';
</script>

<!-- Mobile-only sticky call bar: the two actions a stressed visitor needs,
	always within thumb reach. Hidden on desktop (lg+), where the header
	already shows them. -->
<div class="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-black/10 bg-white/95 px-3 pt-2 pb-[calc(0.5rem+env(safe-area-inset-bottom))] backdrop-blur lg:hidden">
	<a href="tel:+18005550199" class="flex items-center justify-center gap-2 rounded-full bg-navy py-3 text-[14px] font-bold text-white shadow-md">
		<Icon name="phone" class="h-4 w-4" /> Call now
	</a>
	<a href="/free-consultation" class="flex items-center justify-center gap-2 rounded-full bg-leaf py-3 text-[14px] font-bold text-navy-3 shadow-md">
		Free Consultation
	</a>
</div>
