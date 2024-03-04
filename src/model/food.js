
const mongoose=require('mongoose')
const foodSchema =new mongoose.Schema({

        name: String,
        calories: Number, 
        protein: Number,
        carbs: Number,
        fats: Number,
        sugar: Number,
        fiber: Number,
        origin: String,
        cholestrol: String,
        benefits: String
        
});
const foodItem = new mongoose.model('fooditem',foodSchema);
module.exports=foodItem;
    
   