import {test, expect} from  '@playwright/test'
import { contactUsForm } from '../pages/Page.ContactUs.AE'
import { Loginform } from '../pages/Page.Login.AE'

test('click on contact us button ', async({page})=>{

    const Login = new Loginform(page)
await page.goto('https://www.automationexercise.com/login')      
await Login.ValidLogin()
console.log('valid Login Test Passed')
    const Contactus = new contactUsForm(page)
await Contactus.ContactUsClick()



})