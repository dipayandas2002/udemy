importScripts

mapboxgl.accessToken = 'pk.eyJ1IjoiZGlwYXlhbmRhczM2MCIsImEiOiJja3Fybm1xZXUxMWFjMzJuYnlqeDhkYjJtIn0.kqhXRux7wwHsaj9rOL3v_w';
        var map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/dark-v10',
            zoom: 1,
            center: [0, 0]
        });


        map.on('load', function () {
            var marker = new mapboxgl.Marker()
                .setLngLat([20, 50.5])
                .addTo(map);


        });