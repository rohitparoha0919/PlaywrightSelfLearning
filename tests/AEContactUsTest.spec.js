import {expect} from  '@playwright/test'
import { contactUsForm } from '../pages/Page.ContactUs.AE'
import {test} from './Fixtures/test-AEFixtures'

test('click on contact us button ', async({ValidLogin, page})=>{

    
const Contactus = new contactUsForm(page)
await Contactus.ContactUsClick()
await page.waitForTimeout(5000)



})