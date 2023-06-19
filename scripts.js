let key = "cebcd482eda57fa9a6714c1c2ba91885"

function screenData(data)
{
    console.log(data)
    document.querySelector(".city-title").innerHTML = "Temperatura em " + data.name //Changes temperature according to the API
    document.querySelector(".temperature").innerHTML = Math.floor(data.main.temp) + "°C" //Changes wheather according to the city
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
