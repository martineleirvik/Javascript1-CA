const url = "http://api.icndb.com/jokes";
const proxy = "https://noroffcors.herokuapp.com/";

const corsFix = proxy + url;

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

        resultsContainer.innerHTML += `<a href="details.html?id=${results.id}" class="jokeresult"> ${results[i].joke} </a>`;
    }
    }

    catch (error) {
        console.log(error);
        resultsContainer.innerHTML = displayError("An error occured")
    }
}


getJokes();