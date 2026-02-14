document.addEventListener("DOMContentLoaded", function () {

  const boton = document.getElementById("btnenviar");
  const input = document.getElementById("word");

  function duplicarNumero(numero) {
    return new Promise((resolve, reject) => {

      setTimeout(() => {
        resolve(numero * 2);
      }, 2000);

    });
  }

  async function procesarNumero() {

    let valor = input.value.trim();

    if (valor === "") {
      alert("Ingrese un número");
      input.value = "";
      return;
    }

    if (isNaN(valor)) {
      alert("Valor no aceptado, no es un número");
      input.value = "";
      return;
    }

    try {
      let numero = Number(valor);

      let resultado = await duplicarNumero(numero);

      alert("El doble del número es: " + resultado);
      input.value = "";

    } catch (error) {
      alert("Ocurrió un error");
      input.value = "";
    }

  }

  boton.addEventListener("click", procesarNumero);

});
