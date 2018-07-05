class Weather{
    constructor(city){
        this.apiKey = '9ba4b2236b6a25b0318d6ab060178d66';
        this.city = city;
    }

    // Fetch weather from API
    async getWeather(){
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city}&APPID=${this.apiKey}`);
        
        const responseData = await response.json();

        return responseData;
    }
    
    changeLocation(city){
        this.city = city;
    }
}