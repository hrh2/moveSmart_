const express = require('express');
const router = express.Router();
const { verifyToken, extractUserIdFromToken } = require('./tokenverify');
const Station = require('../Models/stations')
const {Buses} = require('../Models/Buses')


router.get('/', async (req, res) => {
    try {
        const station= await Station.find();

        const notLinked =station.filter(station => station.numberOfDestinations == 0).length
        const linked =station.filter(stations => stations.numberOfDestinations != 0).length;
        const allStations= station.length

        const buses=await Buses.find()
        const allBuses= buses.length
        const restBuses =buses.filter(buses => buses.isInRest == true).length

        res.status(200).json({notLinked,linked,allStations,allBuses,restBuses});
    } catch (err) {
        
        res.status(500).send('Server error on station dashboard: ' + err.message);
    }
});

module.exports = router