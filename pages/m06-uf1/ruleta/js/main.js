function cambiarApuesta() {

    let apuesta = document.getElementsByClassName("activa");
    let tipoApuesta = document.getElementById("tipoApuesta")
    console.log(tipoApuesta.value)

    if (apuesta != null && apuesta.length > 0){
       for(element of apuesta){
            element.classList.remove("activa");
        };
    }
    document.getElementById(tipoApuesta.value).classList.add("activa");

}