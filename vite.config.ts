import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: process.env.PORT ? parseInt(process.env.PORT) : 5173,
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // React core — loads first, cached long-term
          'vendor-react': ['react', 'react-dom'],
          // Animation library — large, load separately
          'vendor-motion': ['framer-motion'],
        },
      },
    },
  },
})
