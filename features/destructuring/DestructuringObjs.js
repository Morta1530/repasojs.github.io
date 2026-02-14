document.addEventListener("DOMContentLoaded", function () {

  const boton = document.getElementById("btnenviar");
  const resultado = document.getElementById("resultado");

  const person = {
    name: 'Juan Carlos Valencia',
    age: 30,
    city: 'Cali',
    profession: 'Desarrollador'
  };

  boton.addEventListener("click", function () {

    const { name, age, city, profession } = person;

    resultado.innerHTML = `
      <div class="alert alert-success">
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Edad:</strong> ${age}</p>
        <p><strong>Profesión:</strong> ${profession}</p>
      </div>
    `;

  });

});
