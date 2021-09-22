const HomeElements = require('../elements/home')

export default class HomePage {

    static acessarSigin() {
        return this.acessarHome().then( () => {
           HomeElements.sigin().click()
        })
    }

    static acessarHome() {
        return cy.visit('')
    }
}