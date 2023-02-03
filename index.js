/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const inputEl = document.getElementById("input-el")
const lengthOutput = document.getElementById("length-output")
const volumeOutput = document.getElementById("volume-output")
const massOutput = document.getElementById("mass-output")
const convertBtn = document.getElementById("convert-btn")
const clearBtn = document.getElementById("clear-btn")

convertBtn.addEventListener("click", function () {
    convert(inputEl, lengthOutput, 3.281, "meter", "feet")
    convert(inputEl, volumeOutput, 0.264, "liter", "gallon")
    convert(inputEl, massOutput, 3.281, "kilogram", "pound")
})

function clearOutput(){
    lengthOutput.textContent = ""
    volumeOutput.textContent = ""
    massOutput.textContent = ""
    inputEl.textContent = ""
}

clearBtn.addEventListener("click", function(){
    clearOutput()
})


function convert(input, DOMel, value, unit1, unit2) {
   const spanInput = input.textContent
   
   if(!isNaN(spanInput)){
    let result = `${spanInput} ${unit1} = ${(spanInput * value).toFixed(3)} ${unit2} |
    ${spanInput} ${unit2} = ${(spanInput / value).toFixed(3)} ${unit1}`
    DOMel.textContent = result
   }else{
        swal("Please input a valid number")
   }
    
}

