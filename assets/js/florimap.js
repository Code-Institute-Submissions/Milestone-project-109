var map;
var InfoObj = [];
var centerCords = {
            lat: 27.2730,
            lng: -80.3582
        }; 

var markersOnMap = [
    {   
        content: "The Walt Disney World Resort, also called Walt Disney World and Disney World, is an entertainment complex in Bay Lake and Lake Buena Vista, Florida, in the United States, near the cities of Orlando and Kissimmee.",
        placeName: "Disneyworld and the Magic Kingdom",
        address:"1375 E Buena Vista Dr, Orlando, FL 32830",
        LatLng:[{
            lat: 28.3852,
            lng: -81.5639
        }],
    },
    {
        content: "The Kennedy Space Center Visitor Complex is the visitor center at NASA's Kennedy Space Center in Florida. It features exhibits and displays, historic spacecraft and memorabilia, shows, two IMAX theaters, and a range of bus tours of the spaceport",
        placeName: "Kennedy Space Center",
        address:"Space Commerce Way, Merritt Island, FL 32953",
        LatLng:[{
            lat: 28.5729,
            lng: -80.6490
        }],
    },
    {   
        content: "Universal's Islands of Adventure is a theme park located in Orlando, Florida. It opened on May 28, 1999, along with CityWalk, as part of an expansion that converted Universal Studios Florida into the Universal Orlando Resort. The resort's slogan Vacation Like You Mean It was introduced in 2013",
        placeName: "Universal Island of Adventures",
        address: "6000 Universal Blvd, Orlando, FL 32819",
        LatLng:[{
            lat: 28.4793,
            lng: -81.4686
        }],
    },
    {   
        content: "Miami Beach is a south Florida island city, connected by bridges to mainland Miami. Wide beaches stretch from North Shore Open Space Park, past palm-lined Lummus Park to South Pointe Park. The southern end, South Beach, is known for its international cachet with models and celebrities, and its early-20th-century architecture in the Art Deco Historic district with pastel-colored buildings, especially on Ocean Drive.",
        placeName: "Miami Beach",
        address: "Fl 33139",
        LatLng:[{
            lat: 25.7907,
            lng: -80.1300 
        }],
    },
    {   
        content: "Everglades National Park is a 1.5-million-acre wetlands preserve on the southern tip of the U.S. state of Florida. Often compared to a grassy, slow-moving river, the Everglades is made up of coastal mangroves, sawgrass marshes and pine flatwoods that are home to hundreds of animal species. Among the Everglades' abundant wildlife are the endangered leatherback turtle, Florida panther and West Indian manatee.",
        placeName: "Everglades National Park",
        address: "",
        LatLng:[{
            lat: 25.7459,
            lng: -80.5550
        }],
    },
    {   
        content: "SeaWorld Orlando is a theme park and marine zoological park, in Orlando, Florida. It is owned and operated by SeaWorld Parks & Entertainment. When combined with its neighbor Discovery Cove and Aquatica, it forms SeaWorld Parks and Resorts Orlando, an entertainment complex consisting of the three parks and many hotels.",
        placeName: "Seaworld Orlando",
        address: "7007 Sea World Dr, Orlando, FL 32821",
        LatLng:[{
            lat: 28.4097,
            lng: -81.4597 
        }],
    },
    {   
        content: "Busch Gardens Tampa Bay is a 335-acre African-themed animal theme park located in the city of Tampa, Florida.",
        placeName: "Busch Gardens",
        address: "10165 McKinley Dr, Tampa, FL 33612",
        LatLng:[{
            lat: 28.0372,
            lng: -82.4194
        }],
    },
    {   
        content: "Universal Studios Florida is a theme park and production studio located in Orlando, Florida. Opened on June 7, 1990, the park's theme is the entertainment industry, in particular movies and television. The park encourages its guests to 'ride the movies' and features numerous attractions and live shows.", 
        placeName: "Universal Studios Florida",
        address: " 6000 Universal Blvd, Orlando, FL 32819",
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
        var contentString = "<h5 style='text-align:center;'>" + markersOnMap[i].placeName + "</h5>" + "<p style='text-align:center;'>" + markersOnMap[i].content + "</p>" + "<p style='text-align:center;'>" + markersOnMap[i].address + "</p>";
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