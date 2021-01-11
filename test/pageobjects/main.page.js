import Page from './page'

class Main extends Page {

    get aboutUsLink() 
    { 
        return $('#__layout > div > nav > div.navigation__container.container > div > div.col-xl-6.col-lg-6.d-none.d-lg-block > a:nth-child(1)') 
    }

    get helpLink() 
    { 
        return $('#__layout > div > nav > div.navigation__container.container > div > div.col-xl-6.col-lg-6.d-none.d-lg-block > a:nth-child(2)') 
    }

    get newsLink() 
    { 
        return $('#__layout > div > nav > div.navigation__container.container > div > div.col-xl-6.col-lg-6.d-none.d-lg-block > a:nth-child(3)') 
    }

    get signUpButton() 
    { 
        return $('#__layout > div > nav > div.navigation__container.container > div > div.col-xl-3.col-lg-3.d-none.d-lg-block.text-right > a.button.button--narrow.button--teal') 
    }
}
  
export default new Main()