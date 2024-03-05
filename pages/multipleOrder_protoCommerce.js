const { expect } = require("@playwright/test")
const multiOrders =(page)=> ({  

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

    async selectDoubleOrder(products,productName,secondOrder){
        await products.filter({hasText: productName}).getByRole("button",{name:"Add "}).click()
        await products.filter({hasText: secondOrder}).getByRole("button",{name:"Add "}).click()
        await page.locator('#navbarResponsive a').click()
        await page.locator('[class="table table-hover"]').waitFor()
    },
    
    async PrintCurrency(value1, value2){
        console.log(await value1.textContent())
        console.log(await value2.textContent())
    },

    async getProducts(productNames,totalMoney,Summary_value){
        for (let i = 0; i < productNames.length; i++) {
            const productName = productNames[i]; // to iterate over all the products name in the productNames array
            const col = page.locator('tbody tr').nth(i);
            const sole_col = col.locator('td').nth(0);
            const sole_column =  sole_col.locator('[class="media"]');
            const main_sole_col =  sole_column.locator('a').nth(1);
            const productText = await main_sole_col.textContent(); // the names of the brands i.e i phoneX, Samsung 
          
            if (productText.includes(productName)) {
              console.log(`Found product: ${productName}`);
              
              const value =  col.locator('[class="col-sm-1 col-md-1 text-center"]').nth(1);
              const text = await value.textContent();
              const arrayText = text.split('.')[1];
              const Money_value = parseInt(arrayText);
              console.log(`Price of ${productName}: ${Money_value}`);
              totalMoney += Money_value
              
            }
            }
            console.log(`Total money for all products: ${totalMoney}`)
            const get_payment = page.locator('tbody tr').nth(2)
            const amount_get_payment = get_payment.locator('[class="text-right"]')
            const final_amount_get_payment = amount_get_payment.locator('h3')
            const summary = await final_amount_get_payment.textContent()
            const arraySummary = summary.split('.')[1];
            Summary_value = parseInt(arraySummary)
            console.log(Summary_value)
               expect(Summary_value).toBeTruthy()
               expect(Summary_value)=== totalMoney
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
module.exports = multiOrders