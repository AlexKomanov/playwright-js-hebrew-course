// @ts-check

import { devices } from '@playwright/test';

/**
 * @see https://playwright.dev/docs/test-configuration
 * @type {import('@playwright/test').PlaywrightTestConfig}
 */
const config = {

  fullyParallel: true,

  projects: [
    {
      name: 'Google Chrome',
      use:
      {
        ...devices['Desktop Chrome']
        , channel: 'chrome'
      },

    },

    // {
    //   name: 'Firefox',
    //   use: {
    //     ...devices['Desktop Firefox'],
    //   },
    // }
  ],
  timeout: 240000,
  globalTimeout: 18000000,
  testDir: "./tests",
  reporter: process.env.CI ? 'blob' : 'html',
  
  use: {
    browserName: "chromium",
    actionTimeout: 30000,
    trace: "off",
    screenshot: "on",
    viewport: { width: 1400, height: 900 },
    video: {
      mode: "on",
      size: {
        //Like in our project
        width: 1920,
        height: 1080,
      },
    },
    contextOptions: {
      ignoreHTTPSErrors: true,
    },
    // Browser options
    launchOptions: {
      channel: "chrome",
      slowMo: 600,
      args: [
        "--no-sandbox",
        "--ignore-certificate-errors",
        "--ignore-certificate-errors-skip-list",
      ],
    },
  },
};

export default config;


