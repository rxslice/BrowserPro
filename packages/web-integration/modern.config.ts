import { moduleTools, defineConfig } from '@modern-js/module-tools';

export default defineConfig({
  plugins: [moduleTools()],
  buildPreset: 'npm-library',
  buildConfig: {
    platform: 'node',
    input: {
      index: 'src/index.ts',
      'playwright-report': './src/playwright/reporter/index.ts',
    },
    target: 'es2017',
  },
});
