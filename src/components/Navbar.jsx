import React, { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "../styles.css";

function Navbar() {
  const [Project, setProject] = useState(true);
  console.log(Project);

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      document.querySelector(".navbarcon").style.backgroundColor = "#171717";
    } else {
      document.querySelector(".navbarcon").style.backgroundColor =
        "rgba(0, 0, 0, 0)";
      document.querySelector(".tl").style.backgroundColor = "rgba(0, 0, 0, 0)";
    }
  }

  return (
    <>
      <div className="navbarcon flex justify-between items-center px-20 py-6 bg-transparent z-40 text-white lg:px-6 fixed w-full">
        <h1 className="text-4xl  font-bold ">Jules Fernsner</h1>

        <nav
          className={` flex justify-center items-center gap-x-10 ${
            Project && "lg:hidden"
          } lg:fixed lg:top-0 -z-20  lg:flex-col lg:w-full lg:bg-[#171717]  lg:h-[450px] lg:left-0 h-full lg:items-start  lg:pl-6  cursor-pointer lg:pt-20`}
        >
          <ul className=" flex gap-10 text-3xl mr-4 lg:flex-col lg:gap-6 ">
            <li className="bla">
              <AnchorLink href="#home">Home</AnchorLink>
            </li>
            <li className="bla">
              <AnchorLink href="#skills">Skills</AnchorLink>
            </li>
            <li className="bla">
              <AnchorLink href="#projects">Projects</AnchorLink>
            </li>
          </ul>

          <div className="icon text-lg flex gap-4  lg:gap-8 lg:my-10">
            <a href="https://www.linkedin.com/in/jules-fernsner-9a3982180/" target="_blank">
              <i className="fa-brands fa-linkedin border-[1px] border-white p-2 rounded-[100%] hover:bg-white hover:text-black"></i>
            </a>

            <a
              href="https://github.com/julessacha"
              target="_blank"
            >
              <i className="fa-brands fa-github border-[1px] border-white p-2 rounded-[100%] hover:bg-white hover:text-black"></i>
            </a>
          </div>

        </nav>
        <i
          onClick={(e) => setProject(!Project)}
          className="fa-solid fa-bars hidden lg:block text-2xl cursor-pointer"
        ></i>
      </div>
    </>
  );
}

export default Navbar;
