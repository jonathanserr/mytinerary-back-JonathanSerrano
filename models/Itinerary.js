import { Schema, model } from "mongoose";

let collection = "itineraries"
let schema = Schema({
    nameItinerary: { type: String, required: true },
    nameUser: { type: String, required: true },
    description: { type: String, required: true },
    duration: { type: Number, required: true },
    price: { type: Number, required: true },
    itineraryPhoto: { type: String, required: true },
    userPhoto: { type: String, required: true },
    likes: { type: Number, required: true },
    hashtags: { type: [String], required: true },
    cityId: { type: Schema.Types.ObjectId, ref: "cities", required: true },
    //city is an array of ObjectId references to the cities collection
}, {
    timestamps: true
})
let Itinerary = model(collection, schema)
// This code defines a Mongoose schema and model for an "Itinerary" collection in a MongoDB database.
export default Itinerary