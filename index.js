const express=require("express");
const mongoose=require("mongoose");
const app=express();
const connectDB=async()=>{
    mongoose.connect('mongodb://localhost:27017/e-commerce')
    const usersSchema=new mongoose.Schema({});
    const users=mongoose.model('users',usersSchema)
    const data=await users.find();
    console.warn(data);
}
connectDB();
app.listen(5000);