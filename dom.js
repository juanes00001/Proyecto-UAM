console.log("Entramos");

var items = document.getElementsByClassName("item");

var cantidad = items.length;

console.log(cantidad);

var lista = document.getElementById("lista");

var hijo = document.createElement("li");
hijo.innerText = "li nuevo";
lista.appendChild(hijo);

var parrafo= document.getElementById("tres").style.color="green";
var lista = document.getElementById("lista").style.color="red";

var div = document.createElement("div");

