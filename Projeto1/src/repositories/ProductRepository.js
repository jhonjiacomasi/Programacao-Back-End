const Product = require('../models/Product');
const mongoose = require('mongoose');

class ProductRepository {

    async create(productData) {
        try {
            const newProduct = await Product.create(productData);
            return newProduct;
        } catch (error) {
            console.error('Erro no repositório ao criar produto:', error.message);
            throw error;
        }
    }

    async findAll() {
        try {
            const products = await Product.find({});
            return products;
        } catch (error) {
            console.error('Erro no repositório ao buscar produtos:', error.message);
            throw error;
        }
    }

    async findById(id) {
        try {
            if (!mongoose.Types.ObjectId.isValid(id)) return null;
            return await Product.findById(id);
        } catch (error) {
            console.error(`Erro no repositório ao buscar produto com ID ${id}:`, error.message);
            throw error;
        }
    }

    async updateById(id, updateData) {
        try {
            if (!mongoose.Types.ObjectId.isValid(id)) return null;
            return await Product.findByIdAndUpdate(id, updateData, { new: true, runValidators: true });
        } catch (error) {
            console.error(`Erro no repositório ao atualizar produto com ID ${id}:`, error.message);
            throw error;
        }
    }

    async deleteById(id) {
        try {
            if (!mongoose.Types.ObjectId.isValid(id)) return null;
            return await Product.findByIdAndDelete(id);
        } catch (error) {
            console.error(`Erro no repositório ao deletar produto com ID ${id}:`, error.message);
            throw error;
        }
    }
}

module.exports = ProductRepository;