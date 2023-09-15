const express = require('express');
const router = express.Router();
const { verifyToken, extractUserIdFromToken } = require('./tokenverify');
const {Buses,validate}= require('../Models/Buses')
const Station=require('../Models/stations');

router.post('/', verifyToken, async (req, res) => {
    try {
        const { error } = validate(req.body);
        if (error) {
            return res.status(400).json({ msg: error.details[0].message, m: "me too idk" });
        }
        const { plate, price, sits, time, point1, point2 } = req.body;

        const bus = await Buses.findOne({ plate })
        const allBuses=await Buses.find()
        const numberOfBuses = allBuses.length;
        if (bus) { res.status(400).send({ msg: 'bus already exists' }) }
        const newBus = new Buses({
            id:(numberOfBuses+1+plate),
            plate,
            price,
            sits,
            time,
            point1: {stationName:point1},
            point2: {stationName:point2}
        })

        const station1= await Station.findOne({name:point1})
        if(!station1){res.status(404).send({ msg: `Station: ${point1} not found,Not registered` })}

        const station2= await Station.findOne({name:point2})
        if (!station2){res.status(404).send({ msg: `Station: ${point2} not found,Not registered` })}

        if(station1.name == station2.name){res.status(404).send({ msg:"trying to link same station"})}
        
        if (!station1.LinkedDestinationIDs.includes(station2._id)) {
            station1.numberOfDestinations++;
            station1.LinkedDestinationIDs.push(station2._id);
            station2.numberOfDestinations++;
            station2.LinkedDestinationIDs.push(station1._id);
            await station1.save()
            await station2.save()
          }
        newBus.id=newBus._id
        await newBus.save();

        res.json({ msg: "bus saved successful ", id: newBus._id ,linkedStation:`${station1.name} and ${station2.name}`});

    } catch (err) {
        console.log(err)
        res.status(500).send('Server error' + err.message);
    }
});

router.get('/', async (req, res) => {
    try {
        const bus = await Buses.find();
        res.json(bus);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});

router.put('/:id', async (req, res) => {
    try {
        const { plate, price, sits, time, point1, point2 } = req.body;
        const { error } = validate(req.body);
        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }
        const updatedBus = await Buses.findOneAndUpdate(
            { _id: req.params.id },
            {
                plate,
                price,
                sits,
                time,
                point1: { stationName: point1 },
                point2: { stationName: point2 }
            },
            { new: true }
        );

        if (!updatedBus) {
            return res.status(404).json({ msg: 'Buses not found' });
        }

        res.json(updatedBus);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});


router.delete('/:id', async (req, res) => {
    try {
        const deletedBus = await Buses.findByIdAndDelete(req.params.id);

        if (!deletedBus) {
            return res.status(404).json({ msg: 'Buses not found' });
        }

        res.json({ msg: 'Buses deleted successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});

router.get('/:id', async (req, res) => {
    try {
        const bus = await Buses.findById(req.params.id);

        if (!bus) {
            return res.status(404).json({ msg: 'Buses not found' });
        }

        res.json(bus);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});

module.exports = router;

