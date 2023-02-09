require('dotenv').config();
const mongoose=require('mongoose');
const express=require('express');
const app=express();
const cors=require('cors')
const authRoute=require('./routes/auth');
const userRoute=require('./routes/user');
const postRoute=require('./routes/post');
const estateRoute=require('./routes/estate');
const messageRoute=require('./routes/messages');
const swaggerDocs=require('./documentation/swagger');
app.use(express.json());
app.use(cors({origin:"*"}))
mongoose.set('strictQuery', true);
mongoose.connect(process.env.DB_URL)
.then(console.log("Connected to db"));
swaggerDocs(app);
app.use('/api/auth',authRoute);
app.use('/api/users',userRoute);
app.use('/api/posts',postRoute);
app.use('/api/estate',estateRoute);
app.use('/api/message',messageRoute);
const port=process.env.PORT;
app.listen(port,()=>{
    console.log(`Running on port ${port}`);
})