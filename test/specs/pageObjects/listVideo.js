const VIDEO_NAV_SELECTOR = 'a.hui-primarynav__item';
const CHECKBOX_CONTAINER_SELECTOR = '.library-checkboxes';
const CLEAR_ELEMENT_SELECTOR = '.library-sidepanel__clear'

export async function clickVideoNav() {
    const videoLink = await browser.$(VIDEO_NAV_SELECTOR);
    await videoLink.click();
}

export async function filterVideosByCustomLabel(customLabelValue) {
    const checkboxContainer = await $(CHECKBOX_CONTAINER_SELECTOR);
    const customLabel = await checkboxContainer.$(`[value="${customLabelValue}"]`);
    await customLabel.click();
}

export async function clearFilter() {
    const clearFilter = await browser.$(CLEAR_ELEMENT_SELECTOR);
    await clearFilter.click();
}
