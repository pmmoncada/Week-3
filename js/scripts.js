
// sets up my mapbox access token so they can track my usage of their basemap services
mapboxgl.accessToken = 'pk.eyJ1IjoiY3dob25nIiwiYSI6IjAyYzIwYTJjYTVhMzUxZTVkMzdmYTQ2YzBmMTM0ZDAyIn0.owNd_Qa7Sw2neNJbK6zc1A';

var map = new mapboxgl.Map({
  container: 'mapContainer',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [-87.197714, 14.081646],
  zoom: 12,
});



// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl());

//Add Inmobiliaria Paris to the Map
map.on('load', function() {
    map.loadImage('https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Eiffel_Tower_Silhouette.svg/128px-Eiffel_Tower_Silhouette.svg.png', function(error, image) {
        if (error) throw error;
        map.addImage('tower', image);
        map.addLayer({
            "id": "points",
            "type": "symbol",
            "source": {
                "type": "geojson",
                "data": {
                    "type": "FeatureCollection",
                    "features": [{
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-87.1876945,14.0757734]
                        }
                    }]
                }
            },
            "layout": {
                "icon-image": "tower",
                "icon-size": 0.20
            }
        });
    });
});


shoppingTGU.forEach(function(DataTGU) {
  new mapboxgl.Marker({
    color: "purple"
  })
    .setLngLat([DataTGU.lat, DataTGU.lng])
    .setPopup(new mapboxgl.Popup({ offset: 40 })
        .setText(`${DataTGU.name}`))
    .addTo(map);
})
