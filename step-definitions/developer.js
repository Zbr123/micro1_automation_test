const { Given, When , Then } = require('@cucumber/cucumber');
const developer = require('../page-objects/developer');
const commonLocators = require('../page-objects/common-locators');

When('I click on arrow button in the left nav-menu', async function() {
    await developer.arrowClick();
  });

Then('I should see the {string} on the Developer Dashboard', async function(text) {
    await commonLocators.h3heading(text);
  });

When('I select {string} in the option on weekly summary popup', async function(text) {
    await developer.selectWeek(text);
  });

When('I fill {string} in the summary textarea', async function(text) {
    await developer.summaryTextarea(text);
  });

When('I fill {string} in the feedback textarea', async function(text) {
    await developer.feedbacktextarea(text);
  });

When('I click on Submit button on the Weekly summary popup', async function() {
    await developer.submitButton();
  });

When('I attach the file', async function() {
    await developer.attachfile();
  });
