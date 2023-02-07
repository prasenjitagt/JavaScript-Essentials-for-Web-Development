//Infinite Scrolling

//ScrollY
//innerHeight
//ScrollHeight

const container = document.querySelector(".container");

window.addEventListener("scroll", () => {
  const ScrollY = window.scrollY;
  const innerHeight = window.innerHeight;
  const ScrollHeight = document.documentElement.scrollHeight;

  if (ScrollY + innerHeight >= ScrollHeight) {
    loadCards();
  }
});

const loadCards = () => {
  for (i = 0; i < 5; i++) {
    const newCard = document.createElement("div");
    newCard.textContent = "I am a new card";
    newCard.classList.add("card");
    container.appendChild(newCard);
  }
};
