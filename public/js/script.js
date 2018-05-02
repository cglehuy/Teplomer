var celsiusInput = document.querySelector(".celsius > input")
var fahrenheitInput = document.querySelector(".fahrenheit > input")
var kelvinInput = document.querySelector(".kelvin > input")

function roundNum(num) {
  return Math.round(num*100)/100
}

function celsiusToFahrenheitAndKelvin() {
  var cTemp = parseFloat(celsiusInput.value)
  var fTemp = (cTemp * (9/5)) + 32
  var kTemp = cTemp + 273.15
  fahrenheitInput.value = roundNum(ftemp)
  kelvinInput.value = roundNum(kTemp)
}

function fahrenheitToCelsiusAndKelvin() {
  var fTemp = parseFloat(fahrenheitInput.value)
  var cTemp = (fTemp - 32) * (5/9)
  var kTemp = (fTemp + 459.67) * 5/9
  celsiusInput.value = roundNum(cTemp)
  kelvinInput.value = roundNum(kTemp)
}

function kelvinToCelsiusAndFahrenheit() {
  var kTemp = parseFloat(kelvinInput.value)
  var cTemp = kTemp - 273.15
  var fTemp = 9/5 * (kTemp - 273) + 32
  fahrenheitInput.value = roundNum(fTemp)
  celsiusInput.value = roundNum(cTemp)
}

function main() {
  celsiusInput.addEventListener('input', celsiusToFahrenheitAndKelvin)
  fahrenheitInput.addEventListener('input', fahrenheitToCelsiusAndKelvin)
  kelvinInput.addEventListener('input', kelvinToCelsiusAndFahrenheit)
}
