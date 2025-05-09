function myMap() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var mapProp = {
                center: new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
                zoom: 18,
            };
            var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
        });
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}
