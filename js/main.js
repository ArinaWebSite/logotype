$(function () {

    // слайдер заработает теперь задаем ему стили 
    $('.slider__inner , .news__slider-inner').slick({
        // добавляем свой класс сликбтн и задаем стили ему 
        nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
        prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
        // чтобы слайдер бесконечно не ездил есть настройка инфинити 
        infinite: false
    });


    $('select').styler();


    // Вызвать список при нажатии на бургер меню
    $('.header__btn-menu').on('click', function () {
        $('.menu ul').slideToggle();
    });

});