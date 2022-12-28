import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    VitePWA({ registerType: 'autoUpdate',
              manifest: {
				name: "Noot Notes | Note taking app",
				short_name: "Noot Notes",
				start_url: "/",
				display: "minimal-ui",
				description: "Note taking application in the style of a cute penguin",
				lang: "en",
				dir: "ltr",
				theme_color: "#000000",
				background_color: "#ffffff",
				orientation: "any",
				icons: [
				  {
					src: "https://imgur.com/lDjNKXB.png",
					sizes: "192x192",
					type: "image/png",
					purpose: "any"
				  },
				  {
					src: "https://imgur.com/lDjNKXB.png",
					sizes: "192x192",
					type: "image/png",
					purpose: "maskable"
				  },
				  {
					src: "https://imgur.com/KrNaOMv.png",
					sizes: "512x512",
					type: "image/png",
					purpose: "any"
				  },
				  {
					src: "https://imgur.com/KrNaOMv.png",
					sizes: "512x512",
					type: "image/png",
					purpose: "maskable"
				  },
				],
				prefer_related_applications: true
			  }
			})
	],
})
