var nomeDaVariavel = "Valor da Variavel"; //quando declarada fora de uma funcão se torna uma variavel do sistema onde voce pode mudar o valor dela

let nomeDaVariavelTemporaria = "Valor temporário da Variável"; // assim que rodar o script o "let" sai da momória. "Let" significa= variável temporária

const nomeDaVariavelSomenteLeitura = "Valor somente Leitura da Variável"; // voce nao consegue alterar o valor dela depois de utilizado pois, diferente do "let" ele mantem na memória

console.log("nomeVariavel:", nomeDaVariavel); 

console.log("nomeVariavelTemporaria:", nomeDaVariavelTemporaria);

console.log("nomeDaVariavelSomenteLeitura:", nomeDaVariavelSomenteLeitura);

var matriz = ["vetor1", "vetor2", "vetor3", "vetor4", "vetor5",];

// console.log("matriz, vetor1:", matriz[0]);

for(let i = 0; i < matriz.length; i++) {
    console.log("matriz[" + i + "]:", matriz[i]);// "i" é indexador que fornece a chave para o vetor. "matriz.lenght;" é a quantidade de vetores da matriz. 
}

class Bateria {//a classe sempre é com primeira letra MAIÚSCULA
    constructor (chimbal, pratoDeAtaque, caixa, tom1, tom2, pratoDeConducao, bumbo, surdo) {//declaração do método construtor, o qual vai receber os parametros iniciais, 
    // os quais se converterão em propriedades de classe
        this.chimbal = chimbal;// o parametro é uma propriedade
        this.pratoDeAtaque = pratoDeAtaque;
        this.caixa = caixa;
        this.tom1 = tom1;
        this.tom2 = tom2;
        this.pratoDeConducao = pratoDeConducao;
        this.bumbo = bumbo;
        this.surdo = surdo;
    }
    metodoMostrarParametros (chimbal, pratoDeAtaque, caixa, tom1, tom2, pratoDeConducao, bumbo, surdo) {//declaração do método que vai mostrar os parametros, não as propriedades
        // let textoRetorno = [];
        // for (lei i = 0; i < this.metodoMostrarParametros.length; i++) {
        //     if(typeof this[parametros[i].value] != "undefined"); {
        //         textoRetorno.push(this[parametros[i].value]);
        //     }
        // }
        this.chimbal = chimbal;
        this.pratoDeAtaque = pratoDeAtaque;
        this.caixa = caixa;
        this.tom1 = tom1;
        this.tom2 = tom2;
        this.pratoDeConducao = pratoDeConducao;
        this.bumbo = bumbo;
        this.surdo = surdo;
        return chimbal + " - " + pratoDeAtaque + " - " + caixa + " - " + tom1 + " - " + tom2 + " - " + pratoDeConducao + " - " + bumbo + " - " + surdo;// "return" faz o método...
        //retornar o valor declarado após o "return"
    }
}
const bateria = new Bateria();// constante é somente leitura e começa com letra minúscula
console.log("Bateria", bateria.metodoMostrarParametros("chimbal", "pratoDeAtaque"));
