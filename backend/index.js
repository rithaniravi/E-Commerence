const express=require("express")
const cors=require("cors")
const app=express()
const dotenv=require("dotenv")
const path=require("path")
// dotenv.config ({path:path.join(__dirname,'config','config.env')})
const products=require('./routers/product')
const orders=require("./routers/order")
const connectDatabase=require('./db')

dotenv.config();
connectDatabase();

app.use(cors({
    origin:["https://e-commerencefrontend.onrender.com"],
    credentials:true
}))
app.use(express.json())

app.use('/',products)
app.use('/',orders)



app.listen(process.env.PORT,()=>{
    console.log("server listening in 3001")
});