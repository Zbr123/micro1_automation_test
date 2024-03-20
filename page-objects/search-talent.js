class searchTalent {

    async talentCard(Name, Role, Status, Skill, Salary) {
        await page.click(`//div[contains(@class, 'flex flex-col flex-1')and contains(.,'${Name}')and contains(.,'${Role}')and contains(.,'${Status}')and contains(.,'${Skill}')and contains(.,'${Salary}')]`)
    }

    async talentCardDetails(Name, Role, Location, Status, Salary) {
        let locator = `//div[contains(@class, 'flex-1 md:flex md:justify-between')and contains(.,'${Name}')and contains(.,'${Role}')and contains(.,'${Location}')and contains(.,'${Status}')and contains(.,'${Salary}')]`
        await page.waitForSelector(locator);
        const visible = await page.isVisible(locator);
        return expect(visible).to.equal(true);
    }

    async talentNotFoundMessage(message) {
        let locator = `//p[contains(.,'${message}')]`
        await page.waitForSelector(locator);
        const visible = await page.isVisible(locator);
        return expect(visible).to.equal(true);
    }
}

module.exports = new searchTalent;
