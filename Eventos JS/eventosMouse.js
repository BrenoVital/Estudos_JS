// Eventos JavaScript DOM
// Eventos de mouse
var area = document.getElementById("area")

// Eventos de mouse para evitar o HTML poluído
area.addEventListener("click", clicou);
area.addEventListener("mouseover", mouseover);
area.addEventListener("mouseout", mouseout);
area.addEventListener("mousemove", mousemove);
area.addEventListener("mousedown", mousedown);
area.addEventListener("mouseup", mouseup);




// Evento click
function clicou() {
    area.style.backgroundColor = "red";
    area.innerHTML = "Clicou";
    alert("Evento de onclick disparado");
}

// Evento mouseover
function mouseover() {
    area.style.backgroundColor = "blue";
    alert("Passou o mouse");
}

// Evento mouseout
function mouseout() {
    area.style.backgroundColor = "purple";
    alert("Saiu com o mouse");
}

// Evento mousemove
function mousemove() {
    area.style.backgroundColor = "gray";
    alert("Moveu o mouse");
}

// Evento mousedown
function mousedown() {
    alert("Apertou o mouse");
}

// Evento mouseup
function mouseup() {
    area.style.backgroundColor = "yellow";
    alert("Soltou o mouse");
}


