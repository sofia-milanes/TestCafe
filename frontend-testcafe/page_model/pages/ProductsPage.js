import { Selector, t } from 'testcafe'

class ProductsPage {
    constructor (){
        this.pageTitle = Selector('.product_label')
        this.addButton = Selector('.btn_primary')
        this.sortButton = Selector('.product_sort_container')
        this.shoppingCart = Selector('#shopping_cart_container')
        this.menuButton = Selector('#react-burger-menu-btn')
        this.logoutOption = Selector('#logout_sidebar_link')
        this.shopingCartCounter = Selector('.fa-layers-counter')

        //Add to Cart buttons of Products
        this.addtoCartItem1 = Selector('div:nth-of-type(1) > .pricebar > .btn_inventory.btn_primary')
        this.addtoCartItem2 = Selector('div:nth-of-type(2) > .pricebar > .btn_inventory.btn_primary')
        this.addtoCartItem3 = Selector('div:nth-of-type(3) > .pricebar > .btn_inventory.btn_primary')
        this.addtoCartItem4 = Selector('div:nth-of-type(4) > .pricebar > .btn_inventory.btn_primary')
        this.addtoCartItem5 = Selector('div:nth-of-type(5) > .pricebar > .btn_inventory.btn_primary')
        this.addtoCartItem6 = Selector('div:nth-of-type(6) > .pricebar > .btn_inventory.btn_primary')

        //Remove from Cart buttons of Product
        this.removeCartItem1 = Selector('div:nth-of-type(1) > .pricebar > .btn_inventory.btn_secondary')
        this.removeCartItem2 = Selector('div:nth-of-type(2) > .pricebar > .btn_inventory.btn_secondary')
        this.removeCartItem3 = Selector('div:nth-of-type(3) > .pricebar > .btn_inventory.btn_secondary')
        this.removeCartItem4 = Selector('div:nth-of-type(4) > .pricebar > .btn_inventory.btn_secondary')
        this.removeCartItem5 = Selector('div:nth-of-type(5) > .pricebar > .btn_inventory.btn_secondary')
        this.removeCartItem6 = Selector('div:nth-of-type(6) > .pricebar > .btn_inventory.btn_secondary')
    }

    async logout(){        
        await t.click(this.menuButton)
        await t.click(this.logoutOption)
    }

    async gotoshoppingcartpage(){
        await t.click(this.shoppingCart)
    }

    async addItem(item){
        await t.click(item)
    }

    async removeItem(item){
        await t.click(item)
    } 
}
export default new ProductsPage()