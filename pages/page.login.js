 export class Loginpage
   
{
   constructor (page)
   {
    this.page = page;
    this.usernamefield = page.locator('#user-name')
    this.passwordfield = page.locator('#password')
    this.loginbutton = page.locator('#login-button')



   } 

   async dologin()
   {
    await this.usernamefield.fill("standard_user")
    await this.passwordfield.fill("secret_sauce")
    await this.loginbutton.click()

   }

}

