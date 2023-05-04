const express  = require("express")
const {seq} = require("./config/connection")
const {adminRouter} = require("./router/admin")
const {professionalRouter} = require("./router/professional")
const {userRouter} = require("./router/userRouter")

require("dotenv").config()
const app = express()
app.use(express.json())

app.use("/users",userRouter)
app.use("/professions",professionalRouter)
app.use("/admin",adminRouter)



//connected to server
const port = process.env.port || 3000
seq.sync().then(()=>{
    app.listen(port, ()=>{
        console.log(`server is running on port ${port}\nhttp://localhost:${port}/`)
    })
})
