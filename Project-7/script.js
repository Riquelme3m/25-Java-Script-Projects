const imageContainer = document.querySelector(".image-container");
const imageElement = document.querySelector(".image-container img");
const progress = document.querySelector(".progress-bar-container");

let myImagesSources = [];

console.log(imageContainer);

function fetchImages() {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();

        xhr.open("GET", "https://restcountries.com/v3.1/all", true);

        xhr.onload = function () {

            if (xhr.status == 200) {
                console.log("Success");

                let countriesFlag = JSON.parse(this.response);

                for (let i = 0; i < 10; i++) {
                    myImagesSources[i] = countriesFlag[i].flags.png;
                }
                resolve(myImagesSources);
            } else {
                reject("Failed to load images");
            }

        }

        xhr.send();
    });
}

let index = 0;
fetchImages().then((images) => {
    imageElement.src = images[index];
})

const divChildren = progress.children;
divChildren[index].style.backgroundColor = "black";

function Next() {
    divChildren[index].style.backgroundColor = "gray";
    index++;
    index = index % (myImagesSources.length);
    imageElement.src = myImagesSources[index];
    console.log(index);
    divChildren[index].style.backgroundColor = "black";
}

function Prev() {
    divChildren[index].style.backgroundColor = "gray";
    index += myImagesSources.length;
    index--;
    index = index % (myImagesSources.length);
    imageElement.src = myImagesSources[index];
    console.log(index);
    divChildren[index].style.backgroundColor = "black";
}