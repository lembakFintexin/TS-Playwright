import { test, expect } from '@playwright/test';
import {LoginPage} from '../pages/login-page';
import {DashboardPage} from '../pages/dashboard-page';
import {CreateHouseHold} from '../pages/create-house-hold';
import {HouseholdNameConst} from '../data_provider/create-house-hold-tests/create-household.const';
import {SelectIaCodeSpec} from '../pages/select-ia-code';
import {testEnvironment} from '../config/ConfigENV';
import {testJson} from '../mock_responce/five_alerts';



let loginPage: LoginPage;
let dashboardPage: DashboardPage;
let createHouseHold: CreateHouseHold;
let selectIaCodeSpec: SelectIaCodeSpec;
//import mockData = require('../mock_responce/five_alerts_in_responce_B52.json');

test.beforeEach(async ({page})=>{
    loginPage = new LoginPage(page);
    dashboardPage = new DashboardPage(page)
    createHouseHold = new CreateHouseHold(page)
    selectIaCodeSpec =new SelectIaCodeSpec(page)
    await page.goto(testEnvironment.URL);

})
test.use({ storageState: 'auto_tests/config/token.json' });

test('Create household ', async ({ page }) =>{
    await dashboardPage.navigateToSelectIACodeModalWindow();
    await selectIaCodeSpec.selectIACode('B52');
    await dashboardPage.navigateToCreateHouseHoldModalWindow();
    await createHouseHold.createTemplateWithDifferentName("sda123")
});


test.describe('Create household with data provider', () => {
    HouseholdNameConst.forEach(( HouseHoldName ) => {
        test(`Create household with different name: ${HouseHoldName.HouseholdName} `, async ({ page }) => {
            await dashboardPage.navigateToSelectIACodeModalWindow();
            await selectIaCodeSpec.selectIACode('B52');
            await dashboardPage.navigateToCreateHouseHoldModalWindow();
            await createHouseHold.createTemplateWithDifferentName(HouseHoldName.HouseholdName)
        });
    });
});



test('Examole of mock responce ', async ({ page }) =>{
    await page.route('**/api/alerts/summary?filter=businessUnitCode:in:**', (route) => {
        route.fulfill({
            status: 200,
            contentType: 'application/json',
            body: JSON.stringify(testJson), });
    });
    await loginPage.login();
    await dashboardPage.navigateToSelectIACodeModalWindow();
    await selectIaCodeSpec.selectIACode('001');
    await page.waitForTimeout(15000);
});