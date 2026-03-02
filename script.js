console.log('hello world');


// Function voor de reset van de radio buttons van de in en uitklap functie//
// Met hulp van Sanne geschreven
let valueNos = document.querySelectorAll('input[value="no"]');
let valueYes = document.querySelector('input[value="yes"]');


valueNos.forEach( function(valueNo){
    valueNo.addEventListener('change', clearInputs)
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
valueYes.addEventListener('change', addRequired);

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

    // De split zorgt ervoor dat er geen tijd wordt laten zien
    // https://stackoverflow.com/questions/25159330/how-to-convert-an-iso-date-to-the-date-format-yyyy-mm-dd
    const dateFormatter = today.toISOString().split("T")[0];
    calender.value = dateFormatter;

    console.log(calender.value);
}

setCurrentDateToPicker()










