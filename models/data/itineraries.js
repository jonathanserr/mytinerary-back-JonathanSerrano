import "dotenv/config.js";
import "../../config/database.js";
import Itinerary from '../Itinerary.js';

let itineraries = [{
    name: "Adventure in the Alps",
    photo: "https://cdn.pixabay.com/photo/2016/11/29/09/08/wine-1867320_1280.jpg",
    description: "A thrilling week-long adventure in the Swiss Alps, including skiing, snowboarding, and hiking.",
    duration: 7,
    price: 1500,
    location: "Switzerland",
    category: "Adventure"
},
{
    name: "Cultural Tour of Japan",
    photo: "https://cdn.pixabay.com/photo/2016/11/29/09/08/wine-1867320_1280.jpg",
    description: "Explore the rich culture and history of Japan with visits to Kyoto, Tokyo, and Osaka.",
    duration: 10,
    price: 2000,
    location: "Japan",
    category: "Culture"
}
];
Itinerary.insertMany(itineraries)