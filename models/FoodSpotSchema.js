const mongoose = require('mongoose')

const foodSpotSchema = new mongoose.Schema(
    {
        restaurantName: {type: String, required: true},
        cuisine: {type: String, required: true},
        price: {type: String, required: true},
        experience: {type: String, required: true},
        tips: [String],
        foodImages: [String]
        
    }, {timestamps:true}
)