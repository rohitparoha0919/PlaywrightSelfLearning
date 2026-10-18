import {test, expect } from "@playwright/test"

export class Loginform{

   // Rohit has added this comment for testing purpose, added a dummy comment.
    constructor(page){

       this.page = page
       this.EnterEmailForLogin = page.locator('//input[@data-qa="login-email"]')
       this.EnterPwdForLogin = page.locator('//input[@data-qa="login-password"]')
       this.ClickOnLoginButton = page.locator('//button[@data-qa="login-button"]')
       this.InValidPwdMessage = page.locator('//p[@style="color: red;"]')
       this.LogoutButtonVisibility = page.locator('//a[@href="/logout"]')
    }

    async ValidLogin(){

       await this.EnterEmailForLogin.fill('Test8949@gmail.com')
       await this.EnterPwdForLogin.fill('Test@1234')
       await this.ClickOnLoginButton.click()
       await expect (this.LogoutButtonVisibility).toBeVisible()
        
    }

    async InValidLogin(){

       await this.EnterEmailForLogin.fill('TestInvalidLogin@gmail.com')
       await this.EnterPwdForLogin.fill('Test@1234')
       await this.ClickOnLoginButton.click()
       await expect (this.InValidPwdMessage).toContainText("Your email or password is incorrect!")
           
    }



}