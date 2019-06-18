class UI
{
    static setWeather(weatherPromise) {
        // Weather promise is resolved
        weatherPromise.then(function(weather){
            console.log(weather);
            // Get the weather information divs and change their text node to the weather info
            document.getElementById('w-location').appendChild(document.createTextNode(`${weather.name}, ${weather.sys.country}`));
            document.getElementById('w-desc').appendChild(document.createTextNode(weather.weather[0].description));
            document.getElementById('w-icon').src = `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`
            // Set all of the list items to the response values
            document.getElementById('w-humidity').appendChild(document.createTextNode('Humidity: ' + weather.main.humidity));
            document.getElementById('w-pressure').appendChild(document.createTextNode('Pressure: ' + weather.main.pressure));
            document.getElementById('w-description').appendChild(document.createTextNode('Description: ' + weather.weather[0].description));
            document.getElementById('w-wind').appendChild(document.createTextNode(`Wind speed: ${weather.wind.speed}`));       
        }).catch(err => console.log(err));
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