import React, { useState } from 'react';


function ProjectCard({item}) {

  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      <div onClick={handleOpen} className="img-box w-[450px] lg2:w-auto mx-auto flex justify-center items-center relative overflow-hidden rounded-3xl">
        <img src={item.img} alt="" className="w-full" />
        <div className="p absolute top-[-100%] left-0 h-full w-full text-center bg-[#b004b0b7] p-4 pt-20">
          <h1 className="font-bold text-3xl">{item.title}</h1>
          <p className="font-bold">{item.description}</p>
        </div>
      </div>
      {isOpen && (
  <div className="popup">
    <div className="overlay" onClick={handleClose}></div>
    <div className="popup-content">
      <button className="close-btn" onClick={handleClose}><i class="fa-solid fa-rectangle-xmark"></i></button>
      <iframe src="https://www.casa-transactions.com/" frameborder="0"></iframe>
    </div>
  </div>
)}

    </>
  )
}

export default ProjectCard;
