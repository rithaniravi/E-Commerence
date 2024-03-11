const products=require('../data/products.json')
const Product=require('../models/productmodel')
const dotenv=require('dotenv')

const connectDatabase=require('../config/db')
dotenv.config({path:'config/config.env'})
connectDatabase();

const seedProducts=async()=>{
    try{
        await Product.deleteMany();
        console.log('Product deleted')
        await Product.insertMany(products);
        console.log('All products are added')

    }catch(error){
        console.log(error)
    }
    process.exit();
}
seedProducts();