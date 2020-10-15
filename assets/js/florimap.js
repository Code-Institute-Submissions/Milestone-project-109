var map;
var InfoObj = [];
var centerCords = {
            lat: 27.2730,
            lng: -80.3582
        }; 

var markersOnMap = [
    {   
        content: "this is Disneyworld",
        placeName: "Disneyworld and the Magic Kingdom",
        LatLng:[{
            lat: 28.3852,
            lng: -81.5639
        }],
    },
    {
        content: "Welcome to Nasa",
        placeName: "Kennedy Space Center",
        LatLng:[{
            lat: 28.5729,
            lng: -80.6490
        }],
    },
    {   
        content: "Universal Island of Adventures",
        placeName: "Universal Island of Adventures",
        LatLng:[{
            lat: 28.4793,
            lng: -81.4686
        }],
    },
    {   
        content: "Miami beach is a..",
        placeName: "Miami Beach",
        LatLng:[{
            lat: 25.7907,
            lng: -80.1300 
        }],
    },
    {   
        content: "the everglades national park is..",
        placeName: "Everglades National Park",
        LatLng:[{
            lat: 25.7459,
            lng: -80.5550
        }],
    },
    {   
        content: "Seaworld orlando is...",
        placeName: "Seaworld Orlando",
        LatLng:[{
            lat: 28.4097,
            lng: -81.4597 
        }],
    },
    {   
        content: "Busch Gardens is a..",
        placeName: "Busch Gardens",
        LatLng:[{
            lat: 28.0372,
            lng: -82.4194
        }],
    },
    {   
        content: "Universal Studios is a...", 
        placeName: "Universal Studios Florida",
        LatLng:[{
            lat: 28.4743,
            lng: -81.4678
        }],
    }
]; 

window.onload = function() {
    initMap();
};

function initMap() {
        map = new google.maps.Map(document.getElementById("map"), {
        zoom: 7,
        center: centerCords
    });
    addMarkerInfo(); 
}


function addMarkerInfo() {
    for ( var i = 0; i < markersOnMap.length; i++ ) {
        var contentString = "<h5>" + markersOnMap[i].placeName + "</h5>" + "<p style='text-align:center;'>" + markersOnMap[i].content + "</p>";
        const marker = new google.maps.Marker({
            position: markersOnMap[i].LatLng[0],
            map: map
        });

        const infowindow = new google.maps.InfoWindow({
            content: contentString,
        });

        marker.addListener("click", () => {
            closeOtherInfo();
            infowindow.open(marker.get("map"), marker);
            InfoObj[0] = infowindow;
        });
    }

function closeOtherInfo() {
    if (InfoObj.length > 0 ) {
        InfoObj[0].set("marker", null);
        InfoObj[0].close();
        InfoObj[0].length = 0;
    }
    
}
}