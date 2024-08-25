// var inputvalue = document.querySelector('#cityinput')
// var btn = document.querySelector('#add')
// var city = document.querySelector('#cityoutput')
// var discrip = document.querySelector('#discription')
// var temp = document.querySelector('#temp')
// var wind = document.querySelector('#wind')
// apik ="11fba280ae35e5518be6feb5e1da1721"

// function convertion(val)
// {
//     return (val - 273).toFixed(3)
// }
// btn.addEventListener('click' , function() 

// {
//     fetch('https://api.openweathermap.org/data/3.0/onecall?lat=' + inputvalue.value + '&appid ='+ apik)
//     .then(res => res.json())

//     .then(data => 
//     {
//         var nameval = data['name']
//         var descrip = data['weather']['0']['description']
//         var tempature = data['main']['temp']
//         var wndspeed = data['wind']['speed']

//         city.innerHTML=`Weather of <span>${nameval}<span>`
//         temp.innerHTML = `Temperature: <span>${convertion(tempature)} C</span>`
//         description.innerHTML = `Sky Conditions: <span>${descrip}<span>`
//         wind.innerHTML = `Wind Speed: <span>${wndspeed}km/h<span>`
//     })
//         .catch(err => alert('You entered wrong City name'))
//     })
var inputvalue = document.querySelector('#cityinput');
var btn = document.querySelector('#add');
var city = document.querySelector('#cityoutput');
var description = document.querySelector('#description');
var temp = document.querySelector('#temp');
var wind = document.querySelector('#wind');
var apik = "11fba280ae35e5518be6feb5e1da1721";

function conversion(val) {
    return (val - 273.15).toFixed(2); // Convert from Kelvin to Celsius
}

btn.addEventListener('click', function() 
{
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputvalue.value + '&appid=' + apik)
    .then(res => res.json())

    .then(data =>
         {
        var nameval = data['name'];
        var descrip = data['weather'][0]['description'];
        var tempature = data['main']['temp'];
        var wndspeed = data['wind']['speed'];

        city.innerHTML = `Weather of <span>${nameval}</span>`;
        temp.innerHTML = `Temperature: <span>${ conversion(tempature) } °C</span>`;
        description.innerHTML = `Sky Conditions: <span>${descrip}</span>`;
        wind.innerHTML = `Wind Speed: <span>${wndspeed} km/h</span>`;
    })
    .catch(err => alert('You entered an incorrect city name'));
});
