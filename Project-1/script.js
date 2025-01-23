const clickable = document.querySelectorAll(".accordion-item-header");


for(let i=0;i<clickable.length;i++){

    

    clickable[i].addEventListener("click", () => {

        const accordionBody = clickable[i].parentElement.querySelector(".accordion-item-body");
    
        clickable[i].classList.toggle("active");

        if(getComputedStyle(accordionBody).maxHeight=="0px"){
            accordionBody.style.maxHeight="300px";
        }
        else{
            accordionBody.style.maxHeight="0px";
        }
        
    })
}



//event happens on click on accordion-item-header

//acordion after header changes to - , instead of + with the toogle of the class .active

//acordion-item-body max-height property changes


