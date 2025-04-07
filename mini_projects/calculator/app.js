const displayBtn = document.querySelector('#displayBtn');
const displayText = document.querySelector("#displayText");


let arr = ["C",".","X","%","7","8","9","/","4","5","6","*","1","2","3","-","0","=","0","+"];

displayBtn.innerHTML = arr.map((item) => `<button class="grid-item" onclick="handleClick('${item}')"> ${item}</button>`).join('');



let inputValue  = " ";

function handleClick(value) {
  if (value === "C"){
    inputValue  = " ";
  }else if (value === "X"){
    inputValue  = inputValue.slice (0,-1);
  
  }else if (value === "="){
    try {
      inputValue = eval(inputValue);
    } catch (e) {
      inputValue = "please Enter correctly 🤭...."; 
    }  }else{
    inputValue += value;
  }
  displayText.innerText = inputValue;
}

 

 


// const displayBtn = document.querySelector('#displayBtn');

// let arr = ["1", "2", "3", "4", "5"];
// arr.map((item) => {
//     let btn = document.createElement("button"); // Create a new button element
//     btn.innerText = item; // Set button text
//     document.body.appendChild(btn); // Append button to the body
// });
