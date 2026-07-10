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
// --- 2. GALERÍA DINÁMICA (Objetos y forEach) ---
// ACA USE IA: Para armar el array de objetos con las obras recomendadas
const misObras = [
    { titulo: "Pulse Room", ano: 2006, img: "img/obra1.jpg" },
    { titulo: "Vectorial Elevation", ano: 1999, img: "img/obra2.jpg" },
    { titulo: "Body Movies", ano: 2001, img: "img/obra3.jpg" },
    { titulo: "Cloud Display", ano: 2016, img: "img/obra4.jpg" },
    { titulo: "33 Questions per Minute", ano: 2000, img: "img/obra5.jpg" }
];

const contenedor = document.querySelector('#contenedor-galeria');

misObras.forEach(function(obra) {
    let art = document.createElement('article');
    art.className = "tarjeta-obra";
    art.innerHTML = `
        <img src="${obra.img}" alt="${obra.titulo}" style="width:100%">
        <h3>${obra.titulo}</h3>
        <p>Año: ${obra.ano}</p>
    `;
    contenedor.appendChild(art);
});

// Botón para cambiar diseño (consigna [7])
document.querySelector('#btn-cambiar-estilo').addEventListener('click', function() {
    contenedor.classList.toggle('diseno-alternativo');
    alert("Diseño de galería modificado");
});