
const mainContainer = document.querySelector(".container");

async function fetchData() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "GET"
        });
        console.log("I am here");
        if (!response.ok) {
            throw new Error("Could not fetch the data");
        } else {
            const data = await response.json();

            return data;
        }
    } catch (err) {
        console.error(err);
    }
}



async function makeDivsFromAPI(){
    const value = await fetchData();

    value.forEach((element,index,value)=>{
        const newDiv = `<div><h3>${element.title}</h3><p>${element.body}</p></div>`;
        mainContainer.innerHTML+=newDiv;
    }) 
}
makeDivsFromAPI();

    

