const url = "http://api.icndb.com/jokes";
const proxy = "https://noroffcors.herokuapp.com/";

const corsFix = proxy + url;



const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

if (id === null) {
    location.href = "/";
}

const corsFix = "http://api.icndb.com/jokes" + id;

const idContainer = document.querySelector(".id");
const detailContainer = document.querySelector(".details");

idContainer.innerHTML = id;

async function fetchCaracter() {

    try {

        const response = await fetch(corsFix);
        const details = await response.json();

        console.log(details);

        
    }
}



// CONTACT


form.onsubmit = function() {

    event.preventDefault();

    console.log(event);

    const name = document.querySelector("#name");
    console.log(name.value);

    const email = document.querySelector("#email");
    console.log(email.value);

    const address = document.querySelector("#address");
    console.log(address.value);

    const text = document.querySelector("#text");
    console.log(text.value);
};
