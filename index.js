require('dotenv').config();
const mongoose=require('mongoose');
const express=require('express');
const app=express();
const authRoute=require('./routes/auth');
const userRoute=require('./routes/user')
app.use(express.json());
mongoose.connect("mongodb+srv://edwins:edwins@cluster0.o8c7o1i.mongodb.net/edwin?retryWrites=true&w=majority")
.then(console.log("Connected to db"));
app.use('/api/auth',authRoute);
app.use('/api/users',userRoute);
const port=process.env.PORT;
app.listen(port,()=>{
    console.log(`Running on port ${port}`);
})