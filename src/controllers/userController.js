// ===== IMPORTAÇÕES =====
import UserDatabase from '../data/data.js';

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
const getAllUsers = (req, res, db) => {
    try {
        // Retorna todos os usuários com status 200 (OK)
        res.status(200).json({
            success: true,
            message: 'Usuários obtidos com sucesso',
            data: db.getAllUsers()
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
export { getAllUsers };