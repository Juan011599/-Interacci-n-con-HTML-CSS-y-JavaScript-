let contador = 0;

const elementoContador = document.getElementById("contador");
const botonSumar = document.getElementById("sumar");
const botonRestar = document.getElementById("restar");

function actualizarContador() {
  elementoContador.textContent = contador;

  if (contador >= 10) {
    elementoContador.classList.add("color-rojo");
  } else {
    elementoContador.classList.remove("color-rojo");
  }
}

botonSumar.addEventListener("click", () => {
  contador++;
  actualizarContador();
});

botonRestar.addEventListener("click", () => {
  contador--;
  actualizarContador();
});
