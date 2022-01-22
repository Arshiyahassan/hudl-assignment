const HUDL_HOME_PAGE = 'https://www.hudl.com/';
const LOGIN_SELECTOR = '=Log in';
const USERNAME_INPUT_SELECTOR = '#email';
const PASSWORD_INPUT_SELECTOR = '#password';
const SIGNIN_BUTTON_SELECTOR = '#logIn'

export async function loadHudlHomePage() {
  await browser.url(HUDL_HOME_PAGE);
}

export async function clickLoginFromHomePage() {
  const login = await browser.$(LOGIN_SELECTOR);
  await login.click();
}

async function enterUserName(username) {
  const usernameField = await browser.$(USERNAME_INPUT_SELECTOR);
  await usernameField.setValue(username);
}

async function enterPassword(password) {
  const passwordField = await browser.$(PASSWORD_INPUT_SELECTOR);
  await passwordField.setValue(password);
}

async function clickLoginButton() {
  const signInButton = await browser.$(SIGNIN_BUTTON_SELECTOR);
  await signInButton.click();
}

export async function enterCredentialsAndLogin(username, password) {
  await enterUserName(username);
  await enterPassword(password);
  await clickLoginButton();
}

