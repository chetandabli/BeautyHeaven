const express  = require("express")
const {seq,client} = require("./config/db")
const {adminRouter} = require('./router/admin.router')
const {professionalRouter} = require("./router/professional.router")
const {userRouter} = require("./router/user.router")
const cors = require('cors')

require("dotenv").config()
const app = express()
app.use(cors())
app.use(express.json())

app.use("/users",userRouter)
app.use("/professions",professionalRouter)
app.use('/admin', adminRouter)

//connected to server
const port = process.env.port || 3000
seq.sync().then(()=>{
    app.listen(port, ()=>{
        console.log(`server is running on port ${port}\nhttp://localhost:${port}/`)
    })
})
