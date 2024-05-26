const { userModel } = require("../model/userModel");
const jwt = require("jsonwebtoken")
require("dotenv").config()

const auth  = async (req, res, next) => {
    try {
      const token = req.headers.authorization?.split(" ")[1];
    //   const black = await blacklistModel.findOne({ token });
    //   if (black) {
    //     res.status(400).send({ msg: "Invalid toke please login again" });
    //   } 

        if (token) {
          jwt.verify(token, process.env.SECRETKEY, async (err, decoded) => {
            // console.log(decoded);
            try {
              if (decoded) {
                const user = await userModel.findById(decoded.userId);
                if (user) {
                  req.user = user;
                  next();
                } 
                else {
                  res.status(400).send({ msg: "User not found" });
                }
              } else {
                res.status(400).send({ msg: "Invalid token" });
              }
            }
            catch (err) {
              res.status(400).send({ msg: "Error while verifying the token" });
            }
          });
        }
        else {
          res.status(400).send({ msg: "Please provide a token" });
        }
      
    } catch (err) {
      console.log(err);
      res.status(500).send({ msg: "Error while authorizing the user" });
    }
  }
  
module.exports={
    auth
}