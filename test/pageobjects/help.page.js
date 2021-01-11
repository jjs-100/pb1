import Page from './page'

class Help extends Page {

    get helpHeading() 
    { 
        return $('#__layout > div > div > div.header--faq > div.header--faq__content.container > div > div > h3') 
    }
}
  
export default new Help()