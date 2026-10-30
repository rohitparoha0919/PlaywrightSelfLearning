import {expect} from '@playwright/test'
import {test} from './Fixtures/test-AEFixtures'
import { AddToCartForm } from '../pages/Page.AddToCart.AE'

test('Login & Add to Cart', async({ValidLogin, page})=>{
const AddtoCart = new AddToCartForm(page)
await AddtoCart.AddItemsToCardAndCheckout()


})

  