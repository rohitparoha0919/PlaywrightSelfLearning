export class dashboardpage
{
    constructor (page)
    {
        this.page = page;
        this.addTocart1 = page.locator('#add-to-cart-sauce-labs-backpack')
        this.addTocart2 = page.locator('#add-to-cart-sauce-labs-bike-light')
        this.removebutton = page.locator('#remove-sauce-labs-backpack')

    }

    async clickAddToCart()
    {
        await this.addTocart1.click()
        await this.addTocart2.click()

    }
    
    async removeProductFromCart()
    {
        await this.removebutton.click()
    }
}