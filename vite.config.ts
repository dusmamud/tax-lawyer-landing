import adapter from '@sveltejs/adapter-static';
import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		tailwindcss(),
		sveltekit({
			// Inline the app CSS (< 100 KB raw) into a <style> block in each
			// page's HTML, removing the render-blocking stylesheet request.
			// Threshold compares the raw on-disk size in UTF-16 code units,
			// not the compressed transfer size: the built main CSS is
			// ~64 KB raw (11.3 KiB transferred), so 100000 covers it with
			// headroom. Trade-off per SvelteKit docs: larger HTML per page
			// and less effective CSS caching — accepted, since the CSS is
			// a single small file and every page needs it.
			inlineStyleThreshold: 100000,
			compilerOptions: {
				runes: ({ filename }) =>
					filename.split(/[/\\]/).includes('node_modules') ? undefined : true
			},
			adapter: adapter({
				pages: 'build',
				assets: 'build',
				fallback: '404.html',
				precompress: false,
				strict: true
			})
		})
	]
});
