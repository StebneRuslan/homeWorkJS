function run() {
    let location = {};
    jQuery.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${input.value},&key=AIzaSyD2DoIcwH7wW6ElQpyYClCT3VvJID5m3aI`,
        function (req) {
            if (req.status !== 'ZERO_RESULTS') {
                location = req.results[0].geometry.location;
                lat.textContent = 'Довгота: ' + location.lat;
                lng.textContent = 'Широта: ' + location.lng;
                initMap(location);
            } else {
                alert('invalid input!')
            }
        }
    )
}

function initMap(location) {
    let map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        center: location
    });
    let marker = new google.maps.Marker({
        position: location,
        map: map
    });
}