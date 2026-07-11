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
// --- 3. SISTEMA DE LUCES (Ejercicio 2.txt) ---
// ACA USE IA: Me ayudó con la lógica de los acumuladores para sacar el promedio y el porcentaje
let obrasRegistradas = [];
let cantidadTotal = 0;
let contador = 0;

document.querySelector('#btn-comenzar').addEventListener('click', function() {
    cantidadTotal = parseInt(document.querySelector('#cant-obras').value);
    if (cantidadTotal > 0) {
        document.querySelector('#form-inicio').style.display = "none";
        document.querySelector('#form-obras').style.display = "block";
    } else {
        alert("Ingresa una cantidad válida");
    }
});

document.querySelector('#btn-guardar-obra').addEventListener('click', function() {
    let nom = document.querySelector('#nombre-obra').value;
    let luc = parseInt(document.querySelector('#luces-obra').value);
    let hor = parseInt(document.querySelector('#horas-obra').value);

    if (nom !== "" && luc > 0 && hor > 0) {
        obrasRegistradas.push({ nombre: nom, luces: luc, horas: hor });
        contador++;
        
        if (contador < cantidadTotal) {
            document.querySelector('#titulo-carga').innerText = `Datos de la Obra ${contador + 1}`;
            document.querySelector('#nombre-obra').value = "";
            document.querySelector('#luces-obra').value = "";
            document.querySelector('#horas-obra').value = "";
        } else {
            document.querySelector('#form-obras').style.display = "none";
            document.querySelector('#form-calculos').style.display = "block";
        }
    } else {
        alert("Todos los datos son obligatorios y deben ser positivos");
    }
});
document.querySelector('#btn-finalizar').addEventListener('click', function() {
    let consumoH = parseFloat(document.querySelector('#consumo-luz').value);
    let costoK = parseFloat(document.querySelector('#costo-kwh').value);

    if (consumoH > 0 && costoK > 0) {
        let totalKWh = 0;
        let obraMasLenta = obrasRegistradas;
        let masDe20 = 0;

        obrasRegistradas.forEach(function(o) {
            totalKWh += (o.luces * o.horas * consumoH);
            if (o.horas > obraMasLenta.horas) obraMasLenta = o;
            if (o.luces > 20) masDe20++;
        });

        let promedio = totalKWh / cantidadTotal;
        let porcentaje = (masDe20 / cantidadTotal) * 100;

        let divRes = document.querySelector('#zona-resultados');
        divRes.style.display = "block";
        divRes.innerHTML = `
            <h3>Informe Final</h3>
            <p>1. Consumo total: ${totalKWh.toFixed(2)} kWh. Promedio: ${promedio.toFixed(2)} kWh.</p>
            <p>2. Obra con más tiempo: ${obraMasLenta.nombre}. Costo diario: $${(obraMasLenta.luces * obraMasLenta.horas * consumoH * costoK).toFixed(2)}</p>
            <p>3. Obras con más de 20 luces: ${porcentaje}%</p>
        `;
        document.querySelector('#form-calculos').style.display = "none";
        document.querySelector('#btn-reset').style.display = "block";
    }
});

document.querySelector('#btn-reset').addEventListener('click', function() {
    location.reload();
});