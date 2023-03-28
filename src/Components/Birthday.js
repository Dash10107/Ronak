import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { useNavigate } from "react-router-dom";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
function Birthday(){
  const navigate = useNavigate();
  const [rotate1,setRotate1] = useState(false);
  const [rotate2,setRotate2] = useState(false);

  const [div4,setDiv4] = useState(false);
  const [div3,setDiv3] = useState(false);

return <>

<div className="text-center "> 
<motion.div
    className="birthday"
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    >
    <div className="bg-blue-100 p-2 font-serif  ">
<h1  ><Typewriter
  onInit={(typewriter) => {
    typewriter.typeString('Happy Birthday Ronak !')
      .pause(5000)
      .start();
  }}
  cursor=""
/></h1>
</div>


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
      <div class="">
      <button type="button" classNameName="btn" onClick={()=>{
    navigate("/"); }}>
        <img style={{ width: 700, height: 500 }} src="./Images/Home2.jpg" alt="React Logo" />
      </button>
      </div>
      <div class="h-72 bg-slate-800 text-white">
        <div  class="card-body ">
          <h5 class="card-title text-4xl font-mono">18th Birthday !</h5>
          <p class="card-text text-2xl">Happiest 18th Birthday. May god Bless you that you become adult from mind also not from the age only !!</p>
          <p class="card-text"><small class="text-body-secondary">Home</small></p>
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
      <div class="">
      <button type="button" classNameName="btn" onClick={()=>{
    navigate("/hackathon"); }}>
        <img style={{ width: 1200, height: 500 }} src="./Images/Home.jpg" alt="React Logo" />
      </button>
      </div>
      <div class="h-72 bg-slate-800 text-white">
        <div class="card-body">
          <h5 class="card-title text-4xl font-mono">Mentorship</h5>
          <p class="card-text text-2xl">Thks for teaching us the best way of learning is " Learning by doing "</p>
          <p class="card-text"><small class="text-body-secondary">Hackathon</small></p>
        </div>
      </div>
      </div>
    </div>
  </div>
  </motion.div>
  {/* Memories */}


  <motion.div
  animate={ {x:div3?[0,-200,0]:0,y:div3?[0,100,0]:0}}
onClick={()=>{
setDiv3(!div3);
}}
   drag>
  <div class="card mb-3  mt-24 mx-10 border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110 " >
    <div class="row g-0">
      <div class="">
      <div class="">
      <button type="button" classNameName="btn" onClick={()=>{
    navigate("/memories"); }}>
                <img style={{ width: 1200, height: 500 }} src="./Images/Home3.jpg" alt="React Logo" />     </button>
      </div>
      <div class="h-72 bg-slate-800 text-white">
        <div class="card-body">
          <h5 class="card-title text-4xl font-mono">Anti-Virus Group</h5>
          <p class="card-text text-2xl">Thanks for doing the most best thing in the world to eliminate virus from our group and controlling the Semi-Antivirus group [ Debbuggers ]</p>
          <p class="card-text"><small class="text-body-secondary">Memories</small></p>
        </div>
      </div>
      </div>
    </div>
  </div>
  </motion.div>
  {/* Fest */}
  <motion.div 
animate={ {x:div4?[0,200,0]:0 , y:div4?[0,100,0]:0}}
onClick={()=>{
setDiv4(!div4);
}}
drag>
  <div class="card mb-3  mt-24 mx-10 border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110 " >
    <div class="row g-0">
      <div class="">
      <div class="">
      <button type="button" classNameName="btn" onClick={()=>{
    navigate("/fest"); }}>
                <img style={{ width: 1200, height: 500 }} src="./Images/Home4.jpg" alt="React Logo" />      </button>
      </div>
      <div class="h-72 bg-slate-800 text-white">
    
        <div class="card-body">
          <h5 class="card-title text-4xl font-mono">Join every Event together !</h5>
          <p class="card-text text-2xl">Thks for being in our life. As joining in every events together hope you will join the most enjoyable event [ CONSOLE ] soon </p>
          <p class="card-text"><small class="text-body-secondary">Fest</small></p>
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