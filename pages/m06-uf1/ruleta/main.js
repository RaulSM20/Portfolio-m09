function onTipoApuestaChange() {
    
    let tipoApuesta = document.getElementById("tipoApuesta").value;

    const tipoApuestaContainers = document.getElementsByClassName('tipo__apuesta--container');

    for (let tipoApuestaContainer of tipoApuestaContainers) {
        tipoApuestaContainer.classList.add('hidden');
    }

    switch (tipoApuesta) {
        case 'sencilla':
            document.getElementById('container__numApuesta').classList.remove("hidden");
            break;

        case 'parellSenar':
            document.getElementById('container__parellSenar').classList.remove("hidden");
            break;
        case 'faltaPasa':
            document.getElementById('container__faltaPasa').classList.remove("hidden");
            break;

        case 'vermellNegre':
                document.getElementById('container__vermellNegre').classList.remove("hidden");
                break;

        case 'dotzena':
                document.getElementById('container__dotzena').classList.remove("hidden");
                break;

        case 'columna':
                document.getElementById('container__columna').classList.remove("hidden");
                break;
    
        default:
            break;
    }
}

const formulario = document.getElementById('formulario');

formulario.onsubmit = function (e) {
    e.preventDefault();

    const formData = new FormData(formulario);
    console.log(formData);

    console.log(formData.get('cantidadApuesta'));
    let numeroAleatorio = Math.floor(Math.random() * 36) + 1;
    console.log(numeroAleatorio)

    let apuestaFormulario = formData.get('tipoApuesta');

    switch (apuestaFormulario) {
        case 'sencilla':

            if (numeroAleatorio == formData.get('numeroApuesta')) {
                document.getElementById('resultadoApuesta').innerHTML = "Has ganado, " + "el numero ganador es: " + numeroAleatorio;

            }else {
                document.getElementById('resultadoApuesta').innerHTML = "Has perdido, " + "el numero ganador es: " + numeroAleatorio;
    
            }
            break;
    
        case 'faltaPasa':

            if (formData.get('faltaPasa') === 'falta' && numeroAleatorio > 0 && numeroAleatorio <= 18) {
                document.getElementById('resultadoApuesta').innerHTML = "Has ganado, " + "el numero ganador es: " + numeroAleatorio;
            }else if (formData.get('faltaPasa') === 'pasa' && numeroAleatorio > 18 && numeroAleatorio <= 36) {
                document.getElementById('resultadoApuesta').innerHTML = "Has ganado, " + "el numero ganador es: " + numeroAleatorio;
            } else {
                document.getElementById('resultadoApuesta').innerHTML = "Has perdido, " + "el numero ganador es: " + numeroAleatorio;
            }

            break;
        
        case 'parellSenar':

        if (formData.get('parellSenar') === 'parell' && numeroAleatorio % 2 === 0) {
            document.getElementById('resultadoApuesta').innerHTML = "Has ganado, " + "el numero ganador es: " + numeroAleatorio;
        } else if (formData.get('parellSenar') === 'senar' && numeroAleatorio % 3 === 0) {
            document.getElementById('resultadoApuesta').innerHTML = "Has ganado, " + "el numero ganador es: " + numeroAleatorio;
        } else {
            document.getElementById('resultadoApuesta').innerHTML = "Has perdido, " + "el numero ganador es: " + numeroAleatorio;
        }

        break;

        case 'vermellNegre':

        const ruletaFrancesaRojos = [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36];
        let resultado = "perdido";

        ruletaFrancesaRojos.forEach(element => {
            if (numeroAleatorio === element) {
                resultado = "ganado";
            }
        });

        if (resultado === "ganado") {
            document.getElementById('resultadoApuesta').innerHTML = "¡Has ganado! El número ganador es: " + numeroAleatorio + " rojo";
        } else {
            document.getElementById('resultadoApuesta').innerHTML = "¡Has perdido! El número ganador es: " + numeroAleatorio + " negro";
        };


        break;

        case 'dotzena':

        if (formData.get('dotzena') === '1-12' && numeroAleatorio > 0 && numeroAleatorio < 13) {
            document.getElementById('resultadoApuesta').innerHTML = "Has ganado, " + "el numero ganador es: " + numeroAleatorio;
        }else if (formData.get('dotzena') === '13-24' && numeroAleatorio > 12 && numeroAleatorio < 25) {
            document.getElementById('resultadoApuesta').innerHTML = "Has ganado, " + "el numero ganador es: " + numeroAleatorio;
        }else if (formData.get('dotzena') === '25-36' && numeroAleatorio > 24 && numeroAleatorio < 37) {
            document.getElementById('resultadoApuesta').innerHTML = "Has ganado, " + "el numero ganador es: " + numeroAleatorio;
        } else {
            document.getElementById('resultadoApuesta').innerHTML = "¡Has perdido! El número ganador es: " + numeroAleatorio;
        }

        break;

        case 'columna':

            let primeraColumna = [1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34];
            let segundaColumna = [2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35];
            let terceraColumna = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36];
            let apuestaColumna = formData.get('columna')
            let ganador = false;


            if (apuestaColumna === 'primera') {
                console.log("testestest");

                primeraColumna.forEach(element => {
                    if (numeroAleatorio === element) {
                        ganador = true;
                    }
                });
            }
            else if (apuestaColumna === 'segunda') {
                segundaColumna.forEach(element => {
                    if (numeroAleatorio === element) {
                        ganador = true;
                    } 
                });
            }
            else if (apuestaColumna === 'tercera') {
                terceraColumna.forEach(element => {
                    if (numeroAleatorio === element) {
                        ganador = true;
                    }
                });
            }
            if (ganador == true) {
                document.getElementById('resultadoApuesta').innerHTML = "¡Has ganado! El número ganador es: " + numeroAleatorio;
            }else{
                document.getElementById('resultadoApuesta').innerHTML = "¡Has perdido! El número ganador es: " + numeroAleatorio;
            }


        break;
    }

}

onTipoApuestaChange();