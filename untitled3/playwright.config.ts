import { defineConfig, devices } from '@playwright/test';
export default defineConfig({
  testDir: './auto_test',  // Absolute path
  //testMatch: '**-test.spec.ts',
  fullyParallel: true,
  timeout: 60000,
  reporter: 'html',
  use: {
    actionTimeout: 60000,
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
