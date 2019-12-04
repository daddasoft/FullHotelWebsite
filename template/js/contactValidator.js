let button = document.getElementById('submit');
let error = document.getElementById('error');
let theName = document.getElementById('name');
let email = document.getElementById('email');
let message = document.getElementById('message');
const emailReg = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
if (button) {
    button.addEventListener('click', function () {


        if (Validate() != null) {
            error.textContent = Validate();
            error.style.display = 'block';
            error.style.background = '#f8d7da';
            setTimeout(() => {
                error.style.display = 'none';
                error.textContent = null;
            }, 2000);
        } else {
            error.textContent = 'Thank You';
            error.style.display = 'block';
            error.style.background = '#2ecc71';
            setTimeout(() => {
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