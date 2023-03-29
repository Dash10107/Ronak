import React from "react";
import { useNavigate } from "react-router-dom";
function Header (){
  const navigate = useNavigate();
return (
    <>
    <header className="body-font bg-slate-600 text-white">
    <div className=" flex flex-wrap p-2 flex-col md:flex-row">

    <button type="button" className="btn" onClick={()=>{
    navigate("/birthday"); }}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpMtwOkdHCbBFEVgkcG9ChUC9ImDMP9yxt3f31FTog3tH_dYbAB-wtZn6gtNudWi1FDpw&usqp=CAU" alt = " err"fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-20 h-20 text-white p-2 rounded-full mt-2" viewBox="0 0 24 24" />
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        <span class="ml-3 text-3xl text-white font-sans font-bold">DebugIt</span>
      </button>
  
      <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
    
      <button type="button" className="btn btn-outline-success px-5" onClick={()=>{
    navigate("/hackathon"); }}>Hackathon  </button>
      
      <button type="button" className="btn btn-outline-info px-5" onClick={()=>{
    navigate("/fest"); }}>Fest    </button>
      
      <button type="button" className="btn btn-outline-light px-5" onClick={()=>{
    navigate("/memories"); }}>Memories   </button>
      </nav>
      </div>

  </header>
  </>
)

}

export default Header;