const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    REST: {
      endpoint: "https://my-json-server.typicode.com/typicode/demo",
      defaultHeaders: {
        'Content-Type': 'application/json',
      },
    },
    Playwright: {
      url: 'https://try.vikunja.io',
      show: false,
      browser: 'chromium'
    }
  },
  include: {
    I: './steps_file.js',
    mainPage: './pages/main.js',
    passwordResetPage: './pages/passwordReset.js'
  },
  bootstrap: null,
  mocha: {
    "reporterOptions": {
      "reportDir": "output"
    }
  },
  name: 'codeceptjsJune',
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    }
  }
}