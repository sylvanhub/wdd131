document.addEventListener('DOMContentLoaded', () => {
    const windChillElement = document.getElementById('wind-chill');

    const temperature = 32; 
    const windSpeed = 6.7; 

    function calculateWindChill(temp, speed) {
        if (temp <= 10 && speed > 4.8) {
         (13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16)).toFixed(2)
        } else {
            return "N/A";
        }
    }

    const windChill = calculateWindChill(temperature, windSpeed);
    windChillElement.textContent = `${windChill}°C`;
});