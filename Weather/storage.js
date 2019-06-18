class Storage
{
    static weatherLocalStorageAppend(weatherFeatures) {
        // Check if the local storage weather key exists. If it does, remove it
        if (localStorage.getItem('weather')) {
            localStorage.removeItem('weather');
        }

        localStorage.setItem('weather', JSON.stringify(weatherFeatures));
    }
}