class CommonLocators {
    leftnavmenucomponents(text) {
        return `//span[contains(., '${text}')]`;
    }

    async clickButton(buttonName) {
        await page.waitForTimeout(2000);
        await page.click(`//button[contains(., '${buttonName}')]`);
    }

    async clickNavMenuItem(text) {
        const leftnavmenucomponents = this.leftnavmenucomponents(text);
        await page.click(leftnavmenucomponents);
    }

    async textArea(textareaName, text) {
        await page.fill(`textarea[name='${textareaName}']`, text);
    }

    async pressEnter() {
        await page.keyboard.press('Enter');
    }

    async searchField(name) {
        await page.fill(`input[placeholder='Search']`, name);
    }

    async enterAmount(amount) {
        await page.fill(`input[type='number']`, amount);
    }

    async clickLink(linkName) {
        await page.click(`//a[contains(., '${linkName}')]`);
    }

    async h1heading(headingName) {
        let locator = `//h1[contains(., '${headingName}')]`
        await page.waitForSelector(locator);
        const visible = await page.isVisible(locator);
        return expect(visible).to.equal(true);
    }

    async radioButtonName(id) {
        await page.click(`input[id='${id}']`);
    }

    async buttonAssert(buttonName) {
        let locator = `//button[contains(., '${buttonName}')]`
        await page.waitForSelector(locator);
        const visible = await page.isVisible(locator);
        return expect(visible).to.equal(true);
    }

    async clickh3tab(name) {
        await page.click(`//h3[contains(., '${name}')]`);
    }

    async verifyMessage(text) {
        let locator = `//div[contains(., "${text}")]`
        await page.waitForSelector(locator);
        const visible = await page.isVisible(locator);
        return expect(visible).to.equal(true);
    }

    async h3heading(headingName) {
        let locator = `//h3[contains(., '${headingName}')]`
        await page.waitForSelector(locator);
        const visible = await page.isVisible(locator);
        return expect(visible).to.equal(true);
    }
}

module.exports = new CommonLocators;
