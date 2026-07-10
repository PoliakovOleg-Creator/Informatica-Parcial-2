// --- 1. DATOS CURIOSOS (Math.random) ---
// ACA USE IA: Me ayudó a entender cómo usar Math.floor para que el índice no de error
const listaDatos = [
    "Rafael Lozano-Hemmer nació en México y estudió Química Física [3].",
    "Su obra utiliza sensores biométricos para captar latidos del corazón [4].",
    "Ha expuesto sus obras en más de 70 países [5].",
    "Ganó el premio Ars Electronica por su innovación [5].",
    "Sus instalaciones necesitan al público para existir [6]."
];

document.querySelector('#btn-dato').addEventListener('click', function() {
    let azar = Math.floor(Math.random() * listaDatos.length);
    document.querySelector('#pantalla-dato').innerHTML = `<p>${listaDatos[azar]}</p>`;
});