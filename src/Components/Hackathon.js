import React from "react";
import Header from "./layouts/Header";
import {motion} from "framer-motion";
function Hackathon(){
    return <div>
      <motion.div
    className="hackathon"
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    >
    <Header />
    <motion.div
    className="fest"
    initial={{width:0}}
    animate={{width:"100%"}}
    exit={{x:window.innerWidth,transition:{duration:0.1}}}
    >

    <div id="carouselExampleCaptions" class="carousel slide bg-gray-600 mt-10">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active ml-28">
    <img style={{ width: 1700, height: 1000 }} src="./Images/collage.jpg" alt="React Logo" />
      <div class="carousel-caption d-none d-md-block">
        <h5> </h5>
        <p></p>
      </div>
    </div>
    <div class="carousel-item ml-28">
    <img style={{ width: 1700, height: 1000 }} src="./Images/Collage1.jpg" alt="React Logo" />
      <div class="carousel-caption d-none d-md-block">
        <h5>  </h5>
        <p> </p>
      </div>
    </div>
    <div class="carousel-item ml-28">
    <img style={{ width: 1700, height: 1000 }} src="./Images/collage.jpg" alt="React Logo" />
      <div class="carousel-caption d-none d-md-block">
        <h5> </h5>
        <p> </p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</motion.div>
</motion.div>
    </div>
}

export default Hackathon;