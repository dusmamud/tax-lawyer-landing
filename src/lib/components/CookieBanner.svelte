<script lang="ts">
	// Cookie consent banner (demo): choice is stored in localStorage.
	// No non-essential cookies are set by this site today; if analytics or
	// chat cookies are added later, gate them behind this consent.
	let visible = $state(false);

	$effect(() => {
		try {
			visible = localStorage.getItem('msy-cookie-consent') === null;
		} catch {
			visible = true;
		}
	});

	function choose(value: 'accepted' | 'declined') {
		try {
			localStorage.setItem('msy-cookie-consent', value);
		} catch {
			// storage unavailable — banner just hides for this visit
		}
		visible = false;
	}
</script>

{#if visible}
	<div class="pointer-events-none animate-fade-up fixed inset-x-0 bottom-0 z-[70] px-4 pb-4 sm:px-6 sm:pb-5">
		<div class="pointer-events-auto mx-auto flex max-w-3xl flex-col gap-4 rounded-3xl bg-navy-3 p-5 text-white shadow-2xl sm:flex-row sm:items-center sm:gap-6 sm:p-6">
			<p class="flex-1 text-[13.5px] leading-relaxed text-white/85">
				We use cookies to make this site work and to understand which pages are most useful.
				Read our <a href="/cookie-policy" class="font-semibold text-white underline underline-offset-2">Cookie Policy</a>.
			</p>
			<div class="flex shrink-0 gap-2">
				<button onclick={() => choose('declined')} class="rounded-full border border-white/30 px-5 py-2.5 text-[13px] font-semibold text-white transition hover:bg-white/10">Decline</button>
				<button onclick={() => choose('accepted')} class="rounded-full bg-leaf px-5 py-2.5 text-[13px] font-bold text-navy-3 transition hover:bg-leaf-2">Accept cookies</button>
			</div>
		</div>
	</div>
{/if}
