const {Given, When, Then} = require('@cucumber/cucumber');
const commonLocators = require('../page-objects/common-locators');

When('I click on {string} tab in the left nav-menu', async function (text) {
    await commonLocators.clickNavMenuItem(text);
});

When('I click on {string} button', async function (buttonName) {
    await commonLocators.clickButton(buttonName);
});

When('I fill {string} text area with {string} on {string} page', async function (textareaName, text, pageName) {
    const textareamap = {
        'About': 'about_me', 'About Project': 'about_project'
    };
    textareaName = textareamap[textareaName];
    await commonLocators.textArea(textareaName, text)
});

When('I fill {string} amount in input field', async function (amount) {
    await commonLocators.enterAmount(amount);
});

When('I press Enter Key', async function () {
    await commonLocators.pressEnter();
});

When('I search {string} in the Search Field', async function (name) {
    await commonLocators.searchField(name);
});

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

When("I wait {string} seconds", async function (seconds) {
    const timeout = parseInt(seconds, 10);
    await delay(timeout * 1000);
});

When('I click on {string} link', async function (linkName) {
    await commonLocators.clickLink(linkName);
});

Then('I should see the {string} Heading', {timeout: 10 * 1000}, async function (headingName) {
    await commonLocators.h1heading(headingName);
});

When('I click on {string} radio button', async function (radioButtonName) {
    const radioButtonmap = {
        'Yes, I will define the skills': 'enablepreskills'
    };
    radioButtonName = radioButtonmap[radioButtonName];
    await commonLocators.radioButtonName(radioButtonName)
});

Then('I should see {string} button', async function (buttonName) {
    await commonLocators.buttonAssert(buttonName);
});

When('I click on {string} tab', async function (buttonName) {
    await commonLocators.clickh3tab(buttonName);
});

Then('I should see the {string} message', {timeout: 10 * 1000}, async function (text) {
    await commonLocators.verifyMessage(text);

});

Then('I should see the {string} heading', async function (text) {
    await commonLocators.h3heading(text);
});
