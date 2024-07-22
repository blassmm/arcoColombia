import React, { useCallback, useEffect, useState } from "react";
import "./home.css";
import gsap, { Elastic } from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import Scene from "./scene/Scene";
import backPrincipal from "../../assets/src/backgrounds/backPrincipal.webp";
import { Power4 } from "gsap/src/all";

function isMobileOrTablet() {
  const mobileOrTabletRegex =
    /(iphone|ipod|ipad|android|iemobile|blackberry|bada|nokia|samsung|webos|palm|windows ce)/i;
  return (
    window.matchMedia("(max-width: 800px)").matches ||
    mobileOrTabletRegex.test(navigator.userAgent)
  );
}

const Home = () => {
  const [isMobile, setIsMobile] = useState(false);

  const movementHome = useCallback(() => {
    if (!isMobile) {
      const image = document.querySelector(".backgroundPrincipal");
      const anda = document.querySelector(".anda");

      if (window.innerWidth > 600) {
        document.addEventListener("mousemove", (event) => {
          const x = event.clientX / window.innerWidth - 0.2;
          const y = -event.clientY / window.innerHeight - 0.2;

          image.style.transform = `translate(${x * 11}px, ${y * 11}px)`;
          anda.style.transform = `translate(${-x * 5}px, ${-y * 5}px)`;
        });

        gsap.from(".boxText_home", {
          delay: 0.5,
          duration: 3,
          opacity: 0,
          scale: 0.7,
          ease: Power4.easeInOut,
        });
        gsap.from(".backgroundPrincipal", {
          delay: 0.6,
          duration: 3,
          opacity: 0,
          scale: 0.7,
          /* y: "100px", */ ease: Power4.easeInOut,
        });
        gsap.from(".anda", {
          delay: 0.5,
          duration: 3,
          opacity: 0,
          scale: 0.5,
          y: "100px",
          ease: Elastic.easeInOut,
        });
        gsap.from(".loaderBox", {
          delay: 0.34,
          duration: 3,
          opacity: 0,
          y: "100px",
          ease: Elastic.easeInOut,
        });
        gsap.from(".circle_nav", {
          delay: 0.6,
          duration: 3,
          opacity: 0,
          scale: 0.5,
          x: "100px",
          ease: Elastic.easeInOut,
        });
        gsap.from(".scrollIcon", {
          delay: 1,
          duration: 3,
          opacity: 0,
          y: "100px",
          ease: Elastic.easeInOut,
        });
      }
    }
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const homeEffect = () => {
      if (window.innerWidth > 900) {
        gsap.to(".home", {
          opacity: 0,
          duration: 0.1,
          filter: "blur(20px)",
          scrollTrigger: {
            trigger: ".containerHome",
            start: "center center",
            scrub: true,
            snap: 3,
          },
        });
      }
    };

    homeEffect();
    setIsMobile(isMobileOrTablet());
    movementHome();

    return () => {
      homeEffect();
      setIsMobile(isMobileOrTablet());
      movementHome();
    };
  }, [setIsMobile]);

  return (
    <div className="home" id="home">
      {isMobile ? <div className="effectVidrioMobile"></div> : <Scene />}

      <div className="containerHome">
        <img
          className="backgroundPrincipal"
          width="1320"
          height="1300"
          src={backPrincipal}
          alt="background principal"
        />
        <div className="boxText_home">
          <h1 className="titleHome ">Academia de Futbol</h1>
          <h2 className="subtitle_home">
            Formamos deportistas con disciplina, dedicación y pasión.
          </h2>

          <p className="description_hero">
            Enseñamos a nuestros estudiantes a jugar al fútbol con pasión y a
            desarrollar valores fundamentales que los ayudarán a tener éxito
            tanto en lo deportivo como en la vida.
            <br />{" "}
            <span>
              {" "}
              ¡Ven y descubre cómo podemos ayudar a tu hijo / hija a alcanzar
              sus sueños!
            </span>
          </p>
        </div>
      </div>

      <div className="scrollIcon"></div>

      <div className="anda">
        <p>ANDÁ PA ALLÁ</p>
        <svg
          width="893"
          height="46"
          viewBox="0 0 893 46"
          fill="none"
          xmlns="https://www.w3.org/2000/svg"
        >
          <path
            d="M5 29.6443C290.5 13.311 865.5 -9.55565 881.5 29.6443"
            stroke="#00B2FF"
            strokeWidth="20"
          />
        </svg>
      </div>
    </div>
  );
};

export default Home;
