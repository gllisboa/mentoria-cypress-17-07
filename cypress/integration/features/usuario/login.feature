Feature: Login

Scenario: Login com um usuário válido
   Given Acesso a pagina de sigin
   When Realizo o login com um usuario valido
   Then O sistema autentica meu usuario com sucesso

Scenario: Login com um usuário inválido
   Given Acesso a pagina de sigin
   When Realizo o login com um usuario invalido
   Then O sistema informa que não encontrou o usuario