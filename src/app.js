require('dotenv').config(); // Carrega as variáveis de ambiente 
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

// Inicia a conexão com o banco
connectDB();

const app = express();

// Middlewares globais
app.use(cors());
app.use(express.json()); // Permite o Express entender JSON

// Rota de teste simples
app.get('/', (req, res) => {
  res.json({ message: 'API Minha Fabrica rodando perfeitamente!' }); 
});

// Importação das Rotas do Projeto
app.use('/api/v1/auth', require('./routes/authRoutes'));
app.use('/api/v1/products', require('./routes/productRoutes')); // <- LINHA NOVA AQUI

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});