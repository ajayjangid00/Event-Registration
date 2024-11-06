const { default: mongoose } = require("mongoose");

const RegSchema=new mongoose.Schema({
    Name:String,
Email:String,
StudentId:String,
PassingYear:Number,
Phone:Number,
Workshop:String
})

module.exports=mongoose.model("Register_data",RegSchema)