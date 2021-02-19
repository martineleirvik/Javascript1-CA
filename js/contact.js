const form = document.querySelector("#contactform");

const name = document.querySelector("#name");
const nameError = document.querySelector("#nameerror");

const email = document.querySelector("#email");
const emailError = document.querySelector("#emailerror");

const address = document.querySelector("#address");
const addressError = document.querySelector("#addresserror");

const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjecterror");



function validateForm() {

    if (checkLength(name.value, 0) === true) {
        nameError.style.display = "none";
    } else {
        nameError.style.display = "block";
    }

    if (validateEmail(email.value) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }

    if (checkLength(address.value, 24) === true) {
        addressError.style.display = "none";
    } else {
        addressError.style.display = "block";
    }

    if (checkLength(subject.value, 9) === true) {
        subjectError.style.display = "none";
    } else {
        subjectError.style.display = "block";
    }

}

form.addEventListener("submit", validateForm)

function checkLength(value, len) {
    if (value.trim().length > len){
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}


form.onsubmit = function() {

    event.preventDefault();

    console.log(event);

    const name = document.querySelector("#name");
    console.log(name.value);

    const email = document.querySelector("#email");
    console.log(email.value);

    const address = document.querySelector("#address");
    console.log(address.value);

    const subject = document.querySelector("#subject");
    console.log(subject.value);
};




const message = document.querySelector("#message");

function submitForm(event) {
    message.innerHTML = `<div class="submitted"> Your message has been sent successfully</div>`;
    form.reset();
}

form.addEventListener ("submit", submitForm);
