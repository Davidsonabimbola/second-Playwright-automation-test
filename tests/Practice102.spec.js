const {test, expect} = require('@playwright/test');
const multiOrders = require('../pages/multipleOrder_protoCommerce')

test.only('@Multiple Orders', async({page})=>{
    const MultiOrders = multiOrders(page)
      const type_Country = 'Fr'
      const exact_CountryName = 'France'
       const selection1 = 'iphone X'
      const selection2 = 'Samsung Note 8'
      const products =   page.locator('[class="card h-100"]')
      const userName = ('rahulshettyacademy')
      const password = ('learning')
      const Item1= await page.locator('tbody tr').nth(0)
      const Item2 = await  page.locator('tbody tr').nth(1)
      const value1 = await Item1.locator('[class="col-sm-1 col-md-1 text-center"]').nth(1)
      const value2 = await Item2.locator('[class="col-sm-1 col-md-1 text-center"]').nth(1)
      const productNames = [selection1, selection2]
      let totalMoney = 0
      let Summary_value = 0
      
await MultiOrders.goToLoginPage()
await MultiOrders.login(userName, password)
await MultiOrders.selectDoubleOrder(products, selection1, selection2)
await MultiOrders.PrintCurrency(value1, value2)
await MultiOrders.getProducts(productNames,totalMoney,Summary_value)
await MultiOrders.selectCountry(type_Country, exact_CountryName)
await MultiOrders.validateOrder()

  
   })

   // ** */ hard coding content finding
// const col1 = await page.locator('tbody tr').nth(0)
// const sole_col1 = await col1.locator('td').nth(0)
// const sole_column1 = await sole_col1.locator('[class="media"]')
// const main_sole_col1 = await sole_column1.locator('a').nth(1)
// console.log(await main_sole_col1.textContent()) //iphoneX

// const col2 = await page.locator('tbody tr').nth(1)
// const sole_col2 = await col2.locator('td').nth(0)
// const sole_column2 = await sole_col2.locator('[class="media"]')
// const main_sole_col2 = await sole_column2.locator('a').nth(1)
// console.log(await main_sole_col2.textContent()) //Samsung


// const text1 = await value1.textContent()
// const arrayText1 = text1.split('.')[1]
// const Money_value1 = parseInt(arrayText1)
// console.log(Money_value1)

// const text2 = await value2.textContent()
// const arrayText2 = text2.split('.')[1]
// const Money_value2 = parseInt(arrayText2)
// console.log(Money_value2)

// const Sum_ofMoney = Money_value1 + Money_value2
// console.log(Sum_ofMoney)