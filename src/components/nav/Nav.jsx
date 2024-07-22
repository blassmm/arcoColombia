import React, {useState,  useEffect , useCallback } from 'react'
import "./nav.css"
import gsap from 'gsap';
import { Power4 } from 'gsap/src/all';
import ScrollTrigger from 'gsap/src/ScrollTrigger';

const Nav = () => {


  const [isActive, setActive] = useState(false);
  gsap.registerPlugin(ScrollTrigger);



  const handleToggle =  useCallback(() => {
    setActive(!isActive);

    if(!isActive){

      gsap.to(".circle_nav", {
        scale: 34,
        duration:.6,
        ease: Power4.easeInOut
      })
      
      gsap.from(".list_mobile", {
        opacity: 0,
        duration:1,
        y: 10,
        ease: Power4.easeInOut
      })
      
    }else{
  
        gsap.from(".list_mobile", {
          opacity: 1,
          y: 20,
          ease: Power4.easeInOut
        })
        gsap.to(".circle_nav", {
          scale: 1,
          duration:.6,
          ease: Power4.easeInOut
        })
        
      gsap.to(".lineActive", {
        duration: .1,  
        color: "black",
        scrollTrigger: {
          trigger: ".panel",
          start: "top top",
          scrub: 2,
        }
      });
    }
  }, [isActive])


  return (
    <>

          <header>
            <div className={isActive ? "nav_active_mobile" : "nav"}>
              <a href="#home "> <p className={isActive ? "titleNav_mobile-active" : "titleNav_mobile"}><strong className='ar'>AR</strong><strong className='co'>CO</strong> </p> </a>

              <div className={isActive ? "toggle_active" : "toggle"} onClick={handleToggle}>
                  <div className={ isActive ? "lineActive line1_active" : "line line1"}></div>
                  <div className={ isActive ? "lineActive line2_active" : "line line2"}></div>
                  <div className={ isActive ? "lineActive line3_active" : "line line3"}></div>
              </div>

              <div className="circle_nav"></div>
              
                <ul className={ isActive ? 'list_nav_mobile' : "list_nav_diss" } >
                  <a className='list_link_nav' href="#home ">       <li className='list_mobile' onClick={() => {handleToggle()}}> Inicio         </li></a> 
                  <a className='list_link_nav' href="#about ">      <li className='list_mobile' onClick={() => {handleToggle()}}> Quienes somos  </li></a> 
                  <a className='list_link_nav' href="#servicios ">  <li className='list_mobile' onClick={() => {handleToggle()}}> Servicios      </li></a> 
                  <a className='list_link_nav' href="#contact ">    <li className='list_mobile' onClick={() => {handleToggle()}}> Contacto       </li></a> 
                </ul>

            </div>
          </header>

   </>
  )
}

export default Nav