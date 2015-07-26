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
                var image = '../image/onepa-small.png';
                var marker = new google.maps.Marker({
                    position: latLng,
                    map: map,
                    animation: google.maps.Animation.DROP,
                    title: data[i]['NAME'],
                    icon: image
                });
                google.maps.event.addListener(marker, 'click', showActivity);
                communityCentresMarkers.push(marker);
            }
        }
    })
}

function showActivity(a,b,c) {
    console.log(a,b,c);
}