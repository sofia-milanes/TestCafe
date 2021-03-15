import { Selector, t } from 'testcafe'

class CheckOutYourInformationPage {
    constructor (){
        this.pageTitle = Selector('.subheader').withExactText('Checkout: Your Information')
        this.firstNameField = Selector('#first-name')
        this.lastNameField = Selector('#last-name')
        this.postalCodeField = Selector('#postal-code')
        this.cancelButton = Selector('.cart_cancel_link')
        this.continueButton = Selector('.btn_primary')
        this.errorMessage = Selector('h3[data-test="error"]')
    }

    async submitYourInformationForm(firstname, lastname, postalcode){
        await t.typeText(this.firstNameField, firstname, {paste:true})
        await t.typeText(this.lastNameField, lastname, {paste:true})
        await t.typeText(this.postalCodeField, postalcode, {paste:true})
        await t.click(this.continueButton)
    }

    async cancelYourInformationForm(firstname, lastname, postalcode){
        await t.click(this.cancelButton)
    }

    async submitYourInformationIncompleteForm(firstname, lastname){
        await t.typeText(this.firstNameField, firstname, {paste:true})
        await t.typeText(this.lastNameField, lastname, {paste:true})
        await t.click(this.continueButton)
    }

    async submitYourInformationEmptyForm(){
        await t.click(this.continueButton)
    }    
}
export default new CheckOutYourInformationPage()