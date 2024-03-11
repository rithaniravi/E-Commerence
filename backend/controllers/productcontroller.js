const productModel=require('../models/productmodel')


// GET products-http://localhost:3000/products
exports.getProduct=async (req,res)=>{
    const query=req.query.keyword?{name : {
        $regex:req.query.keyword, // regurlar expression
        $options:'i'   // case senstitive 
    }}:{}
    const Products=await productModel.find(query)
    res.json({
            success:true,
            Products
    })
}

//Get single product-http://localhost:3000/product/:id
exports.getSingleproduct= async (req,res)=>{
    // console.log(req.params.id,"id")
    try{
        const product=await productModel.findById(req.params.id)
        res.json({
            success:true,
            product
        })}
        catch(error){
            res.json({
                   success:false,
                   message:error.message
                })
            }
        }
// post product-http://localhost:3000/upload-product
exports.postProduct= async (req,res)=>{
    await productModel.create(req.body)
    .then((product)=>res.json({
        success:true,
        product

    }))
    .catch((err)=>{
        console.log(err)
    })

exports.updateProduct= async (req,res)=>{
      try{

      
       await productModel.findByIdAndUpdate(req.params.id,req.body)
        .then((product)=>res.json({
            success:true,
            product
        }))}
        catch(error){
            res.json({
                   success:false,
                   message:error.message
                })
            }
    }
}

