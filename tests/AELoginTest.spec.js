//import{ test} from '@playwright/test'
import { Loginform } from '../pages/Page.Login.AE'  
import {test, expect} from './Fixtures/test-AEFixtures'
//const Login = new Loginform(page)

test('Login with Valid and Invalid Credentials' , async ({InvalidLogin})=>{

   //const Login = new Loginform(page)
   // await page.goto('https://www.automationexercise.com/login')    
   // await Login.InValidLogin()
   //Comnmented above code as using custom fixture
    console.log('Invalid Login Test Passed')

})

test ('Login with Valid Credentials', async({ValidLogin})=>{

//const Login = new Loginform(page)
//await page.goto('https://www.automationexercise.com/login')      
// await Login.ValidLogin()
//Comnmented above code as using custom fixture
console.log('valid Login Test Passed')

})