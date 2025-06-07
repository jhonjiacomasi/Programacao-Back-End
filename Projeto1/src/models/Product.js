const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: [true, "O nome do produto é obrigatório."],
        trim: true,
    },
    descricao: {
        type: String,
        required: false,
    },
    preco: {
        type: Number,
        required: [true, "O preço do produto é obrigatório."],
        min: [0, "O preço não pode ser negativo."]
    },
    estoque: {
        type: Number,
        required: [true, "A quantidade em estoque é obrigatória."],
        min: [0, "O estoque não pode ser negativo."],
        default: 0,
    },
    categoria: {
        type: String,
        trim: true,
        required: false,
    },
}, {
    timestamps: true,
    collection: 'products'
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;