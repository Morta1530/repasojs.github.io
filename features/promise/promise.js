
document.addEventListener("DOMContentLoaded", function () {

  const boton = document.getElementById("btnenviar");
  const input = document.getElementById("word");

//Promise
  function verificarVocal(palabra) {
    return new Promise((resolve, reject) => {

      if (!palabra) {
        reject("No ingresaste ninguna palabra");
        return;
      }

      let ultimaLetra = palabra.slice(-1);

      let vocales = "aeiouAEIOU";

      if (vocales.includes(ultimaLetra)) {
        resolve("La palabra termina en la vocal:  " + ultimaLetra);
      } else {
        reject("El último carácter no es una vocal");
      }

    });
  }

  // Evento click
  boton.addEventListener("click", function () {

    let palabra = input.value.trim();

    verificarVocal(palabra)
      .then((mensaje) => {
        alert(mensaje);
        input.value = "";
      })
      .catch((error) => {
        alert(error);
        input.value = "";
      });

  });

});


//Cleanform
const cleanform = () =>{
  inputPais.value = "";
  inputPais.focus();
};