/// <reference types="cypress" />
const SiginPage = require('../../pages/sigin')
/* global Given, When, THen, And */

When('Realizo o login com um usuario invalido', () => {
    cy.fixture("usuario.invalido").then((user) => {
        SiginPage.realizaLogin(user.email,user.password)
    })
})

Then('O sistema informa que não encontrou o usuario', () => {
    cy.fixture("usuario.invalido").then((userInvalido) => {
        SiginPage.verificaMensagemErro(userInvalido.mensagemErro)
    })
})
