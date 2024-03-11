import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import "./cart.css"

import axios from "axios";

const Cart=({cartitem,setCartitem})=>{

    const [complete,setComplete]=useState(false)


    function Deleteitem(items){
        const updatedItem= cartitem.filter((i)=>{
            if(i.product._id !== items.product._id){
                return true;
            }
        })
        setCartitem(updatedItem)


    }

    const Orderplaced=()=>{
        axios.post('http://localhost:3001/order',cartitem)
        .then((res)=>console.log(res.data.product))
        .catch((err)=>console.log(err))
        .then(()=>{
            setCartitem([])
            setComplete(true)
        })

     }
        
    

    return( cartitem.length > 0 ?
        <Fragment>
        <div className="container container-fluid">
            <h1 className="mt-2">Your Cart: <b>{cartitem.length} items</b></h1>
            <div className="row d-flex justify-content-between">
                <div className="col-12 col-lg-8">
                    <hr/>
                    {cartitem.map(items=>{ 
                        return(
                        <>
                        
                        <div className="cart-item m-1">
                            <div className="row p-1 m-1">
                                <div className="col-4 col-lg-3 p-2">
                                    <img src={items.product.images[0].image} alt={items.product.name} style={{height:"200px",width:"200px"}} /> 
                                </div>
                                <div className="col-5 col-lg-3 p-5">
                                    <Link to={"/product/"+items.product._id}>{items.product.name}</Link>
                                </div>
                                <div className="col-4 col-lg-2 mt-lg-0 p-5">
                                    <p id="card_item_price">Rs.{items.product.price}</p>
                                </div>
                                <div className="col-4 col-lg-3 mt-4 mt-lg-0 p-5">
                                    <div className="stockCounter d-inline">
                                        <p>Quanity: {items.qty}</p>
                                        
                                        
                                    </div>
                                </div>
                                <div className="col-4 col-lg-1 mt-2 mt-lg-0 p-3">
                                    <button 
                                    className="btn btn-success m-4" 
                                    style={{height:"40px", width:"90px"}} 
                                    onClick={()=>{Deleteitem(items)}}
                                    id="delete-cart-item">Delete</button>
                                </div>

                            </div>
                        </div> <hr/></>)
                    })}
                    
                </div>
                <div className="order col-12 col-lg-3 my-3 p-3">
                    <div id="order_summary">
                        <h4>Order Summary</h4>
                        <hr />
                        <p>Total items:  <span className="order-summary-values">{cartitem.reduce((acc,item)=>(acc +item.qty),0)}</span></p>
                        <p>Total Price: <span className="order-summary-values">Rs.{cartitem.reduce((acc,item)=>(acc +item.product.price *item.qty),0)}</span></p>
                        <hr />
                        <button id="checkout_btn" className="btn btn-primary btn-block" 
                        style={{width:"100px", height:"40px"}} onClick={Orderplaced}>Buy Now</button>
                    </div>
                </div>

               
            </div>
        </div>
        </Fragment>: (! complete ? <h2>Your Cart is Empty!</h2> : <Fragment><h3>Order Status!</h3><hr/><p>Order Placed Successfully</p> </Fragment>)


    )
}
export default Cart;