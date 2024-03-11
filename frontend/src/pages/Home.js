import {useEffect,useState} from 'react';
import axios from 'axios';
import './Home.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Link} from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';

const Home=()=>{
    const [Products,setProducts]=useState([])
    const [searchparams,setSearchparams]=useSearchParams()

    useEffect(()=>{
        axios.get('http://localhost:3001/products?'+searchparams)
        .then((res)=>{setProducts(res.data.Products)
            console.log(res.data)})
        .catch((err)=>console.log(err))
       
    },[searchparams])
    return(          
             <div className="container mt-3">
                <div className="row">
                <h2>Latest Products</h2>
                <section id="products" className="container mt-5">
      <div className="row">
        {Products?Products.map((product)=>{
            return(
              
                <div className="col-sm-12 col-md-6 col-lg-3 my-3">
          <div className="card p-3 rounded">
            <img className="card-img-top mx-auto" 
                  src={product.images[0].image} alt=''></img>
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">
                <Link to={"/product/"+product._id}>{product.name}</Link>
               </h5>
              <div className="ratings mt-auto">{product.rating}
                {/* <i className="bi bi-star"></i>
                <i className="bi bi-star"></i>
                <i className="bi bi-star"></i>
                <i className="bi bi-star"></i>
                <i className="bi bi-star"></i> */}
                <span id="no_of_reviews">(5 Reviews)</span>
                <div className="rating-outer">
                  <div className="rating-inner">

                  </div>
                </div>
              </div>
              <p className="card-text">Rs.{product.price}</p>
              <Link to={"/product/"+product._id} id="view_btn" className="btn bg-success">View Details</Link>
            </div>
          </div>
        </div>

           )
        }):null}
        
        </div></section>
           
                </div>
              </div>   
            )}
export default Home;