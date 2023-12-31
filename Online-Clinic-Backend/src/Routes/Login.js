const express= require ("express")
const mongoose=require("mongoose")
var bodyParser = require('body-parser')
var cors = require('cors')
const jwt = require("jsonwebtoken")
require("dotenv").config()
const Course = require("../Models/Course");
const Instructor = require("../Models/Instructor");
const CorporateUser = require("../Models/CorporateUser");
const IndividualUser = require("../Models/IndividualUser");
const Admin = require("../Models/Admin");
const individualUser = require("../Models/IndividualUser");
const bcrypt= require("bcrypt")
const instructor = require("../Models/Instructor")


const creationRouter = express.Router();

creationRouter.use(express.urlencoded({ extended: false }));

creationRouter.use(bodyParser.json())

creationRouter.use(cors())


creationRouter.post("/adminlogin", async (req, res) => {

    const { userName, password} = req.body;

    const admin=await Admin.findOne({userName:userName})
    if(admin==null){
       res.json({message:"username not found"}).status(404)
      
    }
    else{
      bcrypt.compare(password,admin.password).then(
        isCorrect=>{
          if(isCorrect){
            payload={
              userName:userName,
              role:"admin"
          }
          jwt.sign(payload,process.env.JWT_SECRET,(err,token)=>{
            if(err) {
              console.log(err)
    
               res.json({message:err})
               return
            }
             res.json({message:"Success",token:token,role:"admin"})
             return
          }) 
          }
  
          else{
            res.status(404).json({message:"incorrect password "})
            return
          }
               }
        
      )   
    }

  });


  creationRouter.post("/adminverify", async (req, res) => {
    const { token} = req.body;
    var instructor;
    if (token==null){
      res.json("redirect")
      return
    }
    const tok=token
    try{
       instructor=jwt.verify(tok,process.env.JWT_SECRET)

    }
    catch(e){
      res.json("redirect")
      return
    }
    if(instructor==null||instructor.role!="admin"){
      console.log(instructor.role)
      res.json("redirect")
      return
    }else{
      res.json("stay")
    }


  });
  


  creationRouter.post("/instructorlogin", async (req, res) => {

    const { userName, password} = req.body;

    const admin=await Instructor.findOne({userName:userName})
    if(admin==null){
      res.status(404).json({message:"username not found"})
      return
    }
    else{
      bcrypt.compare(password,admin.password).then(
        isCorrect=>{
          if(isCorrect){
            payload={
              userName:userName,
              role:"instructor",
          }
          jwt.sign(payload,process.env.JWT_SECRET,(err,token)=>{
            if(err) {
              console.log(err)
    
              return res.json({message:err})
              
              
            }
            return res.json({message:"Success",token:token,role:"instructor",userName:userName})
          }) 
          }
          else{
            res.status(404).json({message:"incorrect password "})
            return
  
          }
               }  
      ) 
    }
     
  });
  creationRouter.post("/instructorverify", async (req, res) => {
    const { token} = req.body;
    var instructor
    if (token==null){
      res.json("redirect")
      return
    }
    const tok=token
    try{
       instructor=jwt.verify(tok,process.env.JWT_SECRET)

    }
    catch(e){
      res.json("redirect")
      return
    }
    if(instructor==null||instructor.role!="instructor"){
      res.json("redirect")
      return
    }
    res.json({userName:instructor.userName})

  });

  creationRouter.post("/individualuserlogin", async (req, res) => {

    const { userName, password} = req.body;

    const admin=await IndividualUser.findOne({userName:userName})
    if(admin==null){
      res.status(404).json({message:"username not found"})
      return
    }
   bcrypt.compare(password,admin.password).then(
      isCorrect=>{
        if(isCorrect){
          payload={
            userName:userName,
            role:"individual user",
            id:admin.userName
        }
        jwt.sign(payload,process.env.JWT_SECRET,(err,token)=>{
          if(err) {
            console.log(err)
  
             res.json({message:err})
             return
          }
           res.json({message:"Success",token:token,role:"individual user",userName:userName})
           return
        }) 
        }
        else{
          res.status(404).json({message:"incorrect password "})
          return

        }
             }  
    )   
  });

  creationRouter.post("/individualuserverify", async (req, res) => {
    const { token} = req.body;
    var instructor
    if (token==null){
      res.json("redirect")
      return
    }
    const tok=token
    try{
       instructor=jwt.verify(tok,process.env.JWT_SECRET)

    }
    catch(e){
      res.json("redirect")
      return
    }

    if(instructor==null||instructor.role!="individual user"){
      res.json("redirect")
      return
    }
    res.json({userName:instructor.userName})
    return

  });


  creationRouter.post("/corporateuserlogin", async (req, res) => {

    const { userName, password} = req.body;

    const admin=await CorporateUser.findOne({userName:userName})
    if(admin==null){
      res.status(404).json({message:"username not found"})
    }
   bcrypt.compare(password,admin.password).then(
      isCorrect=>{
        if(isCorrect){
          payload={
            userName:userName,
            role:"corporate user",
            id:admin.userName
        }
        jwt.sign(payload,process.env.JWT_SECRET,(err,token)=>{
          if(err) {
            console.log(err)
  
            return res.json({message:err})
          }
          return res.json({message:"Success",token:token,role:"corporate user",userName:userName})
        }) 
        }
        else{
          res.status(404).json({message:"incorrect password "})
          return
        }
             }  
    )   
  });

  creationRouter.post("/corporateuserverify", async (req, res) => {
    const { token} = req.body;
    var instructor
    if (token==null){
      res.json("redirect")
      return
    }
    const tok=token
    try{
       instructor=jwt.verify(tok,process.env.JWT_SECRET)

    }
    catch(e){
      res.json("redirect")
      return
    }
    if(instructor==null||instructor.role!="corporate user"){
      res.json("redirect")
      return
    }
    res.json({userName:instructor.userName})

  });








module.exports = creationRouter;
