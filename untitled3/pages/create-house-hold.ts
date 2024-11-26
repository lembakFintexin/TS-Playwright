import {expect, Page} from '@playwright/test';

export class CreateHouseHold {
    private page: Page;
    householdNameField:any
    iaCodeDropDownList:any
    firstIACodeInDropDownList:any
    assetBreakdownTemplate:any
    firstAssetBreakdownTemplateInDropDownList:any
    // usdBttn:any
    saveBttn:any

    constructor(page: Page) {
        this.page = page;
        this.householdNameField = this.page.locator('//input[@id="household-name-input"]')
        this.iaCodeDropDownList = this.page.locator('//p-dropdown[@data-test="cnh-ia-codes-dropdown"]')
        this.firstIACodeInDropDownList = this.page.locator('(//p-dropdown[@data-test="cnh-ia-codes-dropdown"]//li)[1]')
        this.assetBreakdownTemplate = this.page.locator('//p-dropdown[@data-test="cnh-asset-brkd-dropdown"]')
        this.firstAssetBreakdownTemplateInDropDownList = this.page.locator('(//p-dropdown[@data-test="cnh-asset-brkd-dropdown"]//li)[1]')
        //this.usdBttn = this.page.locator('(//button[@label="USD"]')
        this.saveBttn = this.page.locator(' //button[@data-test="cnh-save-btn"]')
    }

    async createTemplateWithDifferentName(name:String) {
        await this.householdNameField.fill(name)
        await this.iaCodeDropDownList.click()
        await this.firstIACodeInDropDownList.click()
        // await this.page.waitForResponse(response => response.url().includes('/wealth-management/notification/summary') && response.status() === 200 ,{timeout:15000});
        //await this.page.waitForResponse(response => response.url().includes('/summary') && response.status() === 200 ,{timeout:30000});
        //await this.page.waitForResponse(response => response.url().includes('/api/asset-class-groups') && response.status() === 200 ,{timeout:15000});
        await this.assetBreakdownTemplate.click()
        await this.assetBreakdownTemplate.click()
        await this.page.waitForTimeout(2000);
        await this.assetBreakdownTemplate.click()
        await this.firstAssetBreakdownTemplateInDropDownList.click()
        await expect(this.saveBttn).toBeEnabled();
        await this.saveBttn.click()
    }









}
