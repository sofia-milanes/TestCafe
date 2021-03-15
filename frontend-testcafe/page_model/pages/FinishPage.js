import { Selector, t } from 'testcafe'

class FinishPage {
    constructor (){
        this.pageTitle = Selector('.subheader').withExactText('Finish')
        this.confirmationText = Selector('.complete-header').withExactText('THANK YOU FOR YOUR ORDER')
        this.successMessage = Selector('.complete-text').withExactText('Your order has been dispatched, and will arrive just as fast as the pony can get there!')
    }   
}
export default new FinishPage()