//EL JUEGO SELECCIONA UN NUMEROP AL AZAR PARA QUE PODAMOS ADIVINARLO
let numeroAzar = Math.floor(Math.random()*100) + 1;

let numeroEntrada = document.getElementById('numeroEntrada');
let mensaje = document.getElementById('mensaje');
let intento = document.getElementById('intento');
let intentos = 0;

// SE EJECUTARA CUANDO SE TOQUE EL BOTON DE CHEQUEAR
function checaResultado(){

  intentos++
  intento.textContent = parseInt(intentos)

  let numeroIngresado = parseInt(numeroEntrada.value);


  if (numeroIngresado < 1 || numeroIngresado >100 || isNaN(numeroIngresado)) {
    mensaje.textContent = 'Introduce un nùmero valido entre 1 y 100';
    mensaje.style.color = "red"
    return;
  }

  if (numeroIngresado === numeroAzar) {
    mensaje.textContent = '¡Felicidades, has adivinado el nùmero!';
    mensaje.style.color = 'green';
    numeroEntrada.disabled = true;
  }else if (numeroIngresado < numeroAzar){
    mensaje.textContent = '¡Error,el nùmero es mayor al que escribiste!';
    mensaje.style.color = 'red';
  }else{
    mensaje.textContent = '¡Error,el nùmero es menor al que escribiste!';
    mensaje.style.color = 'red';
  };
}