const { expect } = require("@playwright/test")
const newFeature =(page)=> ({   

async goToLoginPage(){
    await page.goto('http://rahulshettyacademy.com/loginpagePractise/')
},

async login(username, password){
    await page.locator('[id="username"]').fill(username)
    await page.locator('[id="password"]').fill(password)
    await page.locator('[ id="terms"]').check()
    await page.locator('[ id="signInBtn"]').click()
    await page.locator('.card-body a').first().waitFor()
},

async selectOrder(products,productName){
    await products.filter({hasText: productName}).getByRole("button",{name:"Add "}).click()
    await page.locator('#navbarResponsive a').click()
    await page.locator('[class="table table-hover"]').waitFor()
},

async selectDoubleOrder(products,productName,secondOrder){
    await products.filter({hasText: productName}).getByRole("button",{name:"Add "}).click()
    await products.filter({hasText: secondOrder}).getByRole("button",{name:"Add "}).click()
    await page.locator('#navbarResponsive a').click()
    await page.locator('[class="table table-hover"]').waitFor()
},

async placeOrder(final_payment,item_amount){
    console.log( await item_amount.textContent());
    console.log(await final_payment.textContent())
    await expect(final_payment).toHaveText(await item_amount.textContent());  
},

async selectCountry(type_Country,exact_CountryName){
    await page.locator('[class="btn btn-success"]').click()
    await page.locator('[id="country"]').pressSequentially(type_Country,{delay:200})
    await page.locator('[class="suggestions"]').waitFor()
   const display_country = await page.locator('[class="suggestions"] a')
   if (display_country === exact_CountryName)
   {
    await page.locator('[class="suggestions"] a').click()
    await page.locator('#checkbox2').waitFor()
   await page.locator('#checkbox2').click()
   }
},
async validateOrder(){
    await page.locator('[class="btn btn-success btn-lg"]').click()
    const success_Message = page.locator('[class="alert alert-success alert-dismissible"]')
    console.log(await success_Message.textContent())
    await expect(success_Message).toContainText('Success! Thank you! Your order will be delivered in next few weeks')
}
})
module.exports = newFeature