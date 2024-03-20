const {Given, When, Then} = require('@cucumber/cucumber');
const searchTalent = require('../page-objects/search-talent');

When("I click on the talent having {string}, {string}, {string}, {string} and {string}", async function (Name, Role, Status, Skill, Salary) {
    await searchTalent.talentCard(Name, Role, Status, Skill, Salary);
});

Then("I should see talent card with details {string}, {string}, {string}, {string} and {string}", async function (Name, Role, Location, Status, Salary) {
    await searchTalent.talentCardDetails(Name, Role, Location, Status, Salary);
});

Then("I should see {string} message on search talent page", async function (message) {
    await searchTalent.talentNotFoundMessage(message);
});