const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  // Pega o token do cabeçalho da requisição
  const token = req.header('Authorization');
  if (!token) return res.status(401).json({ message: 'Acesso negado. Token não fornecido.' });

  try {
    // Tira a palavra "Bearer " e verifica o token com a nossa chave secreta
    const decoded = jwt.verify(token.replace('Bearer ', ''), process.env.JWT_SECRET);
    req.user = decoded; // Salva os dados do usuário para as próximas etapas
    next(); // Deixa o usuário passar
  } catch (error) {
    res.status(400).json({ message: 'Token inválido.' });
  }
};