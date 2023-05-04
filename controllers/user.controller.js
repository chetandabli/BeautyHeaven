const {UsersModel} = require("../module/userModule")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")



//GET ALL DATA OF USERS
let  getUserData = async (req, res)=>{
    try {
        let data = await UsersModel.findAll()
        res.status(200).json({
            isError: false,
            data
        })
    } catch (error) {
        console.log(error)
    }
}


// REGISTER BY USERS

let userRegister = async (req, res)=>{

    try {
        let { username, email, password } = req.body;
        let data =  await UsersModel.findAll({where:{email}})
        if(data.length!=0){
            res.send({message: "Email already register"});
            return
        }
        bcrypt.hash(password, 5, async (err, hashed_pass) => {
            if (err) {
                res.send({ "message": "Error while Hashing Password" });
            } else {
                let data = await UsersModel.create({ username, email, "password": hashed_pass })
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
}



// LOGIN BY USERS
let userLogin = async (req, res)=>{
    let { email, password } = req.body;
    try {
        let check = await UsersModel.findAll({ where : {email}});
        if (check.length == 1) {
            bcrypt.compare(password, check[0].password, async (err, result) => {
                if (result) {
                    // Generating Token
                    var token = jwt.sign({ email }, process.env.secret, { expiresIn: '7d' });
                    // Sending Response
                    res.send({ "message": `${check[0].username} is successfully logged in` , "username": check[0].username, "Access_Token": token });
                } else {
                    res.send({ "message": "Wrong Credentials" });
                }
            });
        } else {
            res.send({ "message": "Wrong Credentials" });
        }
    } catch (error) {
        res.send([{ "message": "Something Went Wrong" }]);
    }
}


module.exports = {getUserData, userRegister, userLogin}
