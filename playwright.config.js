// @ts-check

/**
 * @see https://playwright.dev/docs/test-configuration
 * @type {import('@playwright/test').PlaywrightTestConfig}
 */
 const config  = {

    testDir: './tests',

    /* Maximum time one test can run for. */
    timeout: 60 * 1000,
    globalTimeout: 240000,

    expect: {
      /**
       * Maximum time expect() should wait for the condition to be met.
       * For example in `await expect(locator).toHaveText();`
       */
      timeout: 10000
    },
    
    reporter: 'html',

    /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
    use: {
      headless: false,
      browserName: 'chromium',
      channel: 'chrome',
      screenshot: "on",
      video: "on",
      viewport: {
        width: 1400,
        height: 900
      }
    },
    
  
  };
  
  export default config;


