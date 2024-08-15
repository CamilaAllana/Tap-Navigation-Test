import {Builder, By, Key} from "selenium-webdriver";
import {should} from "chai";
should();

    
async function LoginValidCredentials(){ 

    // Given I am on the homepage of the Tap Air Portugal website
    let driver = await new Builder().forBrowser("firefox").build()
    await driver.get("https://www.flytap.com/en-pt/")
    await sleep (3000)
 
    await driver.findElement(By.xpath('//*[@id="onetrust-accept-btn-handler"]')).click()
    await sleep(2000)
 
    //And click on the “Login and Register” link
    await driver.findElement(By.xpath("//div[@class='root-header__login device-visibility--desktop']//button[@title='Login and Register']")).click()
    await sleep (3000)
 
    //When the registration and login pop-up appears
    let loginPopup = await driver.findElement(By.xpath("/html/body/div[8]/div/div[3]/div/div[1]/div/div/div")).getText()
    .then(function(value){
       return value 
    });
    loginPopup.should.equal('Login')
    await sleep (2000)
 
    //And I enter with valid credentials and click on the login button
    await driver.findElement(By.id('login-user-account-modal')).sendKeys("catacoll_example@yahoo.com"), Key.RETURN;
    await sleep (3000)
    await driver.findElement(By.id('login-pass-account-modal')).sendKeys("Senhavalida#456"), Key.RETURN;
    await sleep (3000)
    await driver.findElement(By.xpath('/html/body/div[8]/div/div[3]/div/div[2]/div[1]/div/div[3]/form/fieldset/div[3]/div/div/div/label')).click()
    await sleep(3000)
    await driver.findElement(By.id('login-save-account-submit-modal')).click()
    await sleep(3000)
    
    //Then I should be redirected to the customer area.
    await driver.findElement(By.xpath('/html/body/div[1]/div/div[3]/div[2]/section[1]/div/div')).getText()
    await sleep(3000)
 
    await driver.quit()
 
     function sleep(ms){
         return new Promise (resolve =>setTimeout(resolve, ms));
     }
 
 }
 
 LoginValidCredentials()

async function LoginInvalidCredentials(){

    //Given that I am on the homepage of the Tap Air Portugal website
    let driver = await new Builder().forBrowser("firefox").build()
    await driver.get("https://www.flytap.com/en-pt/")
    await sleep (3000)

    await driver.findElement(By.xpath('//*[@id="onetrust-accept-btn-handler"]')).click()
    await sleep(2000)

    //And click on the “Login and Register” link
    await driver.findElement(By.xpath("//div[@class='root-header__login device-visibility--desktop']//button[@title='Login and Register']")).click()
    await sleep (3000)

    //When the registration and login pop-up appears
    let loginPopup = await driver.findElement(By.xpath("/html/body/div[8]/div/div[3]/div/div[1]/div/div/div")).getText()
    .then(function(value){
        return value 
    });
    loginPopup.should.equal('Login')
    await sleep (2000)

    //And I enter a invalid credentials and click on the login button
    await driver.findElement(By.id('login-user-account-modal')).sendKeys("catacoll@example.com"), Key.RETURN;
    await sleep (3000)
    await driver.findElement(By.id('login-pass-account-modal')).sendKeys("InvalidPassword"), Key.RETURN;
    await sleep (3000)
    await driver.findElement(By.xpath('/html/body/div[8]/div/div[3]/div/div[2]/div[1]/div/div[3]/form/fieldset/div[3]/div/div/div/label')).click()
    await sleep(3000)
    await driver.findElement(By.id('login-save-account-submit-modal')).click()
    await sleep(3000)

    //Then an error message should be displayed.
    let errorMsg = await driver.findElement(By.xpath("/html/body/div[8]/div/div[3]/div/div[2]/div[1]/div/div[1]/div/div/div[2]/div")).getText()
    .then(function(value){
        return value 
    });
    errorMsg.should.equal('The access data entered is incorrect. Please correct them and try again.')
    await sleep (2000)

    await driver.quit()


        function sleep(ms){
            return new Promise (resolve =>setTimeout(resolve, ms));
        }

}     

LoginInvalidCredentials()
        
async function LoginEmptyFields(){ 
   
    //Given that I am on the homepage of the Tap Air Portugal website
    let driver = await new Builder().forBrowser("firefox").build()
    await driver.get("https://www.flytap.com/en-pt/")
    await sleep (3000)

    await driver.findElement(By.xpath('//*[@id="onetrust-accept-btn-handler"]')).click()
    await sleep(2000)

    //And click on the “Login and Register” link
    await driver.findElement(By.xpath("//div[@class='root-header__login device-visibility--desktop']//button[@title='Login and Register']")).click()
    await sleep (3000)

    //When the registration and login pop-up appears
    let loginPopup = await driver.findElement(By.xpath("/html/body/div[8]/div/div[3]/div/div[1]/div/div/div")).getText()
    .then(function(value){
        return value 
    });
    loginPopup.should.equal('Login')
    await sleep (2000)

    //And leave the “email” and “password” field empty and click on login button
    await driver.findElement(By.id('login-user-account-modal')).sendKeys(""), Key.RETURN;
    await sleep (3000)
    await driver.findElement(By.id('login-pass-account-modal')).sendKeys(""), Key.RETURN;
    await sleep (3000)
    await driver.findElement(By.id('login-save-account-submit-modal')).click()
    await sleep(3000)

    //Then an error message should be displayed.
    let emptyLogin = await driver.findElement(By.id("login-user-account-modal-error")).getText()
    .then(function(value){
        return value 
    });
    emptyLogin.should.equal('Mandatory field.')
    await sleep (2000)

   await driver.quit()


    function sleep(ms){
        return new Promise (resolve =>setTimeout(resolve, ms));
    }

}

LoginEmptyFields()

async function PasswordLowerCase(){ 
   
    //Given that I am on the homepage of the Tap Air Portugal website
    let driver = await new Builder().forBrowser("firefox").build()
    await driver.get("https://www.flytap.com/en-pt/")
    await sleep (3000)

    await driver.findElement(By.xpath('//*[@id="onetrust-accept-btn-handler"]')).click()
    await sleep(2000)

    //And click on the “Login and Register” link
    await driver.findElement(By.xpath("//div[@class='root-header__login device-visibility--desktop']//button[@title='Login and Register']")).click()
    await sleep (3000)

    //When the registration and login pop-up appears
    let loginPopup = await driver.findElement(By.xpath("/html/body/div[8]/div/div[3]/div/div[1]/div/div/div")).getText()
    .then(function(value){
       return value 
    });
    loginPopup.should.equal('Login')
    await sleep (2000)

    //And I type the password in lowercase letters and click on the login button
    await driver.findElement(By.id('login-user-account-modal')).sendKeys("catacoll_example@yahoo.com"), Key.RETURN;
    await sleep (3000)
    await driver.findElement(By.id('login-pass-account-modal')).sendKeys("senhavalida#456"), Key.RETURN;
    await sleep (3000)
    await driver.findElement(By.id('login-save-account-submit-modal')).click()
    await sleep(3000)

    //Then an error message should be displayed.
    let lowerCase = await driver.findElement(By.xpath("/html/body/div[8]/div/div[3]/div/div[2]/div[1]/div/div[1]/div/div/div[2]/div")).getText()
    .then(function(value){
        return value 
    });
    lowerCase.should.equal('Your access details are not correct. Have you forgotten your password?')
    await sleep (2000)

   await driver.quit()


    function sleep(ms){
        return new Promise (resolve =>setTimeout(resolve, ms));
    }

}

PasswordLowerCase()

async function PasswordUperCase(){ 
   
    //Given that I am on the homepage of the Tap Air Portugal website
    let driver = await new Builder().forBrowser("firefox").build()
    await driver.get("https://www.flytap.com/en-pt/")
    await sleep (3000)

    await driver.findElement(By.xpath('//*[@id="onetrust-accept-btn-handler"]')).click()
    await sleep(2000)

    //And click on the “Login and Register” link
    await driver.findElement(By.xpath("//div[@class='root-header__login device-visibility--desktop']//button[@title='Login and Register']")).click()
    await sleep (3000)

    //When the registration and login pop-up appears
    let loginPopup = await driver.findElement(By.xpath("/html/body/div[8]/div/div[3]/div/div[1]/div/div/div")).getText()
    .then(function(value){
       return value 
    });
    loginPopup.should.equal('Login')
    await sleep (2000)

    //And I type the password in uppercase letters and click on the login button
    await driver.findElement(By.id('login-user-account-modal')).sendKeys("catacoll_example@yahoo.com"), Key.RETURN;
    await sleep (3000)
    await driver.findElement(By.id('login-pass-account-modal')).sendKeys("SENHAVALIDA#456"), Key.RETURN;
    await sleep (3000)
    await driver.findElement(By.id('login-save-account-submit-modal')).click()
    await sleep(3000)

    //Then an error message should be displayed.
    let upperCase = await driver.findElement(By.xpath("/html/body/div[8]/div/div[3]/div/div[2]/div[1]/div/div[1]/div/div/div[2]/div")).getText()
    .then(function(value){
        return value 
    });
    upperCase.should.equal('Your access details are not correct. Have you forgotten your password?')
    await sleep (2000)

    await driver.quit()


    function sleep(ms){
        return new Promise (resolve =>setTimeout(resolve, ms));
    }

}

PasswordUperCase()

async function ValidCustomerNumber(){ 
   
    //Given that I am on the homepage of the Tap Air Portugal website
    let driver = await new Builder().forBrowser("firefox").build()
    await driver.get("https://www.flytap.com/en-pt/")
    await sleep (3000)

    await driver.findElement(By.xpath('//*[@id="onetrust-accept-btn-handler"]')).click()
    await sleep(2000)

    //And click on the “Login and Register” link
    await driver.findElement(By.xpath("//div[@class='root-header__login device-visibility--desktop']//button[@title='Login and Register']")).click()
    await sleep (3000)

    //When the registration and login pop-up appears
    let loginPopup = await driver.findElement(By.xpath("/html/body/div[8]/div/div[3]/div/div[1]/div/div/div")).getText()
    .then(function(value){
       return value 
    });
    loginPopup.should.equal('Login')
    await sleep (2000)

    //And I enter a valid customer number and password and click on the login button
    await driver.findElement(By.id('login-user-account-modal')).sendKeys("541870243"), Key.RETURN;
    await sleep (3000)
    await driver.findElement(By.id('login-pass-account-modal')).sendKeys("Senhavalida#456"), Key.RETURN;
    await sleep (3000)
    await driver.findElement(By.id('login-save-account-submit-modal')).click()
    await sleep(3000)

    //Then I should be redirected to the customer area.
    await driver.findElement(By.xpath('/html/body/div[1]/div/div[3]/div[2]/section[1]/div/div')).getText()
    await sleep(3000)

    await driver.quit()


    function sleep(ms){
        return new Promise (resolve =>setTimeout(resolve, ms));
    }

}

ValidCustomerNumber()

async function InvalidCustomerNumber(){ 
    
    //Given that I am on the homepage of the Tap Air Portugal website
    let driver = await new Builder().forBrowser("firefox").build()
    await driver.get("https://www.flytap.com/en-pt/")
    await sleep (3000)

    await driver.findElement(By.xpath('//*[@id="onetrust-accept-btn-handler"]')).click()
    await sleep(2000)

    //And click on the “Login and Register” link
    await driver.findElement(By.xpath("//div[@class='root-header__login device-visibility--desktop']//button[@title='Login and Register']")).click()
    await sleep (3000)

    //When the registration and login pop-up appears
    let loginPopup = await driver.findElement(By.xpath("/html/body/div[8]/div/div[3]/div/div[1]/div/div/div")).getText()
    .then(function(value){
       return value 
    });
    loginPopup.should.equal('Login')
    await sleep (2000)

    //And I enter an invalid customer number and password and click on the login button
    await driver.findElement(By.id('login-user-account-modal')).sendKeys("541870240"), Key.RETURN;
    await sleep (3000)
    await driver.findElement(By.id('login-pass-account-modal')).sendKeys("Senhavalida#456"), Key.RETURN;
    await sleep (3000)
    await driver.findElement(By.id('login-save-account-submit-modal')).click()
    await sleep(3000)

    //Then an error message should be displayed.
    let invalidCustomer = await driver.findElement(By.xpath("/html/body/div[8]/div/div[3]/div/div[2]/div[1]/div/div[1]/div/div/div[2]/div")).getText()
    .then(function(value){
        return value 
    });
    invalidCustomer.should.equal('The access data entered is incorrect. Please correct them and try again.')
    await sleep (2000)

   await driver.quit()

    function sleep(ms){
        return new Promise (resolve =>setTimeout(resolve, ms));
    }

}

InvalidCustomerNumber()


