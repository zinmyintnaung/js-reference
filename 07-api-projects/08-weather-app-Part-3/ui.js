class UI{
    constructor(){
        this.location = document.getElementById('w-location');
        this.description = document.getElementById('w-desc');
        this.wstring = document.getElementById('w-string');
        this.humidity = document.getElementById('w-humidity');
        
        
    }

    paint(weather){
        this.location.textContent = weather.name;
        
        let desc = new Array;
        weather.weather.forEach(w => {
            desc.push(w.main);
        });
        this.description.textContent = desc.join(', ');
        this.wstring.textContent = weather.main.temp;
        this.humidity.textContent = weather.main.humidity;
    }
}