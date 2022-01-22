import assert from 'assert';

const ELEMENT_VISIBLE_TIMEOUT = 500;

export async function assertHasText(deepSelector) {
    const element = await browser.$(deepSelector);
    const elementText = await element.getText();
    return assert(elementText.length > 0);
}

export async function waitForPageLoad(selector) {
    const enableSelectorElement = await browser.$(
        selector
    );
    await enableSelectorElement.waitForExist({ timeout: ELEMENT_VISIBLE_TIMEOUT });
}

