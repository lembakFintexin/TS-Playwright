import {test, expect } from '@playwright/test';
import {LoginPage} from '../pages/login-page';
import {DashboardPage} from '../pages/dashboard-page';
import {SelectIaCodeSpec} from '../pages/select-ia-code';
import {CreateHouseHold} from '../pages/create-house-hold';
import {testEnvironment} from '../config/ConfigENV';
import {clearAllFiles} from '../utils/files';
//import path = require("path");


let loginPage: LoginPage;
let dashboardPage: DashboardPage;
let selectIaCodeSpec: SelectIaCodeSpec;
let createHouseHold: CreateHouseHold;
const pathToStoreFile='token.json';

test.beforeEach(async ({page})=>{
  loginPage = new LoginPage(page);
  dashboardPage = new DashboardPage(page)
  selectIaCodeSpec =new SelectIaCodeSpec(page)
  createHouseHold = new CreateHouseHold(page)
  await page.goto(testEnvironment.URL);
})

test('Save token ', async ({ page }) =>{
  // const directoryPath =  // Replace 'data' with your directory name

  //await clearAllFiles(path.join(__dirname, pathToStoreFile));
  await loginPage.login();
  await page.waitForTimeout(5000);
  await page.context().storageState({ path: pathToStoreFile }).then((rest) => {console.log(rest)});

});


test('Inset token example ', async ({ page }) =>{
  await dashboardPage.navigateToSelectIACodeModalWindow();
  await selectIaCodeSpec.selectIACode('B52');
  await dashboardPage.navigateToCreateHouseHoldModalWindow();
  await createHouseHold.createTemplateWithDifferentName("sda123")
  await page.waitForTimeout(5000);

});