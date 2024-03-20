const { Given, When , Then } = require('@cucumber/cucumber');
const commonLocators = require('../page-objects/common-locators');
const createClient = require('../page-objects/create-client');
const createAddteamMember = require('../page-objects/add-teammember');

When("I search team member in the Search Field", async function() {
  console.log("Team Member Name is: " , global.MEMBER_NAME);
   await createAddteamMember.searchAdminField(global.MEMBER_NAME);
  });

  When("I click on team member on the Settings page", async function() {
    await createClient.selectMember(global.MEMBER_NAME);
  });

  Then('I should see delete successfully message on Team Member Page', { timeout: 10 * 1000 }, async function() {
    await createAddteamMember.deleteMessage();
  });