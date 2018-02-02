// Your code here...

(function() {

    var message = 'Проект находится на этапе разработки. Могут возникать ошибки.';

    alert (message);
})();

/*          -   breadcrubms     -           */

document.querySelector('.menu__links').addEventListener('click', function (event) {
    if (event.target.classList.contains('menu__link')) {
        document.querySelector('.menu__link.menu__link_active').classList.remove('menu__link_active');
        event.target.classList.add('menu__link_active');
    }
});

/*                 -   size     -            */

document.querySelector('.product-size').addEventListener('click', function (event) {
    if (event.target.classList.contains('product-size__item')) {
        document.querySelector('.product-size__item.product-size__item_active').classList.remove('product-size__item_active');
        event.target.classList.add('product-size__item_active');
    }
});

/*                 -   color     -            */

$(document).on('click', '.product-color .product-color__item', function () {
    const colors = {
        'white': 'Белая',
        'yellow': 'Желтая',
        'green': 'Зеленая'
    };
    const color = $(this).find('input').val();
    $('.product__pic').attr('src', 'img/tshirt_' + color + '.jpg');
    $('.product__pic').attr('alt', colors[color] + ' футболка');
    $('.product__pic').attr('title', colors[color] + ' футболка');
    $('.product-color__item.product-color__item_active').removeClass('product-color__item_active');
    $(this).addClass('product-color__item_active');
    $(this).find('input').prop('checked', true);
});









$('.menu__icon-bars').click(function () {
    $('.navigation').addClass('navigation__active');
    $('.background').show();
});

$('.menu__icon-times').click(function () {
    $('.navigation').removeClass('navigation__active');
    $('.background').hide();

});






$('.oggetto-logo__pic svg path').removeAttr('style');
$('.oggetto-logo__pic svg path').removeAttr('fill');


//
// document.querySelector('.color').addEventListener('click', function (event) {
//     if (event.target.classList.contains('color__item')) {
//         const color = event.target.querySelector('input').value;
//         document.querySelector('.product__pic').setAttribute('src', 'img/tshirt_' + color + '.jpg');
//         document.querySelector('.product__pic').setAttribute('alt', colors[color] + ' футболка');
//         document.querySelector('.product__pic').setAttribute('title', colors[color] + ' футболка');
//         document.querySelector('.color__item.color__item_active').classList.remove('color__item_active');
//         event.target.classList.add('color__item_active');
//         event.target.querySelector('input').checked = true;
//     }
// });
