class UI
{
    static setWeather(weather) {
        // Weather promise is resolved
        // Get the weather information divs and change their text node to the weather info
        document.getElementById('w-location').textContent = `${weather.name}, ${weather.sys.country}`;
        document.getElementById('w-desc').textContent = weather.weather[0].description;
        document.getElementById('w-icon').src = `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`
        // Set all of the list items to the response values
        document.getElementById('w-humidity').textContent = 'Humidity: ' + weather.main.humidity;
        document.getElementById('w-pressure').textContent = 'Pressure: ' + weather.main.pressure;
        document.getElementById('w-description').textContent = 'Description: ' + weather.weather[0].description;
        document.getElementById('w-wind').textContent = `Wind speed: ${weather.wind.speed}`;
    }

    static displayError(errorMessage) {
        // Get the modal content
        const modalContent = document.querySelector('div.modal-content');

        // Get the modal body for inserting the error box before it
        const modalBody = document.querySelector('div.modal-body');

        // Create the paragraph error message
        const errorParagraph = document.createElement('p');
        errorParagraph.id = 'error';
        errorParagraph.appendChild(document.createTextNode(errorMessage));

        modalContent.insertBefore(errorParagraph, modalBody);

        // Remove the error paragraph after 3 seconds
        setTimeout(function(){
            errorParagraph.remove();
        }, 3000);
    }
}