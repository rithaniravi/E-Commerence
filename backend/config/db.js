const mongoose=require('mongoose')

connectDatabase=()=>{
    mongoose.connect(`mongodb+srv://rithaniravi:Iadkh6MqKMxEPckW@clusterbackend.rpda541.mongodb.net/mini-ecommerce`)
    .then(()=>{
        console.log("DataBase is connected")
})
    .catch((err)=>{
        console.log(err)
    })
}

module.exports=connectDatabase;
