//Setting API URL
const DOGO_URL = "https://dog.ceo/api/breeds/image/random"

//Getting all the DOM elements
const container = document.querySelector('.container')
const nextBtn = document.getElementById('next')
const prevBtn = document.getElementById('previous')
const img = document.querySelector('.dogo-img')
const imageList = [];
var index = 0;

//Adding click listeners
prevBtn.addEventListener("click", prevDoggo);
nextBtn.addEventListener("click", nextDoggo);

//Setting prevBtn to be disabled initially
prevBtn.disabled = true;

//FUN - Sets the image to be the previous image in the array,
//called by clicking on 'Previous'
function prevDoggo() {
    console.log('Previous button')
    index = index - 1
    img.src = imageList[index]
    if (index == 0) {
        prevBtn.disabled = true
    }
}

//FUN - Sets the image to be the next image in the array or new image,
//called by clicking on 'Previous'
function nextDoggo() {
    console.log('Next button')
    index = index + 1
    if (index < imageList.length) {
        img.src = imageList[index]
    } else {
        const promise = fetch(DOGO_URL);
        promise
            .then(function (response) {
                const processingPromise = response.json();
                return processingPromise;
            })
            .then(function (processedResponse) {
                imageList.push(processedResponse.message)
                console.log(imageList)
                img.src = processedResponse.message
                img.alt = "Cute doggo"
            });
    }
    //To check if there is previous image
    if (index > 0) {
        prevBtn.disabled = false;
    }
}

//FUN - Initializes the image to the first doggo image
//called when first time page is loaded
function showNewDoggo() {
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

//Call to the function to load image for the first time
showNewDoggo()