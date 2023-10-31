import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  host: 'http://192.168.1.75:3000/',
  plugins: [react()],
})
