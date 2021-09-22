/// <reference types="cypress" />
const SiginPage = require('../../pages/sigin')
/* global Given, When, THen, And */

When('Realizo o login com um usuario valido', () => {
    cy.fixture("usuario.valido").then((user) => {
        SiginPage.realizaLogin(user.email,user.password)
    })
})

Then('O sistema autentica meu usuario com sucesso', () => {
    cy.fixture("usuario.valido").then((user) => {
        SiginPage.verificaUsuarioLogado(user.nome)
    })
})
