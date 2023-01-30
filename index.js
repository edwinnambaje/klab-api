require('dotenv').config();
const mongoose=require('mongoose');
const express=require('express');
const app=express();
const authRoute=require('./routes/auth')
app.use(express.json());
mongoose.connect("mongodb+srv://test:test@cluster0.o8c7o1i.mongodb.net/?retryWrites=true&w=majority")
.then(console.log("Connected to db"));
app.use('/api/auth',authRoute);
const port=process.env.PORT;
app.listen(port,()=>{
    console.log(`Running on port ${port}`);
})