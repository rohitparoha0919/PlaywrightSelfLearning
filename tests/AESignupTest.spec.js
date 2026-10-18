import { test, expect } from '@playwright/test'
import { Signupform } from '../pages/Page.Signup.AE.js'




test('Test Signup page one', async ({ page }) => {

    await page.goto('https://www.automationexercise.com/login')
    const signup = new Signupform(page);
    await signup.PreSignupFormFill()
    await signup.ifemailAlreadyExist()
    await page.waitForTimeout(3000)
    await expect(page).toHaveURL('https://www.automationexercise.com/signup')
    await page.waitForTimeout(3000)
    await signup.SignupFormfill()
    console.log('Test Signup page one is completed successfully')





})