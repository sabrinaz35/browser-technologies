console.log('hello world');


// Function voor de reset van de radio buttons van de in en uitklap functie//
// Met hulp van Sanne geschreven
let inputWithValueNos = document.querySelectorAll('input[value="no"]');
let inputWithValueYes = document.querySelector('input[value="yes"]');


inputWithValueNos.forEach( function(inputWithValueNos){
    inputWithValueNos.addEventListener('change', clearInputs)
}) 


function clearInputs(event){
    console.log(event)
    let deValueNo = event.target
    let deValueNoParentFieldset = deValueNo.closest('fieldset');

    // console.log(deValueNoParentFieldset)
    // https://developer.mozilla.org/en-US/docs/Web/API/Element/nextElementSibling  
    let nextDiv = deValueNoParentFieldset.nextElementSibling;

    // console.log(nextDiv)

    let nextDivInputs = nextDiv.querySelectorAll('input');

    // console.log(nextDivRadio)

    nextDivInputs.forEach( function(nextDivInput) {

        console.log(nextDivInput.type)

        if (nextDivInput.type == "radio" || nextDivInput.type == "checkbox") {
            // https://www.tutorialspoint.com/how-to-uncheck-a-radio-button-using-javascript-jquery
            nextDivInput.checked = false;
            nextDivInput.removeAttribute("required","")
        } 
        else {
            nextDivInput.value= "";
            nextDivInput.removeAttribute("required","")
        }
    })
}


// Op basis van de vorige geschreven een required toevoegen aan de volgende button
inputWithValueYes.addEventListener('change', addRequired);

function addRequired(event){
    let previousRadioPushed = event.target;

    let previousRadioPushedParentFieldset = previousRadioPushed.closest('fieldset');
    let nextDiv = previousRadioPushedParentFieldset.nextElementSibling;
    let nextDivInput = nextDiv.querySelector('input:first-of-type');

    console.log(nextDivInput)

    // nextDivInput.setAttribute('required');

      if(previousRadioPushed.value === "yes") {
        nextDivInput.setAttribute("required","");
        }

    
    console.log(previousRadioPushed); 
}



// Datum aanpassen van de date pikker naar huidige datum
function setCurrentDateToPicker(){
    let calender = document.querySelector('[type="date"]');
    const today = new Date();
    const pastDate = new Date(today);

    pastDate.setMonth(today.getMonth() - 8);
    // De split zorgt ervoor dat er geen tijd wordt laten zien
    // https://stackoverflow.com/questions/25159330/how-to-convert-an-iso-date-to-the-date-format-yyyy-mm-dd
    const dateFormatter = today.toISOString().split("T")[0];
    const previousDateFormatter = pastDate.toISOString().split("T")[0];
   
    calender.value = dateFormatter;
    // max datum op vandaag 
    calender.setAttribute('max', dateFormatter);
    //eerdere datum
    calender.setAttribute('min', previousDateFormatter);

    console.log(calender.value);

    /** Bron chatgpt gebuikt om de fouten eruit te halen
     * https://chatgpt.com/share/69a6d433-8ccc-8001-b362-9685ea865490 
     * Prompt: alle code van deze functie + waarom werkt dit niet?
     */ 
}

setCurrentDateToPicker()


// Validation om te kijken of de initialen in hoofdletters geschreven worden
// Voor het opzetje van de toLowerCase()
// https://stackoverflow.com/questions/1027224/how-can-i-test-if-a-letter-in-a-string-is-uppercase-or-lowercase-using-javascrip 
 const initialsInput = document.querySelector('#firstnameDeseased');
 const initialsInputs = document.querySelector('.initialenInput');

 initialsInput.addEventListener('input', (event) => {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase

     initialsInput.value = initialsInput.value.toUpperCase() + '.';
    
    // Ik wist dat romy die hoofdletters ook had gedaan dus ik heb aan haar gevraagd hoe zij dat deed
    // https://developer.mozilla.org/en-US/docs/Web/API/InputEvent/inputType
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
    //Dus als er op backspace geklikt wordt dan moet de code weg
    if (event.inputType === 'deleteContentBackward') {
        initialsInput.value = initialsInput.value.slice(0, -1);
        return;
    } 
    
});




// een extra validatie via javascript op de wie van de drie vragen
const allInputs = document.querySelectorAll('input')
const inputsAuthorizedPersonInfo = document.querySelectorAll('.addJsErrorMessage');
const succes = document.querySelectorAll('.succes-hidden');
const error = document.querySelector('.error-hidden');

// Positieve validatie
allInputs.forEach(input => {
    input.addEventListener('blur', (event) => {
  if(event.target.validity.valid) {
//     Handmatig message toevoegen
    succes.textContent = "Ja dit klopt helemaal! "
//  werkt alleen op submit
    event.target.classList.add('input-succes')
    event.target.setAttribute('aria-describedby', 'succes-id')    
  } else {
    succes.textContent = ""
    event.target.classList.remove('input-succes')
    event.target.removeAttribute('aria-describedby')
  }
});
})

// Error meldingen met javascript voor de gegevens van gemachtigde
// Om toch een andere manier te kunnen laten zien
inputsAuthorizedPersonInfo.forEach(input => {
    input.addEventListener('blur', (event) => {
  if(!event.target.validity.valid) {
//     Handmatig message toevoegen
    error.textContent = "Sorry dit klopt niet doe het zo Protocolnummer: 000 0001, Bsn: 12345678 en beconnummer 123456"
//  werkt alleen op submit
    event.target.classList.add('input-error')
    event.target.setAttribute('aria-describedby', 'error-id')    
  } else {
    error.textContent = ""
    event.target.classList.remove('input-error')
    event.target.removeAttribute('aria-describedby')
  }
});
})














