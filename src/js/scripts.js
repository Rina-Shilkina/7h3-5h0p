// Your code here...

(function() {

    var message = 'Проект находится на этапе разработки. Могут возникать ошибки.';

    alert (message);
})();

const colors = {
    'white': 'Белая',
    'yellow': 'Желтая',
    'green': 'Зеленая'
};

document.querySelector('.color').addEventListener('click', function (event) {
    if (event.target.classList.contains('color__item')) {
        const color = event.target.querySelector('input').value;
        document.querySelector('.product__pic').setAttribute('src', 'img/tshirt_' + color + '.jpg');
        document.querySelector('.product__pic').setAttribute('alt', colors[color] + ' футболка');
        document.querySelector('.product__pic').setAttribute('title', colors[color] + ' футболка');
        document.querySelector('.color__item.color__item_active').classList.remove('color__item_active');
        event.target.classList.add('color__item_active');
        event.target.querySelector('input').checked = true;
    }
});

// document.querySelector('.navigation__hamburger').addEventListener('click', function (event) {
//     if (event.target.classList.contains('hamburger__icon')) {
//         $('.navigation__links').toggleClass('navigation__links_show');
//     }
// });

$('.hamburger__icon-bars').click(function () {
    $('.navigation__content').toggleClass('navigation__content_show');
    $('.hamburger').toggleClass('hamburger_show');
    $('.hamburger__icon-bars').hide();
    $('.hamburger__icon-times').show();
    $('.hamburger__icon-bars').toggleClass('hamburger__icon-times');
    $('.navigation__links').toggleClass('navigation__links_show');
    $('.background').show();
    $('.search').hide();

});

$('.hamburger__icon-times').click(function () {
    $('.navigation__content').toggleClass('navigation__content_show');
    $('.hamburger').toggleClass('hamburger_show');
    $('.hamburger__icon-times').hide();
    $('.hamburger__icon-bars').show();
    $('.hamburger__icon-bars').toggleClass('hamburger__icon-times');
    $('.navigation__links').toggleClass('navigation__links_show');
    $('.background').hide();
    $('.search').show();

});
