(function($) {
    $.fn.createDialog = function(options) {
        let settings = $.extend({
            width: $(window).width() / 2,
            height: $(window).height() / 2
        }, options);

        return this.each(function() {
            $(this).css({
                'width': settings.width,
                'height': settings.height
            });
        });
    };

    $.fn.showDialog = function() {
        $(this).fadeIn();
        $('body').css('overflow', 'hidden');
    };

    $.fn.hideDialog = function() {
        $(this).fadeOut();
        $('body').css('overflow', 'auto');
    };
})(jQuery);