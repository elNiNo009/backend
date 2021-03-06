require('./database/dbConnection')
const express=require('express')
const cors=require("cors")

const userRouter=require('./routers/user')
const companyRouter=require('./routers/companyRouter')
const companyMemberRouter=require('./routers/companyMemberRouter')

const app=express()
app.use(express.json()) // convert request body to json 

app.use(cors())

app.use(userRouter)
app.use(companyRouter)
app.use(companyMemberRouter)

module.exports=app