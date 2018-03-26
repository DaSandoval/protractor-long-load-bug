'use strict';
const params = browser.params;
const support = require('protractor-firefox-support');

describe('Load page test', () => {
  beforeEach(() => {
      return browser.get(params.pageUrl);
  });
  describe('Confirm ability to open page fast', () => {
    it('Should successfully open page and fill data fields', function() {
      const userNameField = $('#userName');
      const passwordField = $('#password');
      const signInButton = $('.btn.dice-btn.sign-in-btn');
      const incorectDataMessage = $('.text-danger');
      return browser.wait(protractor.ExpectedConditions.visibilityOf(userNameField), 5000)
        .then(() => userNameField.sendKeys('John'))
        .then(() => passwordField.sendKeys('Smith'))
        .then(() => browser.executeScript(support.mouseClick, {selector: '.btn.dice-btn.sign-in-btn'}))//signInButton.click())
        .then(() => {
            expect(incorectDataMessage.isDisplayed()).toBe(true);
        });
      });
  });
});
