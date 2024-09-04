const express=require("express");
const mongoose=require("mongoose");
const User=require("./User")
const app=express();
const connectDB=async()=>{
    mongoose.connect('mongodb://localhost:27017/e-commerce')
    const UserSchema=new mongoose.Schema({});
    const User=mongoose.model('User',UserSchema)
    const data=await users.find();
    console.warn(data);
}
connectDB();
app.listen(5000);
