$(function() {
    const navLogo = $('.nav__logo')
    const nav = $('.nav');
    var scrollPrev = 0;
    $(window).scroll(function() {
        var scrolled = $(this).scrollTop();

        if (scrolled > 50 && scrolled > scrollPrev) {
            nav.addClass('nav--small');
        } else {
            nav.removeClass('nav--small');
        }

        if (scrolled > 50) {
            navLogo.removeClass('nav__logo--hidden');
        } else {
            navLogo.addClass('nav__logo--hidden');
        }

        scrollPrev = scrolled;
    })

    const hamburger = $('.hamburger');
    const navList = $('.nav__list');
    hamburger.click(function() {
        navList.toggleClass('nav__list--mobile');
    })
})