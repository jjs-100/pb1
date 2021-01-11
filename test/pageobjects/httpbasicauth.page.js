import Page from './page'

class HttpBasicAuth extends Page {

    get login() 
    { 
        return browser.url('')
    }
}
  
export default new HttpBasicAuth()