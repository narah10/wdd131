let year = document.querySelector('#currentyear');
let lastModified = document.querySelector('#lastModified');

let today = new Date();
year.innerHTML = today.getFullYear()

lastModified.innerHTML = document.lastModified

/**Weather info */
const temperature = 9
const windSpeed = 5

// Do not call the calculateWindChill function unless the conditions are met
function calculateWindChill(temp, speed) {
    let windChill
    if (temp <= 10 && speed > 4.8) {
        // Wind Chill formula in Celsius
        windChill = 13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16)
        return windChill.toFixed(2) + " °C"
    }
    else if (temp <= 50 && speed > 3) {
        // Convert speed from km/h to mph
        speed = speed / 1.60934
        // Wind Chill formula in Fahrenheit
        windChill = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16)
        return windChill.toFixed(2) + " °F"
    } else {
        return "N/A"
    }
}

window.onload = function() {
    let windChillElement = document.getElementById('wind-chill')
    const windChill = calculateWindChill(temperature, windSpeed)
    windChillElement.textContent = windChill
};