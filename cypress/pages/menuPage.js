class MenuPage {

    selectorsList() {
        const selectors = {
            myInfobutton: '[href="/web/index.php/pim/viewMyDetails"]',
            
        }

        return selectors
    }

    accessMyInfo() {
        cy.get(this.selectorsList().myInfobutton).click()
    }

    accessorPerformance() {
        cy.get(this.selectorsList().performanceButton).click()
    }
}

export default MenuPage