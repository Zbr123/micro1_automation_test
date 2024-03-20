class clientAccess {
    
    async adminInfo(locatorName, text){
        await page.fill(`input[name='${locatorName}']`, text);
    }

    async removeAdmin(locatorName){
        await page.click(`xpath=(//div[contains(@class, 'flex justify-between') and contains (., '${locatorName}')]//button[contains(.,'Remove')])[1]`);
    }

    async verifyMemberDeletion() {
        let locator = `//div[contains(., 'Member deleted successfully')]`
        await page.waitForSelector(locator);
        const visible = await page.isVisible(locator);
        return expect(visible).to.equal(true);
      }
    
    async resendInvite(adminName){
        await page.click(`xpath=(//div[contains(@class, 'flex justify-between') and contains (., '${adminName}')]//button[contains(.,'Resend invite')])[1]`);
    }

    async verifyResendInvite() {
        let locator = `//div[contains(., 'Invite sent successfully')]`
        await page.waitForSelector(locator);
        const visible = await page.isVisible(locator);
        return expect(visible).to.equal(true);
      }
    }
    module.exports = new clientAccess ;
 