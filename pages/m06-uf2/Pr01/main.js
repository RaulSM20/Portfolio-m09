$(document).ready(function() {
    $('button').hover(function () {
        // over
        $(this).siblings('main div:nth-child(even) p').css('color', 'green').slideDown().show();
        $(this).siblings('main div:nth-child(odd) p').css('color', 'red').slideDown().show();
    }, function () {
        // out
        $('p').css('color', '').slideUp().hide();
    });
});
