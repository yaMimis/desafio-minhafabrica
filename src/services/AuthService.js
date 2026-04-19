const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userRepository = require('../repositories/UserRepository');

class AuthService {
  async login(email, senha) {
    // 1. Verifica se o usuário existe
    const user = await userRepository.findByEmail(email);
    if (!user) {
      throw new Error('Credenciais inválidas');
    }

    // 2. Verifica a senha criptografada
    const isMatch = await bcrypt.compare(senha, user.senha);
    if (!isMatch) {
      throw new Error('Credenciais inválidas');
    }

    // 3. Gera o Token JWT
    const token = jwt.sign(
      { id: user._id, perfil: user.perfil },
      process.env.JWT_SECRET,
      { expiresIn: '1d' } // Token expira em 1 dia
    );

    return { user: { id: user._id, nome: user.nome, email: user.email, perfil: user.perfil }, token };
  }
}

module.exports = new AuthService();