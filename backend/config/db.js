const mongoose=require('mongoose')

connectDatabase=()=>{
    mongoose.connect(`mongodb+srv://rithaniravi:Rithani2095@clusterbackend.rpda541.mongodb.net/mini-ecommerce`)
    .then(()=>{
        console.log("DataBase is connected")
})
    .catch((err)=>{
        console.log(err)
    })
}

module.exports=connectDatabase;
