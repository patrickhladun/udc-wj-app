const button = document.getElementById('generate');

button.addEventListener('click', async (e) => {
    e.preventDefault();
    await getWeather();
    getEntries();
});

const getWeather = async () => {
    const zip = document.getElementById('zip').value;
    const feelings = document.getElementById('feelings').value;
    const appid = 'd7d5f6e358b6ae754ddaec7f01f9da0c';
    const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${appid}`;

    const d = new Date();
    const newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

    await fetch(url)
    .then(response => response.json())
    .then(data => addEntry({...data, zip, feelings, newDate}))
    .catch(error => console.log(`Error: ${error}`));
};

const addEntry = (data) => {
    const payload = data;
    fetch('/entry', {
        method: 'POST',
        credentials: 'same-origin',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    }) 
    .then(response => response.json())
    .catch(error => console.log(`Error: ${error}`));
};

const getEntries = () => {
    fetch('/entry')
    .then(response => response.json())
    .then(data => updateUI(data))
    .catch(error => console.log(`Error: ${error}`));
};

const updateUI = (data) => {
    const { name, newDate, main, feelings } = data;
    document.getElementById('date').innerHTML = newDate;
    document.getElementById('city').innerHTML = name;
    document.getElementById('temp').innerHTML = main.temp;
    document.getElementById('content').innerHTML = feelings;
}