import 'dotenv/config.js';
import "../../config/database.js"
import City from '../City.js';

let cities = [
    {
        name: "BANGKOK",
        photo: "https://img.freepik.com/free-photo/wat-arun-temple-twilight-bangkok-thailand_335224-772.jpg",
        country: "Thailand",
        continent: "Asia",
        description: "Bangkok, the vibrant capital of Thailand, is famous for its ornate temples and lively nightlife.",
        currency: "Thai Baht (THB)",
        language: "Thai"
    },
    {
        name: "PARIS",
        photo: "https://media.admagazine.com/photos/6670b5fcf4f373fe3d2039c7/2:3/w_2142,h_3213,c_limit/pexels-magnusflechsenhaar-3361209.jpg",
        country: "France",
        continent: "Europe",
        description: "The city of love, known for its iconic Eiffel Tower, Notre-Dame Cathedral, and charming cafés.",
        currency: "Euro (EUR)",
        language: "French"
    },
    {
        name: "DUBAI",
        photo: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSnG33SH8er_aD285rdTMj2RQBt9v5o48kGDdMgUnPZnxhEPUiYykuWANV4xNhhuz-JrNvBqN4tNB984aCA21pjNOkypKn5AvqI2bthMg",
        country: "United Arab Emirates",
        continent: "Asia",
        description: "Dubai is famous for its futuristic skyscrapers, the Burj Khalifa, and luxurious shopping malls.",
        currency: "UAE Dirham (AED)",
        language: "Arabic"
    },
    {
        name: "SINGAPORE",
        photo: "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcTt2XN19sgni8Y38atg-fSw3BJk_R3OiqMj2SobTBLbqfTrApPa9WMPwT1pNsAefOq1gjgqo5FmiJtvEakFCLmJwx41s6o8QNwBigFdpg",
        country: "Singapore",
        continent: "Asia",
        description: "A highly modern city-state with skyscrapers, stunning gardens, and a vibrant cultural mix.",
        currency: "Singapore Dollar (SGD)",
        language: "English, Malay, Mandarin, Tamil"
    },
    {
        name: "KUALA LUMPUR",
        photo: "https://lh4.googleusercontent.com/proxy/l6iYRidSyJMbB6AoMF81yaqfGOeZ_FyQu2wPqEHKm5KufEFmtkdCcMRnUro5e0hkJVRqbrVrdE3ufQwWjET3XFFoI-jviI5a9Sx0Ys1T1jsSWFuAAzbVFufJRJiwfxG-DmDgOAkEFRdsMvnb2Lr0FvalPyZhUE4=w810-h468-n-k-no",
        country: "Malaysia",
        continent: "Asia",
        description: "The capital of Malaysia, famous for the Petronas Towers and its mix of Chinese, Indian, and Malay cultures.",
        currency: "Malaysian Ringgit (MYR)",
        language: "Malay"
    },
    {
        name: "NEW YORK",
        photo: "https://res.cloudinary.com/dtljonz0f/image/upload/c_auto,ar_4:3,w_3840,g_auto/f_auto/q_auto/v1/gc-v1/new-york/shutterstock_2142178205_yxfbc3?_a=BAVARSAP0",
        country: "United States",
        continent: "North America",
        description: "The Big Apple, known for Times Square, Central Park, and the Statue of Liberty.",
        currency: "US Dollar (USD)",
        language: "English"
    },
    {
        name: "MADRID",
        photo: "https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--1899a1bd-bedb-41fb-8e42-1647a2803ae3/Corazon_de_Madrid.app.webp?preferwebp=true",
        country: "Spain",
        continent: "Europe",
        description: "The capital of Spain, famous for the Prado Museum, Royal Palace, and vibrant nightlife.",
        currency: "Euro (EUR)",
        language: "Spanish"
    },
    {
        name: "TOKYO",
        photo: "https://viajes.nationalgeographic.com.es/medio/2024/09/03/tokio_133ce43a_1284581217_240903122054_1280x854.jpg",
        country: "Japan",
        continent: "Asia",
        description: "A futuristic metropolis with traditional temples, advanced technology, and vibrant culture.",
        currency: "Japanese Yen (JPY)",
        language: "Japanese"
    },
    {
        name: "SYDNEY",
        photo: "https://ingeoexpert.com/wp-content/uploads/2024/12/Sydneyoperahouse_at_night.webp",
        country: "Australia",
        continent: "Oceania",
        description: "Famous for the Sydney Opera House, beautiful beaches, and a relaxed lifestyle.",
        currency: "Australian Dollar (AUD)",
        language: "English"
    },
    {
        name: "LONDON",
        photo: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSEy4eaPVywfcPEEcIVXsACGD0ykJTDr80laqdcDs9X11Fddora3sr2m2g9ymW7svuOpofoHU5E7ssIPhj-JuUhcnWQGYrm5nfEjAHd1g",
        country: "United Kingdom",
        continent: "Europe",
        description: "The capital of the United Kingdom, home to Big Ben, Buckingham Palace, and the River Thames.",
        currency: "British Pound (GBP)",
        language: "English"
    },
    {
        name: "BARCELONA",
        photo: "https://cdn.bueno-bonito-barcelona.com/wp-content/uploads/sites/2/2014/06/playa-barcelona-ok.jpg",
        country: "Spain",
        continent: "Europe",
        description: "Famous for the Sagrada Familia, beautiful beaches, and Mediterranean atmosphere.",
        currency: "Euro (EUR)",
        language: "Catalan, Spanish"
    },
    {
        name: "ROME",
        photo: "https://tourismmedia.italia.it/is/image/mitur/20220127150143-colosseo-roma-lazio-shutterstock-756032350-2?wid=1600&hei=900&fit=constrain,1&fmt=webp",
        country: "Italy",
        continent: "Europe",
        description: "The Eternal City, famous for the Colosseum, Vatican City, and its rich history.",
        currency: "Euro (EUR)",
        language: "Italian"
    },    
    {
        name: "RIO DE JANEIRO",
        photo: "https://upload.wikimedia.org/wikipedia/commons/6/65/RiodeJaneiroBrazil.jpg",
        country: "Brazil",
        continent: "South America",
        description: "Known for its stunning beaches, Christ the Redeemer statue, and vibrant Carnival festival.",
        currency: "Brazilian Real (BRL)",
        language: "Portuguese"
    },
    {
        name: "CAPE TOWN",
        photo: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Cape_Town_City_Bowl_skyline.jpg",
        country: "South Africa",
        continent: "Africa",
        description: "A breathtaking coastal city known for Table Mountain, Robben Island, and its stunning landscapes.",
        currency: "South African Rand (ZAR)",
        language: "English, Afrikaans, Xhosa"
    },
    {
        name: "TORONTO",
        photo: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Toronto_skyline_at_night_-_2020.jpg",
        country: "Canada",
        continent: "North America",
        description: "A diverse metropolis known for the CN Tower, multicultural neighborhoods, and vibrant arts scene.",
        currency: "Canadian Dollar (CAD)",
        language: "English, French"
    }
];

City.insertMany(cities)