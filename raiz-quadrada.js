// RAIZ QUADRADA DE NÚMEROS

function calcularRaizQuadrada(numero) {
    if (numero < 0) {
        return "Número inválido. A raiz quadrada de um número negativo não é um número real.";
    }
    return Math.sqrt(numero);
}

// Exemplo de uso
let numero = 16;
let resultado = calcularRaizQuadrada(numero);
console.log(`A raiz quadrada de ${numero} é ${resultado}`);