/**
 * Created by venkataramana on 27/03/19.
 */
$(document).ready(function () {
    function resizeNavBrand() {
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            $('.navbar-brand img').first().attr('width', '70px').attr('height', '70px');
            $('nav.header').first().addClass('overflow-hidden');
        } else {
            $('.navbar-brand img').first().attr('width', '112px').attr('height', '112px');
            $('nav.header').first().removeClass('overflow-hidden');
        }
    }

    $(window).on('scroll', resizeNavBrand);
});
