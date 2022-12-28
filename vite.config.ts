import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    VitePWA({ registerType: 'autoUpdate',
              manifest: {
				"name": "Noot Notes | Note taking app",
				"short_name": "Noot Notes",
				"start_url": "/",
				"display": "standalone",
				"description": "Note taking application in the style of a cute penguin",
				"lang": "en",
				"dir": "ltr",
				"theme_color": "#000000",
				"background_color": "#ffffff",
				"orientation": "any",
				"icons": [
				  {
					"src": "https://imgur.com/lDjNKXB",
					"sizes": "192x192",
					"type": "image/png",
					"purpose": "any"
				  },
				  {
					"src": "https://imgur.com/lDjNKXB",
					"sizes": "192x192",
					"type": "image/png",
					"purpose": "maskable"
				  },
				  {
					"src": "https://imgur.com/KrNaOMv",
					"sizes": "512x512",
					"type": "image/png",
					"purpose": "any"
				  },
				  {
					"src": "https://imgur.com/KrNaOMv",
					"sizes": "512x512",
					"type": "image/png",
					"purpose": "maskable"
				  }
				],
				"screenshots": [
				  {
					"src": "https://imgur.com/inPh3zG.png",
					"sizes": "1919x960",
					"type": "image/png",
					"description": "Noot Notes on a computer screen"
				  }
				],
				"related_applications": [
				  {
					"platform": "windows",
					"url": " The URL to your app in that app store"
				  }
				],
				"prefer_related_applications": "false",
				"shortcuts": [
				  {
					"name": "The name you would like to be displayed for your shortcut",
					"url": "The url you would like to open when the user chooses this shortcut. This must be a URL local to your PWA. For example: If my start_url is /, this URL must be something like /shortcut",
					"description": "A description of the functionality of this shortcut"
				  }
				]
			  } })
  ],
})
