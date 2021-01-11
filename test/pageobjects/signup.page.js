import Page from './page'

class Signup extends Page {

    get signUpHeader() 
    { 
        return $('//h2[contains(text(),"Sign up")]') 
    }

    get emailField() 
    { 
        return $('#signup-page > div > div > div > div > div.col-12 > div.top-border-teal > form > input:nth-child(2)') 
    }

    get passwordField() 
    { 
        return $('#signup-page > div > div > div > div > div.col-12 > div.top-border-teal > form > input:nth-child(3)') 
    }

    get confirmPasswordField() 
    { 
        return $('#signup-page > div > div > div > div > div.col-12 > div.top-border-teal > form > input:nth-child(4)') 
    }

    get submitButton() 
    { 
        return $('#signup-page > div > div > div > div > div.col-12 > div.top-border-teal > form > div > button > div > span.inner-text') 
    }

    get invalidEmailErrorMsg() 
    { 
        return $('main.container-fluid:nth-child(1) div.row div.container div.row div.main-container.offset-lg-3.col-lg-9 div.col-12:nth-child(2) div.top-border-teal form:nth-child(2) > span.error:nth-child(3)') 
    }

    get nonMatchingPasswordsErrorMsg() 
    { 
        return $('main.container-fluid:nth-child(1) div.row div.container div.row div.main-container.offset-lg-3.col-lg-9 div.col-12:nth-child(2) div.top-border-teal form:nth-child(2) > span.error:nth-child(5)') 
    }
}
  
export default new Signup()