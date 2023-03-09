/* Scrivere un programma che chieda all’utente:
- Il numero di chilometri da percorrere
- Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.
MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo due caselle di input e almeno un bottone per inviare i dati in pagina, in cui l’utente potrà inserire i dati e poi visualizzare il calcolo finale con il prezzo.
Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.
*/


const app = document.getElementById('app');
const kmInput = app.querySelector('input[name="km"]');
const ageInput = app.querySelector('input[name="age"]');
const nameInput = app.querySelector('input[name="fLname"');
const ticket = app.querySelector('.ticket');
const price = app.querySelector('price');
const btnCalc = document.getElementById('btnCalc');
const btnCanc = document.getElementById('btnCanc');




btnCalc.addEventListener('click', function () {
    ticket.classList.remove('d-none');
    if (ageInput.value < 18) {
    let km = kmInput.value;
    let age = ageInput.value;
    const standardRate = 0.21;
    let ticketPrice = (standardRate * km) - (standardRate * km) * 0.20;
    const price = app.querySelector('#price');
    price.innerHTML += `<h5>Prezzo Tariffa Junior</h5>${ticketPrice}&euro;`
    const nameHere = document.getElementById('nameHere');
    let name = nameInput.value;
    nameHere.innerHTML = `<h5>Nome Passeggero</h5>${name}`;
    
    console.log(ticketPrice);
    } else if (ageInput.value >= 65) {
        let km = kmInput.value;
        let age = ageInput.value;
        const standardRate = 0.21;
        let ticketPrice = (standardRate * km) - (standardRate * km) * 0.40;
        const price = app.querySelector('#price');
        price.innerHTML += `<h5>Prezzo Tariffa Senior</h5>${ticketPrice}&euro;`
        const nameHere = document.getElementById('nameHere');
        let name = nameInput.value;
        nameHere.innerHTML = `<h5>Nome Passeggero</h5>${name}`;
        console.log(ticketPrice);
    } else {
        let km = kmInput.value;
        let age = ageInput.value;
        const standardRate = 0.21;
        let ticketPrice = (standardRate * km);
        const price = app.querySelector('#price');
        price.innerHTML += `<h5>Prezzo Tariffa Standard</h5>${ticketPrice}&euro;`
        const nameHere = document.getElementById('nameHere');
        let name = nameInput.value;
        nameHere.innerHTML = `<h5>Nome Passeggero</h5>${name}`;
        console.log(ticketPrice);
    }
    })


    btnCanc.addEventListener('click', function () {
        kmInput.value = '';
        ageInput.value = '';
        nameInput.value = '';
        ticket.classList.add('d-none');
        const price = app.querySelector('#price');
        price.innerHTML += '';
    } )
    





