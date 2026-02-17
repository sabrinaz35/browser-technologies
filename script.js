console.log('hello world');

// Met hulp van Sanne geschreven
let valueNos = document.querySelectorAll('input[value="no"]');


valueNos.forEach( function(valueNo){
    valueNo.addEventListener('change', clearInputs)
}) 

// let otherRadiobuttons = document.querySelectorAll('.hiddenBlocks div input[type="radio"]')
// otherRadiobuttonsChecked =

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
        } 
        else {
            nextDivInput.value= "";
        }
        
        

    })

    // radioChecked.removeAttribute("checked");

    // if(otherRadiobuttonsChecked.checked) {
     
    //     otherRadiobuttons.removeAttribute("checked");

    // } 
}





