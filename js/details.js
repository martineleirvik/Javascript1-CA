const resultsContainer = document.querySelector(".joke-detail");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);

const singleurl = "http://api.icndb.com/jokes/" + id;
const proxy = "https://noroffcors.herokuapp.com/";

const corsFixSingle = proxy + singleurl;



async function oneJoke() {

try {

    const response = await fetch(corsFixSingle);
    const content = await response.json();

    console.log(content);

    const results = content.value;

    resultsContainer.innerHTML = "";

    resultsContainer.innerHTML += `<div class="jokeresult"> ${results.joke} </div>`;
}

catch (error) {
    console.log(error);
    resultsContainer.innerHTML = displayError("An error occured")
}
}

oneJoke();
