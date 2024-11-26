import {expect, Page} from '@playwright/test';

export class SelectIaCodeSpec {
    private page: Page;
    leftInput:any
    leftFirstInput:any
    toRightButton:any
    saveBttn:any


    constructor(page: Page) {
        this.page = page;
        this.leftInput =  this.page.locator('//input[@data-test="ia-codes-select-source-search"]')
        this.leftFirstInput =  this.page.locator('//div[@data-test="ia-codes-select-picklist-item"]')
        this.toRightButton =  this.page.locator('//button[@aria-label="Move to Target"]')
        this.saveBttn =  this.page.locator('//button[@data-test="ia-codes-select-confirm-modal"]')
    }


    async selectIACode(iaCode: String) {
        await this.leftInput.fill(iaCode)
        await sleep(5000)
        await this.page.waitForLoadState('load');
        await this.leftFirstInput.click()
        await this.toRightButton.click()
        await this.saveBttn.click()
    }



}
function sleep(ms) { return new Promise(resolve => setTimeout(resolve, ms)); }