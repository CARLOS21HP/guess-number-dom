// --- VARIABLES GLOBALES ---
let nombre = prompt("👋 Ingresa tu nombre:") || "Jugador";
document.getElementById("nombreJugador").textContent = nombre;

let rango = 10, intentos = 3, numeroSecreto, usado = 0;

// --- ELEMENTOS DEL DOM ---
const modo = document.getElementById("modo");
const numero = document.getElementById("numero");
const mensaje = document.getElementById("mensaje");
const intentosTxt = document.getElementById("intentos");

// --- FUNCIONES PRINCIPALES ---
function nuevoNumero() {
  numeroSecreto = Math.floor(Math.random() * (rango + 1));
  if (rango === 10 && numeroSecreto === 0) numeroSecreto = 1;
  usado = 0;
  numero.disabled = false;
  document.getElementById("intentar").disabled = false;
  intentosTxt.textContent = `Intentos restantes: ${intentos - usado}`;
  mensaje.textContent = "";
}

function verificar() {
  let n = Number(numero.value);
  if (n < 0 || n > rango || isNaN(n)) {
    mensaje.textContent = `⚠️ Ingresa un número entre 0 y ${rango}`;
    mensaje.style.color = "red";
    return;
  }
  usado++;
  if (n === numeroSecreto) {
    mensaje.textContent = `🎉 ¡Bien hecho ${nombre}! Adivinaste en ${usado} intento(s).`;
    mensaje.style.color = "green";
    finJuego();
  } else if (usado >= intentos) {
    mensaje.textContent = `💀 Perdiste, ${nombre}. El número era ${numeroSecreto}.`;
    mensaje.style.color = "crimson";
    finJuego();
  } else {
    mensaje.textContent = n < numeroSecreto ? "📈 El número es mayor." : "📉 El número es menor.";
    mensaje.style.color = n < numeroSecreto ? "#007bff" : "#ff6600";
    intentosTxt.textContent = `Intentos restantes: ${intentos - usado}`;
  }
  numero.value = "";
}

function finJuego() {
  numero.disabled = true;
  document.getElementById("intentar").disabled = true;
}

// --- EVENTOS ---
document.getElementById("intentar").onclick = verificar;
document.getElementById("reiniciar").onclick = nuevoNumero;
modo.onchange = () => { rango = Number(modo.value); nuevoNumero(); };

// --- INICIO ---
alert(`🎮 ¡Bienvenido ${nombre}! Tienes ${intentos} intentos para adivinar.`);
nuevoNumero();
