 locators = {
   "username_input": "input[name='email_id']",
   "password_input": "input[name='password']",
   "login_button": "//button[contains(., 'Login')]",
   "masteradmin": "//span[contains(., 'Master Admin')]",
   "error_message": "//div[contains(., 'Invalid Email Id or Password')]"
 },
 credentials = {
  "admin_email": "masteradmin@micro1.io",
  "admin_password": "admin@789",
  "developer_email": "zubair+9726@micro1.ai",
  "developer_password": "Vista1234+",
  "client_email": "zubair+2881@micro1.ai",
  "client_password": "Vista1234+"
}
 
 class LoginPage {

  async navigateToLoginScreen() {
   return await page.goto(global.ADMIN_URL);
  }

  async navigateToClientLoginScreen() {
    return await page.goto(global.CLIENT_URL);
   }

   async navigateToDeveloperLoginScreen() {
    return await page.goto(global.DEVELOPER_URL);
   }

  async submitLoginForm() {
    const element = await page.waitForSelector(locators.username_input);
    await page.fill(locators.username_input, credentials.admin_email);
    await page.fill(locators.password_input, credentials.admin_password);
    await page.click(locators.login_button);
  }

  async verifyAfterLoginPage() {
    await page.waitForSelector(locators.masteradmin);
    const visible = await page.isVisible(locators.masteradmin);
    return expect(visible).to.equal(true);
  }

  async submitLoginFormwithinvalidcreds() {
    const element = await page.waitForSelector(locators.username_input);
    await page.fill(locators.username_input,'masteradmin@miro1.io');
    await page.fill(locators.password_input,'admin@79');
    await page.waitForTimeout(3000);
    await page.click(locators.login_button);
  }

  async error_message() {
    await page.waitForTimeout(3000)
    await page.waitForSelector(locators.error_message);
    const visible = await page.isVisible(locators.error_message);
    return expect(visible).to.equal(true);
}

async submitLoginFormDeveloperwithValidCreds() {
  const element = await page.waitForSelector(locators.username_input);
  await page.fill(locators.username_input, credentials.developer_email);
  await page.fill(locators.password_input, credentials.developer_password);
  await page.click(locators.login_button);
}

async submitLoginFormDeveloperwithInvalidCreds() {
  const element = await page.waitForSelector(locators.username_input);
  await page.fill(locators.username_input,'zubair+9726@micro1.ai');
  await page.fill(locators.password_input, 'vista12344');
  await page.click(locators.login_button);
}

async submitLoginFormClientwithValidCreds() {
  const element = await page.waitForSelector(locators.username_input);
  await page.fill(locators.username_input, credentials.client_email);
  await page.fill(locators.password_input, credentials.client_password);
  await page.click(locators.login_button);
}

async submitLoginFormClientwithInvalidcreds() {
  const element = await page.waitForSelector(locators.username_input);
  await page.fill(locators.username_input, 'zubair+2881@micro1.ai');
  await page.fill(locators.password_input, 'vista12344');
  await page.click(locators.login_button);
}
 }
module.exports = { LoginPage };