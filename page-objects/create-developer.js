class createDeveloper {

   async developerInfo(locatorName, text){
      await page.fill(`input[name='${locatorName}']`, text);
   }

   async selectCountry(value){
     await page.selectOption("select[name='location_info.country']", { value: `${value}` });
   }

   async clickManagerDropdown(){
      await page.click(`//span[contains(., 'Rahul Sahai')]`);
   }
   
   async selectManager(managerName){
      await page.click(`//div[contains(., '${managerName}')]`);
   }

   async selectTechnicalSkill(skillName, index){
      await page.click(`xpath=(//div[contains(@class,"h-1")])[${index}]`);
      await page.waitForTimeout(3000);
      await page.keyboard.press('Enter');
   }

   async selectSkillLevel(value){
      await page.selectOption("select[name='result']", { value: `${value}` });
    }
    
   async notesTextarea(text, index){
      await page.fill(`xpath=(//div[contains(@data-placeholder, "Enter here")])[${index}]`, text);
    }

   async selectAItool(toolName){
      await page.click(`xpath=(//span[contains(., 'Select')])[1]`);
      await page.click(`//span[contains(@class, 'font') and contains (., '${toolName}')]`)
    }

   async selectSkillValue(value){
      await page.selectOption("//select[contains(@class, 'border-none')]", { value: `${value}` });
    }

   async enterTechstack(text){
      await page.fill(`//input[contains(@class,'outline-none border-none')]`, text);
      await page.waitForTimeout(2000);
      await page.keyboard.press('Enter');
   }

   async experienceDate(date, locator){
      await page.click(`input[name='${locator}']`);
      await page.fill(`input[name='${locator}']`, date);
    }

   async tickButton(){
      await page.click(`//button[contains(@class, 'bg-[#EFF1FF] w-1')]`);
   }

   async radioButton(locatorID){
      await page.click(`input[id='${locatorID}']`);
   }

   async attachCertificate(){
      //let filePath = 'C:/Users/waji.pk/Documents/test image.jpg';
      let filePath = 'C:/Users/hp/Desktop/test.jpg';
      await page.setInputFiles(`input[name='file']`, filePath);
      await page.waitForTimeout(4000);
   }

  
   }
   module.exports = new createDeveloper ;
   