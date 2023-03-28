import React from "react";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import {motion} from "framer-motion";
function Home(){

    const navigate = useNavigate(); 

return(
    <motion.div
    className="home"
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    >       
    <div className="container mx-auto  mt-20 p-20 pt-35 flex justify-center">
<div className="">
 <button type="button" classNameName="btn" onClick={()=>{
    navigate("/birthday"); }}>
<img src="https://source.unsplash.com/800x600/?gifts" alt="..." ></img> 

</button>
</div>

</div>
</motion.div>
)}

export default Home;