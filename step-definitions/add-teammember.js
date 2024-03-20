const { Given, When , Then } = require('@cucumber/cucumber');
const createAddteamMember = require('../page-objects/add-teammember');
let firstname;
let lastname;
When('I fill {string} with {string} on Team member creation page', async function(fieldName, text) {
   let locatorName;
   const randomNumber = Math.floor(Math.random() * 1000) + 1;
    if(fieldName=="First Name"){
        locatorName='first_name'
        text = text + randomNumber;
        firstname = text;
    }
    else if(fieldName=="Last Name"){
        locatorName='last_name'
        text = text + randomNumber;
        lastname = text;
    }
    else if(fieldName=="Email"){
        locatorName='email_id'
        text = text + randomNumber + "@micro1.ai";
    }
    else if(fieldName=="Phone No"){
        locatorName='phone_number'
        text = text + randomNumber;
    }
    global.MEMBER_NAME = firstname + ' ' + lastname;
   await createAddteamMember.teamMemberInfo(locatorName, text)
  });

  // When("I upload Client Profile Picture", async function() {
  //   await createClient.attachPicture();
  // });

  Then('I should see success message on the Team Member Page', async function() {
    await createAddteamMember.verifySuccessMessage();
  });
  