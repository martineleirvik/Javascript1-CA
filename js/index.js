const url = "http://api.icndb.com/jokes";
const proxy = "https://noroffcors.herokuapp.com/";
const singleurl = "http://api.icndb.com/jokes/70";

const corsFix = proxy + url;
const corsFixSingle = proxy + singleurl;


const resultsContainer = document.querySelector(".Thejoke");


async function getJokes() {

    try {

    const response = await fetch(corsFix);

    const content = await response.json();

    console.log(content);

    const results = content.value;

    resultsContainer.innerHTML = "";

    for(let i = 0; i < results.length; i++) {
        console.log(results[i].joke);

        
        if (i === 5) {
            break;
        }

        resultsContainer.innerHTML += `<div class="result"> ${results[i].joke} </div>`;
    }
    }

    catch (error) {
        console.log(error);
        resultsContainer.innerHTML = displayError("An error occured")
    }

}


async function oneJoke() {
    const response = await fetch(corsFixSingle);
    const content = await response.json();

    console.log(content);

    const results = content.value;

    resultsContainer.innerHTML += `<div class="result"> ${results[i].joke} </div>`;
}

oneJoke();

getJokes();