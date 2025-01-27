const button = document.querySelector("button");
const feed = document.querySelector("#feed");

button.addEventListener("click",()=>{
    showCountries();
})

function showCountries(){
    let xhr = new XMLHttpRequest();

    xhr.open("GET","https://restcountries.com/v3.1/all", true);
    xhr.onload = function(){
        if (xhr.status == 200){
            console.log("Success");
            let countries  = JSON.parse(this.response);
            
            countries.forEach(country => {
                const countryCard = document.createElement("div");
                const cardImage = document.createElement("img");
                cardImage.src=country.flags.png;
                countryCard.innerHTML = country.name.common;
                countryCard.appendChild(cardImage);


                feed.appendChild(countryCard);
            });
        }
    }
    xhr.send();

}