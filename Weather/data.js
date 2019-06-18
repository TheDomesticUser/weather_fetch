class Data
{
    constructor(appid) {
        this.appid = appid;
    }

    async getWeather(country, city) {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${this.appid}`);
        
        return response.json();
    }
}