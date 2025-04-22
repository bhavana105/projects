const searchbox = document.querySelector(".search");
const searchIcon = document.querySelector("#searchicon");
   const chnageImag = document.querySelector(".image");

const input = document.querySelector(".input");
const wheatherDeatails = document.querySelector(".wheatherDeatails");
const apiurl = "https://api.openweathermap.org/data/2.5/weather?q=";
const apikey = "78175af9a04c55d386049430d9c972a5"


const para = document.createElement("p");
para.classList.add("errorMsg");
para.style.display = "none";
document.body.appendChild(para); 

const image = document.createElement("img");
image.classList.add("errimg");
image.src = "./imgs/sorry.png";
image.style.display = "none";
document.body.appendChild(image); 
const loadingText = document.createElement("p");
loadingText.classList.add("loading");
loadingText.innerText = "Fetching weather data...";
loadingText.style.display = "none";
document.body.appendChild(loadingText);

async function  getWheather (city){
try{
  loadingText.style.display = "block";

  para.style.display = "none";
    image.style.display = "none";
    wheatherDeatails.style.display = "none"; 

  const response = await fetch(apiurl+ city+`&appid=${apikey}`);
  const data = await response.json();
  loadingText.style.display = "none";

  console.log(data);

  if(data.cod == "404"){
para.innerText = "City not found";
      para.style.display = "block";

      image.style.display = "block";
      wheatherDeatails.style.display = "none";

  }else{

    document.querySelector(".country").innerHTML= data.name;

    document.querySelector(".wheather-name").innerHTML= data.weather[0].main;
  
    document.querySelector(".temp").innerHTML= Math.floor(data.main.temp) + "°C";
  
    document.querySelector(".speed").innerHTML= data.wind.speed + "m/s" ;
  
    document.querySelector(".humidity").innerHTML= data.main.humidity + "%";
  
    document.querySelector(".clouds").innerHTML= data.clouds.all + "%";
  
    if(data.weather[0].main == "Clouds"){
      chnageImag.src = "./imgs/cloudy1.png"  
    }else if(data.weather[0].main == "Clear"){
      chnageImag.src = "./imgs/sun.png"  
    }else if(data.weather[0].main == "Rain"){
      chnageImag.src = "./imgs/rain.png"  
    }else if(data.weather[0].main == "Strom"){
      chnageImag.src = "./imgs/thander.png"  
    }

    para.style.display = "none";
    image.style.display = "none";
    wheatherDeatails.style.display = "block";
  
  }
}catch(error){
  console.log("Data could not be fetched. Reason:", error.message);
}
}
getWheather("Vijayawada");

searchIcon.addEventListener ("click", () =>{
  getWheather(searchbox.value)

});





