// Init weather object
const weather = new Weather('London');

// Init ui object
const ui = new UI();

//weather.changeLocation('Singapore');

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

function getWeather(){
    weather.getWeather()
    .then(results => {
        console.log(results);
        ui.paint(results);
        
    })
    .catch(err=>console.log(err));
}


