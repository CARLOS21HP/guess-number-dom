

console.log("🎯 Inicio del juego 'Adivina el número'");


let numeroSecreto = Math.floor(Math.random() * 10) + 1;
let intentos = 0;

// Obtener elementos del DOM
const inputNumero = document.getElementById("numeroInput");
const btnIntentar = document.getElementById("btnIntentar");
const btnReiniciar = document.getElementById("btnReiniciar");
const mensaje = document.getElementById("mensaje");

// Mostrar bienvenida inicial con alert
alert("¡Bienvenido al juego de Adivina el Número! 🎲\nAdivina el número secreto entre 1 y 10.");

// Evento: cuando el jugador hace clic en "Intentar"
btnIntentar.addEventListener("click", () => {
  let numeroUsuario = Number(inputNumero.value);

  // Validaciones
  if (isNaN(numeroUsuario) || inputNumero.value.trim() === "") {
    mensaje.textContent = "⚠️ Ingresa un número válido.";
    mensaje.style.color = "red";
    alert("⚠️ Debes ingresar un número entre 1 y 10.");
    return;
  }

  if (numeroUsuario < 1 || numeroUsuario > 10) {
    mensaje.textContent = "❌ El número debe estar entre 1 y 10.";
    mensaje.style.color = "red";
    alert("❌ Solo números entre 1 y 10, por favor.");
    return;
  }

  intentos++;

  // Lógica principal del juego
  if (numeroUsuario === numeroSecreto) {
    mensaje.textContent = `🎉 ¡Adivinaste el número secreto ${numeroSecreto}! Lo lograste en ${intentos} intento(s).`;
    mensaje.style.color = "green";
    console.log("✅ El jugador ha ganado el juego.");
    alert(`🎉 ¡Excelente! El número era ${numeroSecreto}. Adivinaste en ${intentos} intento(s).`);
  } else if (numeroUsuario < numeroSecreto) {
    mensaje.textContent = "📈 El número secreto es mayor. Intenta nuevamente.";
    mensaje.style.color = "#007bff";
  } else {
    mensaje.textContent = "📉 El número secreto es menor. Intenta nuevamente.";
    mensaje.style.color = "#ff6600";
  }

  inputNumero.value = "";
  inputNumero.focus();
});

// Evento: reiniciar juego
btnReiniciar.addEventListener("click", () => {
  numeroSecreto = Math.floor(Math.random() * 10) + 1;
  intentos = 0;
  mensaje.textContent = "🔁 ¡Juego reiniciado! Adivina el nuevo número.";
  mensaje.style.color = "#333";
  console.log("♻️ El jugador ha reiniciado el juego.");
  alert("🔁 El juego ha sido reiniciado. ¡Intenta nuevamente!");
});

// Mensaje final en consola (cuando el jugador cierra la pestaña o finaliza)
window.addEventListener("beforeunload", () => {
  console.log("🏁 Fin del juego.");
});