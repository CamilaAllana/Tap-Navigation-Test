import {Builder, By, Key} from "selenium-webdriver"
import {should} from "chai"
should()

async function registrationPage() {

    //Given that I am on the homepage of the Tap Air Portugal website
    let driver = await new Builder().forBrowser("firefox").build()
    await driver.get("https://www.flytap.com/en-pt/")
    await sleep (3000)

    //And click on the “Login and Register” link
    await driver.findElement(By.xpath('//*[@id="onetrust-accept-btn-handler"]')).click()
    await sleep(3000)

    await driver.findElement(By.xpath("//div[@class='root-header__login device-visibility--desktop']//button[@title='Login and Register']")).click()
    await sleep (3000)

    //When the registration and login pop-up appears
    let seleniumText = await driver.findElement(By.xpath("/html/body/div[8]/div/div[3]/div/div[1]/div/div/div")).getText()
    .then(function(value){
        return value 
    });
    seleniumText.should.equal('Login')
    await sleep (2000)

    //And I click on the “Register now!”
    await driver.findElement(By.xpath('/html/body/div[8]/div/div[3]/div/div[2]/div[1]/div/div[6]/div/div/div/a')).click();
    await sleep (3000)

    //Then I should be redirected to the site's registration page.
    await driver.findElement(By.xpath('/html/body/div[1]/div/div[3]/div/section[2]/div[2]/form/div[1]/div[1]'));
    await sleep (3000)

    await driver.quit()


    function sleep(ms){
        return new Promise (resolve =>setTimeout(resolve, ms));
    }

}

registrationPage()

async function newUser() {
    
    //Given that I am on the website's registration page
    let driver = await new Builder().forBrowser("firefox").build()
    await driver.get("https://www.flytap.com/en-pt/sign-up")
    await sleep (3000)

    await driver.findElement(By.xpath('//*[@id="onetrust-accept-btn-handler"]')).click()
    await sleep(3000)

    //When I enter valid access data
    await driver.findElement(By.id('email')).sendKeys("catacoll_example@yahoo.com"), Key.RETURN;
    await sleep (3000)
    await driver.findElement(By.id('Salutation')).click(), Key.RETURN;
    await sleep (3000)
    await driver.findElement(By.xpath('/html/body/div[1]/div/div[3]/div/section[2]/div[2]/form/div[1]/fieldset[2]/div[2]/div[1]/div/div/select/option[3]')).click(), Key.RETURN;
    await sleep (3000)
    await driver.findElement(By.id('firstnameR')).sendKeys("Cata"), Key.RETURN;
    await sleep (3000)
    await driver.findElement(By.id('lastnameR')).sendKeys("Coll"), Key.RETURN;
    await sleep (3000)
    await driver.findElement(By.id('day-1')).sendKeys("12"), Key.RETURN;
    await sleep (3000)
    await driver.findElement(By.id('month-1')).sendKeys("12"), Key.RETURN;
    await sleep (3000)
    await driver.findElement(By.id('year-1')).sendKeys("1990"), Key.RETURN;
    await sleep (3000)
    await driver.findElement(By.name('FormData.TelephoneType')).click();
    await sleep (3000)
    await driver.findElement(By.id('phoneCoun')).sendKeys("por"), Key.RETURN;
    await sleep (3000)
    await driver.findElement(By.id('phoneNumber')).sendKeys("924974593"), Key.RETURN;
    await sleep (3000)

    //And fill in all required fields
    await driver.findElement(By.id('country')).sendKeys("spain"), Key.RETURN;
    await sleep (2000)
    await driver.findElement(By.id('city')).sendKeys("madrid"), Key.RETURN;
    await sleep (2000)
    await driver.findElement(By.id('language')).sendKeys("en"), Key.RETURN;
    await sleep (2000)
    await driver.findElement(By.id('notReceiveEmail')).click();
    await sleep (3000)
    await driver.findElement(By.id('notReceiveSms')).click();
    await sleep (3000)
    await driver.findElement(By.id('notReceiveVoice')).click();
    await sleep (3000)
    await driver.findElement(By.id('termsAgree')).click();
    await sleep (3000)
    await driver.findElement(By.id('MilesGoCreditCardPolicyNotAgree')).click();
    await sleep (3000)
    await driver.findElement(By.id('FormData_ConsentsData_TermsAndConditions')).click();
    await sleep (3000)
    await driver.findElement(By.id('ClientRegister-submit')).click();
    await sleep (3000)
    
    //Then a mailbox verification message should be displayed as confirmation of the new registration.
    await driver.findElement(By.xpath('/html/body/div[1]/div/div[3]/form/div/div'));
    await sleep (3000)
    

    await driver.quit()


    function sleep(ms){
        return new Promise (resolve =>setTimeout(resolve, ms));
    }

    

}

newUser()

async function emptyFields() {
    
    //Given that I am on the website's registration page
    let driver = await new Builder().forBrowser("firefox").build()
    await driver.get("https://www.flytap.com/en-pt/sign-up")
    await sleep (3000)

    await driver.findElement(By.xpath('//*[@id="onetrust-accept-btn-handler"]')).click()
    await sleep(3000)

    //When I enter invalid access data
    await driver.findElement(By.id('email')).sendKeys("catacoll@example.com"), Key.RETURN;
    await sleep (3000)
    await driver.findElement(By.id('firstnameR')).sendKeys("Catta"), Key.RETURN;
    await sleep (3000)
    await driver.findElement(By.id('lastnameR')).sendKeys("Col"), Key.RETURN;
    await sleep (3000)

    //And do not fill in all the mandatory fields
    await driver.findElement(By.id('country')).sendKeys(""), Key.RETURN;
    await sleep (2000)
    await driver.findElement(By.id('city')).sendKeys(""), Key.RETURN;
    await sleep (2000)
    await driver.findElement(By.id('language')).sendKeys(""), Key.RETURN;
    await sleep (2000)

    //Then an error message should be displayed.
    await driver.findElement(By.xpath('/html/body/div[1]/div/div[3]/div/section[2]/div[1]/div'));
    await sleep (3000)

    await driver.quit()


    function sleep(ms){
        return new Promise (resolve =>setTimeout(resolve, ms));
    }

}

emptyFields()

