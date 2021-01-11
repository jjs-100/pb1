import HttpBasicAuth from '../../pageobjects/httpbasicauth.page'
import Main from '../../pageobjects/main.page'
import Signup from '../../pageobjects/signup.page'

describe('primarybid.com test - Sign Up Error Checks - Invalid Email Address - ', () => {

  let randomIndex = Math.floor(Math.random() * 51234343);

  it('HTTP basic auth', () => {
      HttpBasicAuth.login;
    });

  it('Select Sign Up button', () => {
      Main.signUpButton.click();
    });

  it('Check sign up error - invalid email address', () => {
      browser.pause(1500);
      Signup.emailField.click();
      Signup.emailField.keys('bademailcom&^^&^');
      Signup.passwordField.click();
      Signup.passwordField.keys('pw'+randomIndex);
      Signup.confirmPasswordField.click();
      Signup.confirmPasswordField.keys('pw'+randomIndex);
      //pause added as submit button doesn't appear to respond immediately
      browser.pause(1500);
      Signup.submitButton.click();
      browser.waitUntil(
        () => Signup.invalidEmailErrorMsg.isDisplayed(),
        {
            timeout: 1500,
        })
      expect(Signup.invalidEmailErrorMsg).toBeDisplayed();
    });
});
