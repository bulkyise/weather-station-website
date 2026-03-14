async function getFirebaseData() {
    const response = await fetch("https://arduino-weather-station-553f2-default-rtdb.firebaseio.com/readings.json")
    const data = await response.json()
    // update your HTML elements here
    document.getElementById("temperature").innerText = data.temperature
    document.getElementById("humidity").innerText = data.humidity
}
getFirebaseData()
setInterval(getFirebaseData, 5000)