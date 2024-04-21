function toggleLanguageTab() {
    const languageTab = document.querySelector('.langtab');
    if (languageTab.style.display === 'none' || languageTab.style.display === '') {
        languageTab.style.display = 'block';
    } else {
        languageTab.style.display = 'none';
    }
}

function closeLanguageTab() {
    const languageTab = document.querySelector('.langtab');
    languageTab.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function() {
    const langButton = document.getElementById('lang');
    const lang2Button = document.getElementById('lang2');

    if (langButton) {
        langButton.addEventListener('click', function(event) {
            event.preventDefault();
            toggleLanguageTab();
        });
    }

    if (lang2Button) {
        lang2Button.addEventListener('click', function(event) {
            event.preventDefault();
            toggleLanguageTab();
        });
    }

    const closeButton = document.getElementById('close');
    if (closeButton) {
        closeButton.addEventListener('click', function() {
            closeLanguageTab();
        });
    }
});

var map = L.map('map').setView([7.0644, 125.6070], 13); // Set default view to Davao City
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
        }).addTo(map);

        // Function to fetch location and add marker
        function fetchAndAddMarker(location) {
            return fetch(`https://nominatim.openstreetmap.org/search?q=${location}&format=json`)
                .then(response => response.json())
                .then(data => {
                    if (data.length > 0) {
                        const lat = parseFloat(data[0].lat);
                        const lon = parseFloat(data[0].lon);
                        if (location === document.getElementById("locationInput1").value || location === document.getElementById("locationInput2").value) {
                            L.marker([lat, lon]).addTo(map);
                        }
                        return { lat, lon };
                    } else {
                        alert(`Location '${location}' not found`);
                        return null;
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                    alert("An error occurred while fetching data");
                    return null;
                });
        }

        // Function to draw route using Leaflet Routing Machine
        function drawRoute(waypoints) {
            L.Routing.control({
                waypoints: waypoints.map(wp => L.latLng(wp.lat, wp.lon)),
                lineOptions: {
                    styles: [{ color: 'blue', opacity: 0.7, weight: 5 }]
                },
                createMarker: function() { return null; } // Do not create default markers
            }).addTo(map);
        }

        function locate() {
            const locations = [
                document.getElementById("locationInput1").value,
                "Circumferential Rd, Barangay 9-A, Davao City",
                "Magallanes, Davao City",
                "Claveria, Davao City",
                "Jacinto, Davao City",
                "Piapi, Davao City",
                "Uyanguren, Davao City",
                "J.P. Laurel Ave, Bajada, Davao City, Davao del Sur",
                document.getElementById("locationInput2").value
            ];

            Promise.all(locations.map(fetchAndAddMarker))
                .then(waypoints => {
                    const validWaypoints = waypoints.filter(wp => wp !== null);
                    if (validWaypoints.length >= 2) {
                        drawRoute(validWaypoints);
                    }
                });
        }