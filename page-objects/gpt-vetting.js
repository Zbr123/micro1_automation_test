class gptvetting {
    async name(text, index){
        await page.fill(`xpath=(//input[contains(@placeholder, "Name")])[${index}]`, text);
      }

    async email(text, index){
        await page.fill(`xpath=(//input[contains(@placeholder, "Email address")])[${index}]`, text);
      }

    async linkSuccessMessage() {
        let locator = `//div[contains(., 'Candidate invited successfully')]`
        await page.waitForSelector(locator);
        const visible = await page.isVisible(locator);
        return expect(visible).to.equal(true);
      }

    async skill(text, index){
        await page.fill(`xpath=(//input[contains(@placeholder, "Enter skill")])[${index}]`, text);
      }
    
    async skilllevel(index, value){
        await page.selectOption(`xpath=(//select[contains(@class, "350")])[${index}]`, { value: `${value}` });
      }

    async testName(text){
        await page.fill(`//input[contains(@placeholder, 'Test name')]`, text);
      }

    async mainSkill(text, index){
        await page.fill(`xpath=(//input[contains(@placeholder, "Main skill")])[${index}]`, text);
      }
    
    async toggleButton(index){
        await page.click(`xpath=(//div[contains(@class, 'w-10')])[${index}]`);
      }
    }
    module.exports = new gptvetting ;
 