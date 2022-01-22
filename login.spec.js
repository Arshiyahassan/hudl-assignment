import assert from 'assert';
import { USERNAME, PASSWORD } from '../../credentials';
import { assertHasText, waitForPageLoad } from './pageObjects/basic';
import { loadHudlHomePage, enterCredentialsAndLogin, clickLoginFromHomePage } from './pageObjects/login';

const NEED_HELP_ERROR_LINK = '=Need help?';
const PAGE_FIELD_SELECTOR = '#email';

describe('Hudl application Login flow', () => {

    beforeEach(async () => {
        await loadHudlHomePage();
        await clickLoginFromHomePage();
        await waitForPageLoad(PAGE_FIELD_SELECTOR);
    });

    it('using invalid credentials must return an error message', async () => {

        await enterCredentialsAndLogin(USERNAME, 'wrongPassword');
        const signInErrorMessage = await browser.$(NEED_HELP_ERROR_LINK);

        await assertHasText(signInErrorMessage);
    });

    it('using valid credentials should successfully login', async () => {

        await enterCredentialsAndLogin(USERNAME, PASSWORD);
        const signedInUrl = await browser.getUrl();

        assert(signedInUrl.includes('https://www.hudl.com/login'));
    });
});
