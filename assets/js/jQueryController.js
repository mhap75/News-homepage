jQuery(function ($) {

    $('.icon-menu, .board').on('click', function () {
        if ($('.nav-main').css('display') === 'none') {
            $('.icon-menu img').attr('src', 'assets/images/icon-menu-close.svg');
        } else (
            $('.icon-menu img').attr('src', 'assets/images/icon-menu.svg')
        );
        $('.nav-main').toggle('slide');
        $('.board').fadeToggle();
        $('body').toggleClass('ovfl-hid');
    });

});