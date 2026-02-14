//DataBases
const baseDatos1 = ['Canada', 'EUA', 'Mexico', 'Ecuador', 'Brazil', 'Argentina', 'Uruguay'];
const baseDatos2 = ['Japón', 'Irán', 'Corea del Sur', 'Alemania', 'Croacia', 'España', 'Inglaterra'];

const inputPais = document.getElementById("nombre");
const botonBuscar = document.getElementById("btnbuscar");
const tbody = document.querySelector("tbody");


// Callback
const paisEncontrado = () => {
  alert("País encontrado");
  cleanform();
};


//Buscar en bd 1
const buscarEnBD1 = (pais, callback) => {

  const paisMinuscula = pais.toLowerCase();
  const bd1Minuscula = baseDatos1.map(p => p.toLowerCase());

  if (bd1Minuscula.includes(paisMinuscula)) {
    callback();
  } else {
    buscarEnBD2(pais, callback);
  }
};


// Buscar en bd 2
const buscarEnBD2 = (pais, callback) => {

  const paisMinuscula = pais.toLowerCase();
  const bd2Minuscula = baseDatos2.map(p => p.toLowerCase());

  if (bd2Minuscula.includes(paisMinuscula)) {
    callback();
  } else {
    alert("País no encontrado");
    cleanform();
  }
};


const buscarPais = () => {

  const pais = inputPais.value.trim();

  if (pais === "") {
    alert("Por favor ingresar el nombre del país");
    return;
  }

  buscarEnBD1(pais, paisEncontrado);
};


//Show db
const mostrarLista = () => {

  tbody.innerHTML = "";

  const todosLosPaises = [...baseDatos1, ...baseDatos2];

  todosLosPaises.forEach((pais) => {

    const fila = `
      <tr style="text-align: center;">
        <td>${pais}</td>
      </tr>
    `;

    tbody.innerHTML += fila;
  });
};


//Show 
document.addEventListener("DOMContentLoaded", () => {
  mostrarLista();
  botonBuscar.addEventListener("click", buscarPais);
});


//Cleanform
const cleanform = () =>{
  inputPais.value = "";
  inputPais.focus();
};