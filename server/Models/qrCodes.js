const mongoose = require('mongoose');

const qrCodeSchema = new mongoose.Schema({
     name: {
          type: String,
          required: true
     },
     image:{
          type: String,
          required: true
     }
});

const Qrcode = mongoose.model('Qrcode', qrCodeSchema);

module.exports = Qrcode;