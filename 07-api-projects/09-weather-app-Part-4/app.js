// Init storage
const storage = new Storage();

// Get stored location data
const weatherLocation = storage.getLocationData();

// Init weather object
const weather = new Weather(weatherLocation.city);

// Init ui object
const ui = new UI();

//weather.changeLocation('Singapore');

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// Change location event
document.getElementById('w-change-btn').addEventListener('click', (e)=>{
    const city = document.getElementById('city').value;
    
    // Change location
    weather.changeLocation(city);
    // Set location in local Storage
    storage.setLocationData(city);
    
    // Call getWeather again to fetch changed location data
    getWeather();

    // Close model
    $('#locModal').modal('hide');

})

function getWeather(){
    weather.getWeather()
    .then(results => {
        console.log(results);
        ui.paint(results);
        
    })
    .catch(err=>console.log(err));
}


