import{test, expect} from '@playwright/test'

export class contactUsForm {

    constructor (page)
    {
        this.page = page
        //this.HomePageVisiblity = this.page.locator('//a[@href="/"]')
        this.ContactUsButton = this.page.locator('//a[@href="/contact_us"]')
        this.FeebackNavigationLink = this.page.locator('//a[@href="mailto:feedback@automationexercise.com"]')


    }

    async ContactUsClick(){
        await expect (this.page).toHaveURL('https://www.automationexercise.com/')
        await this.ContactUsButton.click()
        expect (this.page).toHaveURL('https://www.automationexercise.com/contact_us');
        await this.FeebackNavigationLink.click()
        //dummy comment for runing pipelinee.
        //Nisha

        


    }


}