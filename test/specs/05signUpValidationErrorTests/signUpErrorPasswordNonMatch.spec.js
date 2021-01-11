import HttpBasicAuth from '../../pageobjects/httpbasicauth.page'
import Main from '../../pageobjects/main.page'
import Signup from '../../pageobjects/signup.page'

describe('primarybid.com test - Sign Up Error Checks - Non-matching password -  ', () => {

  let randomIndex = Math.floor(Math.random() * 51234343);

  it('HTTP basic auth', () => {
      HttpBasicAuth.login;
    });

  it('Select Sign Up button', () => {
      Main.signUpButton.click();
    });

    it('Check sign up error - non-matching passwords', () => {
      browser.pause(1500);
      Signup.emailField.click();
      Signup.emailField.keys('em'+randomIndex+'@email.com');
      Signup.passwordField.click();
      Signup.passwordField.keys('pw'+randomIndex);
      Signup.confirmPasswordField.click();
      Signup.confirmPasswordField.keys('pt'+randomIndex);
      //pause added as submit button doesn't appear to respond immediately
      browser.pause(1500);
      Signup.submitButton.click();
      browser.waitUntil(
        () => Signup.nonMatchingPasswordsErrorMsg.isDisplayed(),
        {
            timeout: 1500,
        })
        expect(Signup.nonMatchingPasswordsErrorMsg).toBeDisplayed();
    });
});
