const express=require('express')
const { getProduct, getSingleproduct, postProduct, updateProduct } = require('../controllers/productcontroller')

const router=express.Router()

router.route('/products').get(getProduct)
router.route('/product/:id').get(getSingleproduct)
router.route('/upload-product').post(postProduct)
router.route('/update-product/:id').post(postProduct)


module.exports=router;
