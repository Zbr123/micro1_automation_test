const { Given, When , Then } = require('@cucumber/cucumber');
const clientAccess = require('../page-objects/client-admin-access');
const addNewskill = require('../page-objects/new-skill');

  When('I fill {string} with {string} on Admin access page', async function(fieldName, text) {
    let locatorName;
    const randomNumber = Math.floor(Math.random() * 100000) + 1;
     if(fieldName=="Name"){
         locatorName='team_member_name'
         text = text + randomNumber;
     }
     else if(fieldName=="Email"){
        locatorName='email_id'
        text = text + randomNumber + "@micro1.ai";
        global.CLIENT_ADMIN_EMAIL = text;
    }
    await clientAccess.adminInfo(locatorName, text)
  });

  When('I click on Add button on Admin access page', async function() {
    await addNewskill.clickButton();
  });

  When('I click on remove button of recently added Admin', async function() {
    await clientAccess.removeAdmin(CLIENT_ADMIN_EMAIL);
  });

  Then('I should see deletion successfully message', async function() {
    await clientAccess.verifyMemberDeletion();
  });

  When('I click on resend invite button of admin named {string}', async function(adminName) {
    await clientAccess.resendInvite(adminName);
  });

  Then('I should see invite successfully sent message', async function() {
    await clientAccess.verifyResendInvite();
  });