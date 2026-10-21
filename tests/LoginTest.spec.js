import { test, expect } from '@playwright/test'

import { Loginpage } from '../pages/page.login'
import { dashboardpage } from '../pages/page.dashboard'

test('Flowtest', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/')

    const loginpage = new Loginpage(page);
    await loginpage.dologin()
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')

    await page.waitForTimeout(5000)

    const productPage = new dashboardpage(page);

    await productPage.clickAddToCart();

    await page.waitForTimeout(3000)

    await productPage.removeProductFromCart()
    await page.waitForTimeout(5000);

        //dummy comment for git clone
        // added a comment in the feature branch not main 
        


})