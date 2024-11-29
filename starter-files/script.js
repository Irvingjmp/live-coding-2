// API
const API_ENDPOINT = 'https://yesno.wtf/api';

/**
 * STEPS:
 *
 * 1. Create a fetchAnswer function and call the API
 * 2. Output the API's response
 * 3. Attach fetchAnswer to an event listener
 * 4. Clear output after 3 seconds
 * 5. Optional: add loading/error states
 *
 */

async function fetchAnswer(){
    const respuesta = document.getElementById("answer");
    try{
        const response = await fetch(API_ENDPOINT);
        const datos = await response.json();

        answer.textContent = datos.answer;
    }catch{
        console.log("error");
    }
}

document.getElementById("button").addEventListener("click", fetchAnswer);
