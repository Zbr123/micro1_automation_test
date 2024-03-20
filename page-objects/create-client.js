class createClient {

    async clientInfo(locatorName, text){
        await page.fill(`input[name='${locatorName}']`, text);
    }

    async selectCountry(value){
        await page.waitForTimeout(3000);
        await page.selectOption("select[name='location_info.isoCode']", { value: `${value}` });
    }

    attachPicture(){
        let filePath = 'C:/Users/hp/Desktop/test.jpg';
        page.setInputFiles(`input[name='file']`, filePath);
        page.waitForTimeout(5000);
     }

     async clientThreeDots(clientName){
        page.waitForTimeout(5000);
        await page.click(`//tr[contains(@class, 'cursor-pointer') and contains (., '${clientName}')]//button[contains(@class, 'transition')]`);
    }

    async recommendDeveloper(devname){ 
        await page.waitForSelector(`xpath=//h5[contains(., '${devname}')]`, { state: 'visible' });
        await page.click(`xpath=//h5[contains(., '${devname}')]`);
    }

    async addEngineerBtn(){
        await page.click(`xpath=(//button[contains(., "Add engineer")])[1]`);
      }

    async selectMember(memName){
        page.waitForTimeout(5000);
        await page.click(`xpath=(//tr[contains(.,'${memName}')]//button)[2]`);
    }

    async clickSelectEngineer(){
        await page.click(`//div[contains(@class,"flex justify-between items-center border")]`);
    }

    async radioButton(locatorName){
        await page.click(`input[id='${locatorName}']`);
    }

    async selectDeveloper(devname){ 
        await page.waitForSelector(`xpath=//h5[contains(., '${devname}')]`, { state: 'visible' });
        await page.click(`xpath=(//h5[contains(., "${devname}")])[2]`);
    }

    async subscriptionCost(cost){
        await page.fill(`input[name='subscription_amount']`, cost);
    }

    async selectManager(){
        await page.click(`//div[contains(@class, 'css-1da5u9z-placeholder') and text()='Select success manager']`);
        page.waitForTimeout(3000);
        await page.keyboard.press('Enter');
    }

    async subscriptionDate(date){
        await page.click(`input[name='subscription_start_date']`);
        await page.fill(`input[name='subscription_start_date']`, date);
      }

    async weeklyLimit(limit){
        await page.click(`input[name='weekly_hour_limit']`);
        await page.fill(`input[name='weekly_hour_limit']`, limit);
      }

    async addButton(){
        await page.click(`xpath=(//button[contains(., "Add")])[4]`);
        page.waitForTimeout(3000);
      }

    async clientVerify(clientName) {
        let locator = `//h5[contains(., '${clientName}')]`
        await page.waitForSelector(locator);
        const visible = await page.isVisible(locator);
        return expect(visible).to.equal(true);
      }
    }
module.exports = new createClient ;
 