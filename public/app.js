/* Global Variables */
const appid = 'd7d5f6e358b6ae754ddaec7f01f9da0c';

// Create a new date instance dynamically
// const d = new Date();
// const newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

// let today = new Date();
// const dd = String(today.getDate()).padStart(2, '0');
// const mm = String(today.getMonth() + 1).padStart(2, '0');2
// const yyyy = today.getFullYear();

// today = mm + '/' + dd + '/' + yyyy;

// Personal API Key for OpenWeatherMap API
// Event listener to add function to existing HTML DOM element
/* Function called by event listener */
/* Function to GET Web API Data*/
/* Function to POST data */
/* Function to GET Project Data */

const generate = document.getElementById('generate');

generate.addEventListener('click', async () => {
    const zip = document.getElementById('zip');
    console.log(zip.value);
});

const getWeather = () => {
};

const addEntry = async () => {
    const payload = {
        'zip': 'zip-code'
    };
    const resp = await fetch('/entry', {
        method: 'POST',
        credentials: 'same-origin',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    }) 
    try {
        const response = await resp.json();
        return response;
    }
    catch(error) {
        console.log(`Error: ${error}`);
    }
};

const getEntries = () => {
};