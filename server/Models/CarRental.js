const mongoose = require('mongoose');

const carRentalSchema=new mongoose.Schema({
    name:{type:String, required:true},
    locationStreet:{type:String, required:false},
    descriptions:{type:String, required:true},
    privileges:{
        discounts:[{
            percentage:{type:String, required:false},
            Details: { type: String, required: false}
        }],
        driverProvidance:{type:Boolean, required:true},
    },
    specifications:{
    tyres:{type:Number, required:true},
    seats:{type:Number, required:true},
    price:{type:Number, required:true},
    color:{type:String, required:true},
    function:{type:String, required:true},
    isAutomatic:{type:Boolean, required:true},
    model:{type:String, required:true},
    fuel:{type:Number, required:true},
    },
    images:{type:Array, required:true},
})


const CarRental=mongoose.model('CarRental',carRentalSchema)

module.exports = CarRental