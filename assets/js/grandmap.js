var map;
var InfoObj = [];
var centerCords = {
            lat: 36.4158,
            lng: -113.0666
        }; 

var markersOnMap = [
    {   
        content: "Hoover Dam is a concrete arch-gravity dam in the Black Canyon of the Colorado River, on the border between the U.S. states of Nevada and Arizona. It was constructed between 1931 and 1936 during the Great Depression and was dedicated on September 30, 1935, by President Franklin D. Roosevelt.",
        placeName: "Hoover Damn Tourist Center",
        LatLng:[{
            lat: 36.0161,
            lng: -114.7377
        }],
    },
    {
        content: "The south rim",
        placeName: "South Rim Trail",
        LatLng:[{
            lat: 36.0583,
            lng: -112.1273
        }],
    },
    {   
        content: "Grand Canyon village is...",
        placeName: "Grand Canyon village",
        LatLng:[{
            lat: 36.0544,
            lng: -112.1401
        }],
    },
    {   
        content: "Hub of information and meeting point...",
        placeName: "Grand Canyon Visitor's Center",
        LatLng:[{
            lat: 36.0591,
            lng: -112.1093 
        }],
    },
    {   
        content: "skywalk is absolutely breathtaking, found at the west rim..",
        placeName: "Grand Canyon Skywalk",
        LatLng:[{
            lat: 36.0120,
            lng: -113.8109
        }],
    },
    {   
        content: "North rim is...",
        placeName: "North Rim Trail",
        LatLng:[{
            lat: 36.2135,
            lng: -112.0581 
        }],
    },
    {   
        content: "Havasupai Falls are...",
        placeName: "Havasupai Falls",
        LatLng:[{
            lat: 36.2552,
            lng: -112.6979
        }],
    }
]; 

window.onload = function() {
    initMap();
};

function initMap() {
        map = new google.maps.Map(document.getElementById("map"), {
        zoom: 8,
        center: centerCords
    });
    addMarkerInfo(); 
}


function addMarkerInfo() {
    for ( var i = 0; i < markersOnMap.length; i++ ) {
        var contentString = "<h5 style='text-align:center;'>" + markersOnMap[i].placeName + "</h5>" + "<p style='text-align:center;'>" + markersOnMap[i].content + "</p>";
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