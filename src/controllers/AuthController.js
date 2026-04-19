const authService = require('../services/AuthService');
const userRepository = require('../repositories/UserRepository');
const bcrypt = require('bcryptjs');

class AuthController {
  async login(req, res) {
    try {
      const { email, senha } = req.body;
      const result = await authService.login(email, senha);
      res.json(result); 
    } catch (error) {
      // Retorna erro 401 (Não Autorizado)
      res.status(401).json({ message: error.message });
    }
  }

  // Rota extra para criar o admin inicial
  async seed(req, res) {
    try {
      const existeAdmin = await userRepository.findByEmail('admin@minhafabrica.com');
      if (existeAdmin) {
        return res.status(400).json({ message: 'O usuário Admin já existe no banco.' });
      }

      // Criptografa a senha antes de salvar
      const salt = await bcrypt.genSalt(10);
      const senhaHash = await bcrypt.hash('senha123', salt);

      await userRepository.create({
        nome: 'Administrador',
        email: 'admin@minhafabrica.com',
        senha: senhaHash,
        perfil: 'admin'
      });

      res.status(201).json({ message: 'Usuário admin criado com sucesso' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = new AuthController();