const { Given, When , Then } = require('@cucumber/cucumber');
const { LoginPage } = require('../page-objects/login-page');
const loginPage = new LoginPage();

Given('I am on the login screen', { timeout: 10 * 1000 }, async function() {
  await loginPage.navigateToLoginScreen();
});

When('I fill the login form with valid credentials', async function() {
  await loginPage.submitLoginForm();
});

Then('I should be able to see the home screen', async function() {
  await loginPage.verifyAfterLoginPage();
});

When('I fill the login form with in-valid credentials', { timeout: 10 * 1000 }, async function() {
  await loginPage.submitLoginFormwithinvalidcreds();
});

Then('I should be able to see error message', async function() {
  await loginPage.error_message();
});

Given('I navigate to Client Login Page', { timeout: 20 * 1000 }, async function() {
  await loginPage.navigateToClientLoginScreen();
});

Given('I navigate to Developer Login Page', { timeout: 20 * 1000 }, async function() {
  await loginPage.navigateToDeveloperLoginScreen();
});

When('I fill the login form with valid credentials for developer', async function() {
  await loginPage.submitLoginFormDeveloperwithValidCreds();
});

When('I fill the login form with in-valid credentials for developer', async function() {
  await loginPage.submitLoginFormDeveloperwithInvalidCreds();
});

When('I fill the login form with valid credentials for client', async function() {
  await loginPage.submitLoginFormClientwithValidCreds();
});

When('I fill the login form with in-valid credentials for client', async function() {
  await loginPage.submitLoginFormClientwithInvalidcreds();
});