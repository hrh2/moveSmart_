const router=require('express').Router()
const Market=require('../Models/market')

router.get('/',async (req,res)=>{
     try{
          const market = Market.find();
          res.status(200).send(market)  
     }
     catch(error){console.log(error)}
  
})
router.post('/',async (req,res)=>{
     const {type,products}=req.body
     try{
     const market=await Market.find({nameType:type})
     if(market){
        market.product.push(products)
        market.save()
        res.status(200).send({message:'product has been put on market successfully'})
     }else{
      const market=await new Market(type, products)
      market.save()
          res.status(200).send({ message: 'product has been put on market successfully' })
     }
     }
     catch (err){
          console.log(err)
          res.status(500).send({ message:`Internal error ${err.message}`})
     }
})

router.put('/:id',async (req,res)=>{
     try{
          const market = Market.findByIdAndUpdate({ ...req.body })
       res.send({market,message:`market updated`})
     }catch(err){console.log(err);
     res.status(200).send({message:`Internal error server, please try again later`,error:err.message})
     }
})

module.exports = router