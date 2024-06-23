let string ="";
let buttons = document.querySelectorAll(".grid-item");
   buttons.forEach( button =>{
    button.addEventListener("click",(e) =>{
if(e.target.innerText == "C"){
    string="";
    document.querySelector(".display").innerText = string;
    
}else if(e.target.innerText == "="){
   document.querySelector(".display").innerText = string;
   string = eval (string)
}
else if(e.target.innerText == "X"){
    document.querySelector(".display").innerText = string;
    string = string.slice(0,-1);
}
else{
    string = string + e.target.innerHTML;
    document.querySelector(".display").innerText = string;
}   
    })
   })



