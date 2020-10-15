var map;
var InfoObj = [];
var centerCords = {
            lat: 36.7783,
            lng: -119.4179
        }; 

var markersOnMap = [
    {   
        content: "this is los angeles",
        placeName: "Los Angeles",
        LatLng:[{
            lat: 33.8121,
            lng: -117.9190 
        }],
    },
    {
        content: "this is los angeles",
        placeName: "Disneyland Resort",
        LatLng:[{
            lat: 34.0522,
            lng: -118.2437 
        }],
    },
    {   
        content: "this is los angeles",
        placeName: "Universal Studios",
        LatLng:[{
            lat: 34.1381,
            lng: -118.3534 
        }],
    },
    {   
        content: "this is los angeles",
        placeName: "Hollywood",
        LatLng:[{
            lat: 34.0928,
            lng: -118.3287 
        }],
    },
    {   
        content: "this is los angeles",
        placeName: "Santa Monica",
        LatLng:[{
            lat: 34.0099,
            lng: -118.4960 
        }],
    },
    {   
        content: "this is los angeles",
        placeName: "Venice Beach",
        LatLng:[{
            lat: 33.9850,
            lng: -118.4695 
        }],
    },
    {   
        content: "this is los angeles",
        placeName: "Long Beach",
        LatLng:[{
            lat: 33.7701,
            lng: -118.1937
        }],
    },
    {   
        content: "this is los angeles", 
        placeName: "San Diego Zoo",
        LatLng:[{
            lat: 32.7353,
            lng: -117.1490
        }],
    },
    {   
        content: "this is los angeles",
        placeName: "Gaslamp Quarter",
        LatLng:[{
            lat: 32.7114,
            lng: -117.1599
        }],
    },
    {   
        content: "this is los angeles",
        placeName: "Mission Beach",
        LatLng:[{
            lat: 32.7707,
            lng: -117.2514
        }],
    },
    {   
        content: "this is los angeles",
        placeName: "Seaport Village",
        LatLng:[{
            lat: 32.7091,
            lng: -117.1709
        }],
    },
    {   
        content: "this is los angeles",
        placeName: "San Francisco",
        LatLng:[{
            lat: 37.7749,
            lng: -122.4194
        }],
    },
    {   
        content: "this is los angeles",
        placeName: "Alcatraz",
        LatLng:[{
            lat: 37.8270,
            lng: -122.4230
        }],
    },
    {   
        content: "this is los angeles",
        placeName: "Golden Gate Bridge",
        LatLng:[{
            lat: 37.8199,
            lng: -122.4783
        }],
    },
    {   
        content: "this is los angeles",
        placeName: "Lombard Street",
        LatLng:[{
            lat:  37.801945,
            lng: -122.418892
        }],
    },
    {   
        content: "this is los angeles",
        placeName: "Fishermans Wharf",
        LatLng:[{
            lat:  37.8080,
            lng: -122.4177
        }],
    }
]; 

window.onload = function() {
    initMap();
};

function initMap() {
        map = new google.maps.Map(document.getElementById("map"), {
        zoom: 6,
        center: centerCords
    });
    addMarkerInfo(); 
}


function addMarkerInfo() {
    for ( var i = 0; i < markersOnMap.length; i++ ) {
        var contentString = "<h5>" + markersOnMap[i].placeName + "</h5>" + "<p>" + markersOnMap[i].content + "</p>";
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