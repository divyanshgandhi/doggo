const DOGO_URL = "https://dog.ceo/api/breeds/image/random"

const container = document.querySelector('.container');
const button = document.querySelector('.btn')
const img = document.querySelector('.dogo-img')

button.addEventListener("click", showNewDoggo);

function showNewDoggo(){
    console.log(' clicked ')
    const promise = fetch(DOGO_URL);
    promise
        .then(function(response) {
        const processingPromise = response.json();
        return processingPromise;
        })
        .then(function(processedResponse) {
        //const img = document.createElement("img");
        img.src = processedResponse.message;
        img.alt = "Cute doggo";
        //container.appendChild(img);
        });
}

showNewDoggo()