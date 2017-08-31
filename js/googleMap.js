"use script";

(function() {

    // Set our address to geocode
    var address = "Asmara, Universty";

    // Set our map options
    var mapOptions = {
        // Set the zoom level
        zoom: 10,

    };

    var geocoder = new google.maps.Geocoder();
    // Geocode our address
    geocoder.geocode({ "address": address }, function(results, status) {

        // Check for a successful result
        if (status == google.maps.GeocoderStatus.OK) {
            // Recenter the map over the address
            map.setCenter(results[0].geometry.location);
        } else {

            // Show an error message with the status if our request fails
            alert("Geocoding was not successful - STATUS: " + status);
        }
    });
    console.log(google);
    var map = new google.maps.Map(document.getElementById("map"),mapOptions);
})();