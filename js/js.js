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

