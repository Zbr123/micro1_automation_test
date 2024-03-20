const { Given, When , Then } = require('@cucumber/cucumber');
const gptvetting = require('../page-objects/gpt-vetting');


When("I fill {string} Name with {string} on Invite a candidate popup", async function(no, name) {
    if(no=="first"){
      index='1'
    }
    else if(no=="second"){
      index='2'
    }
    else if(no=="third"){
        index='3'
      }
    else if(no=="fourth"){
        index='4'
      }
    else if(no=="fifth"){
        index='5'
      }
    await gptvetting.name(name, index)
  });

  When("I fill {string} email with {string} on Invite a candidate popup", async function(no, email) {
    if(no=="first"){
      index='1'
    }
    else if(no=="second"){
      index='2'
    }
    else if(no=="third"){
        index='3'
      }
    else if(no=="fourth"){
        index='4'
      }
    else if(no=="fifth"){
        index='5'
      }
    await gptvetting.email(email, index)
  });
  
  Then('I should see the link copied successfully message', { timeout: 10 * 1000 }, async function() {
    await gptvetting.linkSuccessMessage();
  });

  When("I fill {string} skill with {string} on Invite a candidate popup", async function(no, skill) {
    if(no=="first"){
      index='1'
    }
    else if(no=="second"){
      index='2'
    }
    else if(no=="third"){
        index='3'
      }
    else if(no=="fourth"){
        index='4'
      }
    else if(no=="fifth"){
        index='5'
      }
    await gptvetting.skill(skill, index)
  });

  When("I select {string} difficulty level for {string} skill", async function(value, no) {
    if(no=="first"){
      index='1'
    }
    else if(no=="second"){
      index='2'
    }
    else if(no=="third"){
        index='3'
      }
    else if(no=="fourth"){
        index='4'
      }
    else if(no=="fifth"){
        index='5'
      }
    await gptvetting.skilllevel(index, value)
  });

Then('I fill {string} in the Name of test field', async function(text) {
    await gptvetting.testName(text);
  });

  When("I fill {string} Main with {string} on Add new test popup", async function(no, skillName) {
    if(no=="first"){
      index='1'
    }
    else if(no=="second"){
      index='2'
    }
    else if(no=="third"){
        index='3'
      }
    else if(no=="fourth"){
        index='4'
      }
    else if(no=="fifth"){
        index='5'
      }
    await gptvetting.mainSkill(skillName, index)
  });

When('I toggled {string} button', { timeout: 15 * 1000 }, async function(buttonName) {
  let index;
  if(buttonName=="Proctoring"){
    index=5;
  }
  else if(buttonName=="Add coding exercise"){
    index=4;
  }
    await gptvetting.toggleButton(index);
  });