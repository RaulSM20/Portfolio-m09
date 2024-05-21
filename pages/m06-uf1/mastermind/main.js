const colores = ["red", "blue", "green", "orange", "brown", "black"];

let index = 0;
let filaActual = 1;
let coloresCorrectos = [];
let win = false;

/**
 * La función genera una secuencia aleatoria de colores y los almacena en una matriz llamada
 * "coloresCorrectos".
 */
function generarSecuenciaAleatoria() {

  for (let i = 0; i < 4; i++) {
    let indiceAleatorio = Math.floor(Math.random() * colores.length);
    let colorAleatorio = colores[indiceAleatorio];
    coloresCorrectos.push(colorAleatorio);
  }
}

function mostrarSecuenciaAleatoria () {
  for (let i = 1; i <= coloresCorrectos.length; i++) {
    const element = document.getElementById('secuencia-ganadora-'+i);
    element.style.backgroundColor = coloresCorrectos[i-1];    
  }
}

generarSecuenciaAleatoria();
mostrarSecuenciaAleatoria();

/**
 * La función cambia el color de fondo de un elemento según una condición y la fila actual.
 * @param event - El parámetro de evento es un objeto que representa el evento que desencadenó la
 * función. Contiene información sobre el evento, como el elemento de destino que desencadenó el
 * evento.
 */
function changeColor(event) {

  if (!win) {
    const elemento = event.target;

    if (index > colores.length) index = 0;

    const newColor = getNewColor();  
  
    // comprobar la fila y bloquear los demas circulos
    let fila = parseInt(elemento.parentNode.id.split("_")[1]);

    if (fila === filaActual) {
      elemento.style.backgroundColor = newColor;
      index++;
    }
  }
}

function getNewColor() {
  return colores[index];
}

function checkRow(numRow) {
  let result = true;

   const circles = document.getElementById('fila_'+numRow).getElementsByClassName('circulo');
   
   for (let i = 0; i < circles.length; i++) {
    const element = circles[i];
    const color = element.style.backgroundColor;

    if (coloresCorrectos[i] !== color) result = false;
   }

   return result;
}

function checkIsValidRow(numRow) {
  let isValid = true;

   const circles = document.getElementById('fila_'+numRow).getElementsByClassName('circulo');
   
   for (let i = 0; i < circles.length; i++) {
    const element = circles[i];
    const color = element.style.backgroundColor;

    if (color === '') {
      isValid = false;
    }
   }

   if (!isValid) {
    alert('Selecciona todos los colores de la fila'); 
   }

   return isValid;
}

function updateClues(numRow) {
  const circles = document.getElementById('fila_'+numRow).getElementsByClassName('circulo');
  const clues = document.getElementById('fila_'+numRow).getElementsByClassName('circuloLateral');
   
   for (let i = 0; i < circles.length; i++) {
    // Si el circulo que estoy mirando es igual al de su posicion de los ganadores
      if (circles[i].style.backgroundColor === coloresCorrectos[i] ) {
        // Si -> ok, pinto de rojo
        clues[i].style.backgroundColor = 'red';
      // Sino
      // si el circulo que estoy mirando está dentro de los ganadores 
      }else if (coloresCorrectos.includes(circles[i].style.backgroundColor)) {
        // Si -> ok, pinto de amarillo
        clues[i].style.backgroundColor = 'yellow';
      } else {
        // Sino -> no pinto
      }
    
    
    
    
   }

   // document.getElementById('fila_10').getElementsByClassName('circuloLateral')[3].style.backgroundColor = 'blue';
}

function submit() {

  // Comprobar que la fila esta llena
  let isValid = checkIsValidRow(filaActual);

  if (isValid) {
    // Comprobar si la fila es ganadora
    win = checkRow(filaActual);

    if (win) {
      alert('Has ganado!');
    } else {
      // Actualizar pistas 
      updateClues(filaActual);

      filaActual++;
    }
  }  
}



