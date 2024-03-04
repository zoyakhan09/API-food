const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/FoodAPI')
.then(()=>console.log('Database is connected sucessfully'))
.catch(()=>console.log('Database is not connected'))
