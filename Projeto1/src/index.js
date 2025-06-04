const mongoose = require('mongoose');
const connectDB = require('./config/db');
const Product = require('./models/Product');

async function mainOperacoesProdutos() {
    try {
        await connectDB();
        console.log("Conexão com o banco de dados estabelecida para demonstração.\n");
        
    //funcao para inserir novo produto no banco
    console.log("--- Inserindo um novo produto ---");
    const dadosNovoProduto = {
      nome: "Smartphone Pro Geração X",
      descricao: "Câmera de 200MP, Tela Super AMOLED 120Hz, Bateria de 2 dias.",
      preco: 3999.90,
      categoria: "Celulares",
      estoque: 150
    };
    console.log("Dados do novo produto a ser inserido:", dadosNovoProduto);

    const produtoInserido = await Product.insert(dadosNovoProduto);

    if (produtoInserido) {
        console.log("Produto inserido com sucesso no banco:");
        console.log(`  - Nome: ${produtoInserido.nome}`);
        console.log(`  - ID: ${produtoInserido._id}`); 
        console.log(`  - Preço: R$${produtoInserido.preco}`);
        console.log(`  - Estoque: ${produtoInserido.estoque}`);
        console.log(`  - Categoria: ${produtoInserido.categoria}`);

    } else {
        console.log("Falha ao inserir o novo produto. O método Product.insert não retornou um produto.");
    }
    console.log("------------------------------------\n");

        //função para buscar os produtos no banco
        console.log("--- Buscando todos os produtos ---");
        const todosProdutos = await Product.findAllProducts();
        console.log(`Total de produtos encontrados: ${todosProdutos.length}`);

        todosProdutos.forEach(p => console.log(`  - ${p.nome} (ID: ${p._id}, Preço: R$${p.preco})`));
        console.log("-----------------------------------\n");

        //funcao para editar um produto, pelo id, no banco
        console.log("--- Editando um produto existente pelo ID ---");

        const idDoProdutoParaEditar = "6840b9f3267592390bddc1d4";  //esse id é um id que eu peguei da propria lista que retorna todos os ids, apenas para exemplo de teste

        if (idDoProdutoParaEditar && idDoProdutoParaEditar !== "" && mongoose.Types.ObjectId.isValid(idDoProdutoParaEditar)) {
            const dadosParaAtualizar = {
                preco: parseFloat((Math.random() * 300 + 50).toFixed(2)),
                estoque: Math.floor(Math.random() * 50) + 1,
                descricao: "Descrição alterada via script em " + new Date().toLocaleDateString('pt-BR')
            };
            console.log(`Tentando atualizar produto com ID: ${idDoProdutoParaEditar} com os dados:`, dadosParaAtualizar);

            const produtoAtualizado = await Product.updateProductById(idDoProdutoParaEditar, dadosParaAtualizar);

            if (produtoAtualizado) {
                console.log("Produto atualizado com sucesso:");
                console.log(`  - Nome: ${produtoAtualizado.nome}`);
                console.log(`  - ID: ${produtoAtualizado._id}`);
                console.log(`  - Novo Preço: R$${produtoAtualizado.preco}`);
                console.log(`  - Novo Estoque: ${produtoAtualizado.estoque}`);
                console.log(`  - Nova Descrição: ${produtoAtualizado.descricao}`);
            } else {
                console.log(`Produto com ID ${idDoProdutoParaEditar} não encontrado no banco para atualização ou dados de atualização inválidos.`);
            }
        } else if (idDoProdutoParaEditar === "SEU_ID_AQUI") {
            console.log("AVISO: Edição pulada. Por favor, defina a variável 'idDoProdutoParaEditar' com um ID válido no código (diferente de 'SEU_ID_AQUI').");
        } else if (idDoProdutoParaEditar && !mongoose.Types.ObjectId.isValid(idDoProdutoParaEditar)) {
            console.log(`ERRO: O ID '${idDoProdutoParaEditar}' fornecido para edição não é um ObjectId válido.`);
        } else {
            console.log("AVISO: ID para edição não fornecido. Edição pulada.");
        }
        console.log("--------------------------------------------\n");


    } catch (error) {
        console.error("Ocorreu um erro durante as operações com o banco de dados:", error.message);
        if (error.name === 'ValidationError') {
            console.error("Detalhes da Validação:", error.errors);
        } else {
            console.error("Detalhes do Erro:", error);
        }
    } finally {
        await mongoose.connection.close();
        console.log("Conexão com o banco de dados fechada.");
    }
}

mainOperacoesProdutos();