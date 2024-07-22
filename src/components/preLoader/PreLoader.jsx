import React , { useEffect } from 'react'
import "./preloader.css"
 import gsap from 'gsap'
import { Power4 } from 'gsap/src/all'


const PreLoader = () => {
  
    useEffect(() => {

        const tl = gsap.timeline()

      const animatePreload = () => {

        if ( window.innerWidth > 600){
            tl.to(".line_preload",{
              duration: 2, 
              stagger: .1,
              y: "100%",
              ease: Power4.easeInOut
            })

            tl.to(".preloader",{
                duration: .1, 
                z: -1,
                opacity:0,
                display:"none"
            })
        }else{

            tl.to(".mobilePreload",{
              duration: 2, 
              stagger: .1,
              y: "100%",
              ease: Power4.easeInOut
            })

            tl.to(".preloader",{
                duration: .1, 
                display:"none"
            })

        }

      }

      animatePreload()

      return (() => {
        animatePreload()
      })

    },[])
  
    return (
    <div className="preloader">
      {/*   <img className='logo_preload' width="300" height="300" src={logo} alt="logo" /> */}
        <div className="line_preload line_preload-1"></div>
        <div className="line_preload line_preload-2"></div>
        <div className="line_preload line_preload-3"></div>
        <div className="line_preload line_preload-4"></div>
        <div className="line_preload line_preload-5"></div>
        <div className="line_preload line_preload-6 mobilePreload"></div>
        <div className="line_preload line_preload-7 mobilePreload" ></div>
        <div className="line_preload line_preload-8 mobilePreload"></div>

    </div>



  )
}

export default PreLoader