function verificarVelocidade() {
  var vel = document.getElementById("velocidade")
  var nVel = Number(vel.value);
  var res = document.getElementById("resultado");

  if (nVel > 80) {
    res.style.color = "red";
    res.innerHTML = `<p>Você foi <strong>MULTADO</strong> por excesso de velocidade!</p>`
    res.innerHTML += `<p>Sua velocidade foi de <strong>${nVel}Km/h.</strong></p>`
  } else {
    res.style.color = "green";
    res.innerHTML = `<p> Você está dentro do limite de velocidade!</p>`
    res.innerHTML += `<p>Sua velocidade foi de <strong>${nVel}Km/h.</strong></p>`
  }
}