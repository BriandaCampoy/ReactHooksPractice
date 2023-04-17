import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve:{
    alias:{
      '@components':path.resolve(__dirname, './src/components'),
      '@containers':path.resolve(__dirname, './src/containers'),
      '@hooks':path.resolve(__dirname, './src/hooks'),
      '@context':path.resolve(__dirname, './src/context'),
      '@styles':path.resolve(__dirname, './src/styles'),
    },
  },
})
