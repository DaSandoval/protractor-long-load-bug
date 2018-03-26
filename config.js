exports.config = {
  directConnect: true,
  capabilities: {
    browserName: 'chrome',
  },
  specs: [
    'open-page-test.js'
  ],
  params: {
    pageUrl: 'https://www.dice.com/employer/login'
  }
}
