var menu = document.getElementById('menu');
var nav = document.querySelector('.company');
var list = document.querySelector('.company__nav');
var isOpened = false;
if (menu) {
    menu.addEventListener('click', function () {
        if (isOpened) {
            list.style.display = 'none';
            nav.style.height = 'auto';
            menu.style.backgroundImage = 'url(\'icons/menu.svg\')';
            isOpened = false;
        } else {
            list.style.display = 'block';
            nav.style.height = '140px';
            menu.style.backgroundImage = 'url(\'icons/close.svg\')';
            isOpened = true;
        }
    });
    window.addEventListener('resize', function () {

        // alert('csxczxczx')
        if (window.innerWidth > 432) {
            list.style.display = 'block';
            menu.style.display = 'none'
            menu.style.backgroundImage = 'url(\'icons/menu.svg\')';

        } else {
            list.style.display = 'none';
            menu.style.display = 'block';
            nav.style.height = 'auto';

        }
    });
}