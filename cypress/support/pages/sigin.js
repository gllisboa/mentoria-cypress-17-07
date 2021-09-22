const SiginElements = require('../elements/sigin')

export default class SiginPage {

    static realizaLogin(email, password) {
        this.typeEmailLogin(email)
        this.typePasswordLogin(password).type('{enter}')

    }

    static typeEmailLogin(email) {
        return SiginElements.inputEmailLogin().type(email)
    }

    static typePasswordLogin(password) {
        return SiginElements.inputPasswordLogin().type(password)
    }

    static verificaUsuarioLogado(usuarioLogado) {
        return SiginElements.inputUsuarioLoagado().should('have.text',usuarioLogado)
    }

    static verificaMensagemErro(mensagemErro){
        return SiginElements.alertErro().find('li').first().should('have.text',mensagemErro)
    }
}