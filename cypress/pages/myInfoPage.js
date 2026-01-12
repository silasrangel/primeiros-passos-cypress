class MyInfoPage {

    selectorsList() {
       const selectors = {
            firstNameField: "[name='firstName']",
            lastNameField: "[name='lastName']",
            genericField: ".oxd-input--active",
            dateField: "[placehold='yyyy-mm-dd']",
            genericComboBox: ".oxd-select-text--arrow",
            secondItemInComboBox: ".oxd-select-dropdown > :nth-child(2)",
            thisrdItemInComboBox: ".oxd-select-dropdown > :nth-child(3)",
            dataCloseButton: ".--close",
            submitButton: "[type='submit']"
        }

        return selectors
    }

    fillPersonalDetails(firstName, lastName, nickname) {
        cy.get(this.selectorsList().firstNameField).clear().type(firstName)
        cy.get(this.selectorsList().lastNameField).clear().type(lastName)
        cy.get(this.selectorsList().genericField).eq(2).clear().type(nickname)

    }
    fillEmployeeDetails(employeeId, OtherId, driversLicenseNumber, expiryDate) {
        cy.get(this.selectorsList().genericField).eq(3).clear().type(employeeId)
        cy.get(this.selectorsList().genericField).eq(4).clear().type(OtherId)
        cy.get(this.selectorsList().genericField).eq(5).clear().type(driversLicenseNumber)
        cy.get(this.selectorsList().genericField).eq(6).clear().type(expiryDate)
        cy.get(this.selectorsList().dataCloseButton).click()
}

    saveForm() {
         cy.get(this.selectorsList().submitButton).eq(0).click({force: true})
         cy.get('body').should('contain', 'Successfully Updated')
         cy.get('.oxd-toast-close')

    }

    fillStatus() {
        cy.get(this.selectorsList().genericComboBox).eq(0).click({force: true})
        cy.get(this.selectorsList().secondItemInComboBox).click()
        cy.get(this.selectorsList().genericComboBox).eq(1).click({force: true})
        cy.get(this.selectorsList().thisrdItemInComboBox).click()
}

}

export default MyInfoPage