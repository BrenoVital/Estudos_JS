function validar() {
  var valor = document.getElementByid("numero").value;
  if (valor.length > 2) {
    alert("O valor deve ter no máximo 2 caracteres");
    return false
  } else {
    return true;
  }
}