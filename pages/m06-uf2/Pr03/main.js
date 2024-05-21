$(document).ready(function () {
    $('#boton').click(function () {
        //val() podemos asignar u obtener valores de ciertos elementos del DOM de una web,
        let selector = $('#camposelector').val();

        let selectedElements = $(selector);
        selectedElements.css('border', '2px solid red');
    });
});
