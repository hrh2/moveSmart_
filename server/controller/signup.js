const router=require('express').Router();
const {User,validate}=require('../Models/user');
const bcrypt=require('bcrypt');

router.post('/',async (req,res)=>{
     try{
          const {error}=validate(req.body);
                 if(error)
                 return res.status(400).json({error:error.details[0].message})
          const user=await User.findOne({email:req.body.email});
             if(user)
                res.status(400).json({error:'User already exists'})
         const salt=await bcrypt.genSalt(10);
         const hash=await bcrypt.hash(req.body.password,salt);
             await new User({
               firstName: req.body.firstName,
               lastName: req.body.lastName,
               email: req.body.email,
               phone: req.body.phone,
               username: req.body.username,
               password: hash,
               account: {
                    money: 0,
                    dateUpdated:Date.now(),
                    used: 0,
                    balance: 0,
               },
               lastTask: {
                    destination: "",
                    departed: "",
                    date: Date.now(),
               },
          }).save();

     res.status(201).json({message:'Your have successfully created Account'})       
     }catch(error){
     res.status(500).json({message:'Internal Server error',error:error.message})
     }
})

module.exports=router;