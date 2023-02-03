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


convertBtn.addEventListener("click", function () {
    convert(inputEl, lengthOutput, 3.281, "meter", "feet")
    convert(inputEl, volumeOutput, 0.264, "liter", "gallon")
    convert(inputEl, massOutput, 3.281, "kilogram", "pound")
})



function convert(input, DOMel, value, unit1, unit2) {
    let result = `${input.value} ${unit1} = ${(input.value * value).toFixed(3)} ${unit2} |
                  ${input.value} ${unit2} = ${(input.value / value).toFixed(3)} ${unit1}`
    DOMel.textContent = result
}

