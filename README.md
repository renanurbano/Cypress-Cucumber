# Cypress-Cucumber
Testando verificação de recuperação de senha usando o Cypress com Cucumber e page obejcts.


1- Após abrir a pasta do projeto, execute:

npm install --save-dev cypress cypress-cucumber-preprocessor

2- Abre o Cypress:

npx cypress open

3- Adicione ao arquivo cypress/plugins/index.js o seguinte script:

const cucumber = require('cypress-cucumber-preprocessor').default
module.exports = (on, config) => {
  on('file:preprocessor', cucumber())
}

