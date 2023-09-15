const router=require('express').Router()
const Car=require('../Models/CarRental')

router.post('/',async (req,res)=>{
     const {
        name,
        tyres,
        seats,
        price,
        color,
        use,
        model,
        fuelkm,
        location,
        Description,
        discountValue,
        discountDesc,
        isAutomatic,
        isDriverProvided,
        street,
        images}=req.body
     try{
     const car=await Car.find({nameType:type})
     if(car){
        car.product.push(products)
        car.save()
        res.status(200).send({message:'product has been put on car successfully'})
     }else{
      const car=await new Car(type, products)
      car.save()
          res.status(200).send({ message: 'product has been put on car successfully' })
     }
     }
     catch (err){
          console.log(err)
          res.status(500).send({ message:`Internal error ${err.message}`})
     }
})

router.get('/',async (req,res)=>{
     try{
          const car = Car.find();
          res.status(200).send(car)  
     }
     catch(error){console.log(error)}
  
})

router.put('/:id',async (req,res)=>{
     try{
          const car = Car.findByIdAndUpdate({ ...req.body })
       res.send({car,message:`car updated`})
     }catch(err){console.log(err);
     res.status(200).send({message:`Internal error server, please try again later`,error:err.message})
     }
})

module.exports = router