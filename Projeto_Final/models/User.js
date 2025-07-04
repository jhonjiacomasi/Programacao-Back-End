const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');

class User {
    constructor() {
        this.dbPath = path.join(__dirname, '../database.json');
        this.init();
    }

    // Inicializar arquivo de banco de dados JSON
    init() {
        try {
            if (!fs.existsSync(this.dbPath)) {
                const initialData = {
                    users: [],
                    nextId: 1
                };
                fs.writeFileSync(this.dbPath, JSON.stringify(initialData, null, 2));
                console.log('Arquivo de banco de dados JSON criado');
            }
            
            // Criar usuário padrão se não existir
            this.createDefaultUser();
        } catch (error) {
            console.error('Erro ao inicializar banco de dados:', error);
        }
    }

    // Ler dados do arquivo JSON
    readData() {
        try {
            const data = fs.readFileSync(this.dbPath, 'utf8');
            return JSON.parse(data);
        } catch (error) {
            console.error('Erro ao ler banco de dados:', error);
            return { users: [], nextId: 1 };
        }
    }

    // Escrever dados no arquivo JSON
    writeData(data) {
        try {
            fs.writeFileSync(this.dbPath, JSON.stringify(data, null, 2));
        } catch (error) {
            console.error('Erro ao escrever no banco de dados:', error);
        }
    }

    // Criar usuário padrão para testes
    async createDefaultUser() {
        const username = 'admin';
        const password = '1234';
        
        this.findByUsername(username, async (err, user) => {
            if (err) {
                console.error('Erro ao verificar usuário padrão:', err);
                return;
            }
            
            if (!user) {
                try {
                    const hashedPassword = await bcrypt.hash(password, 10);
                    const data = this.readData();
                    
                    const newUser = {
                        id: data.nextId,
                        username: username,
                        password: hashedPassword,
                        created_at: new Date().toISOString()
                    };
                    
                    data.users.push(newUser);
                    data.nextId++;
                    
                    this.writeData(data);
                    console.log('Usuário padrão criado: admin/1234');
                } catch (error) {
                    console.error('Erro ao criar usuário padrão:', error);
                }
            }
        });
    }

    // Buscar usuário por username
    findByUsername(username, callback) {
        try {
            const data = this.readData();
            const user = data.users.find(u => u.username === username);
            callback(null, user || null);
        } catch (error) {
            callback(error, null);
        }
    }

    // Buscar usuário por ID
    findById(id, callback) {
        try {
            const data = this.readData();
            const user = data.users.find(u => u.id === parseInt(id));
            callback(null, user || null);
        } catch (error) {
            callback(error, null);
        }
    }

    // Criar novo usuário
    async create(username, password, callback) {
        try {
            const hashedPassword = await bcrypt.hash(password, 10);
            const data = this.readData();
            
            // Verificar se usuário já existe
            const existingUser = data.users.find(u => u.username === username);
            if (existingUser) {
                return callback(new Error('Usuário já existe'));
            }
            
            const newUser = {
                id: data.nextId,
                username: username,
                password: hashedPassword,
                created_at: new Date().toISOString()
            };
            
            data.users.push(newUser);
            data.nextId++;
            
            this.writeData(data);
            callback(null, newUser.id);
        } catch (error) {
            callback(error);
        }
    }

    // Verificar senha
    async verifyPassword(plainPassword, hashedPassword) {
        try {
            return await bcrypt.compare(plainPassword, hashedPassword);
        } catch (error) {
            console.error('Erro ao verificar senha:', error);
            return false;
        }
    }

    // Listar todos os usuários (para debug)
    getAllUsers(callback) {
        try {
            const data = this.readData();
            callback(null, data.users);
        } catch (error) {
            callback(error, []);
        }
    }
}

module.exports = User;

