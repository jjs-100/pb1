import Page from './page'

class AboutUs extends Page {

    get aboutUsHeading() 
    { 
        return $('#__layout > div > main > section:nth-child(2) > div > div > h2') 
    }
}
  
export default new AboutUs()