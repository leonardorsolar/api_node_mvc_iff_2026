// ===== IMPORTAÇÕES =====
const express = require('express');
const cors = require('cors');
const path = require('path');
const userController = require('./src/controllers/userController');
const data = require('./src/data/data');

console.log(data);
const user = new data()
console.log(user);

// ===== CONFIGURAÇÃO =====
const app = express();
const HOST = 'localhost';
const PORT = 3000;

// ===== MIDDLEWARES =====
// Habilita CORS para aceitar requisições de outras origens
app.use(cors());

// Parseia requisições com body em JSON
app.use(express.json());

// Serve arquivos estáticos da pasta public
app.use(express.static('public'));

// ===== ROTAS E LISTENERS =====
// (Serão adicionadas nos próximos passos)
/**
 * GET /api/users
 * Descrição: Retorna lista de TODOS os usuários
 * Resposta: Array com todos os usuários
 */
app.get('/api/users', userController.getAllUsers);

// Inicia o servidor
app.listen(PORT, HOST, () => {
    console.log(`🚀 Servidor rodando em http://${HOST}:${PORT}`);
});