const User = require('../models/User');

class AuthController {
    constructor() {
        this.userModel = new User();
    }

    async processLogin(req, res) {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({
                success: false,
                error: 'Por favor, preencha todos os campos'
            });
        }

        this.userModel.findByUsername(username, async (err, user) => {
            if (err) {
                console.error('Erro ao buscar usuário:', err);
                return res.status(500).json({
                    success: false,
                    error: 'Erro interno do servidor'
                });
            }

            if (!user) {
                return res.status(401).json({
                    success: false,
                    error: 'Usuário ou senha incorretos'
                });
            }

            try {
                const isValidPassword = await this.userModel.verifyPassword(password, user.password);
                
                if (isValidPassword) {
                    req.session.userId = user.id;
                    req.session.username = user.username;
                    
                    console.log(`Login realizado: ${user.username}`);
                    return res.json({
                        success: true,
                        message: 'Login realizado com sucesso',
                        user: {
                            id: user.id,
                            username: user.username
                        }
                    });
                } else {
                    return res.status(401).json({
                        success: false,
                        error: 'Usuário ou senha incorretos'
                    });
                }
            } catch (error) {
                console.error('Erro ao verificar senha:', error);
                return res.status(500).json({
                    success: false,
                    error: 'Erro interno do servidor'
                });
            }
        });
    }

    processLogout(req, res) {
        req.session.destroy((err) => {
            if (err) {
                console.error('Erro ao fazer logout:', err);
                return res.status(500).json({
                    success: false,
                    error: 'Erro ao fazer logout'
                });
            }
            
            res.clearCookie('connect.sid'); 
            console.log('Logout realizado');
            res.json({
                success: true,
                message: 'Logout realizado com sucesso'
            });
        });
    }
}

module.exports = AuthController;

