
// Set Default city "New Delhi"
const DefaultPlace = "New Delhi";
const CheckCity = /^[A-Za-z]+$/;

// Declaring the variables

let icon = document.querySelector(".icon");
let temperature = document.querySelector(".temp");
let summary = document.querySelector(".summary");
let loc = document.querySelector(".location");
let wind = document.querySelector(".wind");
let humidity = document.querySelector(".humidity");
let feelslike = document.querySelector(".feelslike");
let uv = document.querySelector(".uv");
let cloud = document.querySelector(".cloud");
let date = document.querySelector(".date");
let SearchCity = document.querySelector("#searchcity");
let pressure = document.querySelector(".air");
let SearchButton = document.querySelector(".searchbtn");
let ErrorMsg = document.querySelector(".ErrorMsg");


// Day1
let Day1 = document.querySelector(".Day1");
let Day1Header = document.querySelector(".Day1-header");
let Day1Img = document.querySelector(".Day1-img");
let Day1Temp = document.querySelector(".Day1-temp")
let Day1Humidity = document.querySelector(".Day1-humidity");
let Day1Wind = document.querySelector(".Day1-wind")


// Day2
let Day2 = document.querySelector(".Day2");
let Day2Header = document.querySelector(".Day2-header");
let Day2Img = document.querySelector(".Day2-img");
let Day2Temp = document.querySelector(".Day2-temp")
let Day2Humidity = document.querySelector(".Day2-humidity");
let Day2Wind = document.querySelector(".Day2-wind")


// Day3
let Day3 = document.querySelector(".Day3");
let Day3Header = document.querySelector(".Day3-header");
let Day3Img = document.querySelector(".Day3-img");
let Day3Temp = document.querySelector(".Day3-temp")
let Day3Humidity = document.querySelector(".Day3-humidity");
let Day3Wind = document.querySelector(".Day3-wind")


// Day4
let Day4 = document.querySelector(".Day4");
let Day4Header = document.querySelector(".Day4-header");
let Day4Img = document.querySelector(".Day4-img");
let Day4Temp = document.querySelector(".Day4-temp")
let Day4Humidity = document.querySelector(".Day4-humidity");
let Day4Wind = document.querySelector(".Day4-wind")


// Day5
let Day5 = document.querySelector(".Day5");
let Day5Header = document.querySelector(".Day5-header");
let Day5Img = document.querySelector(".Day5-img");
let Day5Temp = document.querySelector(".Day5-temp")
let Day5Humidity = document.querySelector(".Day5-humidity");
let Day5Wind = document.querySelector(".Day5-wind");



// Day6
let Day6 = document.querySelector(".Day6");
let Day6Header = document.querySelector(".Day6-header");
let Day6Img = document.querySelector(".Day6-img");
let Day6Temp = document.querySelector(".Day6-temp")
let Day6Humidity = document.querySelector(".Day6-humidity");
let Day6Wind = document.querySelector(".Day6-wind");



window.addEventListener("load", () => {
    GetWeatherData(DefaultPlace)
    SearchButton.addEventListener('click', (event) => {

        let len = SearchCity.value
        if (SearchCity.value.match(CheckCity) && len.length != 0) {
            GetWeatherData(SearchCity.value);
            console.log(SearchCity.value)
        }
        else {
            ErrorMsg.style.opacity = 1;
            ErrorMsg.innerHTML = "Kindly Enter Valid Place Name !";
            console.log("enter valid city")
            ErrorMsg.textContent = "Kindly Enter Valid Place Name !"
            ErrorMsg.style.backgroundColor = "red";
            HideErrorMsg();
            SearchCity.focus();
            SearchCity.value = "";
        }


    })
})
function HideErrorMsg() {
    setTimeout(() => {
        ErrorMsg.style.opacity = 0;

    }, 5000);
}

const GetWeatherData = (city) => {
    const url = `http://api.weatherapi.com/v1/forecast.json?key=39a32270d9f14941bb1155940233103&q=${city}&days=7&aqi=no&alerts=no`
    console.log(url)
    fetch(url)

        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data)
            return ShowWeatherData(data)
        })

    // Show weather on display
    function ShowWeatherData(data) {
        //  current weather
        temperature.innerHTML = `${data.current.temp_c}` + "°C";
        myFunction(data.current.temp_c);
        summary.innerHTML = `${data.current.condition.text}`;
        date.innerHTML = `${(data.location.localtime).slice(0, 10)}`;
        loc.innerHTML = `${data.location.name}` + "," + `${data.location.country}`;
        let icon1 = data.current.condition.icon;
        icon.innerHTML = `<img src="${icon1}"/>`;
        wind.innerHTML = `${data.current.wind_mph}`;
        humidity.innerHTML = `${data.current.humidity}`;
        feelslike.innerHTML = `${data.current.feelslike_c}` + "°C";
        pressure.innerHTML = `${data.current.pressure_mb}`;
        uv.innerHTML = `${data.current.uv}`;
        cloud.innerHTML = `${data.current.cloud}`


        //Farecast data--------
        // Day1
        Day1Header.innerHTML = `${data.forecast.forecastday[1].date}`;
        Day1Img.innerHTML = `<img src="${data.forecast.forecastday[1].day.condition.icon}"/>`
        Day1Temp.innerHTML = "Temprature" + `<br>${data.forecast.forecastday[1].day.avgtemp_c}` + "&deg;C";
        Day1Humidity.innerHTML = "Humidity" + `<br>${data.forecast.forecastday[1].day.avghumidity}` + "&percnt;";
        Day1Wind.innerHTML = "Wind" + `<br>${data.forecast.forecastday[1].day.maxtemp_c}` + "Km/h";


        // Day2
        Day2Header.innerHTML = `${data.forecast.forecastday[2].date}`;
        Day2Img.innerHTML = `<img src="${data.forecast.forecastday[2].day.condition.icon}"/>`
        Day2Temp.innerHTML = "Temprature" + `<br>${data.forecast.forecastday[2].day.avgtemp_c}` + "&deg;C";
        Day2Humidity.innerHTML = "Humidity" + `<br>${data.forecast.forecastday[2].day.avghumidity}` + "&percnt;";
        Day2Wind.innerHTML = "Wind" + `<br>${data.forecast.forecastday[2].day.maxtemp_c}` + "Km/h";


        // Day3
        Day3Header.innerHTML = `${data.forecast.forecastday[3].date}`;
        Day3Img.innerHTML = `<img src="${data.forecast.forecastday[3].day.condition.icon}"/>`
        Day3Temp.innerHTML = "Temprature" + `<br>${data.forecast.forecastday[3].day.avgtemp_c}` + "&deg;C";
        Day3Humidity.innerHTML = "Humidity" + `<br>${data.forecast.forecastday[3].day.avghumidity}` + "&percnt;";
        Day3Wind.innerHTML = "Wind" + `<br>${data.forecast.forecastday[3].day.maxtemp_c}` + "Km/h";


        // Day4
        Day4Header.innerHTML = `${data.forecast.forecastday[4].date}`;
        Day4Img.innerHTML = `<img src="${data.forecast.forecastday[4].day.condition.icon}"/>`
        Day4Temp.innerHTML = "Temprature" + `<br>${data.forecast.forecastday[4].day.avgtemp_c}` + "&deg;C";
        Day4Humidity.innerHTML = "Humidity" + `<br>${data.forecast.forecastday[4].day.avghumidity}` + "&percnt;";
        Day4Wind.innerHTML = "Wind" + `<br>${data.forecast.forecastday[4].day.maxtemp_c}` + "Km/h";


        // Day5
        Day5Header.innerHTML = `${data.forecast.forecastday[5].date}`;
        Day5Img.innerHTML = `<img src="${data.forecast.forecastday[5].day.condition.icon}"/>`
        Day5Temp.innerHTML = "Temprature" + `<br>${data.forecast.forecastday[5].day.avgtemp_c}` + "&deg;C";
        Day5Humidity.innerHTML = "Humidity" + `<br>${data.forecast.forecastday[5].day.avghumidity}` + "&percnt;";
        Day5Wind.innerHTML = "Wind" + `<br>${data.forecast.forecastday[5].day.maxtemp_c}` + "Km/h";


        // Day6
        Day6Header.innerHTML = `${data.forecast.forecastday[6].date}`;
        Day6Img.innerHTML = `<img src="${data.forecast.forecastday[6].day.condition.icon}"/>`
        Day6Temp.innerHTML = "Temprature" + `<br>${data.forecast.forecastday[6].day.avgtemp_c}` + "&deg;C";
        Day6Humidity.innerHTML = "Humidity" + `<br>${data.forecast.forecastday[6].day.avghumidity}` + "&percnt;";
        Day6Wind.innerHTML = "Wind" + `<br>${data.forecast.forecastday[6].day.maxtemp_c}` + "Km/h";



        // function to change celsies to fahrenhit--------
        function myFunction(a) {
            document.getElementById('celcandfahr').onclick = function () { ctof() };
            document.getElementById('fahrtocels').onclick = function () { ftoc() };

            var x = document.getElementById('F');
            var a = document.getElementById('C');
            function ctof() {

                if (a.style.display === 'block') {
                    x.style.display = 'block';
                    a.style.display = 'none';
                    document.getElementsByClassName('temp')[0].innerHTML = `${data.current.temp_f}` + "°F";

                }

            }
            function ftoc() {
                if (x.style.display === 'block') {
                    document.getElementsByClassName('temp')[0].innerHTML = `${data.current.temp_c}` + "°C";
                    x.style.display = 'none';
                    a.style.display = 'block';
                }
            }

        }

    }

}