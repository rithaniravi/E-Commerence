const mongoose=require("mongoose")
const productSchema= new mongoose.Schema({
    name:String,
    price:Number,
    description:String,
    rating:String,
    images:[
        {
            image:String
        }
    ],
    category:String,
    seller:String,
    stock:String,
    numofReview:String,
    createdAt:Date


})

const productModel=mongoose.model("product",productSchema)
module.exports=productModel; 