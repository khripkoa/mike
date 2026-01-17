import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
    site: 'https://mike-handyman.com',
    output: 'static',
    trailingSlash: 'always',
    experimental: {
        clientPrerender: true, // Prerender pages on client
    },
    build: {
        assets: '_assets',
        inlineStylesheets: 'auto',
        split: true, // Enable code splitting for better caching
    },
    image: {
        service: {
            entrypoint: 'astro/assets/services/sharp',
            config: {
                limitInputPixels: 268402689 // ~16K x 16K max
            }
        },
    },
    integrations: [
        sitemap({
            serialize(item) {
                return item;
            },
        })
    ],
    vite: {
        build: {
            cssMinify: true,
            minify: 'terser',
            terserOptions: {
                compress: {
                    drop_console: true, // Remove console.logs in production
                    drop_debugger: true,
                }
            },
            rollupOptions: {
                output: {
                    manualChunks: {
                        // Split vendor code for better caching
                        'vendor': ['astro'],
                    }
                }
            }
        },
    },
    prefetch: {
        prefetchAll: true,
        defaultStrategy: 'viewport', // Prefetch links when they enter viewport
    },
});
