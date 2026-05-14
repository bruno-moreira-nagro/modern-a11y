import { appTools, defineConfig } from '@modern-js/app-tools';

// https://modernjs.dev/en/configure/app/usage
export default defineConfig({
  plugins: [appTools()],
  html: {
    template: './config/html/index.html',
    title: 'A11y Blog',
    meta: {
      viewport: 'width=device-width, initial-scale=1.0',
    },
  },
});
