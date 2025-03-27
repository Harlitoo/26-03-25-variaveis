//REMOVER VETORES DE UMA MATRIZ:

var matrizDeFrutas = ["Banana", "Maçã", "Mamão"];

matrizDeFrutas.push("Abacate");

console.log(matrizDeFrutas.toString());

var indexadorDoVetor = matrizDeFrutas.indexOf("Maçã");// Aqui é feita uma busca pelo texto "maçã" e, se encontrado o texto, retorna o número do vetor na matriz, iniciado por 0
 
matrizDeFrutas.splice(indexadorDoVetor, 1);//Aqui é retirado o vetor, ora antes encontrado na variável indexadorDoVetor, sendo o número 1 a indicação da quantidade de vetores;
//este mesmo método també é utilizado ára sbstituir vetores em uma matriz.

console.log(matrizDeFrutas.toString());//