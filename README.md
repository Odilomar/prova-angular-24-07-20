# :rocket: Prova da Helpper

A aplicação é um CRUD simples usando o Local Storage e o Framework Angular.

## :package: Instalação

Baixe o código fonte:

```bash
git clone https://github.com/Odilomar/prova-angular-24-07-20.git
```

Depois, instale todos os pacotes para executar o projeto:

Com NPM:
```bash
npm install
```

Com YARN:
```bash
yarn
```

## :art: Executar a aplicação

Depois de baixar a aplicação e executar a instalação das dependências, execute um dos seguintes comandos:

Com NG:
```bash
ng serve --o
```

Com YARN:
```bash
yarn start --o
```

## :sparkles: Funcionalidades

``` A aplicação deve ser capaz de listar todas as pessoas cadastradas ```
  * A aplicação deve ser capaz de listar todos os dados das pessoas cadastradas em um tabela na página inicial;
  
``` A aplicação deve ser capaz de cadastrar uma pessoa ```
  * A aplicação deve ser capaz de cadastrar uma pessoa, salvar no banco de dados e atualizar a listagem com as novas informações;

``` A aplicação deve ser capaz de editar os dados de uma pessoa cadastrada ```
  * A aplicação deve ser capaz de permitir a edição dos dados de uma pessoa cadastrada e, depois, atualizar a listagem com as novas informações;

``` A aplicação deve ser capaz de remover uma pessoa cadastrada ```
  * A aplicação deve ser capaz de remover uma pessoa cadastrada;
  * Antes de remover, a aplicação deve mostrar novamente os dados da pessoa para o usuário e o mesmo deve confirmar a remoção;

## :white_check_mark: Testes

Para executar os testes, rode um dos seguintes comandos:

Com NG:
```bash
ng test
```

Com YARN:
```bash
yarn test
```

### Especificação dos testes

Segue abaixo as especificações dos testes criados para a aplicação com seu título e descrição:

* Para o arquivo **person.service.ts**:

  ``` should populate and retrive all persons ```
    * Neste teste, a aplicação deve ser capaz de salvar os dados fixos no Local Storage;

  ``` should be able to create a person ```
    * Neste teste, a aplicação deve ser capaz de salvar os dados de uma pessoa no Local Storage;
    * A aplicação não deve permitir o cadastro de uma pessoa com o CPF já cadastrado;

  ``` should be able to edit a person ```
    * Neste teste, a aplicação deve ser capaz de salvar os dados modificados de uma pessoa no Local Storage;
    * A aplicação não deve permitir a alteração dos dados desta pessoa caso o CPF informado estiver sendo usado por outra pessoa;

  ``` should not be able to create a person with the same cpf ```
    * Neste teste, a aplicação não deve permitir o cadastro de uma pessoa com o CPF já cadastrado;

  ``` should be able to delete a person ```
    * Neste teste, a aplicação deve permitir a remoção de uma pessoa do Local Storage;

* Para o arquivo **cep.service.ts**:
  
  ``` should retrive address info by cep ```
    * Neste teste, a aplicação deve ser capaz de consultar um CEP informado e retornar seus dados;

  ``` should retrive error if cep is invalid ```
    * Neste teste, a aplicação deve ser capaz de retornar um erro se o CEP informado estiver incorreto;

* Para o arquivo **auth-guard.service.ts**

  ``` should redirect an inexistence id to dashboard route ```
    * Neste teste, a aplicação deve ser capaz de redirecionar o usuário para página de Dashboard quando o parâmetro da rota '/edit' estiver incorreto;

  ``` should allow access edit component if id params exists ```
    * Neste teste, a aplicação deve ser capaz permitir o acesso à rota '/edit' caso o parâmetro informado estiver correto e existir no Local Storage;

  
Obs.: Os testes gerados automaticamente pelo Angular CLI não serão incluidos na listagem acima.
