const mongoose=require('mongoose');

async function connectDB(){
    await mongoose.connect("mongodb+srv://sam:jDlEeEStjjFr8rtn@cluster0.aojmeyn.mongodb.net/sam")
    console.log("connected to db successfully")
}

module.exports=connectDB;