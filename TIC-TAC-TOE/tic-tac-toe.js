const boxes = document.querySelectorAll(".box");
const resetButton = document.getElementById("reset");
const msg = document.getElementById("win");
let player1 = true;
const winningPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6] // Diagonals
];

boxes.forEach((box) =>{
    box.onclick = ()=>{
        if(player1 ){
            box.innerText = "O"
            player1 = false;
        } else {
            box.innerText = "X"
            player1 = true;
        }
        box.disabled = true;
        checkWinner();
}
});

var checkWinner = () =>{
    for (let pattern of winningPatterns){
    
let pos1 =  boxes[pattern[0]].innerText;
let pos2 =  boxes[pattern[1]].innerText;
let pos3 =  boxes[pattern[2]].innerText;
 if(pos1 !="" && pos2 !="" && pos3 !=""){
    if(pos1 == pos2 && pos2 == pos3){
         console.log("winner",pos1)
        showWinner(pos1);
}}
}}

const showWinner = (winner) => {
    msg.innerText = `Congrats 👏 winner is  ${winner}`;
    msg.classList.remove("hide");
}

const resetGame = () => {
    boxes.forEach(box => {
        box.innerText = "";
        box.disabled = false;
    });
    msg.classList.add("hide");
    player1 = true;
}
resetButton.onclick = resetGame;