const express = require('express');
const router = express.Router();
// const { verifyToken, extractUserIdFromToken } = require('./tokenverify');
// const { User } = require('../Models/user')
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

router.post('/', async (req, res) => {
     console.log(req.body);
     const { name, location, destination } = req.body;

     try {
          const newStation = new Station({
               Name: name,
               location: location,
               destination: destination
          });

          await newStation.save();
          res.json(newStation);
     } catch (err) {
          console.error(err);
          res.status(500).send('Server error');
     }
});


router.put('/:id', async (req, res) => {
     const { name, location, destination } = req.body;

     try {
          const updatedStation = await Station.findOneAndUpdate(
               { _id: req.params.id },
               { Name: name, location: location, destination: destination },
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

