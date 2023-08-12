const mongoose = require('mongoose');

const ticketsSchema = new mongoose.Schema({
    ownerId: {type: String,required: true},
    from: {type: String,required: true},
    destination:{type: String,required: true},
    code:{type: String,required: true},
    isUsed:{type: Boolean,default: false},
    isSuspended:{type: Boolean,default: false},
    time:{type: String, default:Date.now()},
});

const Ticket = mongoose.model('Ticket', ticketsSchema);

module.exports =Ticket;