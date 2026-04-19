const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');

const connectDB = async () => {
  try {
    // Baixa e cria um banco MongoDB invisível direto na memória da sua máquina
    const mongoServer = await MongoMemoryServer.create();
    const mongoUri = mongoServer.getUri();

    await mongoose.connect(mongoUri);
    console.log(`MongoDB Local (Memória) Conectado com Sucesso! Bypass de rede ativado.`);
  } catch (error) {
    console.error(`Erro na conexão com o MongoDB: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;