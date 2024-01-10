/*(function (n1){
  console.log(`Você é bichão mesmo! ${n1}`)
})(1)*/

function somar() {
 let total = 0;
 console.log(arguments);
 for(let i = 0; i < arguments.length;i++){
  total += arguments[i];  
 }
 return total;
}

console.log(somar(1,2,5,2));
