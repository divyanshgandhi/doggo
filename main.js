const DOGO_URL = "https://dog.ceo/api/breeds/image/random"

const container = document.querySelector('.container')
const nextBtn = document.querySelector('#next')
const prevBtn = document.querySelector('#previous')
const img = document.querySelector('.dogo-img')
const imageList = [];

nextBtn.addEventListener("click", showNewDoggo);

function showNewDoggo() {
    console.log('clicked')
    const promise = fetch(DOGO_URL);
    promise
        .then(function (response) {
            const processingPromise = response.json();
            return processingPromise;
        })
        .then(function (processedResponse) {
            imageList.push(processedResponse.message);
            console.log(imageList)
            img.src = processedResponse.message;
            img.alt = "Cute doggo";
        });
}

showNewDoggo()