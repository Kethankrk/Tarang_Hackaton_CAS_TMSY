const router=require('express').Router()
const {Guide, Client} =require('../models/Model')

router.post('/signup',async(req,res)=>{
    console.log('signup page reached[POST]')
    const Guide_signup=await Guide.findOne({email:req.body.email})
    if(!Guide_signup){
        await Guide.insertMany([req.body])
        res.json({status:true})
    }else{
        res.json({status:false})
    }
})

router.post('/login',async(req,res)=>{
    console.log('login page reached[POST]')
    const Guide_login=await Guide.findOne({email:req.body.email})
    if(login==null){
        res.json({status:false})
    }else if(req.body.password===Guide_login.password){
        res.json({status:true})
    }else{
        res.json({status:false})
    }
})

router.post('/setVehicle', async(req, res)=>{
    console.log("setVehicle page reached[POST")
    const {email, vehicles}=req.body
    const Guide_setVehicle=await Guide.findOne({email})
    if(Guide_setVehicle){
        await Guide.insertMany({vehicles})
    }else{
        throw new Error('No guide found with given email')
    }
})

module.exports=router