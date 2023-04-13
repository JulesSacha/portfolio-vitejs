import React, { useEffect, useRef } from "react";

function Atom() {
const el1Ref = useRef(null);
const el2Ref = useRef(null);
const el3Ref = useRef(null);

useEffect(() => {
const el1 = el1Ref.current;
const el2 = el2Ref.current;
const el3 = el3Ref.current;
function anim(el, dur) {
    const length = el.getTotalLength();
    el.style.strokeDasharray = length;
    el.style.strokeDashoffset = length;
    el.animate(
      [
        { strokeDashoffset: length },
        { strokeDashoffset: 0 },
      ],
      {
        duration: dur,
        easing: "linear",
        iterations: Infinity,
      }
    );
  }
  
  anim(el1, 2003);
  anim(el2, 2087);
  anim(el3, 2111);
}, []);
  
return (
    <>
    <div className="svg-container">
    <svg
           xmlns="http://www.w3.org/2000/svg"
           xmlnsXlink="http://www.w3.org/1999/xlink"
           viewBox="50 50 300 300"
         >
    <defs>
    <symbol id="e">
    <ellipse
                 cx="200"
                 cy="200"
                 rx="33"
                 ry="88"
                 fill="none"
                 stroke="inherit"
               />
    </symbol>
    </defs>
    <circle id="atom" fill="#FACC39" cx="200" cy="200" r="139" />
    <use id="orbit-1" xlinkHref="#e" />
      <use
        id="orbit-2"
        xlinkHref="#e"
        transform="rotate(60 200 200)"
      />
      <use
        id="orbit-3"
        xlinkHref="#e"
        transform="rotate(120 200 200)"
      />

      <use id="electron-1" xlinkHref="#e" ref={el1Ref} />
      <use
        id="electron-2"
        xlinkHref="#e"
        transform="rotate(60 200 200)"
        ref={el2Ref}
      />
      <use
        id="electron-3"
        xlinkHref="#e"
        transform="rotate(120 200 200)"
        ref={el3Ref}
      />

      <circle id="nucleus" fill="#1A4C59" cx="200" cy="200" r="16" />
    </svg>
  </div>
</>
);
}

export default Atom;