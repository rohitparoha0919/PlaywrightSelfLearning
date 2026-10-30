import { expect } from '@playwright/test'
export class Signupform {

    constructor(page) {


        //PreSigup Form locators
        this.page = page;
        this.emailCounter = Math.floor(Math.random() * 9000) + 1000;

        this.EnterNameForSignup = page.locator('//input[@data-qa="signup-name"]')
        this.EnterEmailForSignup = page.locator('//input[@data-qa="signup-email"]')
        this.SignupButton = page.locator('//button[@data-qa="signup-button"]')
        this.emailAlreadyExistMessage = page.locator('//p[@style="color: red;"]')

        //Signup Form Locators
        this.Title = page.locator('#id_gender1')
        this.Password = page.locator('#password')
        this.SelectDate = page.locator('#days')
        this.SelectMonth = page.locator('#months')
        this.SelectYear = page.locator('#years')
        this.SelectCheckbox2 = page.locator('#optin')
        this.EnterFirstName = page.locator('#first_name')
        this.EnterLastName = page.locator('#last_name')
        this.EnterCompanyName = page.locator('#company')
        this.EnterAddress1 = page.locator('#address1')
        this.EnterAddress2 = page.locator('#address2')
        this.SelectCountry = page.locator('#country')
        this.EnterState = page.locator('#state')
        this.EnterCity = page.locator('#city')
        this.EnterZipcode = page.locator('#zipcode')
        this.EnterMobileNumber = page.locator('#mobile_number')
        this.CreateAccountButton = page.locator('//button[@data-qa="create-account"]')


    }
    async PreSignupFormFill() {
        this.email = `Test${this.emailCounter}@gmail.com`;
        await this.EnterNameForSignup.fill('Test')
        await this.EnterEmailForSignup.fill(this.email)
        await this.SignupButton.click()
    }

    async ifemailAlreadyExist() {

        const result = await Promise.race([
            this.page.waitForURL('https://www.automationexercise.com/signup').then(() => 'signup'),
            
            this.emailAlreadyExistMessage.waitFor({ state: 'visible' }).then(() => 'email-exists')
        ]);

        if (result === 'email-exists') {
            this.emailCounter++;

            console.log(`Email already exists. Trying with a new email.`);
            await this.PreSignupFormFill(); // Retry with a new email
            await this.ifemailAlreadyExist();
        }


    }

    async SignupFormfill() {
        await this.Title.click()
        await this.Password.fill('Test@1234')
        await this.SelectDate.selectOption('28')
        await this.SelectMonth.selectOption('4')
        await this.SelectYear.selectOption('1994')
        await this.SelectCheckbox2.click()
        await this.EnterFirstName.fill('Rohit')
        await this.EnterLastName.fill('Sharma')
        await this.EnterCompanyName.fill('Test Company')
        await this.EnterAddress1.fill('123 Test Street')
        await this.EnterAddress2.fill('Apartment 4B')
        await this.SelectCountry.selectOption('United States')
        await this.EnterState.fill('California')
        await this.EnterCity.fill('Los Angeles')
        await this.EnterZipcode.fill('90210')
        await this.EnterMobileNumber.fill('9691678904')
        await this.CreateAccountButton.click()
        await expect(this.page).toHaveURL('https://www.automationexercise.com/account_created')
    }




}