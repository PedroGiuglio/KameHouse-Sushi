$(function () {
    $(".nosotros").click(function() {
        $('html, body').animate({
        scrollTop: $(".historia").offset().top
        }, 1000);
    });
})