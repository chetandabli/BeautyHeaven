const express  = require("express")
const {seq,client} = require("./config/db")
const {adminRouter} = require('./router/admin.router')
const {professionalRouter} = require("./router/professional.router")
const {userRouter} = require("./router/user.router")
const cors = require('cors')
const path = require('path');

require("dotenv").config()
const app = express()
app.use(cors())
app.use(express.json())

app.use(express.static(path.join(__dirname, 'client/build')));

app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'))
})

app.use("/users",userRouter)
app.use("/professions",professionalRouter)
app.use('/admin', adminRouter)

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
  });

//connected to server
const port = process.env.port || 3000
seq.sync().then(()=>{
    app.listen(port, ()=>{
        console.log(`server is running on port ${port}\nhttp://localhost:${port}/`)
    })
})
