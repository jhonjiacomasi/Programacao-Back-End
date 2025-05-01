// Nome: Rythielly Francisco Garcia Bezerra, 2454459 
// Nome: Jhonatan Santana Giacomazi, 
// 1. Declare uma variável usando "let" com o nome "nome" e atribua a ela seu nome.
let nome = "Jhonatan";

// 2. Declare uma variável "idade" com valor 25 usando "var".
var idade = 25;

// 3. Tente redeclarar a variável "idade" usando "var" com outro valor.
// Ele não dá erro no código, mas na hora de compilar ele identifica que foi declarado.
// var idade = 28;

// 4. Tente redeclarar uma variável "nome" com "let" no mesmo escopo. O que acontece? 
// Ela não deixa atribuir o mesmo nome de variável usando let.
// let nome = "TESTE";

// 5. Escreva um código que exiba "Olá, mundo!" usando alert().
// alert("OLÁ MUNDO");

// 6. Crie um script que exiba seu nome no console usando console.log().
console.log(nome);

// 7. Escreva uma estrutura condicional que verifique se uma variável "nota" é maior ou igual a 7.
var nota = 9;
if (nota >= 7) {
    console.log("Maior que 7");
} else {
    console.log("Menor que 7");
}

// 8. Crie uma estrutura if/else que exiba "Par" se o número for par e "Ímpar" caso contrário.
let numero = 9;

if (numero % 2 === 0) {
    console.log("Par");
} else {
    console.log("Ímpar");
}

// 9. Declare duas variáveis e some seus valores, exibindo o resultado com console.log().
let a = 9;
let b = 6;

console.log(a + b);

// 10. Crie uma função que receba dois números e retorne a multiplicação deles.
function multiplicacao(a, b) {
    return a * b;
}

let resultado = multiplicacao(7, 9);

console.log("O Resultado é: " + resultado);

// 11. Implemente uma função que use async/await e aguarde 1 segundo antes de mostrar "Pronto".
function esperarUmSegundo() {
    return new Promise(resolve => setTimeout(resolve, 1000)); 
}

async function mostrarPronto() {
    console.log("Esperando...");
    await esperarUmSegundo();
    console.log("Pronto");
}

mostrarPronto();

// 12. Declare uma variável "x" com valor 10 e incremente seu valor em 5.
let x = 10;
for (let i = 0; i < 5; i++) {
    x += 1;
}
console.log("O valor final de x é: " + x);

// 13. Escreva um código que exiba "Acesso permitido" se a idade for maior ou igual a 18.
let age = 20;
if (age >= 18) {
    console.log("Acesso permitido");
} else {
    console.log("Acesso negado");
}

// 14. Utilize o operador ternário para verificar se um número é positivo ou negativo.
let num = -5;
let result = num >= 0 ? "Positivo" : "Negativo";
console.log("O número é: " + result);

// 15. Crie um array com 3 nomes e exiba o segundo nome.
const nomes = ["Ana", "Bruno", "Carlos"];
console.log(nomes[1]);

// 16. Adicione um nome ao final de um array usando push().
nomes.push("Diana");
console.log(nomes);

// 17. Remova o primeiro elemento de um array usando shift().
nomes.shift();
console.log(nomes);

// 18. Declare um objeto com as propriedades nome e idade.
const pessoa = {
  nome: "João",
  idade: 25
};

// 19. Acesse a propriedade "idade" de um objeto e exiba no console.
console.log(pessoa.idade);

// 20. Crie um loop for que conte de 1 a 5 e exiba os números.
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// 21. Crie uma função que exiba "Olá, [nome]" no console.
function saudacao(nome) {
  console.log(`Olá, ${nome}`);
}
saudacao("Lucas");

// 22. Implemente uma Promise que resolve com "Sucesso" após 2 segundos.
const promessa = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Sucesso");
  }, 2000);
});
promessa.then(mensagem => console.log(mensagem));

// 23. Utilize setTimeout para exibir "Tempo esgotado" após 3 segundos.
setTimeout(() => {
  console.log("Tempo esgotado");
}, 3000);

// 24. Crie um script que exiba "Bem-vindo!" somente se uma variável "logado" for true.
let logado = true;
if (logado) {
  console.log("Bem-vindo!");
}

// 25. Use typeof para verificar o tipo de uma variável "nome".
let nome = "Maria";
console.log(typeof nome);

// 26. Crie um script que pergunte ao usuário o nome com prompt() e exiba com alert().
// (Rodar no navegador)
let nomeUsuario = prompt("Qual o seu nome?");
alert(`Olá, ${nomeUsuario}`);

// 27. Use template string para exibir "Meu nome é [nome] e tenho [idade] anos".
let idade = 30;
console.log(`Meu nome é ${nome} e tenho ${idade} anos.`);

// 28. Declare uma constante com valor 100 e tente alterá-la.
const numero = 100;
// numero = 200; // Isso causará erro: Assignment to constant variable.

// 29. Crie um código que simule login: se usuário for "admin" e senha "123", exiba "Acesso liberado".
let usuario = "admin";
let senha = "123";
if (usuario === "admin" && senha === "123") {
  console.log("Acesso liberado");
} else {
  console.log("Acesso negado");
}

// 30. Crie uma função que receba idade e retorne "maior de idade" ou "menor de idade".
function verificarIdade(idade) {
  return idade >= 18 ? "maior de idade" : "menor de idade";
}
console.log(verificarIdade(17));