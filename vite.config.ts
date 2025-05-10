import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
import RubyPlugin from 'vite-plugin-ruby'

export default defineConfig({
  plugins: [
    react({
      include: 'app/javascript/**/*.tsx',
    }),
    tailwindcss(),
    RubyPlugin(),
  ],
  server: {
    watch: {
      usePolling: true
    },
  },
})
