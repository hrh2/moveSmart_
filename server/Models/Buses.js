const mongoose = require('mongoose');

const busesSchema = new mongoose.Schema({
    plate: { type: String, required: true },
    price: { type: Number, required: true },
    Sits: { type: String, required: true },
    time: { type: Date, required: true },
    isInRest: { type: Boolean, default: false },
    inUse:{type: Boolean, default: false},
    point1: {
        stationName:{ type: String, required: true },
        available: { type: Boolean, required: false}
    },
    point2: {
        stationName: { type: String, required: true },
        available: { type: Boolean, default:false }
    },
});

const Buses = mongoose.model('Buses', busesSchema);

module.exports = Buses;