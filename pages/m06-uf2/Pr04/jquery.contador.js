(function ($) {
    $.fn.contador = function () {
        return this.each(function () {
            let textArea = $(this);
            let contadorDiv = $( '<div class"contador"><div>');
            $(textArea).after(contadorDiv);

            function actualizarContador() {
                let caracteres = textArea.val().length;
                contadorDiv.text('Numero de Caracteres ' + caracteres);
                textArea.data('contador ' , caracteres);
            }
            actualizarContador();
            
            $(textArea).keyup(function () { 
                actualizarContador();
            });
        });
    };
})(jQuery);