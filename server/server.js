const express=require('express');
const app = express();
const cors = require("cors");
require('dotenv').config();
const port = process.env.PORT || 5000;
// const bodyParser = require('body-parser');
const connection=require('./Models/DB');


connection()

//routes

const userRoutes = require('./controller/signup');
const loginRoutes = require('./controller/login');
const homepageRoute=require('./controller/home');
const stationRoutes = require('./controller/stations');
const busRoutes=require('./controller/buses');
const stationDashboardRoute=require('./controller/stationDashboard')

// const accountRoutes = require('./controller/account');
// const chatbot=require('./controller/chatbot');
// const bookings = require('./controller/booking');
// const records=require('./controller/records');


// app.use(bodyParser.json({ limit: '3mb' }));
// app.use(bodyParser.urlencoded({ extended: true, limit: '3mb' }));
app.use(cors())
app.use(express.json({ limit: '3mb' }));
app.use(express.urlencoded({extended:true,limit: '3mb' }));

//apis

app.use('/api/user',userRoutes);
app.use('/api/login',loginRoutes);
app.use('/api/home',homepageRoute);
app.use('/api/station/dashboard',stationDashboardRoute);
app.use('/api/station',stationRoutes);
app.use('/api/bus',busRoutes);

// app.use('/api',accountRoutes);
// app.use('/api/chatbot',chatbot)
// app.use('/api/bookSpace',bookings);
// app.use('/api/records',records);



//starting  server


app.listen(port,()=>{
     console.log(`server started on http://localhost:${port}`);
})

