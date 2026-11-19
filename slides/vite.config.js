import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';

export default defineConfig({
  root: fileURLToPath(new URL('.', import.meta.url)),
  base: './',
  appType: 'mpa',
  server: {
    port: Number(process.env.PORT ?? '5173'),
    strictPort: true,
    fs: {
      allow: ['.']
    }
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rolldownOptions: {
      input: {
        index: fileURLToPath(new URL('./index.html', import.meta.url)),
        agents: fileURLToPath(new URL('./agents/index.html', import.meta.url)),
        codingAgentMap: fileURLToPath(new URL('./coding-agent-map/index.html', import.meta.url)),
        templates: fileURLToPath(new URL('./templates/index.html', import.meta.url))
      }
    }
  }
});
