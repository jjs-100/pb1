import Page from './page'

class HttpBasicAuth extends Page {

    get login() 
    { 
        return browser.url('https://qa:reeThohpe2eeD7a@playground.primarybid.com')
    }
}
  
export default new HttpBasicAuth()