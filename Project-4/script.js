const button = document.querySelector("#fetch-pokemon");
const pokemonName = document.querySelector("#pokemon");
const pokemonImage = document.querySelector(".image img");
const errorMessageDisplay = document.querySelector("p");





button.addEventListener("click", () => {
    errorMessageDisplay.style.display = "none";
    const myURL = `https://pokeapi.co/api/v2/pokemon/` + pokemonName.value.toLowerCase();
    const apiUrl = new URL(myURL);
    fetchImage(apiUrl).then((value) => {
        console.log(value);
        pokemonImage.src = value.sprites.front_default;

    })
})

async function fetchImage(Url){

    try{
        const data = await fetch(Url,{method:"GET"});
        if(!data.ok){
            errorMessageDisplay.style.display="block";
            throw new Error ("Could not fetch the data");
        }
        else{
            const pokemonImage = (await data).json();
            return pokemonImage;
        }
    }
    catch(error){
        console.error(error);
    }

}






//get the image
//Append the image at the end in a div after button