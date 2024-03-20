const { Given, When , Then } = require('@cucumber/cucumber');
const createClient = require('../page-objects/create-client');
const commonLocators = require('../page-objects/common-locators');
const newname=require ('./create-developer');



When('I fill {string} with {string} on Client creation page', { timeout: 20 * 1000 }, async function(fieldName, text) {
   let locatorName;
   const randomNumber = Math.floor(Math.random() * 100000) + 1;
    if(fieldName=="Company Name"){
        locatorName='client_name'
        text = text + randomNumber;
        global.CLIENT_NAME = text;
    }
    else if(fieldName=="Client Name"){
        locatorName='contact_person_name'
        text = text + randomNumber;
    }
    else if(fieldName=="Email"){
        locatorName='email_id'
        text = text + randomNumber + "@micro1.ai";
    }
   await createClient.clientInfo(locatorName, text)
  });

  When("I select {string} from the Country dropdown options on client creation page", async function(value) {
    const countryMap = {
    'India': 'IN', 'Afghanistan': 'AF', 'Bangladesh': 'BD', 'Barbados': 'BB', 'Belarus': 'BY', 'Bermuda': 'BM', 'Brazil': 'BR',
    'Canada': 'CA', 'Costa Rica': 'CR', 'Indonesia': 'ID', 'Pakistan': 'PK', 'United Kingdom': 'GB', 'United States': 'US' };
    value = countryMap[value];
    await createClient.selectCountry(value);
  });

  When("I upload Client Profile Picture", async function() {
    await createClient.attachPicture();
  });

  When("I click on 3 dots of {string} on Client page", async function(clientName) {
    await createClient.clientThreeDots(clientName);
  });

  When("I search created developer in the Search Field", async function() {
    await commonLocators.searchField(global.DEVELOPER_NAME);
  });

  When("I click on recently created developer in the recommendation of the client", async function() {
    await createClient.recommendDeveloper(global.DEVELOPER_NAME);
  });

  When("I click on 3 dots of recently created Client", async function() {
    await createClient.clientThreeDots(global.CLIENT_NAME);
  });

  When("I click on Add engineer button", async function() {
    await createClient.addEngineerBtn();
  });

  When("I click on recently added developer", async function() {
    console.log("client name" , global.CLIENT_NAME);
    console.log("developer name" ,global.DEVELOPER_NAME );
    await createClient.recommendDeveloper(global.DEVELOPER_NAME);
  });

  When("I click on Select Engineer option", async function() {
    await createClient.clickSelectEngineer();
  });

  When("I select {string} radio button on Add subscription popup", async function(radioButton) {
    let locatorName;
    if(radioButton=="Full-time"){
      locatorName='full-time'
  }
  else if(fieldName=="Part-time"){
      locatorName='part-time'
  }
   await createClient.radioButton(locatorName);
  });

  When("I select the recently added engineer", async function() {
    await createClient.selectDeveloper(global.DEVELOPER_NAME);
  });

  When("I fill {string} as Monthly cost of developer", async function(cost) {
    await createClient.subscriptionCost(cost);
  });

  When("I select Success Manager for the subscription", async function() {
    await createClient.selectManager();
  });

  When("I type {string} in subscription date", async function(date) {
    await createClient.subscriptionDate(date);
  });

  When("I type {string} in weekly limit of subscription", async function(limit) {
    await createClient.weeklyLimit(limit);
  });

  When("I click on Add button on the modal", async function() {
    await createClient.addButton();
  });

  Then("I should see recently added client in the client list", async function() {
    await createClient.clientVerify(global.CLIENT_NAME);
  });

  //When("I search team member in the Search Field", async function() {
    //await commonLocators.searchAdminField(global.MEMBER_NAME);
  //});