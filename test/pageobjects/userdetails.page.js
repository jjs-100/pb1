import Page from './page'

class UserDetails extends Page {

    get welcomeToHeader() 
    { 
        return $('#signup2-page > div > div > div > div > div.col-12 > div > h1') 
    }

    get verifyIdText() 
    { 
        return $('main.container-fluid:nth-child(1) div.row:nth-child(2) div.container div.row div.main-container.offset-lg-3.col-lg-9 div.col-12:nth-child(2) div.top-border-teal > p.col-md-9.no-padding-left:nth-child(2)') 
    }

    get primaryBidLogo() 
    { 
        return $("main.container-fluid:nth-child(1) div.row:nth-child(2) div.container div.row div.main-container.offset-lg-3.col-lg-9 div:nth-child(1) div.primarybidLogo a:nth-child(1) > img:nth-child(1)") 
    }

    get firstNameField() 
    { 
        return $('main.container-fluid:nth-child(1) div.row:nth-child(2) div.container div.row div.main-container.offset-lg-3.col-lg-9 div.col-12:nth-child(2) div.top-border-teal form.col-md-9.no-padding-left:nth-child(3) div.input-with-label:nth-child(1) > input:nth-child(3)') 
    }
}
  
export default new UserDetails()