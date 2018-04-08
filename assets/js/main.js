$(document).ready(function () {
    // Mostrar menu
    $('#openMenu').on('click', function () {
        $('nav.menu').toggle('fast');
   });
    // Ocultar menu
    $('#closeMenu').on('click', function () {
        $('nav.menu').toggle('fast');
    });

    // Submenus
    $('.items-menu .submenu').on('click', function () {
        $('.second-level').removeClass('hide');
    });

    $('.items-menu .submenu .sub-submenu').hover(function () {
        $('.third-level ').toggleClass('hide');
    });


    // Menu scroll
    posicionarMenu();
    $(window).scroll(function () {
        posicionarMenu();
    });
    function posicionarMenu() {
        var altura_del_menu = $('header').outerHeight(true);
        if ($(window).scrollTop() >= altura_del_menu) {
            $('header').addClass('fixed');
        } else {
            $('header').removeClass('fixed');
        }
    }




});