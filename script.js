const quotedisplay=document.querySelector(".quote")
const button=document.querySelector(".button")

const quotes=["shit happens", "Don't let motivational quotes ruin your shitty day", "Its get worse, Before it gets worse", "Go to sleep. You’ve already ruined your day."]

button.addEventListener("click", () =>{
    const randomIndex=Math.floor(Math.random()*quotes.length)
    quotedisplay.textContent=quotes[randomIndex];
})

