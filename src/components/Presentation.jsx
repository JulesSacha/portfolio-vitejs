import React, { useEffect, useState } from "react";

function Presentation() {
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPos(window.scrollY + 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="wrap">
        <p
          className="gradient-text font-bold"
          style={{ transform: `translateX(${scrollPos}px)` }}
        >
          Bonjour,
        </p>
        <p
          className="gradient-text font-bold"
          style={{ transform: `translateX(-${scrollPos}px)` }}
        >
          je suis Jules,
        </p>
        <p
          className="gradient-text font-bold"
          style={{ transform: `translateX(${scrollPos}px)` }}
        >
          Développeur web 
        </p>
        <p
          className="gradient-text font-bold"
        >
       cherchant une alternance
        </p>
      </div>
    </>
  );
}

export default Presentation;
