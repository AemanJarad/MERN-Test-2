// CREATE SERVER
const express = require("express")
const app = express()
const cors = require("cors")
app.use(cors())
app.use(express.json())

// CONNECT TO DB
const mongoose = require ("mongoose")
mongoose.connect("connection string")

// IMPORT USER MODLE
const UserModel = require('./models/Users')

// get request for Users
app.get("/Users" ,  async(req,res)=>{
    const Users = await UserModel.find();
    res.json(Users) 
})

// create user
app.post("/createUser" ,  async(req,res)=>{ // createUser
    const newUser = new UserModel(req.body);
    await newUser.save();

    res.json(req.body);
})

app.get("/" ,  async(req,res)=>{

})

app.listen("3001", () => {
    console.log("http://localhost:3001");
})

