function getCurrentTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    return `${hours}:${minutes}:${seconds}`;
}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const latitude = position.coords.latitude.toFixed(6);
                const longitude = position.coords.longitude.toFixed(6);
                document.getElementById('coordinates').textContent = `Latitude: ${latitude}, Longitude: ${longitude}`;
            },
            (error) => {
                console.error(error.message);
                document.getElementById('coordinates').textContent = 'Unable to retrieve coordinates.';
            }
        );
    } else {
        document.getElementById('coordinates').textContent = 'Geolocation is not supported by your browser.';
    }
}

function updateTimeAndLocation() {
    const timeElement = document.getElementById('time');
    timeElement.textContent = `Current Time: ${getCurrentTime()}`;

    getLocation();
}

// Update time and location every second
setInterval(updateTimeAndLocation, 1000);
