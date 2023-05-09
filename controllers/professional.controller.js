const { professionalModel } = require("../models/professional.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {BeautySlot} = require("../models/beauty.slot.model")



//ALL PROFESSIONAL DATA
let getProfessionalData = async (req, res) => {
  try {
    let data = await professionalModel.findAll();
    res.status(200).json({
      isError: false,
      data,
    });
  } catch (error) {
    console.log(error);
  }
};


//PROFESSIONAL REGISTER
let professionalRegister = async (req, res) => {
  try {
    let {professionalName, email, phoneNumber, password}= req.body;
    let data =  await professionalModel.findAll({where:{email}})
    if(data.length!=0){
        res.send({message: "Email already register"});
        return
    }
    bcrypt.hash(password, 5, async (err, hashed_pass) => {
        if (err) {
            res.send({ "message": "Error while Hashing Password" });
        } else {
            let data = await professionalModel.create({ professionalName, email, phoneNumber, "password": hashed_pass })
            res.status(200).json({
                isError: false,
                "message": `registration successfull`,
                data
            })
        }
    });
} catch (error) {
    // res.send([{ "message": "Error while Registering" }]);
    console.log(error)
}
};

//PROFESSIONAL LOGIN
let professionalLogin = async (req, res) => {
  let { email, password } = req.body;
    try {
        let check = await professionalModel.findAll({ where : {email}});
        if (check.length == 1) {
            bcrypt.compare(password, check[0].password, async (err, result) => {
                if (result) {
                    var token = jwt.sign({email:check[0].email, professionalName:check[0].professionalName}, process.env.secret, { expiresIn: '5d' });
                    
                    res.send({ "message": `${check[0].professionalName} is successfully logged in` , "username": check[0].professionalName, "Access_Token": token });
                } else {
                    res.send({ "message": "Wrong Credentials" });
                }
            });
        } else {
            res.send({ "message": "Wrong Credentials" });
        }
    } catch (error) {
        res.send({ "message": "Something Went Wrong" });
    }
};


//OPEN SLOTS BY PROFESSIONAL
let beautySlotsOpen = async (req, res)=>{
  try {
      let token = req.headers.authorization
      let decoded = jwt.verify(token, process.env.secret)
      let {beautyType, bookingTime} = req.body
      let beautyslot = await BeautySlot.create({beautyType, bookingTime, "professionalEmail":decoded.email, "professionalName":decoded.professionalName})
      res.status(200).json({
          isError: false,
          "message": `Added slot successfull`,
          beautyslot
      })
  } catch (error) {
      console.log(error)
  }
}

//BOOKED SLOTS BY USERS
let bookedSlots = async (req, res)=>{
  try {
      let token = req.headers.authorization
      let decoded = jwt.verify(token, process.env.secret)
      let {email, professionalName, iat, exp} = decoded
      let beautyslot = await BeautySlot.findAll({where:{
        status : true,
        professionalEmail : email
      }})
      res.status(200).json({
          isError: false,
          "message": `Get All slots Booked By Users`,
          beautyslot
      })
  } catch (error) {
      console.log(error)
  }
}



//PROFESSIONAL EITHER ACCEPT REQUEST OR REJECT
let checkRequestUsers = async (req, res)=>{
  try {
      let token = req.headers.authorization
      let decoded = jwt.verify(token, process.env.secret);
      let beautyId = req.params.id;
      let progressStatus = req.params.status
      let {
        id,
        beautyType,
        bookingTime,
        status,
        progress,
        professionalName,
        professionalEmail,
        professionalID,
        userName,
        userEmail,
        userID,
        createdAt,
        updatedAt,
      } = await BeautySlot.findOne({ where: { id: beautyId } });
      if(progressStatus==="true"){
        let beautyslot = await BeautySlot.upsert({
          id,
          beautyType,
          bookingTime,
          status: true,
          progress : true,
          professionalName,
          professionalEmail,
          professionalID,
          userName,
          userEmail,
          userID,
          createdAt,
          updatedAt,
        });
        res.status(200).json({
          isError: false,
          "message": `Get All slots Booked By Users`,
          beautyslot,
          progress
      })
      }else{
        let beautyslot = await BeautySlot.upsert({
          id,
          beautyType,
          bookingTime,
          status: false,
          progress : false,
          professionalName,
          professionalEmail,
          professionalID,
          userName,
          userEmail,
          userID,
          createdAt,
          updatedAt,
        });
        res.status(200).json({
          isError: false,
          "message": `Get All slots Booked By Users`,
          beautyslot,
      })
      }   
  } catch (error) {
      console.log(error)
  }
}



module.exports = {
  getProfessionalData,
  professionalRegister,
  professionalLogin,
  beautySlotsOpen,
  bookedSlots,
  checkRequestUsers
};
