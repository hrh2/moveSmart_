const mongoose = require('mongoose');

const carRentalSchema=new mongoose.Schema({
    name:{type:String, required:true},
    privileges:{
        locationStreet:{type:String, required:false},
        Descriptions:{type:String, required:true},
        Discounts:[{
            percentage:{type:String, required:false},
            Details: { type: String, required: false}
        }],
        DriverProvided:{type:Boolean, required:true},
    },
    specifications:{
    tyres:{type:Number, required:true},
    seats:{type:Number, required:true},
    price:{type:Number, required:true},
    color:{type:String, required:true},
    function:{type:String, required:true},}
})


const CarRental=mongoose.model('CarRental',carRentalSchema)

module.exports = CarRental