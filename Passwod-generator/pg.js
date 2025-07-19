let inputSlider = document.querySelector('#inputSlider');
let displaynum = document.querySelector("#displaynum");
let displayPass = document.querySelector(".display");
let copy = document.querySelector("#copy");
let copyMsg = document.querySelector(".copyMsg");
let upperCheck = document.querySelector("#upper");
let lowerCheck = document.querySelector("#lower");
let numbersCheck = document.querySelector("#numbers");
let symbolsCheck = document.querySelector("#symbols");
let setIndicator = document.querySelector(".indicator");
let generateBtn = document.querySelector(".generateBtn");
const symbols = '~`!@#$%^&*()-_+={[]}|:"<,>.?/';

let passwordLength = parseInt(inputSlider.value);
displaynum.textContent = passwordLength;


inputSlider.addEventListener("input", () => {
    passwordLength = parseInt(inputSlider.value);
    displaynum.textContent = passwordLength;
    calcStrength();
});

function getInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function generateUpper() {
    return String.fromCharCode(getInteger(65, 91));
}

function generateLower() {
    return String.fromCharCode(getInteger(97, 123));
}

function generateNumbers() {
    return(getInteger(0, 9));
}

function generateSymbol(){
  let randNum = getInteger(0,symbols.length);
  return symbols.charAt(randNum);
}

let getPassword = () => {
    let allCheckBoxes = [];

    if (upperCheck.checked) allCheckBoxes.push(generateUpper);
    if (lowerCheck.checked) allCheckBoxes.push(generateLower);
    if (numbersCheck.checked) allCheckBoxes.push(generateNumbers);
    if (symbolsCheck.checked) allCheckBoxes.push(generateSymbol);
    

    if (allCheckBoxes.length === 0) {
        alert("Please select at least one character type!");
        return "";
    }

    let password = "";
    for (let i = 0; i < passwordLength; i++) {
        let randFunc = allCheckBoxes[Math.floor(Math.random() * allCheckBoxes.length)];
        password += randFunc();
    }
    return password;
};

// Generate password when button is clicked
generateBtn.addEventListener("click",()=>{
  displayPass.value = getPassword();
  calcStrength();
  });


// Copy password to clipboard
function copyContent() {
    if (!displayPass.value.trim()) {
        alert("Cannot copy: input is empty.");
        return;
    }
    navigator.clipboard.writeText(displayPass.value)
        .then(() => {
            copyMsg.innerText = "Copied";
            copyMsg.style.visibility = "visible";
            setTimeout(() => {
                copyMsg.style.visibility = "hidden";
            }, 1000);
        })
        .catch(err => {
            console.error("Failed to copy text:", err);
            copyMsg.innerText = "Copy failed";
            copyMsg.style.visibility = "visible";
            setTimeout(() => {
                copyMsg.style.visibility = "hidden";
            }, 1000);
        });
}

copy.addEventListener("click", copyContent);

// Function to calculate password strength
function calcStrength() {
    let hasUpper = upperCheck.checked;
    let hasLower = lowerCheck.checked;
    let hasNum = numbersCheck.checked;
    let hasSym = symbolsCheck.checked;

    if (passwordLength < 5) {
        setIndicatorColor("#f00"); // Weak - Red
    } else if (hasUpper && hasLower && hasNum && hasSym && passwordLength >= 8) {
        setIndicatorColor("#0f0"); // Strong - Green
    } else if ((hasLower || hasUpper) && (hasNum || hasSym) && passwordLength >= 6) {
        setIndicatorColor("#ff0"); // Medium - Yellow
    } else {
        setIndicatorColor("#f00"); // Weak - Red
    }
}

// Function to set strength indicator color
function setIndicatorColor(color) {
    setIndicator.style.backgroundColor = color;
}
