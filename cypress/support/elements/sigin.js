export default class SiginElements {

    static inputEmailLogin() {
        return cy.get('#email')
    }

    static inputPasswordLogin() {
        return cy.get('#passwd')
    }

    static inputUsuarioLoagado() {
        return cy.get('.account > span')
    }

    static alertErro() {
        return cy.get('#center_column ol')
    }
}