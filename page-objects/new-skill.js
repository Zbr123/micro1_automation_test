class addNewskill {

    async skillField(text){
        await page.waitForTimeout(3000);
        await page.fill(`input[placeholder='Enter skill name']`, text);
    }

    attachPicture(){
        let filePath = 'C:/Users/hp/Desktop/test.jpg';
        page.setInputFiles(`//span[contains(., 'Add icon')]`, filePath);
        page.waitForTimeout(5000);
     }

     async verifySuccessMessage() {
        let locator = `//div[contains(., 'Skill added successfully!')]`
        await page.waitForSelector(locator);
        const visible = await page.isVisible(locator);
        return expect(visible).to.equal(true);
      }

      async clickButton(){
        await page.click(`xpath=(//button[contains(., 'Add')])[2]`);
     }
    }
    module.exports = new addNewskill ;
 