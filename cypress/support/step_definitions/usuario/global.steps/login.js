/// <reference types="cypress" />
const HomePage = require('../../../pages/home')

/* global Given, When, THen, And */
Given('Acesso a pagina de sigin', () => {
    HomePage.acessarSigin()
})