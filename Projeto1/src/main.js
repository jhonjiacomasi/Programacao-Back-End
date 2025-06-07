const mongoose = require('mongoose');
const connectDB = require('../src/config/db');
const ProductRepository = require('./repositories/ProductRepository');
const ProductService = require('./services/ProductService');

const productRepository = new ProductRepository();
const productService = new ProductService(productRepository);

async function mainOperacoesProdutos() {
    let idDoProdutoInserido = null;

    try {
        await connectDB();
        console.log("Conexão com o banco de dados estabelecida para demonstração.\n");

        console.log("--- Inserindo um novo produto ---");
        const dadosNovoProduto = {
            nome: "Smartphone Pro Geração X",
            descricao: "Câmera de 200MP, Tela Super AMOLED 120Hz, Bateria de 2 dias.",
            preco: 3999.90,
            categoria: "Celulares",
            estoque: 150
        };
        const produtoInserido = await productService.addNewProduct(dadosNovoProduto);
        idDoProdutoInserido = produtoInserido._id;
        console.log("Produto inserido com sucesso:", { id: produtoInserido._id, nome: produtoInserido.nome });
        console.log("------------------------------------\n");

        console.log("--- Buscando todos os produtos ---");
        const todosProdutos = await productService.listAllProducts();
        console.log(`Total de produtos encontrados: ${todosProdutos.length}`);
        todosProdutos.forEach(p => console.log(`  - ${p.nome} (ID: ${p._id})`));
        console.log("-----------------------------------\n");

        console.log("--- Editando um produto existente pelo ID ---");
        if (idDoProdutoInserido) {
            const dadosParaAtualizar = {
                preco: parseFloat((Math.random() * 300 + 50).toFixed(2)),
                descricao: "Descrição alterada via script em " + new Date().toLocaleDateString('pt-BR')
            };
            const produtoAtualizado = await productService.updateProduct(idDoProdutoInserido, dadosParaAtualizar);
            if (produtoAtualizado) {
                console.log("Produto atualizado com sucesso:");
                console.log(`  - Nome: ${produtoAtualizado.nome}`);
                console.log(`  - Novo Preço: R$${produtoAtualizado.preco}`);
            } else {
                console.log(`Produto com ID ${idDoProdutoInserido} não encontrado para atualização.`);
            }
        }
        console.log("--------------------------------------------\n");
        
        console.log("--- Excluindo um produto existente pelo ID ---");
        if (idDoProdutoInserido) {
            const produtoExcluido = await productService.removeProduct(idDoProdutoInserido);
            if(produtoExcluido) {
                console.log("Produto excluido com sucesso:", { id: produtoExcluido._id, nome: produtoExcluido.nome });
            } else {
                console.log(`Produto com ID ${idDoProdutoInserido} não encontrado para exclusão.`);
            }
        }
        console.log("--------------------------------------------\n");

    } catch (error) {
        console.error("Ocorreu um erro durante as operações:", error.message);
    } finally {
        await mongoose.connection.close();
        console.log("Conexão com o banco de dados fechada.");
    }
}

mainOperacoesProdutos();