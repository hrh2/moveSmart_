const router = require('express').Router();
const { User, validate } = require('../Models/user');
const bcrypt = require('bcrypt');

router.post('/', async (req, res) => {
     try {
          const { error } = validate(req.body);
          if (error) {
               return res.status(400).json({ error: error.details[0].message });
          }
          const Euser = await User.findOne({ email: req.body.email });
          if (Euser) {
               return res.status(400).json({ error: 'User already exists' });
          }
          const salt = await bcrypt.genSalt(10);
          const hash = await bcrypt.hash(req.body.password, salt);
          const user = new User({
               firstName: req.body.firstName,
               lastName: req.body.lastName,
               email: req.body.email,
               phone: req.body.phone,
               username: req.body.username,
               password: hash,
               image: req.body.image,
               account: {
                    money: 0,
                    dateUpdated: Date.now(),
                    used: 0,
                    balance: 0,
               },
               lastTask: {
                    destination: '',
                    departed: '',
                    date: Date.now(),
               },
          });
          await user.save();
          const token = jwt.sign({ _id: user._id, email: user.email, phone: user.phone }, process.env.JWT);
          res.status(200).send({ token: token });
     } catch (error) {
          console.error(error.message);
          res.status(500).json({ message: 'Internal Server error' });
     }
});

module.exports = router;
