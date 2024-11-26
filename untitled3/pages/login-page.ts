import {expect, type Page } from '@playwright/test';
import {testEnvironment} from '../config/ConfigENV';
//export const getEmailBttn = (page: any) => page.locator('//input[@type="email"]');


export class LoginPage {
  private page: Page;
  submitBttn: any;
  emailField: any;
  passwordField: any;
  header: any;

  constructor(page: Page) {
    this.page = page;  // Pass the Playwright `page` object
    this.submitBttn =  this.page.locator('//input[@id="idSIButton9"]')
    this.emailField = this.page.locator('//input[@type="email"]')
    this.passwordField = this.page.locator('//input[@name="passwd"]')
    this.header = this.page.locator('//*[@data-test="dashboard-main-header"]')
  }

  async login() {
    await expect(this.emailField).toBeEnabled({timeout:10000})
    await this.emailField.fill(testEnvironment.Email)
    await this.submitBttn.click()
    await this.page.waitForTimeout(4000);
    await expect(this.passwordField).toBeEnabled({timeout:10000})
    await this.passwordField.fill(testEnvironment.Password)
    await this.page.waitForTimeout(2000);
    await this.submitBttn.click()
    await expect(this.header).toBeEnabled({timeout:15000})
  }


}