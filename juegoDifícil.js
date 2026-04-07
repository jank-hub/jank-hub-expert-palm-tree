let numeroSecreto = Math.floor(Math.random() * 1000) + 1

function jugar() {

  let intento = Number(document.getElementById("Número").value);

  if (intento === numeroSecreto) {

    document.getElementById("resultado").textContent = 
    "🎉 ¡Adivinaste el número!";

  } else if (intento < numeroSecreto) {

    document.getElementById("resultado").textContent =
    "📉 El número es mayor";

  } else {

    document.getElementById("resultado").textContent =
    "📈 El número es menor"
  }
}