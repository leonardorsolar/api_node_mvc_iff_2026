# Tutorial Rápdo

Planeja
Implementa
Testa

**Arquitetura**: 

Prompt 1: explique rapidamente a arquitetura escolhida (MVC) e mostre a estrutura de pastas do projeto.

**Parte 1 – Front-end**: 

**Criar o front end**
Prompt 1: Crie a pasta public e dentro da pasta public crie o arquivo `index.html`. 
Crie um formulário com **nome e email**

**Instalar o Live Server**
Instale de forma manual a extensão live server

**Conectar o formulário à API**
Prompt 2: crie o arquivo `script.js`. Capture o envio do formulário, use `fetch` com método POST para enviar `name` e `email` em JSON para a API e exiba uma mensagem de sucesso ou erro na tela. o servidor rodará na porta http://localhost:3000/api/users

**Conectar o formulário à API**
Prompt 3: No arquivo `index.html` e `script.js`. No script.js, liste os usuários da api, use `fetch` com método Get para listar `name` e `email` em JSON para a API e exiba a lista na tela no arquivo index.html. o servidor rodará na porta http://localhost:3000/api/users

dica: verificar qual a porta o servidor

**Parte 2 – Back-end (API Node.js)**: 

**Criar o servidor**
Prompt 1: Inicialize o package.json e instale as dependências `express` e `cors`. Configure o `package.json` com o script `"start": "node server.js"`. Configure ES Modules (ESM).Crie o arquivo .gitignore

**Arquivos do projeto**: 
Prompt 2: crie o arquivo `server.js` na raiz do projeto e crie os arquivos `controllers/userController.js` e `data/data.js` dentro da pasta src.

**Simular o banco de dados em memória**: 
Prompt 3: crie no arquivo `data.js` uma lista (array) de usuários (users) com os campos id, name e email. 

**server.js – configuração do servidor**: 
Prompt 3:crie o servidor express dentro do arquivo server.js. importe `express`, `cors`, `path` e o `userController`. Instancie o app. Defina `HOST` e `PORT`. Configure os middlewares `cors`, `express.json()` e `express.static('public')`.

dica: rode a aplicação no terminal: node server.js ou npm run start
para para a aplicação:: ctrl+c

**server.js – rotas da API**: 

Prompt 4: crie as rotas no arquivo server.js
GET `/api/users`,
explicando o que cada uma faz.

**userController.js**: 
Prompt 5: implemente somente a função `getAllUsers` no arquivo userController.js

**server.js – HTML**: 
Prompt 6: sirva o arquivo `index.html` usando `res.sendFile` e finalize iniciando o servidor com `app.listen`.

Continuando:

**Crie as rotas da api**

Prompt :crie as rotas no arquivo server.js
GET `/api/users`,
GET `/api/users/:id`,
POST `/api/users`,
PUT `/api/users/:id`,
DELETE `/api/users/:id`,


**userController.js**: 
Prompt: implemente as funções `getAllUsers`, `getUserByID`, `createUser`, `updateUser` e `deleteUser`, com explicação simples do fluxo no arquivo userController.js


