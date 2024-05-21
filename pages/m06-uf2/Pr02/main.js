$(document).ready(function () {

    let checkCard = false;

    $('.card').hover(function () {
        // over
        if (!checkCard) {
            $(this).find('.info').fadeIn().show();

        }
    }, function () {
        // out
        $(this).find('.info').fadeOut().hide();
    }
    );

    $('.card').click(function (e) {
        e.preventDefault();

        if (checkCard) {
            $('.card').show();
            $('.card').find('.curriculum').hide();
            checkCard = false;
        } else {
            $(this).find('.curriculum').show()
            $('.card').not(this).hide();
            checkCard = true;
        }
    });
});
