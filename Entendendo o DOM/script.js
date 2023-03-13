// Primeiros passos com o DOM
// 1. Selecionando elementos
// Selecionando o elemento pelo tag name
var p1 = document.getElementsByTagName('p')[0];
window.document.write("<br>" + "Está escrito assim: " + p1.innerHTML + "<br>");
p1.style.color = "white";
p1.style.backgroundColor = "red";

// Selecionando o elemento pelo id
var p2 = document.getElementById('p2');
window.document.write("<br>" + "Está escrito assim: " + p2.innerHTML + "<br>");
p2.style.color = "white";
p2.style.backgroundColor = "blue";

// Selecionando o elemento pelo name
var p3 = document.getElementsByName('p3')[0];
window.document.write("<br>" + "Está escrito assim: " + p3.innerHTML + "<br>");
p3.style.color = "white";
p3.style.backgroundColor = "green";

// Selecionando o elemento pelo class name
var p4 = document.getElementsByClassName('p4')[0];
window.document.write("<br>" + "Está escrito assim: " + p4.innerHTML + "<br>");
p4.style.color = "white";
p4.style.backgroundColor = "pink";

// Selecionando o elemento pelo query selector
var p5 = document.querySelector('#p5');
window.document.write("<br>" + "Está escrito assim: " + p5.innerHTML + "<br>");
p5.style.color = "white";
p5.style.backgroundColor = "purple";

// Selecionando o elemento pelo query selector all
var p6 = document.querySelectorAll('.p6')[0];
window.document.write("<br>" + "Está escrito assim: " + p6.innerHTML + "<br>");
p6.style.color = "white";
p6.style.backgroundColor = "orange";

function esconderElementos() {
  var p1 = document.getElementsByTagName('p')[0];
  p1.style.display = "none";
  var p2 = document.getElementById('p2');
  p2.style.display = "none";
  var p3 = document.getElementsByName('p3')[0];
  p3.style.display = "none";
  var p4 = document.getElementsByClassName('p4')[0];
  p4.style.display = "none";
  var p5 = document.querySelector('#p5');
  p5.style.display = "none";
  var p6 = document.querySelectorAll('.p6')[0];
  p6.style.display = "none";  
}

function mostrarElementos() {
  var p1 = document.getElementsByTagName('p')[0];
  p1.style.display = "block";
  var p2 = document.getElementById('p2');
  p2.style.display = "block";
  var p3 = document.getElementsByName('p3')[0];
  p3.style.display = "block";
  var p4 = document.getElementsByClassName('p4')[0];
  p4.style.display = "block";
  var p5 = document.querySelector('#p5');
  p5.style.display = "block";
  var p6 = document.querySelectorAll('.p6')[0];
  p6.style.display = "block";  
}













