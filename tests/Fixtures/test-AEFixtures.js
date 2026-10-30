import { test as base, expect } from '@playwright/test'
import { Loginform } from '../../pages/Page.Login.AE.js'
import { Signupform } from '../../pages/Page.Signup.AE.js';

const test = base.extend({

    ValidLogin: async ({ page }, use) => {

        const Login = new Loginform(page)
        await page.goto('https://www.automationexercise.com/login')
        await page.waitForTimeout(5000)
        await Login.ValidLogin()
        //console.log('valid Login Test Passed')
        await use(page);

    },

    InvalidLogin: async ({ page }, use) => {

        const Login = new Loginform(page)
        await page.goto('https://www.automationexercise.com/login')
        await page.waitForTimeout(5000)
        await Login.InValidLogin()
        //console.log('Invalid Login Test Passed')
        await use(page);

    },

    ValidSignup: async ({ page }, use) => {

        await page.goto('https://www.automationexercise.com/login')
        const signup = new Signupform(page);
        await use(signup);

    }


});



export { test, expect };