const gameContainer = document.querySelector(".container");
const userGame = document.querySelector("#user");
const compGame = document.querySelector("#comp");
const result = document.querySelector(".text");
const choices = document.querySelectorAll(".choice");

const icons = ["👊", "✋", "✌️"];
const values = ["R", "P", "S"]; 
choices.forEach((choice,index) =>{
    choice.addEventListener("click", (e)=>{
        // userGame = compGame = e.target.textContent;
        result.textContent="Wait..."
    gameContainer.classList.add("start");

let time = setTimeout(() =>{
gameContainer.classList.remove("start");
    let selectedIcon = e.target.textContent; // Get the emoji inside the button    
    userGame.querySelector("span").textContent = selectedIcon; // Update only the emoji inside span
     let randomNumber = Math.floor(Math.random()*3);
            // console.log(randomNumber it genarete 0 to 2) ;
            let cpuIcons = icons [randomNumber];
            compGame.querySelector("span").textContent = cpuIcons; // Update only the emoji inside span
            let cmpValue = values[randomNumber];
            let userValue = values[index];

            console.log(userValue,cmpValue);

            let outComes = {
                RR:"Draw",
                PP:"Draw",
                SS:"Draw",
                RP:"You",
                RS:"You",
                PR:"Computer",
                PS:"Computer",
                SP:"You",
                SR:"Computer",
            };
            let outComValues = outComes[userValue + cmpValue];
                console.log(outComValues);
                result.textContent= userValue === cmpValue ? "Draw": `${outComValues} Won!`;
                let bgText = document.getElementById("bg-text");
        if (outComValues === "You") {
            bgText.style.backgroundColor = "green";
        } else if (outComValues === "Computer") {
            bgText.style.backgroundColor = "aquamarine";

        } else {
            bgText.style.backgroundColor = ""; // Resets to default
        }
    },2000);

    });    

    });
