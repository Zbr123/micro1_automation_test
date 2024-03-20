class createAddteamMember {

    async teamMemberInfo(locatorName, text){
        await page.fill(`input[name='${locatorName}']`, text);
    }

    attachPicture(){
        let filePath = 'C:/Users/hp/Desktop/test.jpg';
        page.setInputFiles(`input[name='file']`, filePath);
        page.waitForTimeout(5000);
     }

     async verifySuccessMessage() {
        let locator = `//div[contains(., 'is added to the team as a Admin person')]`
        await page.waitForSelector(locator);
        const visible = await page.isVisible(locator);
        return expect(visible).to.equal(true);
      }

      async searchAdminField(name){
        await page.fill(`input[placeholder='Search by name']`, name);
        await page.waitForTimeout(2000);
     }

     async deleteMessage() {
      let locator = `//div[text()='Staff delete successfully']`
      await page.waitForSelector(locator);
      const visible = await page.isVisible(locator);
      return expect(visible).to.equal(true);
    }
    }
    module.exports = new createAddteamMember ;
 