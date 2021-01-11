import HttpBasicAuth from '../../pageobjects/httpbasicauth.page'
import Main from '../../pageobjects/main.page'
import News from '../../pageobjects/news.page'

describe('primarybid.com test - navigate to News page - ', () => {

  it('HTTP basic auth', () => {
      HttpBasicAuth.login;
    });

  it('Select News link', () => {
      Main.newsLink.click();
    });

  it('Ensure News page is visible', () => {

    browser.waitUntil(
      () => News.featuredContentItem1.isDisplayed(),
      {
          timeout: 2500,
      }),
      expect(browser).toHaveTitle('PrimaryBid | News');
    });

  it('Ensure "All content" is visible and first panel not to contain "Webinar" label', () => {
      News.allContent.isDisplayed();
      News.allContentItem1.isDisplayed();
      expect(News.allContentFilterOptionPanel1Label.getText()).not.toEqual('Webinar');
    });

  it('Move to on All content "Filter by" button', () => {
      News.allContentFilterByButton.scrollIntoView();
      News.allContentFilterByButton.click();
    });

  it('Click on All content Filter by "Webinar" checkbox', () => {
    expect(News.allContentFilterOptionMediaCoverageCheckbox).not.toBeChecked();
    expect(News.allContentFilterOptionWebinarCheckbox).not.toBeChecked();
    expect(News.allContentFilterOptionWhitepaperCheckbox).not.toBeChecked();
    expect(News.allContentFilterOptionPressReleaseCheckbox).not.toBeChecked();
    News.allContentFilterOptionWebinarCheckbox.click();
  })  

  it('Check displayed content comes from "Webinar" filter', () => {
    expect(News.allContentFilterOptionPanel1Label.getText()).toEqual('Webinar');
  })  

  it('Check displayed content does not come from "Media Coverage" filter', () => {
      expect(News.allContentFilterOptionPanel1Label.getText()).not.toEqual('Media Coverage');
  })  

})
