const express = require('express');
const router = express.Router();
const {User} = require('../Models/user');
const Image = require('../Models/stationImg');

// AI route to return image based on user's lastTask destination
router.get('/', async (req, res) => {
     try {
          const userId = req.params.userId;
          const user = await User.findById(userId);
          if (!user) {
               return res.status(404).json({ msg: 'User not found' });
          }
          const destination = user.lastTask[user.lastTask.length - 1].destination;
          const images = await Image.find({ name: { $regex: destination, $options: 'i' } });
          if (!images || images.length === 0) {
               return res.status(404).json({ msg: 'No images found' });
          }
          const image = images[0];
          res.status(200).json({ image: image });
     } catch (err) {
          console.error(err.message);
          res.status(501).send('Server Error');
     }
});

module.exports = router;
