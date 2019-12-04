var button = document.getElementById('submit');
var error = document.getElementById('error');
var theName = document.getElementById('name');
var email = document.getElementById('email');
var message = document.getElementById('message');
var emailReg = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
if (button) {
    button.addEventListener('click', function () {


        if (Validate() != null) {
            error.textContent = Validate();
            error.style.display = 'block';
            error.style.background = '#f8d7da';
            setTimeout(function () {
                error.style.display = 'none';
                error.textContent = null;
            }, 2000);
        } else {
            error.textContent = 'Thank You';
            error.style.display = 'block';
            error.style.background = '#2ecc71';
            setTimeout(function () {
                error.style.display = 'none';

            }, 3000);
        }
    });

}

function Validate() {

    if (theName.value.length < 5) {
        return 'The Name Should Be Between 5 Characters or More';
    }
    if (!emailReg.test(email.value)) {
        return 'Email Not Valid See If The Email Follow This Format : example@company.domain';
    }
    if (message.value.length < 10) {
        return 'The Message Should Have at Least 10 Characters';
    }
    return null;
}
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
