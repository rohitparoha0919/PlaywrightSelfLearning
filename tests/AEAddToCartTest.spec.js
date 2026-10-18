import {test, expect} from '@playwright/test'

import { AddToCartForm } from '../pages/Page.AddToCart.AE'
import { Loginform } from '../pages/Page.Login.AE'

test('Login & Add to Cart', async({page})=>{



await page.goto('https://www.automationexercise.com/login')  

const Login = new Loginform(page)    
await Login.ValidLogin()
console.log('valid Login Test Passed')
const AddtoCart = new AddToCartForm(page)
await AddtoCart.AddItemsToCardAndCheckout()


})

  