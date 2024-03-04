const express = require('express')
const app =express();
const port= 3200;
const foodItem = require('./model/food')
const cors = require('cors')
require('./db/conn');
require('./model/food');
app.use(express.json());
app.use(cors());
app.get('/',(req,res)=>{
    res.send('<h1>Welcome to API creation</h1>')
})
app.get('/getaddfood',async(req,res)=>{
try{
    const getfood = await foodItem.find({});
    res.status(201).send(getfood)
}
catch (e) {
    console.log(e);
        
}



})
app.post('/foodit',async(req ,res)=>{
    try {
        console.log('req.body',req.body)
         const addfoodItem =new foodItem(req.body);
         console.log('addfoodItem',addfoodItem);
         const insertData = await addfoodItem.save();
         console.log(insertData);
         res.status(201).send(insertData)
    } catch (e) {
        console.log(e);
        
    }

})
app.listen(port,()=>{
    console.log('server is listening at port number${port}');
})
