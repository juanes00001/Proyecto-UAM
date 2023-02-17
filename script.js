console.log("hello world");

var a=12;
var b=24;
var c=b+a;
console.log("Resultado :" + c)

var d=35;
var e=57;
var f=34;
var j=d*e*f
console.log("Resultado :" + j)

var raiz=Math.sqrt(1144)
console.log("El resultado es :"+ raiz)

var entero=Math.trunc(45)
console.log("El resultado de esta es :" + entero)

var primos = [];
for(var n=3;n<=1002;n+=2) 
  if(primos.every(function(prime){return n%prime!=0})) {
    primos.push(n);
}
primos.unshift(1);
console.log(primos)