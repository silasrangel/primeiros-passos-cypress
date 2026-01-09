import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dasthboardPage.js';
import MenuPage from '../pages/menuPage.js';

const loginPage = new LoginPage(); 
const dashboardPage = new DashboardPage();
const menuPage = new MenuPage();

describe('Orange HRM Tests', () => {

const selectorsList = {
  firstNameField: "[name='firstName']",
  lastNameField: "[name='lastName']",
  genericField: ".oxd-input--active",
  dateField: "[placehold='yyyy-mm-dd']",
  genericComboBox: ".oxd-select-text--arrow",
  dataCloseButton: ".--close",
  secondItemInComboBox: ".oxd-select-dropdown > :nth-child(2)",
  thisrdItemInComboBox: ".oxd-select-dropdown > :nth-child(3)",
  submitButton: "[type='submit']"
}

it.only('User Info Update - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)

    dashboardPage.loginWithAnyUser()

    menuPage.accessMyInfo()

  
    cy.get(selectorsList.firstNameField).clear().type('FirstNameTest')
    cy.get(selectorsList.lastNameField).clear().type('LastNameTest')
    cy.get(selectorsList.genericField).eq(2).clear().type('NicknameTest')
    cy.get(selectorsList.genericField).eq(3).clear().type('Employee')
    cy.get(selectorsList.genericField).eq(4).clear().type('OtherIdTest')
    cy.get(selectorsList.genericField).eq(5).clear().type('DriversLicenseTest')
    cy.get(selectorsList.genericField).eq(6).clear().type('2025-03-10')
    cy.get(selectorsList.dataCloseButton).click()
    cy.get(selectorsList.submitButton).eq(0).click({force: true})
    cy.get('body').should('contain', 'Successfully Updated')
    cy.get('.oxd-toast-close')

    cy.get(selectorsList.genericComboBox).eq(0).click({force: true})
    cy.get(selectorsList.secondItemInComboBox).click()
    cy.get(selectorsList.genericComboBox).eq(1).click({force: true})
    cy.get(selectorsList.thisrdItemInComboBox).click()
  })
  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
    
  })
})