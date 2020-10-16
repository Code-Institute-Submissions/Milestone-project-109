var map;
var InfoObj = [];
var centerCords = {
            lat: 36.7783,
            lng: -119.4179
        }; 

var markersOnMap = [
    {   
        content: "Los Angeles is a sprawling Southern California city and the center of the nation’s film and television industry. Near its iconic Hollywood sign, studios such as Paramount Pictures, Universal and Warner Brothers offer behind-the-scenes tours. On Hollywood Boulevard, TCL Chinese Theatre displays celebrities’ hand- and footprints, the Walk of Fame honors thousands of luminaries and vendors sell maps to stars’ homes.",
        placeName: "Los Angeles",
        address: "",
        LatLng:[{
            lat: 33.8121,
            lng: -117.9190 
        }],
    },
    {
        content: "Just outside Los Angeles, Disneyland is California's premier family vacation destination, attracting visitors since the 1950s. Disneyland Park, with rides and experiences in elaborately created theme sets, is what most people picture when they imagine Disneyland. The Disneyland California Adventure Park, created during one of the expansions, holds even more action and adventure, with seven lands based on movie themes. Beyond the rides and Disney characters wandering the streets, the resort also offers a full complement of features and services for a complete vacation. Hotels, restaurants, shopping, and all kinds of entertainment options are available at Disneyland Resort.",
        placeName: "Disneyland Resort",
        address: "Dr, Anaheim, CA 92802",
        LatLng:[{
            lat: 34.0522,
            lng: -118.2437 
        }],
    },
    {   
        content: "Universal Studios Theme Park is known for its mind-blowing rides based on blockbuster movies, but it is also a working movie studio and an attraction everyone can enjoy. The highlight for most people is the ever-changing selection of rides, which range from simulators to roller-coasters. Favorite movie and TV-themed rides and sets include The Wizarding World of Harry Potter, The Walking Dead, The Simpsons, and Transformers. To save time standing in long lines consider purchasing a Skip the Line: Front of Line Pass at Universal Studios Hollywood. This handy ticket gives you one-time fast entry to each of the park's rides, attractions, and shows, as well as behind-the-scenes access to select attractions.",
        placeName: "Universal Studios California",
        address: "100 Universal City Plaza, Universal City, CA 91608",
        LatLng:[{
            lat: 34.1381,
            lng: -118.3534 
        }],
    },
    {   
        content: "A larger-than-life symbol of the entertainment business, Hollywood beckons tourists with landmarks like TCL Chinese Theatre and star-studded Walk of Fame. Highlights include Paramount Pictures, historic music venues like the Hollywood Bowl, and Dolby Theatre, home of the Oscars. Scenesters can choose from improv comedy clubs, retro-cool bars and velvet-roped nightclubs. Locals frequent eateries in nearby Thai Town.",
        placeName: "Hollywood",
        address: "Hollywood, CA 90028",
        LatLng:[{
            lat: 34.0928,
            lng: -118.3287 
        }],
    },
    {   
        content: "Santa Monica is a coastal city west of downtown Los Angeles. Santa Monica Beach is fringed by Palisades Park, with views over the Pacific Ocean. Santa Monica Pier is home to the Pacific Park amusement park, historic Looff Hippodrome Carousel and Santa Monica Pier Aquarium. Next to the pier is Muscle Beach, an outdoor gym established in the 1930s. In the city center, Bergamot Station houses several art galleries.",
        placeName: "Santa Monica",
        address: "Santa Monica, CA 90272",
        LatLng:[{
            lat: 34.0099,
            lng: -118.4960 
        }],
    },
    {   
        content: "Known for its bohemian spirit, Venice is a buzzing beach town with upscale commercial and residential pockets. Free-spirited Venice Boardwalk is the site of funky shops, street performers and colorful murals. There’s also a skate park and Muscle Beach outdoor gym. Abbot Kinney Boulevard features foodie hot spots, stylish boutiques and coffee bars. A picturesque enclave of canals is surrounded by modernist homes.",
        placeName: "Venice Beach",
        address: "Venice Beach, CA 90291",
        LatLng:[{
            lat: 33.9850,
            lng: -118.4695 
        }],
    },
    {   
        content: "Long Beach is a coastal city and port in Southern California. Moored in its Queensway Bay, RMS Queen Mary is a retired ocean liner and museum ship. The waterfront Aquarium of the Pacific features touch tanks and a shark lagoon. Modern and contemporary works are on display at the Museum of Latin American Art. Rancho Los Cerritos is a 19th-century adobe home and museum set in expansive gardens",
        placeName: "Long Beach",
        address: "Long Beach, CA 90802",
        LatLng:[{
            lat: 33.7701,
            lng: -118.1937
        }],
    },
    {   
        content: "A top tourist attraction in Balboa Park, the San Diego Zoo is one of the largest and most famous zoos in the United States. Visiting this family-friendly attraction is also one of the top things to do in San Diego with kids. Plan at least a whole day here to really get the most out of your visit. You can see all kinds of exotic animals here, but perhaps its most famous residents are the giant pandas, which have been successfully bred here. Other favorite animals include gorillas, grizzly bears, koalas, leopards, bonobos, polar bears, rhinos, and sloths, and all the animal enclosures are designed to recreate natural settings for each species.", 
        placeName: "San Diego Zoo",
        address: "2920 Zoo Dr, San Diego, CA 92101",
        LatLng:[{
            lat: 32.7353,
            lng: -117.1490
        }],
    },
    {   
        content: "The Gaslamp Quarter National Historic District is the hub of the city's nightlife. It's a great place to visit if you're looking for things to do in downtown San Diego, especially after dark. Restored late-19th- and early-20th-century Victorian buildings house buzzing entertainment venues, trendy shops, art galleries, and restaurants serving every kind of cuisine you can imagine, from Persian food to pizza. This is a great place to catch some live jazz, comedy, or theater performances. Thanks to its great location in the heart of the city, the Gaslamp Quarter is also a great place to stay.",
        placeName: "Gaslamp Quarter",
        address: "CA 92101",
        LatLng:[{
            lat: 32.7114,
            lng: -117.1599
        }],
    },
    {   
        content: "Mission Beach is a laid-back neighborhood whose namesake sands attract surfers, sunbathers and volleyball players. A paved path curls around Mission Bay, a popular spot for water sports. Belmont Park is a small amusement park with a wooden roller coaster built in 1925, while SeaWorld San Diego has marine shows and up-close views of orcas and dolphins. Mission Boulevard is lined with casual cafes and eateries.",
        placeName: "Mission Beach",
        address: "CA 92109",
        LatLng:[{
            lat: 32.7707,
            lng: -117.2514
        }],
    },
    {   
        content: "Seaport Village is a waterfront shopping and dining complex adjacent to San Diego Bay in downtown San Diego, California. It is located at 849 West Harbor Drive, at the intersection of Harbor Drive and Kettner. It houses more than 70 shops, galleries, and eateries on 90,000 square feet of waterfront property.",
        placeName: "Seaport Village",
        address: "849 W Harbor Dr, San Diego, CA 92101",
        LatLng:[{
            lat: 32.7091,
            lng: -117.1709
        }],
    },
    {   
        content: "San Francisco, officially the City and County of San Francisco, is the cultural, commercial, and financial center of Northern California. San Francisco is the 16th most populous city in the United States, and the fourth most populous in California, with 881,549 residents as of 2019.",
        placeName: "San Francisco",
        address: "",
        LatLng:[{
            lat: 37.7749,
            lng: -122.4194
        }],
    },
    {   
        content: "The historic and notorious Alcatraz penitentiary, located on Alcatraz Island in San Francisco Bay, is one of America's most infamous prisons. It operated for almost thirty years, closing in 1963 and re-opening as a tourist attraction in 1973. Some of America's most well-known criminals were inmates here, including Al Capone and the 'Birdman', who would later form the basis for the fictional movie The Birdman of Alcatraz.",
        placeName: "Alcatraz",
        address: "San Francisco, CA 94133",
        LatLng:[{
            lat: 37.8270,
            lng: -122.4230
        }],
    },
    {   
        content: "The Golden Gate Bridge is a California icon gracing San Francisco Bay. If you want to drive over the Golden Gate Bridge, the road is US Hwy 101, or SR 1, and walkways on either side of the bridge are open to pedestrians and cyclists. The bridge is only open to pedestrians and cyclists during daylight hours. For a great view of the bridge, or for anyone interested in photographing the bridge, there are a number of ideal vantage points.",
        placeName: "Golden Gate Bridge",
        address: "San Francisco, CA 94129",
        LatLng:[{
            lat: 37.8199,
            lng: -122.4783
        }],
    },
    {   
        content: "Lombard Street is an east–west street in San Francisco, California that is famous for a steep, one-block section with eight hairpin turns. Stretching from The Presidio east to The Embarcadero, most of the street's western segment is a major thoroughfare designated as part of U.S. Route 101",
        placeName: "Lombard Street",
        address: "",
        LatLng:[{
            lat:  37.801945,
            lng: -122.418892
        }],
    },
    {   
        content: "Fisherman’s Wharf, on the northern waterfront, is one of the city's busiest tourist areas. Souvenir shops and stalls selling crab and clam chowder in sourdough bread bowls appear at every turn, as do postcard views of the bay, Golden Gate and Alcatraz. There’s also a colony of sea lions to see and historic ships to tour. At Ghirardelli Square, boutiques and eateries reside in the famed former chocolate factory.",
        placeName: "Fishermans Wharf",
        address: "San Francisco, CA 94133",
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


