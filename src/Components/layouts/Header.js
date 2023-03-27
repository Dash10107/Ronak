import React from "react";
function Header (){
return (
    <>
    <header className="body-font bg-slate-600 text-white">
    <div className=" flex flex-wrap p-2 flex-col md:flex-row">

      <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 px-16" href="/birthday">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpMtwOkdHCbBFEVgkcG9ChUC9ImDMP9yxt3f31FTog3tH_dYbAB-wtZn6gtNudWi1FDpw&usqp=CAU" alt = " err"fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-20 h-20 text-white p-2 rounded-full mt-2" viewBox="0 0 24 24" />
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        <span class="ml-3 text-3xl text-white font-sans font-bold">DebugIt</span>
      </a>
  
      <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
    
        <a className="mr-5 hover:text-gray-900 text-2xl px-4 font-serif font-extrabold cursor-pointer " href="/hackathon">Hackathon</a>
      
        <a className="mr-5 hover:text-gray-900 text-2xl px-4 font-serif font-extrabold cursor-pointer " href="/fest">Fest Utsava</a>
      
        <a className="mr-5 hover:text-gray-900 text-2xl px-4 font-serif font-extrabold cursor-pointer " href="/memories">Memories</a>
      </nav>
      </div>

  </header>
  </>
)

}

export default Header;