// Get the required elements
saveChangesButton = document.getElementById('w-change-btn');

// Add an event listener to saveChangesButton
saveChangesButton.addEventListener('click', setInfo);

function setInfo(e) {
    // Instantiate a new data object
    const data = new Data('a85dcdcaba93a7a79dd58e0744c6f828');
    
    // Get the information country and city inputs
    const country = document.querySelector('input#country').value;
    const city = document.querySelector('input#city').value;
    
    if (country.length === 0 || city.length === 0) {
        UI.displayError('Please fill in all the blanks.');
    } else {
        // Close the modal when it is done
        e.target.setAttribute('data-dismiss', 'modal');
    }
}