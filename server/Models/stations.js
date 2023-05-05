const mongoose = require('mongoose');

const stationsSchema = new mongoose.Schema({
     name: {
          type: String,
          required: true
     },
     location: {
          type: String,
          required: true
     },
     destination: [{
          name:{type: String, required: true},
          time: [{ name: { type: String, required: true },
                  time: { type:String, required: false},
                  size: { type: Number, default: 0 } },],
          cost: { type: Number, default: 0 ,required: true } 
     }]
});

const Station = mongoose.model('Station', stationsSchema);

module.exports = Station;
