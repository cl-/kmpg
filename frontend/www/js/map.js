var map;
var communityCentresMarkers = [];

$(document).ready(function () {
    initMap();
    addCommunityCentres(map);
});


function initMap() {
    var mapOptions = {
        center: {lat: 1.367597, lng: 103.807338},
        zoom: 12
    };
    map = new google.maps.Map(document.getElementById('map-canvas'),
        mapOptions);
}


function addCommunityCentres(map) {
    $.ajax({
        url: "data/community-centres.json",
        success: function (data) {
            for (var i = 0; i < data.length; i++) {
                var latLng = new google.maps.LatLng(data[i]['LATITUDE'], data[i]['LONGITUDE']);
                var marker = new google.maps.Marker({
                    position: latLng,
                    map: map,
                    title: data[i]['NAME']
                });
                communityCentresMarkers.push(marker);
            }
        }
    })
}