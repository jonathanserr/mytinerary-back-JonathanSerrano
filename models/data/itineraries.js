import "dotenv/config.js";
import "../../config/database.js";
import Itinerary from '../Itinerary.js';

let itineraries = [{
    name: "Scarlett Johansson",
    duration: 24,
    price: 150,
    photo: "https://example.com/paris.jpg",
    likes: 100,
    hashtags: "#Paris #EiffelTower #Louvre #SeineCruise",
    cityId: "1",
},  
{
    name: "Robert Downey Jr.",
    duration: 24,
    price: 200,
    photo: "https://example.com/rome.jpg",
    likes: 80,
    hashtags: "#Rome #Colosseum #VaticanCity #ItalianCuisine",
    cityId: "2",
},
{
    name: "Chris Hemsworth",
    duration: 24,
    price: 180,
    photo: "https://example.com/tokyo.jpg",
    likes: 120,
    hashtags: "#Tokyo #Shibuya #Sensoji #Sushi",
    cityId: "3",
},  
{
    name: "Jennifer Lawrence",
    duration: 24,
    price: 250,
    photo: "https://example.com/nyc.jpg",
    likes: 150,
    hashtags: "#NYC #StatueOfLiberty #CentralPark #TimesSquare",
    cityId: "4",
} 
];
Itinerary.insertMany(itineraries)