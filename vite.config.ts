/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
	server: {
		host: true,
		port: 5173,
		watch: {
			usePolling: true
		}
	},
	plugins: [react()],
	test: {
		globals: true,
		environment: "jsdom",
		setupFiles: "./setupTests.ts",
		css: true,
		reporters: ["verbose"],
		coverage: {
			reporter: ['text', 'json', 'html'],
			include: ['src/**/*'],
			exclude: [],
		}
	}
})
