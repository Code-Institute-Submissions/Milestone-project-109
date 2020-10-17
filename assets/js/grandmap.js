var map;
var InfoObj = [];
var centerCords = {  //where the map is centered//
            lat: 36.4158,
            lng: -113.0666
        }; 

var markersOnMap = [  //markers information - co-ordinates, place name and brief description//
    {   
        content: "Hoover Dam is a concrete arch-gravity dam in the Black Canyon of the Colorado River, on the border between the U.S. states of Nevada and Arizona. It was constructed between 1931 and 1936 during the Great Depression and was dedicated on September 30, 1935, by President Franklin D. Roosevelt.",
        placeName: "Hoover Damn Tourist Center",
        address: "Nevada 89005", 
        LatLng:[{
            lat: 36.0161,
            lng: -114.7377
        }],
    },
    {
        content: "The south rim is perhaps the most popular entry point to the Grand Canyon and there's good reason. There are a vast array of activities available here that should be taken advantage of. There are some terrific Ranger Programs sponsored by National Park Service that include topics such as geology, animals and birds, fossils and cultural history. Whether you are driving, flying, biking or walking to get to the Grand Canyon, you come for the views. There are a variety of lectures or hikes guided by experienced rangers that will enhance your visit to the Grand Canyon. There is also a Junior Ranger Program for kids 6-14 years old.",
        placeName: "South Rim Trail",
        address: "Rim Trail, Grand Canyon Village, AZ 86023", 
        LatLng:[{
            lat: 36.0583,
            lng: -112.1273
        }],
    },
    {   
        content: "Grand Canyon Village is a census-designated place located on the South Rim of the Grand Canyon, in Coconino County, Arizona, in the United States. Its population was 2,004 at the 2010 Census. Located in Grand Canyon National Park, it is wholly focused on accommodating tourists visiting the canyon.",
        placeName: "Grand Canyon village",
        address: "AZ 86023",
        LatLng:[{
            lat: 36.0544,
            lng: -112.1401
        }],
    },
    {   
        content: "Hub for park information, bike rentals, coffee, exhibits & historical artifacts, plus a gift shop.",
        placeName: "Grand Canyon Visitor's Center",
        address: "S Entrance Rd, Grand Canyon Village, AZ 86023",
        LatLng:[{
            lat: 36.0591,
            lng: -112.1093 
        }],
    },
    {   
        content: "The Grand Canyon Skywalk is an absolutely breathtaking horseshoe-shaped cantilever bridge with a glass walkway at Eagle Point in Arizona near the Colorado River on the edge of a side canyon in the Grand Canyon West area of the main canyon",
        placeName: "Grand Canyon Skywalk",
        address: "808 Eagle Point Rd, Peach Springs, AZ 86434",
        LatLng:[{
            lat: 36.0120,
            lng: -113.8109
        }],
    },
    {   
        content: "North Rim is a populated place in Coconino County, Arizona, United States. It is located adjacent to the Grand Canyon within Grand Canyon National Park. The area includes a Visitor Center, the Grand Canyon Lodge, and a number of hiking trails, including the Bright Angel Point Trail and Transept Trail.",
        placeName: "North Rim Trail",
        address: "AZ-67, North Rim, AZ 86023",
        LatLng:[{
            lat: 36.2135,
            lng: -112.0581 
        }],
    },
    {   
        content: "Havasu Falls (Havasupai: Havasuw Hagjahgeevma) is a waterfall of Havasu Creek, located in the Grand Canyon, Arizona, United States. It is within Havasupai tribal lands. Havasu Falls is located 1 1⁄2 miles (2.4 km) from Supai. It is the more famous and most visited of the various falls along Havasu Creek. It consists of one main chute that drops over a 90-to-100-foot (27 to 30 m) vertical cliff into a series of plunge pools. High calcium carbonate concentration in the water creates the vivid blue-green color and forms the natural travertine dams that occur in various places near the falls.",
        placeName: "Havasupai Falls",
        address: "Arizona 86435",
        LatLng:[{
            lat: 36.2552,
            lng: -112.6979
        }],
    }
]; 

window.onload = function() {
    initMap();
};

function initMap() {  //renders map on page//
        map = new google.maps.Map(document.getElementById("map"), {
        zoom: 8,
        center: centerCords
    });
    addMarkerInfo();  //markers added to the map//


function addMarkerInfo() {  //loops through markersOnMap providing wanted info in contentstring //
    for ( var i = 0; i < markersOnMap.length; i++ ) {
        var contentString = "<h5 style='text-align:center;'>" + markersOnMap[i].placeName + "</h5>" + "<p style='text-align:center;'>" + markersOnMap[i].content + "</p>" + "<p style='text-align:center;'>" + markersOnMap[i].address + "</p>";
        const marker = new google.maps.Marker({
            position: markersOnMap[i].LatLng[0],  //lists markers from top down//
            map: map
        });

        const infowindow = new google.maps.InfoWindow({  //creates infowindow to contain marker info//
            content: contentString,
        });

        marker.addListener("click", () => {  //opens infowindow on click event//
            closeOtherInfo();
            infowindow.open(marker.get("map"), marker);
            InfoObj[0] = infowindow;
        });
    }

function closeOtherInfo() {  //clears previous marker info on opening another marker//
    if (InfoObj.length > 0 ) {
        InfoObj[0].set("marker", null);
        InfoObj[0].close();
        InfoObj[0].length = 0;
    }
    
}
}
}