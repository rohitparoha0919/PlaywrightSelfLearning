import{test, expect} from '@playwright/test'
import { Loginform } from './Page.Login.AE'

export class AddToCartForm{

    constructor (page){

        this.page = page
        this.LogoutButtonVisiblity = page.locator('//a[@href="/logout"]')
        this.productsButton = page.locator('//a[@href="/products"]')
        this.ClickOnWomenCatagoryicon = page.locator('//h4/a[@href="#Women"]')
        this.SelectWomenCatagoryDress = page.locator('//a[@href="/category_products/1"]')
        this.WomenPageUrl = ('https://www.automationexercise.com/category_products/1')
        this.WomenDressViewProduct = page.locator('//a[@href="/product_details/3"]')
        this.WomenDressAddToCart = page.locator('//button[@class="btn btn-default cart"]')
        //this.WomenDressTwoAdd = page.locator('//a[@data-product-id="4"]')
        this.AddToCartsuccessMessage = page.locator('//h4[@class="modal-title w-100"]')
        this.viewCartItemsButton = page.locator('//button[@class="btn btn-success close-modal btn-block"]')
        this.clickOnCarts = page.locator('//a[@href="/view_cart" and normalize-space()="Cart"]')
        this.ProceedToCheckoutButton = page.locator('//a[@class="btn btn-default check_out"]')////div/a[@class="btn btn-default check_out"]
        this.AddCommentTextbox = page.locator('//textarea[@class="form-control"]')
        this.PlaceOrderButton = page.locator('//a[@href="/payment"]')

    }

      async  AddItemsToCardAndCheckout(){
            
            await expect (this.LogoutButtonVisiblity).toBeVisible()
            await this.productsButton.click()
            await this.ClickOnWomenCatagoryicon.click()
            await this.SelectWomenCatagoryDress.click()
            await expect(this.page).toHaveURL(this.WomenPageUrl)
            await this.WomenDressViewProduct.click()
            await this.WomenDressAddToCart.click()
            //await expect(this.AddToCartsuccessMessage).toBeVisible()
            //await this.WomenDressTwoAdd.click()
            await expect(this.AddToCartsuccessMessage).toBeVisible()
            await this.viewCartItemsButton.click()
            await this.clickOnCarts.click()
            await this.page.waitForTimeout(3000)
            await this.ProceedToCheckoutButton.click()
            await this.AddCommentTextbox.fill('Test Transaction')
            await this.PlaceOrderButton.click()
        }


}