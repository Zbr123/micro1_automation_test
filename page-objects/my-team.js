const { chromium } = require('playwright');

class myTeam {

    async developerCard(Name, Role, Location, JobType, Salary){
        await page.click(`//div[contains(@class, 'flex-1 md:flex md:justify-between')]//div[contains(@class,'flex flex-col')and contains(.,'${Name}')and contains(.,'${Role}')and contains(.,'${Location}')]/following-sibling::div[contains(.,'${JobType}')and contains(.,'${Salary}')]`)
         }


    async raiseSlider()  {
        
        await page.waitForSelector("xpath=//div[@role='slider' and contains(@class, 'rc-slider-handle')]");
    
    const sliderHandle = await page.$("xpath=//div[@role='slider' and contains(@class, 'rc-slider-handle')]");

    if (sliderHandle) {
        const boundingBox = await sliderHandle.boundingBox();
        
        const startX = boundingBox.x + boundingBox.width / 2;
        const startY = boundingBox.y + boundingBox.height / 2;

        const endX = startX + boundingBox.width * 0.5; 
        
        await page.mouse.move(startX, startY);
        await page.mouse.down();

        await page.mouse.move(endX, startY);
        
        await page.mouse.up();
    } else {
        console.log('Slider handle not found');
    }
    }

    async textarea(text){
    await page.fill(`//textarea[contains(@placeholder, 'Write')]`, text)
    }

    async date(){
        const currentDate = new Date();
        const formattedDate = currentDate.getFullYear() + '-' + 
        String(currentDate.getMonth() + 1).padStart(2, '0') + '-' + 
        String(currentDate.getDate()).padStart(2, '0');
        await page.fill(`//input[contains(@placeholder, 'MM/DD/YYYY')]`, formattedDate)
        }

        async submitBtn() {
            await page.click(`xpath=//div[contains(@class, 'w-full flex justify-end mt-6')] //button[contains(., "Submit")]`);
        }


    }
    module.exports = new myTeam ;
 
    