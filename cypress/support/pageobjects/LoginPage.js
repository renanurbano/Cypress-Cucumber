/// <reference types="Cypress" />


import { cyan } from "color-name"
import loginElements from '../elements/loginElements'

class LoginPage {
    acessarSite() {
        cy.visit('https://cwi.com.br/')
    }

    clicarBotaoPaginaLogin() {
        cy.get(loginElements.botaoLogin()).click()
    }

    visualizarBotaoRecuperarSenha() {
        cy.get(loginElements.botaoRecuperarSenha()).should('contain','Esqueceu sua senha?')
    }
}

export default new LoginPage