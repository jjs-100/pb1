import HttpBasicAuth from '../../pageobjects/httpbasicauth.page'
import Main from '../../pageobjects/main.page'
import Signup from '../../pageobjects/signup.page'
import UserDetails from '../../pageobjects/userdetails.page'

describe('primarybid.com test - Sign Up - ', () => {

  let randomIndex = Math.floor(Math.random() * 51234343);

  it('HTTP basic auth', () => {
      HttpBasicAuth.login;
    });

  it('Select Sign Up button', () => {
      Main.signUpButton.click();
    });

  it('Complete sign up', () => {
      browser.pause(1500);
      Signup.emailField.click();
      Signup.emailField.keys('em'+randomIndex+'@email.com');
      Signup.passwordField.click();
      Signup.passwordField.keys('pw'+randomIndex);
      Signup.confirmPasswordField.click();
      Signup.confirmPasswordField.keys('pw'+randomIndex);
      //pause added as submit button doesn't appear to respond immediately
      browser.pause(1500);
      Signup.submitButton.click();
    });

  it('Verify "User Details" page displays', () => {

    browser.waitUntil(
      () => UserDetails.firstNameField.isDisplayed(),
      {
          timeout: 2500,
      }),
    expect(UserDetails.primaryBidLogo).toBeDisplayed();
    expect(UserDetails.welcomeToHeader).toBeDisplayed();
    expect(UserDetails.verifyIdText).toBeDisplayed();
  }); 
  
});
