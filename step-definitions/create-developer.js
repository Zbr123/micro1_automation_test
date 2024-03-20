const { Given, When , Then } = require('@cucumber/cucumber');
const createDeveloper = require('../page-objects/create-developer');
  let developerFirstName;
  let developerLastName;
  let developerFullName;
When('I fill {string} with {string} on Developer creation page', async function(fieldName, text) {
   const randomNumber = Math.floor(Math.random() * 10000) + 1;
    if(fieldName=="First Name"){
      developerFirstName = text;
      locatorName='developer_first_name'
    }
    else if(fieldName=="Last Name"){
        locatorName='developer_last_name'
        text = text + randomNumber;
        developerLastName = text;
    }
    else if(fieldName=="Email"){
        locatorName='email_id'
        text = text + randomNumber + "@micro1.ai";
    }
    else if(fieldName=="Phone No"){
        locatorName='phone_number'
        text = text + randomNumber;
    }
    else if(fieldName=="Developer Role"){
        locatorName='developer_role'
        text = text + randomNumber;
    }
    else if(fieldName=="No of Experience"){
      locatorName='experience'
    }
    else if(fieldName=="Company Name"){
      locatorName='company_name'
    }
    else if(fieldName=="Role"){
      locatorName='role'
    }
    else if(fieldName=="Project Name"){
      locatorName='project_name'
    }
    else if(fieldName=="Project Link"){
      locatorName='project_link'
    }
    else if(fieldName=="Degree Name"){
      locatorName='degree'
    }
    else if(fieldName=="University Name"){
      locatorName='college_name'
    }
    else if(fieldName=="For us"){
      locatorName='hourly_rate'
    }
    else if(fieldName=="For Client"){
      locatorName='client_hourly_rate'
    }
    else if(fieldName=="GPT-URL"){
      locatorName='gpt_vetting_url'
    }
    global.DEVELOPER_NAME = developerFirstName + ' ' + developerLastName;
    await createDeveloper.developerInfo(locatorName, text)
  });

  When("I select {string} from the Country dropdown options on developer creation page", async function(value) {
    const countryMap = {
    'India': 'IN', 'Afghanistan': 'AF', 'Bangladesh': 'BD', 'Barbados': 'BB', 'Belarus': 'BY', 'Bermuda': 'BM', 'Brazil': 'BR',
    'Canada': 'CA', 'Costa Rica': 'CR', 'Indonesia': 'ID', 'Pakistan': 'PK', 'United Kingdom': 'GB', 'United States': 'US' };
    value = countryMap[value];
    await createDeveloper.selectCountry(value);
  });

  When("I click on Manager's Dropdown on Developer creation page", async function() {
    await createDeveloper.clickManagerDropdown();
  });

  When("I select {string} from the Manager dropdown options", async function(managerName) {
    await createDeveloper.selectCountry(managerName);
  });

  When("I selected {string} in {string} Skills on developer creation page", async function(skillName, skillField) {
    if(skillField=="Vetted Technical"){
      index='1'
    }
    else if(skillField=="Other Technical"){
      index='2'
    }
    await createDeveloper.selectTechnicalSkill(skillName, index)
  });

  When("I select {string} in Vetted Technical Result on developer creation page", async function(skillLevel) {
    const skill = {
      'Junior': 'junior', 'Mid-Level': 'mid-level', 'Senior': 'senior'
       };
    skillLevel = skill[skillLevel];
    await createDeveloper.selectSkillLevel(skillLevel)
  });
  
  When("I fill {string} Notes with {string} on developer creation page", async function(notesfield, text)
   {
    if(notesfield=="Technical Interview"){
      index='1'
    }
    else if(notesfield=="Soft Skill"){
      index='2'
    }
    else if(notesfield=="Responsibilties"){
      index='1'
    }
    await createDeveloper.notesTextarea(text, index)
  });

  When("I select {string} in verified AI tools on developer creation page", async function(toolName) {
    await createDeveloper.selectAItool(toolName);
  });

  When("I select {string} in Soft Skill dropdown on developer creation page", async function(skillValue) {
    const skillMap = {
      'Average': 'average', 'Good': 'good', 'Excellent': 'excellent'
       };
    skillValue = skillMap[skillValue];
    await createDeveloper.selectSkillValue(skillValue);
  });

  When("I type {string} in Tech Stack field of developer creation page", async function(techStack) {
    await createDeveloper.enterTechstack(techStack);
  });

  When("I type {string} in {string} of Experience on developer creation page", async function(date, locatorName) {
    if(locatorName=="Start Date"){
      locator='start_date'
    }
    else if(locatorName=="End Date"){
      locator='end_date'
    }
    await createDeveloper.experienceDate(date, locator);
  });

  When("I click on Tick button of Othoer Technical Skills on developer creation page", async function() {
    await createDeveloper.tickButton();
  });

  When('I click on {string} radio button on developer creation page', async function(locatorName) {
    if(locatorName=="Available Full Time"){
      locator='available'
    }
    else if(locatorName=="Part Time Hired"){
      locator='part-time-hired'
    }
    else if(locatorName=="Full Time Hired"){
      locator='full-time-hired'
    }
    else if(locatorName=="Looking for replacement"){
      locator='looking-for-replacement'
    }
    await createDeveloper.radioButton(locator)
    });

    When("I attach the certificate of the developer", async function() {
      await createDeveloper.attachCertificate();
    });

   
