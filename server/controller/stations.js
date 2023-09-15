const express = require('express');
const router = express.Router();
const { verifyToken, extractUserIdFromToken } = require('./tokenverify');
const Station=require('../Models/stations')


router.get('/',verifyToken, async (req, res) => {
     try {
          const stations = await Station.find();
          return res.status(200).json(stations);
     } catch (err) {
          return res.status(500).send('Server error :'+err.message);
     }
});
router.get('/linked',verifyToken,async (req,res)=>{
     try{
          const stations=await Station.find()
          const linkedStations=stations.filter(station=>station.numberOfDestinations!=0)
          return res.status(200).json(linkedStations);
     }catch(err){
         return res.status(500).send('Server error :'+err.message);
     }
})
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

router.post('/',verifyToken,async (req, res) => {
     try {
          const { name, commonName, location, stationDescription, images } = req.body;
          const station = await Station.findOne({ name })
          if(station){return res.status(400).send({msg:'station already exists'})}
          const newStation=new Station({
               name,
               commonName,
               location,
               stationDescription,
               images:images,
           })
           newStation.id=newStation._id
           await newStation.save();
           return res.status(201).json({msg:"station saved ",id:newStation._id})
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

module.exports = router;

