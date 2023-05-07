const {adminModel} = require('../models/admin.model')
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { professionalModel } = require('../models/professional.model');
const { BeautySlot } = require('../models/beauty.slot.model');



//For Admin Register
let adminRegister = async (req, res) => {
    try {
      let {adminName, email, phoneNumber, password}= req.body;
      let data =  await adminModel.findAll({where:{email}})
      if(data.length!=0){
          res.send({message: "Email already register"});
          return
      }
      bcrypt.hash(password, 5, async (err, hashed_pass) => {
          if (err) {
              res.send({ "message": "Error while Hashing Password" });
          } else {
              let data = await adminModel.create({ adminName, email, "password": hashed_pass })
              res.status(200).json({
                  isError: false,
                  "message": `Admin registration successfull`,
                  data
              })
          }
      });
  } catch (error) {
      // res.send([{ "message": "Error while Registering" }]);
      console.log(error)
  }
  };
  


//For Admin login page
let adminLogin = async (req, res) => {
    let { email, password } = req.body;
      try {
          let check = await adminModel.findAll({ where : {email}});
          if (check.length == 1) {
              bcrypt.compare(password, check[0].password, async (err, result) => {
                  if (result) {
                      var token = jwt.sign({email:check[0].email, adminName:check[0].adminName}, process.env.secret, { expiresIn: '5d' });
                      
                      res.send({ "message": `${check[0].adminName} is successfully logged in` , "username": check[0].adminName, "Access_Token": token });
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

//Get All Professionals Data
let getProfessionalData = async (req, res) => {
    const ProfessionalId = req.query.id;
    try {
        if(ProfessionalId){
            const professional = await professionalModel.findOne({id:ProfessionalId})
            const Appointments = await BeautySlot.find({professionalID:ProfessionalId})
            if(professional){
                res.json({professional,Appointments})
            }else{
                res.json({'message': "Invalid Professional ID"});
            }
        }else{
            let professionalList = await professionalModel.findAll();
            res.json({professionalList});
        }
      
    } catch (error) {
      console.log(error);
    }
  };

  //Get All Appointments Data
  let getAppointmentsData = async(req,res)=>{
    const appointmentID = req.query.id;
    try{
        if(appointmentID){
            const appointment = await BeautySlot.findOne({id: appointmentID})
            res.json({appointment});
        }else{
            const appointment = await BeautySlot.findAll();
            res.json({appointment});
        }
    }catch (error) {
        console.log(error);
        res.json({'error': error});
    }
  }

  //Update new Professional Data
 const UpdateProfessional = async (req, res) => {
    const payload = req.body;
    const id = req.params.id;
    try {
        const Professional = await ProfessionalModel.findByIdAndUpdate(id, payload);
        res.json({ "msg": `${Professional.professionalName} info associated with id: ${id} has been updated successfully` });
    } catch (error) {
        console.log(error);
        res.json({ "Error": error.message });
    }
};

//Delete Professional
const  RemoveProfessional = async (req, res) => {
    const id = req.params.id;
    try {
        const Professional = await ProfessionalModel.findByIdAndDelete(id);
        res.json({ "msg": `${Professional.professionalName} info associated with id: ${id} has been removed successfully` })
    } catch (error) {
        console.log(error);
        res.json({ "Error": error.message });
    }
};


module.exports = {adminRegister,adminLogin,getProfessionalData,getAppointmentsData,UpdateProfessional,RemoveProfessional };