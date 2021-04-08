/* Global Variables */

// Create a new date instance dynamically
// const d = new Date();
// const newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

// let today = new Date();
// const dd = String(today.getDate()).padStart(2, '0');
// const mm = String(today.getMonth() + 1).padStart(2, '0');2
// const yyyy = today.getFullYear();

// today = mm + '/' + dd + '/' + yyyy;

const generate = document.getElementById('generate');

generate.addEventListener('click', async () => {
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
});