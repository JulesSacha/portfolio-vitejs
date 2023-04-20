import React, { useState } from 'react';
import { ScaleLoader } from 'react-spinners';

function ProjectCard({item}) {

  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [iframeLoaded, setIframeLoaded] = useState(false);

  const handleOpen = () => {
    setLoading(true);
    setIsOpen(true);
    // setTimeout(() => , 300); // affiche le loader pendant 5 secondes
  };
  
  
  const handleClose = () => {
    setLoading(false);
    setIsOpen(false);
    setIframeLoaded(false);
  };
  
  return (
    <>
      <div onClick={handleOpen} className="img-box w-[450px] lg2:w-auto mx-auto flex justify-center items-center relative overflow-hidden rounded-3xl">
        <img src={item.img} alt="" className="w-full" />
        <div className="p absolute  left-0 h-full w-full text-center bg-[#b004b0b7] p-4 pt-20">
          <h1 className="font-bold text-3xl">{item.title}</h1>
          <p className="font-bold">{item.description}</p>
        </div>
      </div>
      {isOpen && (
        <div className="popup">
          <div className="overlay" onClick={handleClose}></div>
          <div className="popup-content">
            <button className="close-btn" onClick={handleClose}><i className="fa-solid fa-rectangle-xmark"></i></button>
            {loading ? (
  <div className="flex justify-center items-center">
    <ScaleLoader color="#b004b0" />
  </div>
) : !loading && iframeLoaded && (
  <button onClick={handleClose}>Fermer</button>
)}
  <iframe src={item.link} frameBorder="0" onLoad={() => setIframeLoaded(true) && setLoading(false)}></iframe>
          </div>
        </div>
      )}
    </>
  )
}

export default ProjectCard;
