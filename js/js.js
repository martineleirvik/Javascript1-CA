const singleurl = "http://api.icndb.com/jokes/70";
const proxy = "https://noroffcors.herokuapp.com/";

const corsFixSingle = proxy + singleurl;

const resultsContainer = document.querySelector(".joke-detail");


async function oneJoke() {
    const response = await fetch(corsFixSingle);
    const content = await response.json();

    console.log(content);

    const results = content.value;

    resultsContainer.innerHTML = "";

    resultsContainer.innerHTML += `<div class="jokeresult"> ${results.joke} </div>`;
}

oneJoke();
