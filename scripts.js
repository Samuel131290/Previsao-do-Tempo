const key = "d576943e8799f61b5cd33ed79d5b9fbe";

function screenData(data)
{
    document.querySelector(".city-title").innerHTML = "Temperatura em " + data.name
    document.querySelector(".temperature").innerHTML = Math.floor(data.main.temp) + "°C"
    document.querySelector(".prev").innerHTML = data.wheater[0].description
    document.querySelector(".img-prev").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}png`
    document.querySelector(".moisture").innerHTML = data.main.humidity + "%"
    console.log(data)
}

async function searchCity(city)
{
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then(resp => resp.json())

}

function buttonClick()
{
    const city = document.querySelector(".input-city").value
    searchCity(city)
}
