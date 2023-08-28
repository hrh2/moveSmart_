const mongoose = require('mongoose');
const joi = require('joi')

const busesSchema = new mongoose.Schema({
    plate: { type: String, required: true },
    price: { type: Number, required: true },
    sits: { type: String, required: true },
    time: { type: String, required: true },
    isInRest: { type: Boolean, default: false },
    inUse:{type: Boolean, default: false},
    point1: {
        stationName:{ type: String, required: true },
        available: { type: Boolean, default: false}
    },
    point2: {
        stationName: { type: String, required: true },
        available: { type: Boolean, default:false }
    },
});

const Buses = mongoose.model('Buses', busesSchema);

const validate = (data) => {
    const schema = joi.object({
        plate: joi.string().required().label('Plate'),
        price: joi.number().required().label('Price'),
        sits: joi.number().required().label('Sits'),
        time: joi.string().required().label('Time'),
        point1:joi.string().required().label('Point 1'),
        point2: joi.string().required().label('Point 2'),

    });
    return schema.validate(data);
};

module.exports = { Buses, validate};