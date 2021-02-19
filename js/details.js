const detailContainer = document.querySelector(".joke-detail");

const url = "http://api.icndb.com/jokes";
const proxy = "https://noroffcors.herokuapp.com/";

const corsFix = proxy + url;

async function fetchJoke() {

    try {

        const response = await fetch(corsFix);
        const content = await response.json();

        console.log(content);

        createHtml(content);
    
    }

    catch (error) {
        console.log(error);
        detailContainer.innerHTML = displayError("An error occured")
    }
}

fetchJoke();

function createHtml(content) {
    detailContainer.innerHTML = `<h1> ${Joke} </h1>
                                <div class="detailjoke" ${results[i].joke} </div>`;
}