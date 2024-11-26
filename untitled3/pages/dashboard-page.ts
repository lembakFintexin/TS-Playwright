import {Page} from '@playwright/test';

export class DashboardPage {
    private page: Page;
    allAlertBttn: any;
    createHouseHoldBttn: any;
    selectIaCodeBttnForModal: any

    constructor(page: Page) {
        this.page = page;
        this.allAlertBttn = this.page.locator('//rbc-icon[@data-test="dashboard-view-all-alerts"]');
        this.createHouseHoldBttn = this.page.locator('//rbc-button[@data-test="create-new-household-btn"]');
        this.selectIaCodeBttnForModal= this.page.locator('//button[@aria-label="ia codes select"]');


    }

    async navigateToAllAlertsPage() {
        await this.allAlertBttn.click("data-test=\"create-new-household-btn\"");

    }

    async navigateToSelectIACodeModalWindow() {
        await this.selectIaCodeBttnForModal.click();
    }

    async navigateToCreateHouseHoldModalWindow() {
        //await this.page.waitForLoadState('networkidle',{timeout:15000});
        await this.createHouseHoldBttn.click();
        //  await this.page.evaluate(() => { return new Promise(resolve => requestIdleCallback(resolve)); });
    }

}
