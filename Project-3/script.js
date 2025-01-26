const stars = document.querySelectorAll(".fa-star");
const selectedRatingValueText = document.querySelector(".container h3 span");

let currentTotalSelectedStars = 0;

stars.forEach((starItem, index) => {
  starItem.dataset.rating = index + 1;
  starItem.addEventListener("mouseover", handleMouseOver);
    starItem.addEventListener("click", handleOnClick);
    starItem.addEventListener("mouseleave", handleMouseLeave);
    
});

function handleMouseOver(event) {
  const currentRatingValue = event.target.dataset.rating;
  if (!currentRatingValue) return;
  else handleUpdateRatingState(currentRatingValue);
  
}

function handleUpdateRatingState(getCurrentRatingValue) {
  for (let i = 0; i < 5; i++) {
    if (i < getCurrentRatingValue) {
      stars[i].classList.add("fa-star-o");
    } else {
      stars[i].classList.remove("fa-star-o");
    }
  }
}

function handleMouseLeave(){
    
    handleUpdateRatingState(currentTotalSelectedStars);
}
function handleOnClick(event){
    const currentRatingValue = event.target.dataset.rating;
    handleUpdateRatingState(currentRatingValue);
    currentTotalSelectedStars=currentRatingValue;
    selectedRatingValueText.textContent=currentTotalSelectedStars;
}

