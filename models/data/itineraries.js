import "dotenv/config.js";
import "../../config/database.js";
import Itinerary from '../Itinerary.js';

let itineraries = [{
    nameItinerary: "Paris Adventure",
    nameUser: "Scarlett Johansson",
    description: "Explore the Eiffel Tower, Louvre Museum, and enjoy a Seine River cruise.",
    duration: 24,
    price: 150,
    photo: "https://example.com/paris.jpg",
    likes: 100,
    hashtags: "#Paris #EiffelTower #Louvre #SeineCruise",
    
},  
{
    nameItinerary: "Rome Highlights",
    nameUser: "Robert Downey Jr.",
    description: "Visit the Colosseum, Vatican City, and enjoy authentic Italian cuisine.",
    duration: 24,
    price: 200,
    photo: "https://example.com/rome.jpg",
    likes: 80,
    hashtags: "#Rome #Colosseum #VaticanCity #ItalianCuisine",
    
},
{
    nameItinerary: "Tokyo Experience",
    nameUser: "Chris Hemsworth",
    description: "Experience the bustling streets of Shibuya, visit Senso-ji Temple, and enjoy sushi.",
    duration: 24,
    price: 180,
    photo: "https://example.com/tokyo.jpg",
    likes: 120,
    hashtags: "#Tokyo #Shibuya #Sensoji #Sushi",
   
},  
{
    nameItinerary: "NYC Tour",
    nameUser: "Jennifer Lawrence",
    description: "See the Statue of Liberty, Central Park, and Times Square in one day.",
    duration: 24,
    price: 250,
    photo: "https://example.com/nyc.jpg",
    likes: 150,
    hashtags: "#NYC #StatueOfLiberty #CentralPark #TimesSquare",
    
} 
];
Itinerary.insertMany(itineraries);