const { defineConfig, devices } = require('@playwright/test');
import { testPlanFilter } from "allure-playwright/dist/testplan";

/**


/**
 * @see https://playwright.dev/docs/test-configuration
 */
module.exports = defineConfig({
    testDir: './tests',
  expect:{
timeout: 5000
  },
  reporter: 'html',
  // reporter: "allure-playwright",
  grep: testPlanFilter(),
  reporter: [["line"], ["allure-playwright"]],
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'],
    headless: false,
    screenshot: 'on',
    trace: 'retain-on-failure'
    },
    },  
  ],

});

