const main = document.getElementById("main-card");
const thankYou = document.getElementById("thank-you");
const submit = document.getElementById("submit");
const score = document.getElementById("score");
const ratings = document.querySelectorAll(".rating")

let selectedScore = 0;

ratings.forEach((rating)=>{
  rating.addEventListener("click", ()=> {
    selectedScore = rating.value;
    ratings.forEach((r)=>{
      r.classList.remove("bg-[#fc7613]", "text-[#252d37]");
    });
    rating.classList.add("bg-[#fc7613]", "text-[#252d37]")
  });
});

submit.addEventListener("click", ()=>{
  if (selectedScore > 0 && selectedScore <= 5) {
    score.textContent = `You selected ${selectedScore} out of 5`;
    main.classList.add("hidden");
    thankYou.classList.remove("hidden");
  }
});