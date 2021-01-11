import HttpBasicAuth from '../../pageobjects/httpbasicauth.page'
import Main from '../../pageobjects/main.page'
import AboutUs from '../../pageobjects/aboutus.page'

describe('primarybid.com test - navigate to About Us page - ', () => {

  it('HTTP basic auth', () => {
      HttpBasicAuth.login;
    });

  it('Select About Us link', () => {
      Main.aboutUsLink.click();
    });

  it('Ensure About Us page is visible', () => {
    browser.waitUntil(
      () => AboutUs.aboutUsHeading.isDisplayed(),
      {
          timeout: 2500,
      }),
      expect(browser).toHaveTitle('PrimaryBid.com | About Us, Our Mission');
    })  
})
