// mapboxgl.accessToken = 'pk.eyJ1IjoiYnVuYW5hbXVmZmluIiwiYSI6ImNraWx6MnYxcjBvajYyeXA3OXdsbnB4MXoifQ.ivcK8vQdINcZYBr0u0o8PQ';
mapboxgl.accessToken = 'pk.eyJ1IjoiYnVuYW5hbXVmZmluIiwiYSI6ImNraWx6MnYxcjBvajYyeXA3OXdsbnB4MXoifQ.ivcK8vQdINcZYBr0u0o8PQ';

var map = new mapboxgl.Map({
    
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    zoom: 5,
    center: [2.7883164752656144, 47.006552105307584]
});

async function logMovies() {
    const response = await fetch("http://localhost:3000/");
    const places = await response.json();
    for (const place in places){
        var htmlSnippet = `<p style="margin-bottom:0"><b>${place}: </b>${places[place]['notes']}</p>`
        var popup = new mapboxgl.Popup({
            anchor: 'bottom',   // To show popup on top
            offset: { 'bottom': [0, -10] },  // To prevent popup from over shadowing the marker.
            closeButton: false
         }).setHTML(htmlSnippet)
        const marker = new mapboxgl.Marker({color: "#31018a"}).setLngLat(places[place]['coordinates']).addTo(map).setPopup(popup)

    }
  }

logMovies()
