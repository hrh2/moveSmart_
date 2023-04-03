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
     image:{type:String,required:false},
     account: {
          money: { type: Number, default: 0 },
          dateUpdated: { type: Date, default: Date.now },
          used: { type: Number, default: 0 },
          balance: { type: Number, dateOnly: true, default: 0 },
     },
     lastTask: [{
          destination: { type: String, required:false},
          departed: { type: String, required: false },
          cost: { type: Number, required:false},
          car: { type: String, required: false },
          date: { type: Date,default: Date.now },
          isTicket: { type: Boolean, default:false,required:false},
          qrCode:{type:String, required:false},
     }]
});




const User=mongoose.model('User',userSchema);

const validate = (data) => {
     const schema = joi.object({
          firstName: joi.string().required().label('First Name'),
          lastName: joi.string().required().label('Last Name'),
          email: joi.string().email().required().label('Email'),
          phone: joi.number().required().label('Phone Number'),
          username: joi.string().required().label('Username'),
          password: passwordComplexity().required().label('Password'),
          image: joi.allow(null).label('Image'),

     });
     return schema.validate(data);
};

module.exports={User,validate}
