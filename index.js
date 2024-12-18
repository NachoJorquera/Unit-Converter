/*
1 meter = 3.28084 feet
1 feet = 0.3048 meter
1 liter = 0.264172 gallon
1 gallon = 3.78541 liter
1 kilogram = 2.20462 pound
1 pound = 0.453592 kilogram
*/
const lengthUnit = [3.28084, 0.3048]
const volumeUnit = [0.264172, 3.78541]
const massUnit = [2.20462, 0.453592]
const inputNum = document.getElementById("input-num")
const inputBtn = document.getElementById("input-btn")
const lengthDiv = document.getElementById("length")
const volumeDiv = document.getElementById("volume")
const massDiv = document.getElementById("mass")

inputBtn.addEventListener("click", function() {
  let num = Number(inputNum.value)
  let lengthConversion = []
  let volumeConversion = []
  let massConversion = []

  for (let i = 0; i < 2; i++) {
    let result = num * lengthUnit[i]
    lengthConversion.push(result.toFixed(3))
    result = num * volumeUnit[i]
    volumeConversion.push(result.toFixed(3))
    result = num * massUnit[i]
    massConversion.push(result.toFixed(3))
  }
  lengthDiv.textContent = `${num} meters = ${lengthConversion[0]} feet | ${num} feet = ${lengthConversion[1]} meters`
  volumeDiv.textContent = `${num} liters = ${volumeConversion[0]} gallons | ${num} gallons = ${volumeConversion[1]} liters`
  massDiv.textContent = `${num} kilos = ${massConversion[0]} pounds | ${num} pounds = ${massConversion[1]} kilos`
})

