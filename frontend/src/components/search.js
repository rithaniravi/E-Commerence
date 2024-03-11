import { useState } from "react";
import {useNavigate} from "react-router-dom";
import { toast } from 'react-toastify';


const Search=({cartitem})=>{
    const [keyword,setKeyword]=useState("")
    const navigate= useNavigate()

    const handleSubmit=()=>{
        if (cartitem===keyword){
            navigate("/search?keyword="+keyword)
            console.log(keyword)
        }
        toast.success("not found")
    }
    return(
        <form className="d-flex" >
            <input className="search mx-2 my-1" 
                style={{width:"300px",height:"40px"}}
                onChange={(e)=>setKeyword(e.target.value)} 
                type="text" 
                onBlur={handleSubmit}
                placeholder="Enter the product Name..."></input>
            <button className="btn btn-success" 
                onClick={handleSubmit} 
                style={{width:"70px",height:"40px"}}
                type="button">Search</button>
        </form>
    )
}


export default Search;