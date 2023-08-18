//SINCE IT IS SMALL PIECE OF CODE THE LOGIN AND SIGN UP ENDPOINT HAVE BEEN MADE ON THIS SAME FILE IT SELF
//WITHOUT MAKING DIFFERENT FILES FOR EACH


const express=require('express')
const router=express.Router()
const User=require('../models/User')
const { validationResult,body } = require('express-validator');
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
const jwtSecret= "SachinKyahaiSachinMelappuSaSachinHaiJhingurSaLadka"

//user creation end point
router.post("/createuser",

//validation
[
    body('email').isEmail(),
    body('password','password len should be >5').isLength({min: 5})
]
,async(req,res)=>{
    
    const errors=validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }

    //encrypting the password and adding salt that is random bits for extra security
    const salt= await bcrypt.genSalt(10)
    let secPassword=await bcrypt.hash(req.body.password,salt)

    try{
       await User.create({
            name:req.body.name,
            password:secPassword,
            email:req.body.email,
            location:req.body.location
        })
        res.json({success:true})
    } catch(error){
        console.log(error)
        res.json({success:false})
    }
})


//user login endpoint

router.post("/loginuser",//validation
[
    body('email').isEmail(),
    body('password','password len should be >5').isLength({min: 5})
],

async(req,res)=>{

    const errors=validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }

let email=req.body.email
    try{
        //returns the entire data that contains this particular email and the data gets stored into userData
      let userData= await User.findOne({email})
      if(!userData){
        return res.status(400).json({errors: "Invalid Credential"})
      }
      //gives bool value in return
      const pwdCompare= await bcrypt.compare(req.body.password,userData.password)
     
      if(!pwdCompare){
        return res.status(400).json({errors: "Invalid Credential"})
      }

      const data={
        user:{
            id: userData.id
        }
      }

      //auth token generation
      const authToken=jwt.sign(data,jwtSecret)
      
      return res.json({success:true, authToken:authToken})
        
    } catch(error){
        console.log(error)
        res.json({success:false})
    }
})

module.exports=router