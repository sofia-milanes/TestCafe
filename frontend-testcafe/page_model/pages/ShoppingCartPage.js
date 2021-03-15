import { Selector, t } from 'testcafe'

class ShoppingCartPage {
    constructor (){
        this.pageTitle = Selector('.subheader').withExactText('Your Cart')
        this.continueShoppingButton = Selector('.btn_secondary')
        this.checkoutButton = Selector('.btn_action')
        this.itemlist = Selector('.cart_item')
  
        this.cartItem1 = Selector('.cart_item:nth-of-type(3)') 
        this.cartItem2 = Selector('.cart_item:nth-of-type(4)')
        this.cartItem3 = Selector('.cart_item:nth-of-type(5)')
        this.cartItem4 = Selector('.cart_item:nth-of-type(6)')
        this.cartItem5 = Selector('.cart_item:nth-of-type(7)')
        this.cartItem6 = Selector('.cart_item:nth-of-type(8)')
    }

    async continueShoping(){
        await t.click(this.continueShoppingButton)
    }

    async checkout(){
        await t.click(this.checkoutButton)
    }

    async getItemsName(item){
        item.innerText
    }   
}
export default new ShoppingCartPage()