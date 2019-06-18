// Get the required elements
saveChangesButton = document.getElementById('w-change-btn');

// Add the event listeners
document.addEventListener('DOMContentLoaded', loadSavedData);
saveChangesButton.addEventListener('click', setInfo);

function loadSavedData() {
    // Get the weather values
    const weather = JSON.parse(localStorage.getItem('weather'));

    // Load the JSON weather data from the local storage to the DOM
    UI.setWeather(weather);
}

function setInfo(e) {
    // Instantiate a new data object
    const data = new Data('a85dcdcaba93a7a79dd58e0744c6f828');
    
    // Get the information country and city inputs
    const country = document.querySelector('input#country');
    const city = document.querySelector('input#city');
    
    // Verify both the inputs have values
    if (country.value.length === 0 || city.value.length === 0) {
        UI.displayError('Please fill in all the blanks.');
    } else {
        // Close the modal
        e.target.setAttribute('data-dismiss', 'modal');
        // Get the weather promise
        data.getWeather(country.value, city.value)
        .then(function(weather){
            // Set the weather components
            UI.setWeather(weather);
    
            // Clear the inputs
            country.value = null;
            city.value = null;
    
            // Append the values to the local storage
            Storage.weatherLocalStorageAppend(weather);
    
        }).catch(err => console.log(err));

    }
}