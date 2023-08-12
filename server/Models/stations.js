const mongoose = require('mongoose');

const stationsSchema = new mongoose.Schema({
     name: {type: String,required: true},
     commonName: {type: String,required: true},
     location: {type: String,required: true},
     stationDescription: {type:String,required: true},
     images: [{ type: String }],
     NumberOfDestinations: { type: String, default:0 },
     LinkedDestinationIDs: [{ type: String, required: false }],
});

const Station = mongoose.model('Station', stationsSchema);

module.exports = Station;
