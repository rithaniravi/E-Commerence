import {useEffect,useState} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './productdetails.css'
import { toast } from 'react-toastify';


const Details=({cartitem,setCartitem})=>{
    const [product,setProducts]=useState("")
    const[qty,setQty]=useState(1)
    const {id}=useParams()
    
useEffect(()=>{
    axios.get(`${process.env.React_App_Backend_url}/product/`+ id)
    .then((res)=>{setProducts(res.data.product)
        console.log(res.data)})
    .catch((err)=>console.log(err))
    },[])

const addtocart=()=>{
    const itemin=cartitem.find((item)=>item.product._id === product._id)
        if(!itemin){
            const newitem={product,qty}
            setCartitem((state)=>[...state,newitem])
            toast.success("Cart Item added Successfully!")
        }}
const increaseqty=()=>{
    if (product.stock===qty)
    {
        return;
    }setQty((state)=> state + 1)
}

const decreaseqty=()=>{
    if (qty > 1){
        setQty((state)=> state -1)   
    }
}
    return(
        product && <div className='container container-fluid'>
            <div className='row f-flex justify-content-around'>
                <div className='col-12 col-lg-5 img-fluid' id="product_image" height="500" width="500">
                    <img src={product.images[0].image} alt=''></img>
                </div>
                <div className="col-12 col-lg-5 mt-5">
                    <h3>{product.name}</h3>
                    <p id="product_id" className='text-success'>Product_ID: {product._id}</p>
                    
                    
                    <hr/>
                    <div className='rating'>
                        {/* <div class="rating-outer">
                            <div class="rating-inner"></div>
                        </div> */}
                        <div>Rating: {product.rating} out of 5</div> 
                    </div>
                    <hr/>
                    <p id="product_price">Rs.{product.price}</p>
                    <div className="stockCounter d-inline" >
                        <span className="btn btn-danger minus" onClick={decreaseqty}>-</span>
                        <input type="number" className="form-control count d-inline" value={qty} readOnly/>
                        
                        <span className="btn btn-primary plus" onClick={increaseqty}>+</span>

                        <button type="button" id="cart_btn" 
                        onClick={addtocart} disabled={product.stock === 0}
                        className="btn btn-success d-inline ml-4" >Add to Cart</button>
                        <hr></hr>
                    </div>
                    <p>Availability: <span id="stock-status" style={{fontWeight:"bold"}}  className={product.stock>0 ? 'text-success': 'text-danger'} >{product.stock>0 ? "In Stock": "Out of Stock"}</span></p>
                    <hr></hr>
                    <h5 className='title' style={{fontSize:"20px"}}>Description</h5>
                    <p className='description'>{product.description}</p>
                    <hr></hr>
                    <p id="product_seller mb-3">Sold by: <strong>{product.seller}</strong></p>
				
                    </div>
                </div>
            </div>
        
    )
}

export default Details;