// Scroll-reveal action: adds .is-visible when the element enters the viewport.
// Usage: <div use:reveal={{ delay: 100 }}>…</div>
export function reveal(
	node: HTMLElement,
	options: { delay?: number; threshold?: number } = {}
) {
	const { delay = 0, threshold = 0.12 } = options;
	node.classList.add('reveal');
	if (delay) node.style.transitionDelay = `${delay}ms`;

	const io = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (entry.isIntersecting) {
					node.classList.add('is-visible');
					io.disconnect();
				}
			}
		},
		{ threshold, rootMargin: '0px 0px -40px 0px' }
	);
	io.observe(node);

	return {
		destroy() {
			io.disconnect();
		}
	};
}
