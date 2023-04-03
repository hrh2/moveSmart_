const express = require('express');
const router = express.Router();
const { verifyToken, extractUserIdFromToken } = require('./tokenverify');
const { User } = require('../Models/user')

// GET request to get account and last task of logged in user
router.get('/account', verifyToken, async (req, res) => {
     try {
          const userID = await extractUserIdFromToken(req);
          const user = await User.findOne({ _id: userID });
          if (!user) {
               return res.status(404).json({ msg: 'User not found' });
          }
          const { account, lastTask, firstName, _id, lastName, phone, username, email, image } = user;
          // const base64Image = image.toString('base64');
          res.json({ account: account, lastTask: lastTask, username, phone, email, name: [firstName, lastName], image });
     } catch (err) {
          console.error(err.message + "\n this is the errror");
          if (!res.headersSent) {
               res.status(500).send('Server Error');
          }
     }
});


module.exports = router;
