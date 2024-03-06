const API_KEY = `cd88562347a3574c397d2094186bab39`
const form = document.querySelector("form");
const search = document.querySelector("#search");
const weather = document.querySelector("#weather");

const getWeather = async(city) =>
{
  const url = `https://api.openweathermap.org/data/2.5/weather? q=${city}&appid=${API_KEY}&units=metric`
  const response = await fetch(url)
  const data = await response.json()
  console.log(data)
  return showWeather(data)
}

const showWeather = (data) =>
{
  if (data.cod == "404") {
    weather.innerHTML = `<h2> City Not Found <h2>`
    return;
}
  weather.innerHTML = `
  <div class="row" id="weather">
        <div>
          <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
        </div>
        <div>
          <h2>${data.main.temp} <sup>o</sup>C</h2>
          <h4>${data.weather[0].main}</h4>
        </div>
    </div>
  `
}

form.addEventListener("submit", function(event)
{
  getWeather(search.value)
  event.preventDefault();
})