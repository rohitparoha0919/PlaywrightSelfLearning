import{ test} from '@playwright/test'
import { Loginform } from '../pages/Page.Login.AE'  

//const Login = new Loginform(page)

test('Login with Valid and Invalid Credentials' , async ({page})=>{

   const Login = new Loginform(page)
    await page.goto('https://www.automationexercise.com/login')    
    await Login.InValidLogin()
    console.log('Invalid Login Test Passed')

})

test ('Login with Valid Credentials', async({page})=>{

const Login = new Loginform(page)
await page.goto('https://www.automationexercise.com/login')      
await Login.ValidLogin()
console.log('valid Login Test Passed')

})