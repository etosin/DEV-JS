/*let idade = "41";
let idadeConv = parseInt(idade);
let msg = `Eu tenho ${idadeConv} anos`;

if (typeof idadeConv  == "number" || 1 == 2 ){
    console.log(msg);
} */

/*function Pessoa () {
    this.nome = "Emerson";
    this.apelido = "Tosin";
    this.idade   = 41;
}

let newPessoa = new Pessoa();

console.log(newPessoa.nome); */

//let varIdade = 33.

/*let varTexto = (varIdade >= 18) ? "Maior de idade" : "Menor de idade";
console.log(varTexto); */

/*const arrowFunction = (n1, n2) => { 

   if(n1 == undefined){
    n1 = 0
   }

   if(n2 == undefined){
    n2 = 0
   }
    
   return n1 + n2;
}

console.log( arrowFunction(2) );*/

/*var array = new Array("1", "2", "3", "4");
array.push("5", "6");

for (let i = 0; i < array.length; i++) {
    console.log(`${i}: O valor do campo é ${array[i]}`);
}*/

let objectNome = new Array();

function Pessoa(nome, incremento, sexo) {
    this.nome = nome,
        this.idade = 40 + incremento,
        this.sexo = sexo
}

for (let i = 0; i < 5; i++) {

    let newPessoa = new Pessoa("Pessoa " + i, i, "Masculino");
    objectNome.push(newPessoa)
}

for (let i = 0; i < objectNome.length; i++) {
    
    console.log(`${objectNome[i].nome} tem ${objectNome[i].idade} anos`)
}

//console.log(objectNome[0].nome);