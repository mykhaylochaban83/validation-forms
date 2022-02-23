let nameRegexp = /^[a-zA-Z]{1,20}$/;
let mailRegexp = /^[a-zA-Z0-9-.]{1,}\@[a-zA-Z]+\.[a-zA-Z]{1,}$/;
let passRegexp = /^[a-zA-Z0-9]{8,16}$/;
let getID = id => document.getElementById(id);

let testFirstName, testLastName, testEmail, testPass;
getID('firstName').addEventListener('input', function () {
    testFirstName = nameRegexp.test(this.value);
    if (testFirstName) {
        this.classList.add('valid');
        this.classList.remove('noValid');
    } else {
        this.classList.add('valid');
        this.classList.remove('valid');
        this.classList.add('noValid');
    }
})
getID('lastName').addEventListener('input', function () {
    testLastName = nameRegexp.test(this.value);
    if (testLastName) {
        this.classList.add('valid');
        this.classList.remove('noValid');
    } else {
        this.classList.add('valid');
        this.classList.remove('valid');
        this.classList.add('noValid');
    }
})
getID('email').addEventListener('input', function () {
    testEmail = mailRegexp.test(this.value);
    if (testEmail) {
        this.classList.add('valid');
        this.classList.remove('noValid');
    } else {
        this.classList.add('valid');
        this.classList.remove('valid');
        this.classList.add('noValid');
    }
})
getID('password').addEventListener('input', function () {
    testPass = passRegexp.test(this.value);
    if (testPass) {
        this.classList.add('valid');
        this.classList.remove('noValid');
    } else {
        this.classList.add('valid');
        this.classList.remove('valid');
        this.classList.add('noValid');
    }
})
getID('confirmPolicy').addEventListener('click', function () {
    if (getID('confirmPolicy').checked && testFirstName && testLastName && testEmail && testPass) {
        getID('buttonSign').removeAttribute("disabled")
    }
})
getID('buttonSign').addEventListener('click', function () {
    getID('wrapper').classList.add("hide");
    getID('modalWrapp').classList.remove("hide");
})
getID('buttonExploring').addEventListener('click', function () {
    getID('wrapper').classList.remove("hide");
    getID('modalWrapp').classList.add("hide");
    location.reload();
})