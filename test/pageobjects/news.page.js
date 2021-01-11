import Page from './page'

class News extends Page {

    get featuredContent() 
    { 
        return $('#__layout > div > main > div > div:nth-child(1) > h4') 
    }

    get featuredContentItem1() 
    { 
        return $('#__layout > div > main > div > div:nth-child(2) > div > a:nth-child(1) > div > div.pb_news_item__imageContainer_u_LU > img') 
    }

    get allContent() 
    { 
        return $('#__layout > div > main > div > div:nth-child(3) > h4') 
    }

    get allContentItem1() 
    { 
        return $('#__layout > div > main > div > div:nth-child(4) > div > a:nth-child(1) > div > div.pb_news_item__imageContainer_u_LU > img') 
    }

    get allContentFilterByButton() 
    { 
        return $('//div[contains(text(),"Filter by")]') 
    }

    get allContentFilterOptionMediaCoverageCheckbox() 
    { 
        return $('main.page--news-index div.container.margin--l div.container.section-header:nth-child(3) div.section-header--actions div.pb_news_filter__container_26Jy div.pb_news_filter__popover_3Fuh div.pb_news_filter__item_3ruq:nth-child(1) > div.pb_news_filter__checkbox_iEUe') 
    }

    get allContentFilterOptionWebinarCheckbox() 
    { 
        return $('main.page--news-index div.container.margin--l div.container.section-header:nth-child(3) div.section-header--actions div.pb_news_filter__container_26Jy div.pb_news_filter__popover_3Fuh div.pb_news_filter__item_3ruq:nth-child(2) > div.pb_news_filter__checkbox_iEUe') 
    }

    get allContentFilterOptionWhitepaperCheckbox() 
    { 
        return $('main.page--news-index div.container.margin--l div.container.section-header:nth-child(3) div.section-header--actions div.pb_news_filter__container_26Jy div.pb_news_filter__popover_3Fuh div.pb_news_filter__item_3ruq:nth-child(3) > div.pb_news_filter__checkbox_iEUe') 
    }

    get allContentFilterOptionPressReleaseCheckbox() 
    { 
        return $('main.page--news-index div.container.margin--l div.container.section-header:nth-child(3) div.section-header--actions div.pb_news_filter__container_26Jy div.pb_news_filter__popover_3Fuh div.pb_news_filter__item_3ruq:nth-child(4) > div.pb_news_filter__checkbox_iEUe') 
    }

    get allContentFilterOptionPanel1Label() 
    { 
        return $('main.page--news-index div.container.margin--l div.container:nth-child(4) div.card-grid.margin--l a.pb_news_item__container_1kJm:nth-child(1) div.pb_news_item__inner_1EQv div.pb_news_item__content_2Grh > p.pb_news_item__category_2vY1') 
    }

}
  
export default new News()