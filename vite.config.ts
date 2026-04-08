import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      onwarn(warning, defaultHandler) {
        if (warning.code === 'MISSING_EXPORT') throw new Error(warning.message)
        defaultHandler(warning)
      },
    },
  },
  server: {
    host: true,
    port: parseInt(process.env.PORT || '3001', 10),
  },
})
