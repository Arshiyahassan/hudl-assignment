import { USERNAME, PASSWORD } from '../../credentials';
import { assertHasText, waitForPageLoad } from './pageObjects/basic';
import { loadHudlHomePage, enterCredentialsAndLogin, clickLoginFromHomePage } from './pageObjects/login';
import { clickVideoNav, filterVideosByCustomLabel, clearFilter } from './pageObjects/listVideo';

const USERNAME_INPUT_SELECTOR = '#email';
const VISIBLE_TIMEOUT = 500;

describe('Filter videos', () => {

  before(async () => {
    await loadHudlHomePage();
    await clickLoginFromHomePage();
    await waitForPageLoad(USERNAME_INPUT_SELECTOR);
    await enterCredentialsAndLogin(USERNAME, PASSWORD);
  });

  beforeEach(async () => {
    await clickVideoNav();
  });

  afterEach(async () => {
    await clearFilter();
  });

  it('filter videos by custom label - First Half', async () => {
    await filterVideosByCustomLabel('firsthalf');

    const firstHalfVideosSelector = await browser.$('h4*=First Half');
    await firstHalfVideosSelector.getText();

    await firstHalfVideosSelector.waitForExist({ timeout: VISIBLE_TIMEOUT, timeoutMsg: 'No videos available for label, First Half' });
    await assertHasText(firstHalfVideosSelector);
  });

  it('filter videos by custom label - For Testing', async () => {
    await filterVideosByCustomLabel('For Testing');

    const forTestingVideosSelector = await browser.$('h4*=test');
    await forTestingVideosSelector.getText();

    await forTestingVideosSelector.waitForExist({ timeout: VISIBLE_TIMEOUT, timeoutMsg: 'No videos available for label, For Testing' });
    await assertHasText(forTestingVideosSelector);
  });
});
