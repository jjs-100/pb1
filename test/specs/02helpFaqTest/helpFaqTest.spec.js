import HttpBasicAuth from '../../pageobjects/httpbasicauth.page'
import Main from '../../pageobjects/main.page'
import Help from '../../pageobjects/help.page'

describe('primarybid.com test - navigate to Help/FAQ page - ', () => {

  it('HTTP basic auth', () => {
      HttpBasicAuth.login;
    });

  it('Select Help link', () => {
      Main.helpLink.click();
    });

  it('Ensure Help/FAQ page is visible', () => {
    browser.waitUntil(
      () => Help.helpHeading.isDisplayed(),
      {
          timeout: 2500,
      }),
      expect(browser).toHaveTitle('PrimaryBid.com | Connects Investors with Public Companies');
    })  
})
