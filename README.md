# Cypress-Cucumber
Testando verificação de recuperação de senha usando o Cypress com Cucumber e page obejcts.

CRIAR AS FEATURES NA PASTA INTEGRATION/*.feature
NA PASTA SUPORTE CRIAR AS PASTAS "elements" "pageobjets" e "steps"


1- Após abrir a pasta do projeto, execute:

npm install --save-dev cypress cypress-cucumber-preprocessor

2- Abre o Cypress:

npx cypress open

3- Adicione ao arquivo cypress/plugins/index.js o seguinte script:

const cucumber = require('cypress-cucumber-preprocessor').default
module.exports = (on, config) => {
  on('file:preprocessor', cucumber())
}


3- Adicione o seguinte código no arquivo package.json, se não tiver o arquivo, crie:

{
    "scripts": {
        "test:chrome": "cypress run --browser chrome --no-exit"
    },
    "cypress-cucumber-preprocessor": {
        "step_definitions": "cypress/support/steps"
    }
}


