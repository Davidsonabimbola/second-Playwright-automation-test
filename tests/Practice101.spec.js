const {test, expect} = require('@playwright/test');
const newFeature = require('../pages/protoCommerceLogin');

test('Login in test', async ({page})=>{
     const NewFeature = newFeature(page)
    const type_Country = 'Fr'
    const exact_CountryName = 'France'
    const productName = 'iphone X'
    const products =   page.locator('[class="card h-100"]')
    const item =  await page.locator('tbody tr').nth(0)
    const item_amount =  await item.locator('td').nth(3) //R 100000
    const total_payment = await page.locator('tbody tr').nth(1)
    const final_payment = await total_payment.locator('td').nth(4)
    const userName = ('rahulshettyacademy')
    const password = ('learning')

    await NewFeature.goToLoginPage()
await NewFeature.login(userName,password)
await NewFeature.selectOrder(products,productName)
await NewFeature.placeOrder(final_payment,item_amount)
await NewFeature.selectCountry(type_Country,exact_CountryName)
await NewFeature.validateOrder()

})
//      await page.goto('http://rahulshettyacademy.com/loginpagePractise/')
//      await page.locator('[id="username"]').fill('rahulshettyacademy')
//      await page.locator('[id="password"]').fill('learning')
//      await page.locator('[ id="terms"]').check()
//      await page.locator('[ id="signInBtn"]').click()
//      await page.locator('.card-body a').first().waitFor()
//    await products.filter({hasText: productName}).getByRole("button",{name:"Add "}).click()
//    await page.locator('#navbarResponsive a').click()
//    await page.locator('[class="table table-hover"]').waitFor()
//     console.log( await item_amount.textContent());
//     console.log(await final_payment.textContent())
//     await expect(final_payment).toHaveText(await item_amount.textContent());  
//     await page.locator('[class="btn btn-success"]').click()
//     await page.locator('[id="country"]').pressSequentially(type_Country,{delay:200})
//     await page.locator('[class="suggestions"]').waitFor()
//    const display_country = await page.locator('[class="suggestions"] a')
//    if (display_country === exact_CountryName)
//    {
//     await page.locator('[class="suggestions"] a').click()
//     await page.locator('#checkbox2').waitFor()
//    await page.locator('#checkbox2').click()
//    }
//    await page.locator('[class="btn btn-success btn-lg"]').click()
//    const success_Message = page.locator('[class="alert alert-success alert-dismissible"]')
//    console.log(await success_Message.textContent())
//    await expect(success_Message).toContainText('Success! Thank you! Your order will be delivered in next few weeks')

 test.only('@Multiple orders', async({page})=>{
  const NewFeature = newFeature(page)
    const type_Country = 'Fr'
    const exact_CountryName = 'France'
     const selection1 = 'iphone X'
    const selection2 = 'Samsung Note 8'
    const products =   page.locator('[class="card h-100"]')
    // const item =  await page.locator('tbody tr').nth(0) 
    // const item_amount =  await item.locator('td').nth(3)
    // const total_payment = await page.locator('tbody tr').nth(1)
    // const final_payment = await total_payment.locator('td').nth(4)
    const userName = ('rahulshettyacademy')
    const password = ('learning')
    const Item1= await page.locator('tbody tr').nth(0)
    const Item2 = await  page.locator('tbody tr').nth(1)
    const value1 = await Item1.locator('[class="col-sm-1 col-md-1 text-center"]').nth(1)
    const value2 = await Item2.locator('[class="col-sm-1 col-md-1 text-center"]').nth(1)
    const productNames = [selection1, selection2]
    let totalMoney = 0
   
    
    await NewFeature.goToLoginPage()
await NewFeature.login(userName,password)
await NewFeature.selectDoubleOrder(products,selection1,selection2) 
console.log(await value1.textContent())
console.log(await value2.textContent())


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


for (let i = 0; i < productNames.length; i++) {
  const productName = productNames[i]; // to iterate over all the products name in the productNames array
  const col = await page.locator('tbody tr').nth(i);
  const sole_col = await col.locator('td').nth(0);
  const sole_column = await sole_col.locator('[class="media"]');
  const main_sole_col = await sole_column.locator('a').nth(1);
  const productText = await main_sole_col.textContent();

  if (productText.includes(productName)) {
    console.log(`Found product: ${productName}`);
    
    const value = await col.locator('[class="col-sm-1 col-md-1 text-center"]').nth(1);
    const text = await value.textContent();
    const arrayText = text.split('.')[1];
    const Money_value = parseInt(arrayText);
    console.log(`Price of ${productName}: ${Money_value}`);
    totalMoney += Money_value
    
  }
  }
  console.log(`Total money for all products: ${totalMoney}`)
await NewFeature.selectCountry(type_Country,exact_CountryName)
await NewFeature.validateOrder()

 })

