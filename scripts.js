let key = "625f1a9d5a7c8c9ced210d954860c40e"
const accessKey = "RBfRcWXG5POwlvRZIuaQKLxqSc9oR9nI-wpTpWMfGJg";

fetch(`https://api.unsplash.com/photos/random?query=landscape&client_id=${accessKey}`)
  .then(res => res.json())
  .then(data => {
    document.body.style.backgroundImage = `url(${data.urls.full})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
  })
  .catch(err => console.error(err));

function screenData(data)
{
    console.log(data)
    document.querySelector(".city-title").innerHTML = "Temperatura em " + data.name 
    document.querySelector(".temp-min").innerHTML = "Atual: " + Math.floor(data.main.temp_min) + "°C"; // Correção aqui
    document.querySelector(".temp-max").innerHTML = "Máxima: " + Math.floor(data.main.temp_max) + "°C"; // Correção aqui
    document.querySelector(".img-prev").src = "https://openweathermap.org/img/wn/" + data.weather[0].icon + ".png" //Changes wheather icon
    document.querySelector(".prev").innerHTML = data.weather[0].description //Changes wheather description
    document.querySelector(".moisture").innerHTML = "Umidade do ar: " + data.main.humidity + "%" //Changes the air humidity
}

async function searchCity(city)
{
    let data = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + 
    city + 
    "&appid=" + 
    key + 
    "&lang=pt_br" +
    "&units=metric"
    )
    .then(response => response.json())

    screenData(data)
}

function buttonClick()
{
    let city = document.querySelector(".input-city").value
    searchCity(city) //Search the city by clicking on search
}

