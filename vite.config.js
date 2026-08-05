import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    // Plotly's indicator trace is not available in its smaller basic bundle.
    chunkSizeWarningLimit: 5_500,
  },
  css: {
    preprocessorOptions: {
      scss: {
        quietDeps: true,
      },
    },
  },
});
