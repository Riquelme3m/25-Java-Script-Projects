doChores();



function walkTheDog() {
    console.log("Walking the dog");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Dog walked");
        }, 3000);
    })

}

function cleanTheKitchen() {
    console.log("Cleaning the kitchen");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("kitchen cleaned");
        }, 3000);
    })
}

function takeTrashOut() {
    console.log("Taking the trash out");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("trash taken out");
        }, 3000);
    })
}


async function doChores(){
    try{
        const walkDog =  await walkTheDog();
        
        const cleankitchen = await cleanTheKitchen();
        
        const takeTrash = await takeTrashOut();
        
    }
    catch(err){
        console.error(err);
    }
}

