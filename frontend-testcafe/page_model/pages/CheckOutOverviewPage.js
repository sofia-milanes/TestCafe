import { Selector, t } from 'testcafe'

class CheckOutOverviewPage {
    constructor (){
        this.pageTitle = Selector('.subheader').withExactText('Checkout: Overview')
        this.itemlist = Selector('.cart_item')
        this.cancelButton = Selector('.cart_cancel_link')
        this.finishButton = Selector('.btn_action')
        this.cartItem1 = Selector('.cart_list .cart_item:nth-of-type(3) .inventory_item_name')
        this.cartItem2 = Selector('.cart_list .cart_item:nth-of-type(4) .inventory_item_name')
        this.cartItem3 = Selector('.cart_list .cart_item:nth-of-type(5) .inventory_item_name')
        this.cartItem4 = Selector('.cart_list .cart_item:nth-of-type(6) .inventory_item_name')
        this.cartItem5 = Selector('.cart_list .cart_item:nth-of-type(7) .inventory_item_name')
        this.cartItem6 = Selector('.cart_list .cart_item:nth-of-type(8) .inventory_item_name')
        
    }

    async cancelCheckOutOverview(){
        await t.click(this.cancelButton)
    }

    async finishCheckOutOverview(){
        await t.click(this.finishButton)
    }

    async getItemsName(item){
        item.innerText
    }
}
export default new CheckOutOverviewPage()