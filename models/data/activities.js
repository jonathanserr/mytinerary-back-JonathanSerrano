import "dotenv/config.js";
import "../../config/database.js";
import Activity from '../Activity.js';

let activities = [
    {
        name: "Skydiving",
        photo: "https://www.skydiving.com/wp-content/uploads/2023/01/skydiving-landing.jpg",
        description: "Experience the thrill of freefalling from thousands of feet in the air.",
        duration: 120,
        price: 300,
        location: "Dubai",
        category: "Adventure"
    },
    {
        name: "Wine Tasting Tour",
        photo: "https://cdn.pixabay.com/photo/2016/11/29/09/08/wine-1867320_1280.jpg",
        description: "Explore the vineyards and taste some of the finest wines in the region.",
        duration: 180,
        price: 150,
        location: "Paris",
        category: "Food & Drink"
    }
];

Activity.insertMany(activities)


