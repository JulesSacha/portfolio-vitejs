import React from "react";

function Footer() {
  return (
    <>
      <div className="footer bg-[#171717]">
        <div className=" flex justify-between items-center px-12 text-white font-bold py-6 tl:px-4 tl:py-4 ">
          <h1 className="text-3xl">Jules Fernsner</h1>
          <div className="flex gap-4 cursor-pointer ">
            <a href="https://www.linkedin.com/in/jules-fernsner-9a3982180/" target="_blank">
              <i className="fa-brands fa-linkedin border-[1px] border-white p-2 rounded-[100%] hover:bg-white hover:text-black"></i>
            </a>
    
            <a               href="https://github.com/julessacha"
 target="_blank">
              <i className="fa-brands fa-github border-[1px] border-white p-2 rounded-[100%] hover:bg-white hover:text-black"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
