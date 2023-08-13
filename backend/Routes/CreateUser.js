//SINCE IT IS SMALL PIECE OF CODE THE LOGIN AND SIGN UP ENDPOINT HAVE BEEN MADE ON THIS SAME FILE IT SELF
//WITHOUT MAKING DIFFERENT FILES FOR EACH


const express=require('express')
const router=express.Router()
const User=require('../models/User')
const { validationResult,body } = require('express-validator');

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

    try{
       await User.create({
            name:req.body.name,
            password:req.body.password,
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
      //if the password in the data containing the given email does not match the user entered password
      if(req.body.password!==userData.password){
        return res.status(400).json({errors: "Invalid Credential"})
      }
      
      return res.json({success:true})
        
    } catch(error){
        console.log(error)
        res.json({success:false})
    }
})

module.exports=router