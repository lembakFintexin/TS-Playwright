//import { test, expect } from '@playwright/test';
//import {LoginPage} from '../pages/login-page';
//import {DashboardPage} from '../pages/dashboard-page';
//import {CreateHouseHold} from '../pages/create-house-hold';
//import {HouseholdNameConst} from '../data_provider/create-house-hold-tests/create-household.const';
//import {SelectIaCodeSpec} from '../pages/select-ia-code';
//import {testEnvironment} from '../config/ConfigENV';
//import {testJson} from '../mock_responce/five_alerts';
//
//
//
//let loginPage: LoginPage;
//let dashboardPage: DashboardPage;
//let selectIaCodeSpec: SelectIaCodeSpec;
//let createHouseHold: CreateHouseHold;
//import {clearAllFiles} from '../utils/files';
//const pathToStoreFile='token.json';
//import path = require("path");
//
////import mockData = require('../mock_responce/five_alerts_in_responce_B52.json');
//
//test.beforeEach(async ({page})=>{
//    loginPage = new LoginPage(page);
//    dashboardPage = new DashboardPage(page)
//    selectIaCodeSpec =new SelectIaCodeSpec(page)
//    createHouseHold = new CreateHouseHold(page)
//    await page.goto(testEnvironment.URL);
//})
//
//
//test('Save token ', async ({ page }) =>{
//    // const directoryPath =  // Replace 'data' with your directory name
//
//    await clearAllFiles(path.join(__dirname, pathToStoreFile));
//    await loginPage.login();
//    await page.waitForTimeout(5000);
//    await page.context().storageState({ path: pathToStoreFile }).then((rest) => {console.log(rest)});
//
//});
//
//
//test.describe('Create household with data provider', () => {
//    HouseholdNameConst.forEach(( HouseHoldName ) => {
//        test(`Create household with different name: ${HouseHoldName.HouseholdName} `, async ({ page }) => {
//            await dashboardPage.navigateToSelectIACodeModalWindow();
//            await selectIaCodeSpec.selectIACode('B52');
//            await dashboardPage.navigateToCreateHouseHoldModalWindow();
//            await createHouseHold.createTemplateWithDifferentName(HouseHoldName.HouseholdName)
//        });
//    });
//});
//
//
//
//test('Examole of mock responce ', async ({ page }) =>{
//    await page.route('**/api/alerts/summary?filter=businessUnitCode:in:**', (route) => {
//        route.fulfill({
//            status: 200,
//            contentType: 'application/json',
//            body: JSON.stringify(testJson), });
//    });
//    await loginPage.login();
//    await dashboardPage.navigateToSelectIACodeModalWindow();
//    await selectIaCodeSpec.selectIACode('001');
//    await page.waitForTimeout(15000);
//});