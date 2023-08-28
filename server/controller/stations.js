const express = require('express');
const router = express.Router();
const { verifyToken, extractUserIdFromToken } = require('./tokenverify');
const Station=require('../Models/stations')


router.get('/', async (req, res) => {
     try {
          const stations = await Station.find();
          res.json(stations);
     } catch (err) {
          console.error(err);
          res.status(500).send('Server error');
     }
});

router.post('/',verifyToken,async (req, res) => {
     try {
          const { name, commonName, location, stationDescription, imageOne } = req.body;
          const station = await Station.findOne({ name })
          if(station){return res.status(400).send({msg:'station already exists'})}
          const newStation=new Station({
               name,
               commonName,
               location,
               stationDescription,
               images:[imageOne],
           })

           await newStation.save();
           return res.status(201).json({msg:"station saved ",id:newStation._id});
     } catch (err) {
          res.status(500).send('Server error'+err.message);
     }
});


router.put('/:id', async (req, res) => {
     const { name, location, destination } = req.body;

     try {
          const updatedStation = await Station.findOneAndUpdate(
               { _id: req.params.id },
               {
                    name,
                    commonName,
                    location,
                    stationDescription,
                    images,
               },
               { new: true }
          );

          if (!updatedStation) {
               return res.status(404).json({ msg: 'Station not found' });
          }

          res.json(updatedStation);
     } catch (err) {
          console.error(err);
          res.status(500).send('Server error');
     }
});


router.delete('/:id', async (req, res) => {
     try {
          const deletedStation = await Station.findByIdAndDelete(req.params.id);

          if (!deletedStation) {
               return res.status(404).json({ msg: 'Station not found' });
          }

          res.json({ msg: 'Station deleted successfully' });
     } catch (err) {
          console.error(err);
          res.status(500).send('Server error');
     }
});

router.get('/:id', async (req, res) => {
     try {
          const station = await Station.findById(req.params.id);

          if (!station) {
               return res.status(404).json({ msg: 'Station not found' });
          }

          res.json(station);
     } catch (err) {
          console.error(err);
          res.status(500).send('Server error');
     }
});

module.exports = router;

