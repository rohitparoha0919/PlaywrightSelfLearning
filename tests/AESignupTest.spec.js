import { expect } from '@playwright/test'
import { test } from './Fixtures/test-AEFixtures.js'




test('Test Signup page one', async ({ ValidSignup }) => {
    await ValidSignup.PreSignupFormFill()
    await ValidSignup.ifemailAlreadyExist()
    await expect(ValidSignup.page).toHaveURL('https://www.automationexercise.com/signup')
    await ValidSignup.SignupFormfill()
    console.log ('Valid Signup Test passed')
})