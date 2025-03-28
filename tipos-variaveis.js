// VERIFICANDO TIPOS DE VARIÁVEIS

let valor = "Hello";
console.log(typeof valor);// string

valor = 10;
console.log(typeof valor);// number

valor = parseFloat(10.12);
console.log(typeof valor);

valor = valor != 0; // true
// console.log (valor != 0 ? "ok" : "nok"); // ok
console.log(typeof valor);

valor = BigInt("97236548234265720347234082735828978979778304989");
console.log(typeof valor); // bigint

let varUnderfined;
console.log(typeof varUnderfined); // underfined null value

class Objeto {
    constructor(paramOne, paramTwo){
        this.paramOne = paramOne;
        this.paramTwo = paramTwo;
        console.log(typeof this.paramTwo); // underfined
    }
}

const objeto = new Objeto("Só parâmetro 1");
console.log(typeof objeto); // object class

valor = document.getElementById("elementoInexistente"); //valor = null;
console.log(typeof valor); // undefined null

valor = ["Vetor1", "Vetor2"];
console.log(typeof valor);

const date = new Date("2025-03-28");
console.log(typeof date); // date object

console.log(date); // mostrar tudo sobre a variável//objeto
