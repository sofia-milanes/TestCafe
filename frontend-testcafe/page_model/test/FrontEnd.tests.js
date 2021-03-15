import LoginPage from '../pages/LoginPage'
import ProductsPage from '../pages/ProductsPage'
import { ROLES } from '../data/Constants'
import ShoppingCartPage from '../pages/ShoppingCartPage'
import CheckOutYourInformationPage from '../pages/CheckOutYourInformationPage'
import { USERINFORMATION } from '../data/Constants'
import CheckOutOverviewPage from '../pages/CheckOutOverviewPage'
import FinishPage from '../pages/FinishPage'

fixture('Front End Tests')
    .page `https://www.saucedemo.com/`
    .beforeEach(async t => {
        await LoginPage.submitLoginForm(ROLES.VALID_USER.USERNAME, ROLES.VALID_USER.PASSWORD)
    })

test('Login with a valid user', async t => {
    //Validate user navigates to the product's page
    await t.expect(ProductsPage.pageTitle.exists).ok()
})

test.before(async t => {
        await LoginPage.submitLoginForm(ROLES.INVALID_USER.USERNAME, ROLES.INVALID_USER.PASSWORD)
    })
    ('Login with an invalid user', async t => {
    //Validate error message is displayed
    await t.expect(LoginPage.errorMessage.innerText).eql('Epic sadface: Username and password do not match any user in this service')
    await t.expect(LoginPage.errorMessage.exists).ok()
})

test('Logout from Product\'s Page', async t => {
    await ProductsPage.logout()
    //Validate user navigates to the login page
    await t.expect(LoginPage.loginButton.exists).ok()   
})

test('Navigate to the shopping cart', async t => {
    await ProductsPage.gotoshoppingcartpage()
    //Validates user navigates to the shopping cart page
    await t.expect(ShoppingCartPage.pageTitle.exists).ok()
})

test('Add a single item to the shopping cart', async t => {
    await ProductsPage.addItem(ProductsPage.addtoCartItem1)
    await ProductsPage.gotoshoppingcartpage()
    //Validate the item has been added to the shopping cart   
    await t.expect(ProductsPage.shopingCartCounter.exists).ok()
    await t.expect(ProductsPage.shopingCartCounter.innerText).eql('1')
    await t.expect(ShoppingCartPage.itemlist.count).eql(1)
    
})

test('Add a multiple item to the shopping cart', async t => {
    await ProductsPage.addItem(ProductsPage.addtoCartItem1)
    await ProductsPage.addItem(ProductsPage.addtoCartItem3)
    await ProductsPage.addItem(ProductsPage.addtoCartItem4)
    await ProductsPage.addItem(ProductsPage.addtoCartItem6)
    await ProductsPage.gotoshoppingcartpage()
    //Validate all the item have been added to the shopping cart   
    await t.expect(ProductsPage.shopingCartCounter.exists).ok()
    await t.expect(ProductsPage.shopingCartCounter.innerText).eql('4')
    await t.expect(ShoppingCartPage.itemlist.count).eql(4)
})

test('Continue with missing mail information', async t => {
    await ProductsPage.addItem(ProductsPage.addtoCartItem1)   
    await ProductsPage.gotoshoppingcartpage()
    await ShoppingCartPage.checkout()
    await CheckOutYourInformationPage.submitYourInformationEmptyForm()
    //Validate error message is displayed in the user's information page
    await t.expect(CheckOutYourInformationPage.errorMessage.exists).ok()
    await t.expect(CheckOutYourInformationPage.errorMessage.innerText).eql('Error: First Name is required')
})

test('Fill users information', async t => {
    await ProductsPage.addItem(ProductsPage.addtoCartItem1)   
    await ProductsPage.gotoshoppingcartpage()
    await ShoppingCartPage.checkout()
    await CheckOutYourInformationPage.submitYourInformationForm(USERINFORMATION.USER1.FIRSTNAME, USERINFORMATION.USER1.LASTNAME, USERINFORMATION.USER1.POSTALCODE)  
    //Validate the user navigates to the overview page once his data has been filled
    await t.expect(CheckOutOverviewPage.pageTitle.exists).ok()
})

test('Final order items', async t => {
    await ProductsPage.addItem(ProductsPage.addtoCartItem1)
    await ProductsPage.addItem(ProductsPage.addtoCartItem3)
    await ProductsPage.gotoshoppingcartpage()
    await ShoppingCartPage.checkout()
    await CheckOutYourInformationPage.submitYourInformationForm(USERINFORMATION.USER1.FIRSTNAME, USERINFORMATION.USER1.LASTNAME, USERINFORMATION.USER1.POSTALCODE)
    //Validate items in the overview page match with the added items
    await t.expect(CheckOutOverviewPage.pageTitle.exists).ok()
    await t.expect(await ShoppingCartPage.getItemsName(ShoppingCartPage.cartItem1))
        .eql(await CheckOutOverviewPage.getItemsName(CheckOutOverviewPage.cartItem1))   
    await t.expect(await ShoppingCartPage.getItemsName(ShoppingCartPage.cartItem2))
        .eql(await CheckOutOverviewPage.getItemsName(CheckOutOverviewPage.cartItem2))
})

test('Complete a purchase', async t => {
    await ProductsPage.addItem(ProductsPage.addtoCartItem1)
    await ProductsPage.addItem(ProductsPage.addtoCartItem3)
    await ProductsPage.gotoshoppingcartpage()
    await ShoppingCartPage.checkout()
    await CheckOutYourInformationPage.submitYourInformationForm(USERINFORMATION.USER1.FIRSTNAME, USERINFORMATION.USER1.LASTNAME, USERINFORMATION.USER1.POSTALCODE)
    await CheckOutOverviewPage.finishCheckOutOverview()    
    //Validate the user navigates to the confirmation page
    await t.expect(FinishPage.pageTitle.exists).ok()
    await t.expect(FinishPage.confirmationText.exists).ok()
    await t.expect(FinishPage.successMessage.exists).ok() 
})
