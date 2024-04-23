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
            const location1 = document.getElementById("locationInput1").value;
            const location2 = document.getElementById("locationInput2").value;

            const constantIntermediateLocations1 = [
                "Circumferential Rd, Barangay 9-A, Davao City",
                "Magallanes, Davao City",
                "Claveria, Davao City",
                "Jacinto, Davao City",
                "Piapi, Davao City",
                "Uyanguren, Davao City",
                "J.P. Laurel Ave, Bajada, Davao City, Davao del Sur"
            ];

            const constantIntermediateLocations2 = [
                "Ecoland, Davao City",
                "Quimpo Boulevard, Davao City",
                "Uyanguren, Davao City",
                "Ponciano, Davao City",
                "Sandawa, Davao City"
            ];

            const constantIntermediateLocations3 = [
                "Circumferential Rd, Barangay 9-A, Davao City",
                "Magallanes, Davao City",
                "Claveria, Davao City",
                "Uyanguren, Davao City",
                "Piapi, Davao City",
                "Jacinto, Davao City",
                "Ponciano, Davao City",
                "San Pedro Street, Davao City",
                "Illustre Street, Davao City",
                "Mt. Apo Street, Davao City"
            ];

            const constantIntermediateLocations4 = [
                "Claveria, Davao City",
                "Bajada, Davao City",
                "J.P. Laurel Ave, Bajada, Davao City",
                "Cabaguio, Davao City",
                "Boulevard, Davao City",
                "San Pedro Street, Davao City"
            ];

            const constantIntermediateLocations5 = [
                "Bankerohan, Davao City",
                "Magallanes, Davao City",
                "Claveria, Davao City",
                "Uyanguren, Davao City",
                "J.P. Laurel Ave, Bajada, Davao City, Davao del Sur"
            ];

            const constantIntermediateLocations6 = [
                "Agdao, Davao City, Davao del Sur",
                "Leon Garcia Street, Poblacion District, Davao City, Davao del Sur",
                "Uyanguren, Davao City",
                "Ponciano, Davao City",
                "San Pedro Street, Davao City",
                "Bankerohan, Davao City",
                "Magallanes, Davao City",
                "Boulevard, Davao City"
            ];

            const constantIntermediateLocations8 = [
                "F.Torres Street, Poblacion District, Davao City, Davao del Sur",
                "Emilio Jacinto Extension, Poblacion District, Davao City, Davao del Sur",
                "Ponciano, Davao City",
                "San Pedro Street, Davao City",
                "Illustre Street, Davao City",
                "Elpidio Quirino Ave, Poblacion District, Davao City, Davao del Sur",
            ];

            const constantIntermediateLocations10 = [
                "Bankerohan, Davao City",
                "Magallanes, Davao City",
                "Claveria, Davao City",
                "Uyanguren, Davao City",
                "Leon Garcia Street, Poblacion District, Davao City, Davao del Sur",
                "Cabaguio, Davao City",
                "Bajada, Davao City",
                "J.P. Laurel Ave, Bajada, Davao City, Davao del Sur",
                "Acacia Street, Davao City",
                "Ponciano, Davao City",
                "San Pedro Street, Davao City"
            ];

            const constantIntermediateLocations11 = [
                "Madapo Poblacion, Poblacion District, Davao City, Davao del Sur",
                "Circumferential Rd, Barangay 9-A, Davao City",
                "Lopez Jaena Streeet, Poblacion District, Davao City, Davao del Sur",
                "F.Torres Street, Poblacion District, Davao City, Davao del Sur",
                "Sobrecarey Street, Davao City",
                "Lapu-Lapu Street, Agdao, Davao City, Davao del Sur",
                "Agdao, Davao City, Davao del Sur",
                "Leon Garcia Street, Poblacion District, Davao City, Davao del Sur",
                "Boulevard, Davao City",
                "San Pedro Street, Davao City",
                "Emilio Jacinto Extension, Poblacion District, Davao City, Davao del Sur",
                "Father Selga Street, Poblacion District, Davao City, Davao del Sur"
            ];

            Promise.all([
                fetchAndAddMarker(location1),
                fetchAndAddMarker(location2),
                ...intermediateLocations.map(fetchAndAddMarker)
            ]).then(waypoints => {
                const validWaypoints = waypoints.filter(wp => wp !== null);
                if (validWaypoints.length >= 2) {
                    const location1Waypoints = [validWaypoints[0], validWaypoints[1]];
                    const intermediateWaypoints = validWaypoints.slice(2);

                    drawRoute(location1Waypoints, 'green');
                    drawRoute(intermediateWaypoints, 'blue');
                }
            });

            // Fetch and add constant intermediate waypoints 1
            Promise.all(constantIntermediateLocations1.map(fetchAndAddMarker)).then(waypoints => {
                const validWaypoints = waypoints.filter(wp => wp !== null);
                if (validWaypoints.length >= 2) {
                    drawRoute(validWaypoints, 'red');
                }
            });

            // Fetch and add constant intermediate waypoints 2
            Promise.all(constantIntermediateLocations2.map(fetchAndAddMarker)).then(waypoints => {
                const validWaypoints = waypoints.filter(wp => wp !== null);
                if (validWaypoints.length >= 2) {
                    drawRoute(validWaypoints, 'yellow');
                }
            });

            // Fetch and add constant intermediate waypoints 3
            Promise.all(constantIntermediateLocations3.map(fetchAndAddMarker)).then(waypoints => {
                const validWaypoints = waypoints.filter(wp => wp !== null);
                if (validWaypoints.length >= 2) {
                    drawRoute(validWaypoints, 'orange');
                }
            });

            Promise.all(constantIntermediateLocations4.map(fetchAndAddMarker)).then(waypoints => {
                const validWaypoints = waypoints.filter(wp => wp !== null);
                if (validWaypoints.length >= 2) {
                    drawRoute(validWaypoints, 'green');
                }
            });

            Promise.all(constantIntermediateLocations5.map(fetchAndAddMarker)).then(waypoints => {
                const validWaypoints = waypoints.filter(wp => wp !== null);
                if (validWaypoints.length >= 2) {
                    drawRoute(validWaypoints, 'violet');
                }
            });

            Promise.all(constantIntermediateLocations6.map(fetchAndAddMarker)).then(waypoints => {
                const validWaypoints = waypoints.filter(wp => wp !== null);
                if (validWaypoints.length >= 2) {
                    drawRoute(validWaypoints, 'magenta');
                }
            });

            Promise.all(constantIntermediateLocations8.map(fetchAndAddMarker)).then(waypoints => {
                const validWaypoints = waypoints.filter(wp => wp !== null);
                if (validWaypoints.length >= 2) {
                    drawRoute(validWaypoints, 'cyan');
                }
            });

            Promise.all(constantIntermediateLocations10.map(fetchAndAddMarker)).then(waypoints => {
                const validWaypoints = waypoints.filter(wp => wp !== null);
                if (validWaypoints.length >= 2) {
                    drawRoute(validWaypoints, 'lime');
                }
            });

            Promise.all(constantIntermediateLocations11.map(fetchAndAddMarker)).then(waypoints => {
                const validWaypoints = waypoints.filter(wp => wp !== null);
                if (validWaypoints.length >= 2) {
                    drawRoute(validWaypoints, 'coral');
                }
            });
        }