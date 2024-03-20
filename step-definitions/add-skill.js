const { Given, When , Then } = require('@cucumber/cucumber');
const addNewskill = require('../page-objects/new-skill');

  When("I type {string} on Skill field", async function(text) {
    const randomNumber = Math.floor(Math.random() * 1000) + 1;
    text = text + randomNumber;
    await addNewskill.skillField(text);
  });

  Then('I should see success message on the Add Skill Page', async function() {
    await addNewskill.verifySuccessMessage();
  });

  When("I attach the picture on add skill page", async function() {
    await addNewskill.attachPicture();
  });
  
  When('I click on Add button on Skill popup', async function() {
    await addNewskill.clickButton();
  });