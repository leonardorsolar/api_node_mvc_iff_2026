// ===== BANCO DE DADOS EM MEMÓRIA =====
// Classe para gerenciar usuários

class UserDatabase {
    constructor() {
        this.users = [
            {
                id: 1,
                name: 'João Silva',
                email: 'joao@email.com'
            },
            {
                id: 2,
                name: 'Maria Santos',
                email: 'maria@email.com'
            },
            {
                id: 3,
                name: 'Pedro Oliveira',
                email: 'pedro@email.com'
            },
            {
                id: 4,
                name: 'Ana Costa',
                email: 'ana@email.com'
            }
        ];
    }

    // Obter todos os usuários
    getAllUsers() {
        return this.users;
    }

}

// Exporta a classe (ou uma instância, conforme preferência)
// Exporta a CLASSE para ser instanciada onde necessário
export default UserDatabase;