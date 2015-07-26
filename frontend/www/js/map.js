var map;
var communityCentresMarkers = [];
var activites = [];

$(document).ready(function () {
    initMap();
    loadActivities();
});

function loadActivities() {
    $.ajax({
        url: "data/activities.json",
        success: function (data) {
            activites = data;
            addCommunityCentres(map);
        }
    })
}

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

                for (var j = 0; j < activites.length; j++) {
                    if (data[i]['NAME'].toLowerCase() === activites[j]['communityCentre'].toLowerCase()) {
                        var infowindow = new google.maps.InfoWindow({
                            content: activites[j]['activities'].join()
                        });
                        google.maps.event.addListener(marker, 'click', function () {
                            infowindow.open(map, marker);
                        });
                        break;
                    }

                }

                //google.maps.event.addListener(marker, 'click', showActivity);
                communityCentresMarkers.push(marker);
            }
        }
    });
}

function showActivity(marker) {
    var lat = marker.latLng.A;
    var lng = marker.latLng.F;
    for (var i = 0; i < communityCentresMarkers.length; i++) {
        if (communityCentresMarkers[i]['internalPosition']['A'] === lat &&
            communityCentresMarkers[i]['internalPosition']['F'] === lng) {
            var cc = communityCentresMarkers[i]['title'];
            for (var i = 0; i < activites.length; i++) {
                if (cc === activites[i]['communityCentre']) {
                    var infowindow = new google.maps.InfoWindow({
                        content: activites.join()
                    });
                    google.maps.event.addListener(marker, 'click', function () {
                        infowindow.open(map, marker);
                    });
                    break;
                }
            }


            break;
        }
    }
}