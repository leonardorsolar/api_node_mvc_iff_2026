# api_node_mvc_iff_2026

# Tarefa 1📘 Tutorial: Construindo um Front-end + API em Node.js (do zero)

## 🎯 Objetivo do projeto

Criar uma aplicação simples onde:

* O **Front-end (HTML)** possui um formulário com **nome e e-mail**
* O **Back-end (API Node.js)** gerencia usuários (CRUD)
* Tudo organizado seguindo uma **arquitetura clara e didática**

---

## 🏗️ Arquitetura escolhida

### 👉 Arquitetura MVC (Model–View–Controller)

Mesmo sendo um projeto simples, vamos usar **MVC**, porque:

* Facilita o aprendizado
* Organiza responsabilidades
* É base para projetos profissionais

### 📦 Como fica o MVC aqui?

| Camada         | Responsabilidade                       |
| -------------- | -------------------------------------- |
| **View**       | HTML (index.html)                      |
| **Controller** | Regras da API (`userController.js`)    |
| **Model**      | Dados simulados (`data.js`)            |
| **Server**     | Configuração do servidor (`server.js`) |

---

## 📁 Estrutura final do projeto

```
meu-projeto/
│
├── public/
│   └── index.html
│
├── controllers/
│   └── userController.js
│
├── data/
│   └── data.js
│
├── server.js
├── package.json
└── node_modules/
```

---

# 🧩 PARTE 1 – Criando o Front-end (HTML)

## 📄 1. Criar o arquivo `index.html`

Dentro da pasta **public/**, crie o arquivo:

```
public/index.html
```

### ✨ Conteúdo do `index.html`

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Cadastro de Usuário</title>
</head>
<body>

  <h1>Cadastro de Usuário</h1>

  <form>
    <label>Nome:</label><br>
    <input type="text" name="name" placeholder="Digite seu nome"><br><br>

    <label>Email:</label><br>
    <input type="email" name="email" placeholder="Digite seu email"><br><br>

    <button type="submit">Cadastrar</button>
  </form>

</body>
</html>
```

### 🧠 O que você aprendeu aqui

* HTML cria a **interface visual**
* `<form>` representa um formulário
* Inputs coletam dados do usuário

---

# 🧩 PARTE 2 – Criando a API com Node.js e JavaScript

---

## ⚙️ 2. Instalar dependências

No terminal, dentro do projeto:

Certifique que você está na raiz do projeto. Digite

```bash
npm init -y
npm install express cors
```

### 📦 O que são essas dependências?

* **express** → cria o servidor e as rotas
* **cors** → permite comunicação entre front e back

---

## 📄 3. Criar o script no `package.json`

Abra o `package.json` e adicione:

```json
{
  "type": "module",
  "scripts": {
    "start": "node server.js"
  }
}
```

🧠 O `"type": "module"` ativa **ES Modules** no Node.js

Agora você pode rodar o servidor com:

```bash
npm start
```

---

## 📄 4. Criar o arquivo `server.js`

Na raiz do projeto:

```
server.js
```

---

## 📄 5. Criar o controller `userController.js`

Crie a pasta **controllers/** e o arquivo:

```
controllers/userController.js
```

---

## 📄 6. Criar o arquivo de dados `data.js`

Crie a pasta **data/** e o arquivo:

```
data/data.js
```

### Conteúdo do `data.js`

```js
const users = [
  { id: 1, name: 'Leo', email: 'leo@gmail.com' }
];

export default users;
```

🧠 **Aqui estamos simulando um banco de dados**

---

## 🧠 7. Implementando o `userController.js`

```js
import users from '../data/data.js';

const getAllUsers = (req, res) => {
  res.json(users);
};

const getUserByID = (req, res) => {
  const id = Number(req.params.id);
  const user = users.find(u => u.id === id);
  res.json(user);
};

const createUser = (req, res) => {
  const { name, email } = req.body;
  const newUser = {
    id: users.length + 1,
    name,
    email
  };
  users.push(newUser);
  res.status(201).json(newUser);
};

const updateUser = (req, res) => {
  const id = Number(req.params.id);
  const user = users.find(u => u.id === id);

  if (user) {
    user.name = req.body.name;
    user.email = req.body.email;
    res.json(user);
  }
};

const deleteUser = (req, res) => {
  const id = Number(req.params.id);
  const index = users.findIndex(u => u.id === id);
  users.splice(index, 1);
  res.status(204).send();
};

export {
  getAllUsers,
  getUserByID,
  createUser,
  updateUser,
  deleteUser
};
```

---

## 🚀 8. Configurando o `server.js`

```js
import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import {
  getAllUsers,
  getUserByID,
  createUser,
  updateUser,
  deleteUser
} from './src/controllers/userController.js';

// Compatibilidade com __dirname em ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

const PORT = 3000;
const HOST = 'localhost';

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// API Routes
app.get('/api/users', getAllUsers);
app.get('/api/users/:id', getUserByID);
app.post('/api/users', createUser);
app.put('/api/users/:id', updateUser);
app.delete('/api/users/:id', deleteUser);

// Serve HTML
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start server
app.listen(PORT, HOST, () => {
  console.log(`🚀 Servidor rodando em http://${HOST}:${PORT}`);
});
```

---

## 🧠 O que você aprendeu até aqui

✔ O que é uma API
✔ O que é MVC
✔ Como separar responsabilidades
✔ Como criar rotas REST
✔ Como servir HTML pelo Node.js

---

## 🏁 Próximo passo 

* Conectar o formulário com `fetch`


# Tarefa 2 📘 Tutorial – Conectando o Formulário HTML à API Node.js

## 🎯 Objetivo desta etapa

* Capturar os dados do formulário (nome e email)
* Enviar esses dados para a API usando **fetch**
* Salvar o usuário na API
* Exibir a resposta no navegador

---

## 🧠 Conceito importante (bem simples)

👉 **O formulário sozinho não envia dados para a API moderna**
👉 Hoje usamos **JavaScript + fetch** para falar com a API
👉 O navegador vira um “cliente” da API

---

# 🧩 VISÃO GERAL DO FLUXO

```
Usuário preenche o formulário
        ↓
JavaScript captura os dados
        ↓
fetch() envia para /api/users
        ↓
API processa e responde
        ↓
Front exibe o resultado
```

---

# 🧩 PARTE 1 – Preparando o HTML

Vamos **atualizar o `index.html`**.

---

## 📄 1. Atualizar o formulário

Abra `public/index.html` e ajuste para:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Cadastro de Usuário</title>
</head>
<body>

  <h1>Cadastro de Usuário</h1>

  <form id="userForm">
    <label>Nome:</label><br>
    <input type="text" id="name" required><br><br>

    <label>Email:</label><br>
    <input type="email" id="email" required><br><br>

    <button type="submit">Cadastrar</button>
  </form>

  <p id="message"></p>

  <script src="script.js"></script>
</body>
</html>
```

### 🧠 O que mudou?

* `id="userForm"` → vamos capturar o formulário no JS
* `id="name"` e `id="email"` → pegar valores facilmente
* `<script src="script.js">` → conecta com JavaScript
* `<p id="message">` → mostrar resposta da API

---

# 🧩 PARTE 2 – Criando o JavaScript do Front

## 📄 2. Criar o arquivo `script.js`

Dentro da pasta **public/**:

```
public/script.js
```

---

## ✨ Conteúdo do `script.js`

```js
const form = document.getElementById('userForm');
const message = document.getElementById('message');

form.addEventListener('submit', async (event) => {
  event.preventDefault(); // impede o reload da página

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;

  try {
    const response = await fetch('http://localhost:3000/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email })
    });

    const data = await response.json();

    message.textContent = `Usuário ${data.name} cadastrado com sucesso!`;
    form.reset();

  } catch (error) {
    message.textContent = 'Erro ao cadastrar usuário';
  }
});
```

---

## 🧠 Explicando linha por linha (sem pressa)

### 🔹 Captura do formulário

```js
const form = document.getElementById('userForm');
```

➡️ Estamos dizendo: “JavaScript, pegue o formulário”

---

### 🔹 Escutando o envio

```js
form.addEventListener('submit', ...)
```

➡️ Quando o usuário clicar em **Cadastrar**, executa o código

---

### 🔹 Evitar recarregar a página

```js
event.preventDefault();
```

➡️ Sem isso, o navegador recarrega tudo

---

### 🔹 Pegando os valores

```js
const name = document.getElementById('name').value;
```

➡️ Captura o que o usuário digitou

---

### 🔹 Enviando para a API (fetch)

```js
fetch('http://localhost:3000/api/users', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name, email })
});
```

➡️ Isso equivale a:

> “API, crie um novo usuário com esses dados”

---

# 🧩 PARTE 3 – Garantindo que a API aceita dados

No seu `server.js`, você **já tem isso** (mas é importante entender):

```js
app.use(express.json());
```

🧠 Sem isso, o `req.body` viria vazio!

---

# 🧩 PARTE 4 – Testando tudo

## 🚀 1. Suba o servidor

```bash
npm start
```

Você deve ver:

```
Servidor rodando em http://localhost:3000
```

---

## 🌐 2. Abra no navegador

```
http://localhost:3000
```

---

## ✅ 3. Teste o fluxo

1. Digite nome e email
2. Clique em **Cadastrar**
3. Veja a mensagem de sucesso
4. Confira `/api/users` no navegador

---

# 🧠 O que você aprendeu nesta etapa

✔ Como conectar HTML + API
✔ Como usar `fetch`
✔ Como enviar JSON
✔ Como evitar reload da página
✔ Como funciona POST na prática

---

## 🚀 Próximos passos para evoluir o projeto

Depois de conectar o formulário à API, você pode evoluir o projeto aos poucos, seguindo esta ordem:

* 🔄 **Listar usuários na tela**
  Mostrar no HTML os usuários que vêm da API.

* ✏️ **Editar e excluir usuários**
  Permitir atualizar e remover dados já cadastrados.

* ✅ **Adicionar validações**
  Garantir que nome e email sejam obrigatórios e válidos.

* 📦 **Separar melhor o código**

  * Rotas (`routes/users.js`)
  * Serviços (`services/userService.js`)

* 🧠 **Entender REST de forma clara**
  Aprender o porquê de GET, POST, PUT e DELETE.

* 🗄️ **Usar um banco de dados real**
  Substituir o array por um banco (SQLite, PostgreSQL, MongoDB).

* 🧪 **Criar testes**
  Testar a API para evitar erros e regressões.

---

👉 **Importante:**
Cada passo pode ser aprendido separadamente. Não é preciso fazer tudo de uma vez.
Esse é exatamente o caminho usado em projetos profissionais.



