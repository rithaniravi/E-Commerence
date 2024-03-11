import './navbar.css';
import cartt from '../assets/image/cartt.png';
import Search from '../components/search';
import { Link } from 'react-router-dom';
const Navbar=({cartitem,setCartitem})=>{
    return( <>
          <nav className="navbar navbar-expand-sm my-1 mx-1">
            <div className="container-fluid">
              <Link to ='/' style={{textDecoration:"none"}} >  
                  <div className="navbar-brand text-white"> 
                    Shop<span className="navbar-icon">Mart</span> 
                  </div>
              </Link>
              <div className="collapse navbar-collapse" id="mynavbar">
                <ul className="navbar-nav me-auto">
                  <li className="nav-item">
                    <div className="mt-4 mt-md-0 text-center">
                      <Link to={"/cart"}> <span className="ml-3"><img  className="cart" src={cartt} alt='/'></img></span>
                      <span className="ml-1" id="cart_count">{cartitem.length}</span>    
                      </Link>      
                    </div> 
                  </li>
               </ul>
                <Search cartitem={cartitem} setCartitem={setCartitem}/>
              </div>
            </div>
          </nav>
        </>
      )

 }



export default Navbar;

