

const preguntasIniciales = [
    {
        num: 1,
        respuesta: null,
        respuestaCorrecta: 'rojo'
    },
    {
        num: 2,
        respuesta: null,
        respuestaCorrecta: '9'
    },
    {
        num: 3,
        respuesta: null,
        respuestaCorrecta: '3'
    },
    {
        num: 4,
        respuesta: null,
        respuestaCorrecta: 'c'
    },
    {
        num: 5,
        respuesta: null,
        respuestaCorrecta: '6'
    },
    {
        num: 6,
        respuesta: null,
        respuestaCorrecta: 'aa'
    },
    {
        num: 7,
        respuesta: null,
        respuestaCorrecta: 'amar'
    },
    {
        num: 8,
        respuesta: null,
        respuestaCorrecta: '36'
    },
    {
        num: 9,
        respuesta: null,
        respuestaCorrecta: 'd'
    },
    {
        num: 10,
        respuesta: null,
        respuestaCorrecta: '73'
    },
    {
        num: 11,
        respuesta: null,
        respuestaCorrecta: 'madera'
    }
];

//Clonar objeto/array, spread operator
let preguntas = [...preguntasIniciales];

function mostrarPregunta(id){
    let aux = document.getElementsByClassName("activa");

    if (aux != null && aux.length > 0){
       for(element of aux){
            element.classList.remove("activa");
        };
    }

    document.getElementById("pregunta__"+id).classList.add("activa");
}

function siguientePregunta(){
    let aux = document.getElementsByClassName("activa");
    let id = aux[0].id;
    let numero = parseInt(id.split("__")[1]);
    if (numero <= 11){
        mostrarPregunta(numero+1);
    }
}
function anteriorPregunta(){
    let aux = document.getElementsByClassName("activa");
    let id = aux[0].id;
    let numero = parseInt(id.split("__")[1]);
    if (numero > 1){
        mostrarPregunta(numero-1);
    }
}
function guardarRespuesta(numPregunta, numRespuesta, respuesta){

    let preguntaSeleccionada = preguntas.find((pregunta) => pregunta.num === numPregunta);

    preguntaSeleccionada.respuesta = respuesta;

    let respuestaAnterior = document.getElementById('pregunta__'+numPregunta).getElementsByClassName('selected')

    console.log(respuestaAnterior);

    if (respuestaAnterior.length > 0) {
        respuestaAnterior[0].classList.remove('selected')
    }

    let respuestaSeleccionada = document.getElementById('pregunta__'+numPregunta).getElementsByClassName('respuesta__'+numRespuesta)

    if (respuestaSeleccionada.length > 0) {
        respuestaSeleccionada[0].classList.add('selected')
    }

    console.log(preguntas);
}
function finalizarTest() {
    

    let preguntasSinRespuesta = [];
    let numAciertos = 0;

    preguntas.forEach(element => {        
        if (element.respuesta === null) {
            preguntasSinRespuesta.push(element.num);
        } else {
            if (element.respuesta === element.respuestaCorrecta) numAciertos++;
        }
    });

    if (preguntasSinRespuesta.length === 0) {
        
        document.getElementById('cuestionario').classList.add('hidden');
        document.getElementById('resultado__cuestionario').classList.remove('hidden');



        document.getElementById('num__aciertos').innerHTML = numAciertos;



    }else{
        alert('Faltan por contestar las preguntas:  ' + preguntasSinRespuesta.join(', '));

    }


}
function reiniciarTest() {
    
    document.getElementById('cuestionario').classList.remove('hidden');
    document.getElementById('resultado__cuestionario').classList.add('hidden');

    preguntas = [ ...preguntasIniciales];
    mostrarPregunta('0');
}
