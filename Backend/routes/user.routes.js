const express = require("express")
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken')
const { userModel } = require("../model/userModel")
const { auth } = require("../middleware/authMiddleware")
require("dotenv").config()

const userRouter = express.Router()


userRouter.post("/create", async (req, res) => {
    try {
      const { username, email, password } = req.body;
      const olduser = await userModel.findOne({ email });
      if (olduser) {
        res.status(200).send({ msg: "User already registered please login" });
      } 
      else {
        try {
            bcrypt.hash(password, 8, async(err, hash) => {
                if(hash){
                    const user = new userModel({
                        username,
                        email,
                        password:hash
                    })
                    await user.save()
                    res.status(200).send({ msg: "User created successfully", user })
                }
                else{
                    console.log(err);
                    res.status(500).send({Error:err})
                }
            });
        } catch (error) {
            console.log(error);
            res.status(500).send({Error: "Error occured while hashing"})
        }
      }
    } catch (err) {
      console.log(err);
      res.status(400).send({ Error: "error occured while registring user" });
    }
  });


userRouter.post("/login", async(req,res)=>{
    const {email, password} = req.body
    try {
        const user = await userModel.findOne({email})
        if (user) {
            bcrypt.compare(password, user.password, (err, result) => {
              if (result) {
                // console.log("matched");
                const token = jwt.sign(
                    {userId: user._id},
                    process.env.SECRETKEY,
                    {expiresIn: "2d"}
                )
                // console.log(token);
                res.status(200).send({
                    msg: "Login success",
                    token,
                    userId: user._id,
                })
                }
                else {
                res.status(501).send({ msg: "password mismatch" });
                }
            });
          }
          else{
            res.status(200).send({ msg: "user is not registered please signup " });
          }
    } catch (error) {
        console.log(error);
        res.status(500).send({msg:error})
    }
})

userRouter.get("/data", auth, async(req,res)=>{
    try {
        const users = await userModel.find();
        res.status(200).json({error:false, data:users})
    } catch (error) {
        console.error(error);
        res.status(500).json({error:true, msg:error})
    }
})



module.exports={
    userRouter
}