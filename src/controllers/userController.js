// ===== IMPORTAÇÕES =====
const UserDatabase = require('../data/data');

const user = new UserDatabase()
console.log(user);

// ===== CONTROLLERS =====

/**
 * getAllUsers
 * Descrição: Retorna a lista de TODOS os usuários
 * Método HTTP: GET
 * Rota: /api/users
 * 
 * Fluxo:
 * 1. Recebe requisição GET em /api/users
 * 2. Busca todos os usuários no array (data.js)
 * 3. Retorna JSON com status 200 e a lista de usuários
 */
const getAllUsers = (req, res) => {
    try {
        // Retorna todos os usuários com status 200 (OK)
        res.status(200).json({
            success: true,
            message: 'Usuários obtidos com sucesso',
            data: user.getAllUsers()
        });
    } catch (error) {
        // Se houver erro, retorna status 500 (Erro interno do servidor)
        res.status(500).json({
            success: false,
            message: 'Erro ao buscar usuários',
            error: error.message
        });
    }
};

// ===== EXPORTS =====
module.exports = {
    getAllUsers
};