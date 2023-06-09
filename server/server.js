const express=require('express');
const app = express();
const cors = require("cors");
require('dotenv').config();
const port = process.env.PORT || 5000;
const bodyParser = require('body-parser');
const connection=require('./Models/DB');


connection()

//routes

const userRoutes = require('./controller/signup');
;
const loginRoutes = require('./controller/login');
const accountRoutes = require('./controller/account');
const stationUpdateRoutes = require('./controller/stations');
const chatbot=require('./controller/chatbot');
const bookings = require('./controller/booking');


app.use(bodyParser.json({ limit: '3mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '3mb' }));
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//apis

app.use('/api/user',userRoutes);
app.use('/api/login',loginRoutes);
app.use('/api',accountRoutes);
app.use('/api/book',stationUpdateRoutes);
app.use('/api/chatbot',chatbot)
app.use('/api/bookSpace',bookings);



//starting  server


app.listen(port,()=>{
     console.log(`server started on http://localhost:${port}`);
})

