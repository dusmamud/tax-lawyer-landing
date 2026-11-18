<script lang="ts">
	import { onMount } from 'svelte';
	import PageHero from '#lib/components/PageHero.svelte';
	import Reveal from '#lib/components/Reveal.svelte';
	import ConsultationForm from '#lib/components/ConsultationForm.svelte';
	import Icon from '#lib/components/Icon.svelte';

	const SLOT_KEY = 'msy-consultation-slot';
	const SLOTS = ['10:00 AM', '11:00 AM', '12:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM'];
	const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
	const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

	type DayOpt = { iso: string; weekday: string; label: string };

	// Dates are built on the client so the prerendered page never bakes in
	// build-time dates. The firm is closed on Sundays, so Sundays are skipped.
	let days = $state<DayOpt[]>([]);
	let selectedDate = $state('');
	let selectedSlot = $state('');

	let selectedDay = $derived(days.find((d) => d.iso === selectedDate));
	let bookingLabel = $derived(
		selectedDay && selectedSlot ? `${selectedDay.label} at ${selectedSlot}` : ''
	);

	function saveSlot() {
		try {
			if (selectedDay || selectedSlot) {
				localStorage.setItem(
					SLOT_KEY,
					JSON.stringify({ date: selectedDate, label: selectedDay?.label ?? '', slot: selectedSlot })
				);
			} else {
				localStorage.removeItem(SLOT_KEY);
			}
		} catch {
			// Private browsing etc. — the picker still works in-memory.
		}
	}

	function pickDate(iso: string) {
		selectedDate = iso;
		saveSlot();
	}

	function pickSlot(slot: string) {
		selectedSlot = slot;
		saveSlot();
	}

	function clearSlot() {
		selectedDate = '';
		selectedSlot = '';
		saveSlot();
	}

	onMount(() => {
		const list: DayOpt[] = [];
		const d = new Date();
		while (list.length < 14) {
			if (d.getDay() !== 0) {
				list.push({
					iso: d.toISOString().slice(0, 10),
					weekday: WEEKDAYS[d.getDay()],
					label: `${WEEKDAYS[d.getDay()]} ${d.getDate()} ${MONTHS[d.getMonth()]}`
				});
			}
			d.setDate(d.getDate() + 1);
		}
		days = list;
		try {
			const saved = JSON.parse(localStorage.getItem(SLOT_KEY) ?? 'null') as {
				date: string;
				slot: string;
			} | null;
			if (saved?.date && list.some((x) => x.iso === saved.date)) selectedDate = saved.date;
			if (saved?.slot && SLOTS.includes(saved.slot)) selectedSlot = saved.slot;
		} catch {
			// Ignore a corrupt saved slot.
		}
	});

	const steps = [
		{ n: '01', title: 'Tell us what happened', text: 'Fill the form in your own words — 2 minutes. No legal language needed.' },
		{ n: '02', title: 'We call you back', text: 'A lawyer calls within one business day to schedule your free 30-minute consultation.' },
		{ n: '03', title: 'Leave with a plan', text: 'You get an honest assessment, a written plan and a fixed-fee quote. Hire us or not — the plan is yours.' }
	];

	const promises = [
		'Free — no charge, no obligation, no card required',
		'Confidential — lawyer–client privilege from the first call',
		'Honest — if we cannot help, we will tell you and point you to someone who can',
		'Fast — replies within one business day, usually same day'
	];
</script>


<PageHero
	eyebrow="Free Consultation"
	title="Book your free 30-minute consultation"
	subtitle="The fastest way to stop worrying about a tax problem is to understand it. In 30 minutes, a lawyer will tell you where you stand — and what to do next."
	crumb="Free Consultation"
/>

<section class="bg-white py-16 lg:py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-5 lg:px-8">
		<div class="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-14">
			<div>
				<Reveal>
					<h2 class="font-serif text-[28px] leading-tight font-semibold text-ink sm:text-[34px]">How it works</h2>
					<div class="mt-8 space-y-6">
						{#each steps as step}
							<div class="flex gap-4">
								<span class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-navy font-serif text-[17px] font-bold text-white">{step.n}</span>
								<div>
									<h3 class="font-serif text-[19px] font-semibold">{step.title}</h3>
									<p class="mt-1 text-[14.5px] leading-relaxed text-muted">{step.text}</p>
								</div>
							</div>
						{/each}
					</div>
				</Reveal>

				<Reveal delay={120}>
					<div class="mt-10 rounded-2xl bg-cream/70 p-6">
						<h3 class="font-serif text-[20px] font-semibold">Our promise to you</h3>
						<ul class="mt-4 space-y-3">
							{#each promises as promise}
								<li class="flex items-start gap-3 text-[14.5px] font-medium">
									<span class="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-leaf/20 text-leaf-dark"><Icon name="check" class="h-3 w-3" /></span>
									{promise}
								</li>
							{/each}
						</ul>
						<p class="mt-5 border-t border-black/5 pt-4 text-[13.5px] text-muted">
							Prefer to talk first? Call <a href="tel:+919811012345" class="font-bold text-navy">+91 98110 12345</a>, Mon–Sat 10 AM – 7 PM IST.
						</p>
					</div>
				</Reveal>
			</div>

			<Reveal delay={100}>
				<div class="mb-6 rounded-3xl border border-black/5 bg-cream/50 p-6 shadow-sm sm:p-7">
					<div class="flex flex-wrap items-start justify-between gap-2">
						<div>
							<h2 class="font-serif text-[21px] font-semibold">Pick a date &amp; time</h2>
							<p class="mt-1 text-[13.5px] text-muted">Optional — the form below works without a slot too. We are open Mon–Sat, 10 AM – 7 PM IST, closed on Sundays.</p>
						</div>
						{#if selectedDate || selectedSlot}
							<button onclick={clearSlot} class="min-h-11 shrink-0 rounded-full border border-navy/20 bg-white px-4 py-2.5 text-[13px] font-semibold text-navy transition hover:bg-cream-2">Clear</button>
						{/if}
					</div>

					<p class="mt-5 mb-2 text-[13px] font-bold">Pick a date</p>
					{#if days.length === 0}
						<p class="text-[13.5px] text-muted">Loading available dates…</p>
					{:else}
						<div class="no-scrollbar -mx-1 flex gap-2 overflow-x-auto px-1 pb-1" role="group" aria-label="Pick a consultation date">
							{#each days as day}
								<button
									onclick={() => pickDate(day.iso)}
									aria-pressed={selectedDate === day.iso}
									class="flex min-h-16 w-16 shrink-0 flex-col items-center justify-center rounded-2xl border py-2 transition {selectedDate === day.iso
										? 'border-navy bg-navy text-white shadow-md'
										: 'border-navy/15 bg-white text-ink hover:border-navy/40'}"
								>
									<span class="text-[11px] font-bold tracking-wide uppercase {selectedDate === day.iso ? 'text-white/75' : 'text-muted'}">{day.weekday}</span>
									<span class="mt-0.5 font-serif text-[17px] leading-none font-bold">{day.label.split(' ')[1]} {day.label.split(' ')[2]}</span>
								</button>
							{/each}
						</div>
					{/if}

					<p class="mt-5 mb-2 text-[13px] font-bold">Pick a time</p>
					<div class="grid grid-cols-4 gap-2" role="group" aria-label="Pick a consultation time">
						{#each SLOTS as slot}
							<button
								onclick={() => pickSlot(slot)}
								aria-pressed={selectedSlot === slot}
								class="flex min-h-11 items-center justify-center rounded-xl border px-1 py-2.5 text-[13px] font-semibold transition {selectedSlot === slot
									? 'border-navy bg-navy text-white shadow-md'
									: 'border-navy/15 bg-white text-navy hover:border-navy/40'}"
							>
								{slot}
							</button>
						{/each}
					</div>

					{#if bookingLabel}
						<p class="mt-5 rounded-xl bg-leaf/15 px-4 py-3 text-[14px] font-semibold text-navy-3" role="status">
							Your slot: {bookingLabel} — submit the form below and we will confirm this slot by email.
						</p>
					{:else if selectedDate}
						<p class="mt-5 rounded-xl bg-cream px-4 py-3 text-[14px] text-muted" role="status">
							Date picked: {selectedDay?.label} — now pick a time above.
						</p>
					{:else}
						<p class="mt-5 rounded-xl bg-cream px-4 py-3 text-[14px] text-muted">
							No slot picked yet — submit the form below and we will offer you the next available time.
						</p>
					{/if}
					<p class="mt-3 text-[12px] text-muted">Your picked slot is saved on this device, so it is still here if you come back later.</p>
				</div>
				<ConsultationForm bookingSlot={bookingLabel} />
			</Reveal>
		</div>
	</div>
</section>

<style>
	.no-scrollbar {
		scrollbar-width: none;
	}
	.no-scrollbar::-webkit-scrollbar {
		display: none;
	}
</style>
