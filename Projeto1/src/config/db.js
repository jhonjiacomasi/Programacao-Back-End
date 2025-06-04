const mongoose = require('mongoose');

const MONGODB_URI = "mongodb+srv://rythielly:Rythi2701@projeto-backend.8uyzyzf.mongodb.net/ecommerce?retryWrites=true&w=majority&appName=Projeto-Backend";

const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI); 
    console.log('MongoDB conectado com sucesso via Mongoose.');
  } catch (err) {
    console.error('Erro ao conectar com MongoDB via Mongoose:', err.message);
    process.exit(1); 
  }
};

module.exports = connectDB;