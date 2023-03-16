const mongoose=require('mongoose');
const joi=require('joi');
const passwordComplexity=require('joi-password-complexity');
require('dotenv').config();


const userSchema = new mongoose.Schema({
     firstName: { type: String, required: true },
     lastName: { type: String, required: true },
     email: { type: String, required: true },
     phone: { type: Number, required: true },
     username: { type: String, required: true },
     password: { type: String, required: true },
     account: {
          money: { type: Number, default: 0 },
          dateUpdated: { type: Date, default: Date.now },
          used: { type: Number, default: 0 },
          balance: { type: Number, dateOnly: true, default: 0 },
     },
     lastTask: {
          destination: { type: String, default: "" },
          departed: { type: String, default: "" },
          date: { type: Date, dateOnly: true,default: Date.now },
     },
});




const User=mongoose.model('User',userSchema);

const validate=(data)=>{
     const schema=joi.object({
          firstName:joi.string().required().label('FirstName'),
          lastName: joi.string().required().label('last Name'),
          email: joi.string().email().required().label('Email'),
          phone: joi.number().required().label('Phone Number'),
          username: joi.string().required().label('Username'),
          password: passwordComplexity().required().label('password'), 
     })
     return schema.validate(data)    
}
module.exports={User,validate}
