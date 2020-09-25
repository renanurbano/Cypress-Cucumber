import LoginPage from '../pageobjects/LoginPage'


Given('acesso o site CWI', () => {
    LoginPage.acessarSite();
});

When('acesso a pagina de login', () =>{
    LoginPage.clicarBotaoPaginaLogin();
});

Then('devo visualizar botao de recuperar senha esquecida', () => {
    LoginPage.visualizarBotaoRecuperarSenha();
});