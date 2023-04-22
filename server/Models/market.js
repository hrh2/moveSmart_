const mongoose = require('mongoose');

const marketSchema=new mongoose.Schema({
    nameType:{type:String, required:true},
    products:[{
     name:{type:String, required:true},
     price:{type:String, required:true},
     image:{type:String, required:true},
     description:{type:String, required:true}
    }]
})


const Market=mongoose.model('Market',marketSchema)

module.exports = Marketgit 