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


$('.hamburger__icon-bars').click(function () {
    $('.navigation').addClass('navigation__active');
    $('.background').show();
});

$('.hamburger__icon-times').click(function () {
    $('.navigation').removeClass('navigation__active');
    $('.background').hide();

});

document.querySelector('.navigation__links').addEventListener('click', function (event) {
    if (event.target.classList.contains('navigation__link')) {
        document.querySelector('.navigation__link.navigation__link_active').classList.remove('navigation__link_active');
        event.target.classList.add('navigation__link_active');
    }
});
