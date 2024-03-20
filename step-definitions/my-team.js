const { Given, When, Then } = require('@cucumber/cucumber');
const myTeam = require('../page-objects/my-team');
const commonLocators = require('../page-objects/common-locators');

When("I click on the developer having {string}, {string}, {string}, {string} and {string}", async function (Name, Role, Location, JobType, Salary) {
  await myTeam.developerCard(Name, Role, Location, JobType, Salary);
});

When("I set {string} dollars raise for the developer", async function (raise) {
  await myTeam.raiseSlider();
});

When("I write {string} on the text area of Give raise", async function (text) {
  await myTeam.textarea(text);
});

When("I filled the date of today in date field", async function () {
  await myTeam.date();
});

When("I click on Submit button on modal", async function () {
  await myTeam.submitBtn();
});




