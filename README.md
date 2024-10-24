# Documentação do Projeto

## Tecnologias Utilizadas

Neste projeto, utilizamos as seguintes tecnologias:

- **Astah**: Para modelagem de banco de dados (Database First).
- **Node.js**: Ambiente de execução JavaScript para o backend.
- **SQLite**: Sistema de gerenciamento de banco de dados leve e fácil de usar.

## Estrutura do Banco de Dados

O data base first foi realizada com o Astah. O ORM (Object-Relational Mapping) foi implementado em JavaScript, facilitando a interação com o banco de dados SQLite.
Necessário ter o node_modules para funcionar a aplicação do ORM
**Importante:** Para visualizar as tabelas criadas pelo ORM, é necessário baixar a extensão **SQLite Viewer** no Visual Studio Code.

### Funcionalidades

- **Criação de Usuários**: Permite o cadastro de usuários com informações como nome, email, senha e tipo (Aluno ou Professor).
- **Listagem de Usuários**: Possibilita a visualização de todos os usuários cadastrados.
