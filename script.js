console.log('hello world');


// MARK: clear inputs
// Function voor de reset van de radio buttons van de in en uitklap functie te legen, dit is bij de eerste vraag.
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

      if(previousRadioPushed.value === "yes") {
        nextDivInput.setAttribute("required","");

        } else {
            nextDivInput.removeAttribute("required","");

        }
    console.log(previousRadioPushed); 
}


// MARK: Datum vandaag
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


//MARK: Generieke code voor de hoofdletters van de initialen
// Validation om te kijken of de initialen in hoofdletters geschreven worden bij initialen
// https://stackoverflow.com/questions/1027224/how-can-i-test-if-a-letter-in-a-string-is-uppercase-or-lowercase-using-javascrip 
const initialsInputs = document.querySelectorAll('.initialenInput');

initialsInputs.forEach(input => {
    input.addEventListener('input', (event) => {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase

     input.value = input.value.toUpperCase() + '.';

    // https://developer.mozilla.org/en-US/docs/Web/API/InputEvent/inputType
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
    if (event.inputType === 'deleteContentBackward') { //Dus als er op backspace geklikt wordt dan moet de code weg
        input.value = input.value.slice(0, -1); //Hierbij heb ik ook hulp gehad van Romy
        return;
    } 
})
});



// MARK: Validatie via javascript
// een extra validatie via javascript op de wie van de drie vragen
const inputsAuthorizedPersonInfo = document.querySelectorAll('.addJsErrorMessage');
const error = document.querySelector('.error-hidden');
const allRadioGemachtigde = document.querySelectorAll('input[name="authorizedPersonInfo"]');

// Error meldingen met javascript voor de gegevens van gemachtigde
// Om toch een andere manier het valideren kunnen laten zien en dat dit ook mogelijk is
inputsAuthorizedPersonInfo.forEach(input => {
    input.addEventListener('blur', (event) => {

  if(!event.target.validity.valid) {
    if(event.target.name == 'bsnAuthorizedPerson') {
        error.textContent = "Sorry dit klopt niet doe het zo Bsn: 12345678"

    } else if(event.target.name == 'beconNumberAdvisor') {
        error.textContent = "Sorry dit klopt niet doe het zo Beconnummer 123456"

    } else {
        error.textContent = "Sorry dit klopt niet doe het zo Protocolnummer: 000 0001"
    }
    event.target.classList.add('input-error')
    event.target.setAttribute('aria-describedby', 'error-id')    
  } else {
    error.textContent = " "
    event.target.classList.remove('input-error')
    event.target.removeAttribute('aria-describedby')
  }
});
})

/** Bron: Chatgpt
 *  Prompt: Ik wil dat als een van de drie radio buttons aangeklikt is, 
 * dat de verscholen input die bij de andere verstopt zijn automatisch geleegd worden. 
 * En geen error message meer bij staat, waarom werkt dit niet?
 * https://chatgpt.com/share/69b7feaf-3b80-8001-b02a-00a44c5321dc
 */
// JEPPE heeft mijn function gedebugged 
allRadioGemachtigde.forEach(radio => {
    radio.addEventListener('change', (event) =>{

        inputsAuthorizedPersonInfo.forEach(input => {
            if(input.name !== radio.value) {
                input.value = "";
                 input.classList.remove('input-error')
                input.removeAttribute('aria-describedby');

            }
        })

        error.textContent = ""
    })
})