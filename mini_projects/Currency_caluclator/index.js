const dropdowns = document.querySelectorAll(".dropdown select");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");
const btn = document.querySelector(" button");
const icon = document.querySelector(".icon");

for (let select of dropdowns) {
  for (let currCode in countryList) {
    let newOption = document.createElement("option");
    newOption.innerText = currCode;
    newOption.value = currCode;
    if (select.name === "from" && currCode === "AED") {
      newOption.selected = "selected"; 
    } else if (select.name === "to" && currCode === "INR") {
      newOption.selected = "selected";
    }
    select.append(newOption);
  }
  select.addEventListener("change", (evt) => {
    updateFlag(evt.target);
  });
}
//update the flag imges
const updateFlag = (element) => {
  let currCode = element.value;
  let countryCode = countryList[currCode];
  let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
  let img = element.parentElement.querySelector("img");
  img.src = newSrc;
};
btn.addEventListener("click", (evt) => {
 evt.preventDefault();
 getExchangeRate();
});

 //botton
const getExchangeRate = async () => {
  let amount = document.querySelector(".amount input");
  let amtVal = amount.value;
  if (amtVal === "" || amtVal < 1) {
    amtVal = 1;
    amount.value = "1";
  }

msg.innerText = "Getting exchange rate...";
let url=`https://v6.exchangerate-api.com/v6/78283ee209bf8cbe28136a2b/latest/${fromCurr.value}`;


try {
  let response = await fetch(url);
  let result = await response.json();
  let exchangeRate = result.conversion_rates[toCurr.value];
  if (!exchangeRate) throw new Error("Invalid currency code");

  let total = (amtVal * exchangeRate).toFixed(2);
  msg.innerText = `${amtVal} ${fromCurr.value} = ${total} ${toCurr.value}`;
} catch (error) {
  msg.innerText = "Something went wrong: " + error.message;
}
};

window.addEventListener("load", () => {
  getExchangeRate();
});

 icon.addEventListener('click', ()=>{
  let tempCode = fromCurr.value;
  fromCurr .value = toCurr.value;
  toCurr.value = tempCode;
  updateFlag(fromCurr);
  updateFlag(toCurr);
getExchangeRate();

 })


