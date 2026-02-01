// ===== IMPORTAÇÕES =====
import express from 'express';
import cors from 'cors';
import { getAllUsers } from './src/controllers/userController.js';
import UserDatabase from './src/data/data.js';

const db = new UserDatabase();
console.log(db);
console.log(db.getAllUsers());

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

app.get('/healthz', (req, res) => {
  res.status(200).send('ok');
});

// ===== ROTAS E LISTENERS =====
// (Serão adicionadas nos próximos passos)
/**
 * GET /api/users
 * Descrição: Retorna lista de TODOS os usuários
 * Resposta: Array com todos os usuários
 */
app.get('/api/users', (req, res) => getAllUsers(req, res, db));

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});