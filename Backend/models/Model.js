const { internal_resolveProps } = require('@mui/utils')
const mongoose=require('mongoose')

const clientSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    img:{
        type:String,
    },
    address:{
        type:String,
    },
    phone:{
        type:Number,
        required:true,
        unique:true
    },
    idProof:{
        type:String, 
    }
})

const guideSchema=new mongoose.Schema({
    email:{
        type:String,
    },
    password:{
        type:String,
    },
    img:{
        type:String,
    },
    address:{
        type:String,
    },
    phone:{
        type:Number,
        unique:true
    },
    ban:{
        type:Boolean,
    },
    vehicles:{
        type:[String],
    },
    idProof:{
        type:String,
    }
})

const Client=mongoose.model('client', clientSchema)
const Guide=mongoose.model('guide', guideSchema)
module.exports=Client
module.exports=Guide