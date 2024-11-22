/// <reference types="vite/client" />

import { defineConfig } from "vite";
import autoprefixer from "autoprefixer";
import { resolve } from "node:path";
import tailwindcss from "tailwindcss";

export default defineConfig({
	root: "./src",
	css: {
		postcss: {
			plugins: [autoprefixer(), tailwindcss()],
		},
	},
	build: {
		outDir: "../dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        agence: resolve(__dirname, 'src/pages/agence.html'),
        contact: resolve(__dirname, 'src/pages/contact.html'),
        confidential: resolve(__dirname, 'src/pages/confidential.html'),
        mention: resolve(__dirname, 'src/pages/mentions-legales.html'),
        services: resolve(__dirname, 'src/pages/services.html'),
			},
		},
	},
});