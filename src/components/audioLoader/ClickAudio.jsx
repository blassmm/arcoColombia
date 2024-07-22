import React, { useEffect, useRef } from "react";
import clickAudio from "../assets/audio/clickAudio.mp3"

const ClickAudio = () => {
    const audio = useRef(null);

    const handleClick = () => {
      audio.current.currentTime = 0;
      audio.current.volume= 0.1
      audio.current.play();
    };

    const ripple = useRef(null)

    useEffect(() => {
        const COLORS = ['#fb4c16','	#394acb','#ffd800','#36aeff','white'];
        function clickEffect(e){
            let rippleColor = Math.floor(Math.random() * COLORS.length);
            
            ripple.current.style.top = `${e.clientY}px`;
            ripple.current.style.left = `${e.clientX}px`;
            ripple.current.style.borderColor = COLORS[rippleColor];
            document.body.appendChild(ripple.current);
            
            ripple.current.addEventListener('animationend',()=>{
              if (ripple.current && ripple.current.parentElement) {
                ripple.current.parentElement.removeChild(ripple.current);
              }
            })
          }
    


      document.addEventListener("click", handleClick);
      document.addEventListener('click', clickEffect)
      return () => {
        document.removeEventListener("click", handleClick);
      };
    }, []);
  
  return (
    <>
     <audio ref={audio}>
      <source src={clickAudio} type="audio/mpeg" />
    </audio>
    <div ref={ripple} className="clickRipple"></div>

    </>
  )
}

export default ClickAudio