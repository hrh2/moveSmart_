const express = require('express');
const router = express.Router();
const { verifyToken, extractUserIdFromToken } = require('./tokenverify');
const { User } = require('../Models/user')
const Station = require('../Models/stations')
const {Qrcode}=require('../Models/qrCodes')

router.post('/',verifyToken,async (req, res) => {
     const { stationName, destName, carName } = req.body;
     try {
          const userId=await extractUserIdFromToken(req)
          const station = await Station.findOne({ name: stationName });
          const destination = station.destination.find(dest => dest.name == destName);
          const user = await User.findOne({ _id: userId })
          user.account.balance=(user.account.money-destination.cost)
          user.account.used = (user.account.used + destination.cost)
          user.lastTask.push({destination:stationName,departed:destName,cost:destination.cost,car:carName,date:Date.now()})
          const car = destination.cars.find(car => car.name ==carName);
          car.size--;
          await station.save();
          await user.save();
          console.log('all done')
          res.status(200).json({ message: 'Car size updated' });
     } catch (error) {
          console.error(error);
          res.status(500).json({ message: 'Server error' + error.message });
     }
});

module.exports = router;
