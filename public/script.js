// ===== ELEMENTOS DO DOM =====
const userForm = document.getElementById('userForm');
const messageDiv = document.getElementById('message');
const usersContainer = document.getElementById('usersContainer');

// ===== FUNÇÕES =====

/**
 * Carrega e exibe a lista de usuários da API
 * Método: GET
 * Rota: /api/users
 */
const loadUsers = async () => {
    try {
        // Mostra mensagem de carregamento
        usersContainer.innerHTML = '<p class="loading">Carregando usuários...</p>';

        // Faz requisição GET para buscar todos os usuários
        const response = await fetch('/api/users', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        // Verifica se a requisição foi bem-sucedida
        if (response.ok) {
            const result = await response.json();
            const users = result.data;

            // Limpa o container
            usersContainer.innerHTML = '';

            // Verifica se há usuários
            if (users.length === 0) {
                usersContainer.innerHTML = '<p class="loading">Nenhum usuário cadastrado.</p>';
                return;
            }

            // Cria um elemento HTML para cada usuário
            users.forEach(user => {
                const userDiv = document.createElement('div');
                userDiv.className = 'user-item';
                userDiv.innerHTML = `
                    <p class="user-name">👤 ${user.name}</p>
                    <p class="user-email">📧 ${user.email}</p>
                `;
                usersContainer.appendChild(userDiv);
            });
        } else {
            usersContainer.innerHTML = '<p class="loading">Erro ao carregar usuários.</p>';
        }
    } catch (error) {
        console.error('Erro na requisição:', error);
        usersContainer.innerHTML = '<p class="loading">Erro ao conectar com a API.</p>';
    }
};

/**
 * Captura o envio do formulário
 * Método: POST
 * Rota: /api/users
 */
userForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();

    if (!name || !email) {
        showMessage('Por favor, preencha todos os campos!', 'error');
        return;
    }

    try {
        const response = await fetch('/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                email: email
            })
        });

        if (response.ok) {
            const data = await response.json();
            showMessage('Usuário cadastrado com sucesso!', 'success');
            userForm.reset();
            
            // Recarrega a lista de usuários
            loadUsers();
        } else {
            const errorData = await response.json();
            showMessage(`Erro: ${errorData.message || 'Falha ao cadastrar usuário'}`, 'error');
        }
    } catch (error) {
        console.error('Erro na requisição:', error);
        showMessage('Erro ao conectar com a API. Tente novamente!', 'error');
    }
});

/**
 * Exibe mensagens de sucesso ou erro
 */
function showMessage(message, type) {
    messageDiv.classList.remove('success', 'error');
    messageDiv.classList.add(type);
    messageDiv.textContent = message;
    messageDiv.style.display = 'block';

    if (type === 'success') {
        setTimeout(() => {
            messageDiv.style.display = 'none';
        }, 3000);
    }
}

// ===== EXECUÇÃO =====
// Carrega os usuários quando a página abre
loadUsers();