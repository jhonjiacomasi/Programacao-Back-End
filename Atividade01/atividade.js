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