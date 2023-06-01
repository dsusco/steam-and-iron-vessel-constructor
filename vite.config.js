import baseline from 'baseline-scss';
import fs from 'fs'
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const packageJSON = JSON.parse(fs.readFileSync('./package.json'))

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: "@import '_baseline';@import '@/assets/mixins.scss';",
        includePaths: [...baseline.includePaths],
      }
    }
  },
  define: {
    appVersion: JSON.stringify(packageJSON.version)
  }
})
