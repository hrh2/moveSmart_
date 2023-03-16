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
const bookupdateRoutes = require('./controller/book');
const chatbot=require('./controller/chatbot');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//apis

app.use('/api/user',userRoutes);
app.use('/api/login',loginRoutes);
app.use('/api',accountRoutes);
app.use('/api/book',bookupdateRoutes);
app.use('/api/chatbot',chatbot);



//starting  server


app.listen(port,()=>{
     console.log(`server started on http://localhost:${port}`);
})

