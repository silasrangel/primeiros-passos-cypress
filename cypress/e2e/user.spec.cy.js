import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dasthboardPage.js';
import MenuPage from '../pages/menuPage.js';
import MyInfoPage from '../pages/myInfoPage.js';


const Chance = require('chance')

const chance = new Chance()
const loginPage = new LoginPage() 
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()

describe('Orange HRM Tests', () => {


it('User Info Update - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)

    dashboardPage.checkDashboardPage()

    menuPage.accessMyInfo()
    myInfoPage.fillPersonalDetails(chance.first(), chance.last(), chance.string())
    myInfoPage.fillEmployeeDetails('EmployTd', 'otherId','Drivers Number', '2026-01-11')
    myInfoPage.fillStatus()
    myInfoPage.saveForm()
  })

})