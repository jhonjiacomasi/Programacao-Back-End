const mongoose = require('mongoose');

const MONGODB_URI = "mongodb+srv://beatrizmilanezi:xDl9lr9rSBaHn85O@cluster0.w2derb4.mongodb.net/ecommerce?retryWrites=true&w=majority&appName=Cluster0";

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