import React from "react";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

function Home(){

    const navigate = useNavigate(); 

return <div className="container mx-auto  mt-10 p-20 pt-35 flex justify-center">
<div className="">
 <button type="button" classNameName="btn" onClick={()=>{
    navigate("/birthday"); }}>
<img src="https://source.unsplash.com/800x600/?giftbox" alt="..." ></img> 
</button>
</div>

</div>
}

export default Home;