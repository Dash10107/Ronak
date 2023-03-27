import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { useNavigate } from "react-router-dom";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
function Birthday(){
  const navigate = useNavigate();
  const [rotate1,setRotate1] = useState(false);
  const [rotate2,setRotate2] = useState(false);

return <>

<div className="text-center "> 
<motion.div
    className="birthday"
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    >
<h1  ><Typewriter
  onInit={(typewriter) => {
    typewriter.typeString('Happy Birthday Ronak ')
      .pause(5000)
      .start();
  }}
  cursor=""
/></h1>



<div class="grid grid-cols-2 p-28 bg-sky-300">
{/* Home */}
<motion.div
drag
animate={{rotate:rotate1 ? 360: 0}}
onClick={()=>{
  setRotate1(!rotate1);
}}
>
  <div class="card mb-3  mt-36 mx-10 border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110 " >
    <div class="row g-0">
      <div class="">
      <div class="col-md-4">
      <button type="button" classNameName="btn" onClick={()=>{
    navigate("/"); }}>
        <img src="https://media.istockphoto.com/id/173682323/photo/says.jpg?s=612x612&w=0&k=20&c=7jnXQrYzUWNTnLhjPgimxHIbjsaHvZmAMALGVzYNARQ=" class="min-w-max rounded-start" alt="..." />
      </button>
      </div>
      <div class="h-72 bg-slate-800 text-white">
        <div class="card-body ">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
        </div>
      </div>
      </div>
    </div>
  </div>
</motion.div>
  {/* Hackathon */}
  <motion.div
  drag
animate={{rotate:rotate2 ? 360: 0}}
onClick={()=>{
  setRotate2(!rotate2);
}}
>
  <div class="card mb-3  mt-36 mx-10 border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110 " >
    <div class="row g-0">
      <div class="">
      <div class="col-md-4">
      <button type="button" classNameName="btn" onClick={()=>{
    navigate("/hackathon"); }}>
        <img src="https://media.istockphoto.com/id/173682323/photo/says.jpg?s=612x612&w=0&k=20&c=7jnXQrYzUWNTnLhjPgimxHIbjsaHvZmAMALGVzYNARQ=" class="min-w-max rounded-start" alt="..." />
      </button>
      </div>
      <div class="h-72 bg-slate-800 text-white">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
        </div>
      </div>
      </div>
    </div>
  </div>
  </motion.div>
  {/* Memories */}
  <motion.div whileHover={{scale:1}} drag>
  <div class="card mb-3  mt-24 mx-10 border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110 " >
    <div class="row g-0">
      <div class="">
      <div class="col-md-4">
      <button type="button" classNameName="btn" onClick={()=>{
    navigate("/memories"); }}>
        <img src="https://media.istockphoto.com/id/173682323/photo/says.jpg?s=612x612&w=0&k=20&c=7jnXQrYzUWNTnLhjPgimxHIbjsaHvZmAMALGVzYNARQ=" class="min-w-max rounded-start" alt="..." />
     </button>
      </div>
      <div class="h-72 bg-slate-800 text-white">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
        </div>
      </div>
      </div>
    </div>
  </div>
  </motion.div>
  {/* Fest */}
  <motion.div whileHover={{scale:1}} drag>
  <div class="card mb-3  mt-24 mx-10 border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110 " >
    <div class="row g-0">
      <div class="">
      <div class="col-md-4">
      <button type="button" classNameName="btn" onClick={()=>{
    navigate("/fest"); }}>
        <img src="https://media.istockphoto.com/id/173682323/photo/says.jpg?s=612x612&w=0&k=20&c=7jnXQrYzUWNTnLhjPgimxHIbjsaHvZmAMALGVzYNARQ=" class="min-w-max rounded-start" alt="..." />
      </button>
      </div>
      <div class="h-72 bg-slate-800 text-white">
    
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
        </div>
      
         </div>
      </div>
     </div>
   </div>
 

</motion.div>
</div>
</motion.div>
</div>

</>
}

export default Birthday;