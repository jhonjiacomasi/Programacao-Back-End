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

ProductSchema.statics.insert = async function(productData) {
  try {
    const newProduct = await this.create(productData);
    return newProduct;
  } catch (error) {
    console.error('Erro ao inserir produto:', error.message);
    throw error;
  }
};

ProductSchema.statics.findAllProducts = async function(query = {}) {
  try {
    const filter = {};

    if (query.nome) {
      filter.nome = new RegExp(query.nome, 'i');
    }
    if (query.categoria) { 
    }
    const products = await this.find(filter).exec();
    return products;
  } catch (error) {
    console.error('Erro ao buscar produtos:', error.message);
    throw error;
  }
};

ProductSchema.statics.findProductById = async function(id) { 
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return null;
    }
    const product = await this.findById(id);
    return product;
  } catch (error) {
    console.error(`Erro ao buscar produto com ID ${id}:`, error.message);
    throw error;
  }
};

ProductSchema.statics.deleteProductById = async function(id) {
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return null;
    }
    const result = await this.findByIdAndDelete(id);
    return result;
  } catch (error) {
    console.error(`Erro ao deletar produto com ID ${id}:`, error.message);
    throw error;
  }
};

ProductSchema.statics.updateProductById = async function(id, updateData) {
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return null;
    }

    const updatedProduct = await this.findByIdAndUpdate(id, updateData, { new: true, runValidators: true });
    return updatedProduct;
  } catch (error) {
    console.error(`Erro ao atualizar produto com ID ${id}:`, error.message);
    throw error;
  }
};

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;