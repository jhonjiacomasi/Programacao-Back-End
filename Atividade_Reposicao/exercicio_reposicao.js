

//1. Crie um objeto chamado `aluno` com as propriedades: `nome`, `idade` e `curso`.
const aluno = {
    nome: "Jhonatan",
    idade: 25,
    curso: "Progamacao Back-End"

};

console.log(aluno);

//2. Adicione uma nova propriedade chamada `matriculado` ao objeto `aluno`, com valor `true`.

const aluno2 = {
    nome: "Jhonatan",
    idade: 25,
    curso: "Desenvolvimento Web",
    matriculado: true
};
console.log(aluno);



//3. Altere o valor da propriedade `curso` para "Engenharia".
aluno.curso = "Engenharia";
console.log(aluno);




//4. Remova a propriedade `idade` do objeto `aluno`.
delete aluno.idade;
console.log(aluno);

//5. Acesse o valor da propriedade `nome` do objeto `aluno` e armazene em uma variável chamada`nomeAluno`.
const nomeAluno = aluno.nome;

console.log(nomeAluno);

//6. Crie uma array chamada `alunos`, contendo 3 objetos com as propriedades: `nome` e `nota`.
const alunos = [
    { nome: "Ana", nota: 8.5 },
    { nome: "Carlos", nota: 7.2 },
    { nome: "Beatriz", nota: 9.0 }
];

console.log(alunos);

//7. Usando `map`, crie um novo array com apenas os nomes dos alunos do array `alunos`.
const nomesAlunos = alunos.map(aluno => aluno.nome);
console.log(nomesAlunos);

//8. Use `filter` para retornar os alunos com nota maior ou igual a 7.

const alunosAprovados = alunos.filter(aluno => aluno.nota >= 7);
console.log(alunosAprovados);

//9. Converta o objeto `aluno` para uma string JSON.

const alunoJSON = JSON.stringify(aluno);
console.log(alunoJSON);

//10. Converta a string JSON anterior de volta para objeto.
const alunoObjeto = JSON.parse(alunoJSON);
console.log(alunoObjeto);

//11. Crie um objeto `livro` com as propriedades: `titulo`, `autor`, `anoPublicacao`, e dentro dele, um objeto `editora` com `nome` e `cidade`.
const livro = {
    titulo: "O Mistério do Tempo",
    autor: "Jhonatan Silva",
    anoPublicacao: 2025,
    editora: {
        nome: "Editora Estrela",
        cidade: "São Paulo"
    }
};

console.log(livro);

//12. Acesse o nome da editora do objeto `livro`.
const nomeEditora = livro.editora.nome;
console.log(nomeEditora);


//13. Faça uma função chamada `listarPropriedades(obj)` que receba um objeto e retorne um array com os nomes das propriedades.

function listarPropriedades(obj) {
    return Object.keys(obj);
}
console.log(listarPropriedades(livro));

//14. Crie uma função chamada `atualizarObjeto(obj, chave, valor)` que atualize dinamicamente uma propriedade de um objeto.

function atualizarObjeto(obj, chave, valor) {
    obj[chave] = valor;
}

atualizarObjeto(livro, "titulo", "O Enigma do Espaço");

console.log(livro);

//15. Escreva uma função chamada `removerPropriedade(obj, chave)` que remova uma propriedade de um objeto.

function removerPropriedade(obj, chave) {
    delete obj[chave];
}

removerPropriedade(livro, "anoPublicacao");

console.log(livro);
