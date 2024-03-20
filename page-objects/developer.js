class developer {
    async arrowClick(){
        await page.click(`//button[contains(@class, 'transition')]`);
      }

    async selectWeek(value){
        await page.selectOption("//select[contains(@class, 'block')]", { value: `${value}` });
      }

    async summaryTextarea(text){
        await page.fill(`//textarea[contains(@placeholder, 'Enter summary')]`, text);
      }

    async feedbacktextarea(text){
        await page.fill(`//textarea[contains(@placeholder, 'Write your feedback here...')]`, text);
      }

    async submitButton(text){
      await page.click(`xpath=(//button[contains(., 'Submit')])[2]`);
      }

    async attachfile(){
        //let filePath = 'C:/Users/waji.pk/Documents/test image.jpg';
        let filePath = 'C:/Users/hp/Desktop/test.jpg';
        await page.setInputFiles(`input[name='file']`, filePath);
        await page.waitForTimeout(4000);
     }

    }
    module.exports = new developer ;
 