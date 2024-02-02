const router=require('express').Router()
const Database=require('./models/Model')

router.post('/signup',async(req,res)=>{
    console.log('signup page reached[POST]')
    const Database_signup=await Database.findOne({email:req.body.email})
    if(!Database_signup){
        await Database.insertMany([req.body])
        res.json({status:true})
    }else{
        res.json({status:false})
    }
})

router.post('/login',async(req,res)=>{
    console.log('login page reached[POST]')
    const Database_login=await Database.findOne({email:req.body.email})
    if(login==null){
        res.json({status:false})
    }else if(req.body.password===Database_login.password){
        res.json({status:true})
    }else{
        res.json({status:false})
    }
})

module.exports=router