import React from "react";
import img from "../assets/images/contact-img.svg";

function Contact() {
  return (
    <>
<div className="wrapper flex flex-col lg:flex-row justify-center items-center py-16 gap-52 lg:py-12">
  <div className="content-box text-center flex-grow flex-shrink">
    <button className="bg-white border-black border-[1] py-[16px] rounded-lg px-8 my-8 w-32 font-bold"><a href="mailto:fernsner.j@gmail.com">Contact</a></button>
  </div>  
  <div className="imgbox lg:hidden flex-grow flex-shrink">
    <img className="w-[550px] h-full" src={img} alt="" />
  </div>
</div>
    </>
  );
}

export default Contact;
