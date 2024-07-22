import React, { useEffect } from "react";
import "./about.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import logo from "../../assets/src/backgrounds/logo3.webp";

const About = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const handleResize = () => {
      if (window.innerWidth > 900) {
        const tl = gsap.timeline();

        tl.to(".about", {
          scrollTrigger: {
            trigger: ".about",
            pin: true,
            start: "-1px top",
            scrub: 2,
            end: "+=2400",
          },
        });

        tl.to(".p_text_about", {
          color: "white",
          stagger: 0.01,
          duration: 0.01,
          scrollTrigger: {
            trigger: ".containerAbout",
            start: "10% top",
            end: "+=1000",
            scrub: 3,
          },
        });

        gsap.to(".box_text_about", {
          duration: 2,
          ease: "none",
          color: "white",
          stagger: 0.01,
          y: "-106%",
          scrollTrigger: {
            trigger: ".containerAbout",
            start: "top top",
            scrub: 2,
          },
        });

        const tl_title = gsap.timeline({
          scrollTrigger: {
            trigger: ".containerAbout",
            start: "-10px top",
            end: "+=1500",
          },
        });

        tl_title.from(".line_title_abut", { opacity: 0.4, duration: 0.4 });

        tl_title.from(".about_title", {
          duration: 0.7,
          x: -26,
          opacity: 0.9,
          stagger: 0.08,
        });

        tl_title.to(".about_title", {
          duration: 0.4,
          color: "rgb(125, 186, 255)",
          stagger: 0.1,
        });

        tl_title.to(".about_title", {
          duration: 0.5,
          color: "rgb(255, 255, 255)",
          stagger: 0.1,
        });

        const tl_logo = gsap.timeline({
          scrollTrigger: {
            trigger: ".containerAbout",
            start: "-6px top",
            end: "+=1000",
            scrub: 5,
          },
        });

        tl_logo.to(".logo_about_top", { duration: 3, opacity: 0, delay: 1 });

        tl_logo.from(".logo_about_bottom", {
          duration: 3,
          opacity: 0,
          rotateZ: 360,
          x: -800,
        });
      } else {
        const tl = gsap.timeline();

        tl.to(".about", {
          scrollTrigger: {
            trigger: ".about",
            pin: ".about",
            start: "top top",
            end: "+=700",
            scrub: 2,
          },
        });

        const tl_logo = gsap.timeline({
          scrollTrigger: { trigger: ".containerAbout", start: "top top" },
        });

        tl_logo.from(".logo_about_bottom", {
          duration: 1,
          rotateZ: 360,
          x: -500,
        });

        tl_logo.from(".box_text_about", { duration: 1, opacity: 0 });

        const tl_title = gsap.timeline({
          scrollTrigger: { trigger: ".containerAbout", start: "top top" },
        });

        tl_title.to(".about_title", {
          duration: 0.4,
          color: "rgb(125, 186, 255)",
          stagger: 0.1,
        });

        tl_title.to(".about_title", {
          duration: 0.5,
          color: "rgb(255, 255, 255)",
          stagger: 0.1,
        });
      }
    };

    handleResize();

    return () => {
      handleResize();
    };
  }, []);

  const textos_about = {
    title_quienes: "Quienes",
    title_somos: "Somos ?",
  };

  const arrayPalabras = (texto) => {
    const cadena = [];

    for (let i = 0; i < texto.length; i++) {
      if (texto[i] == " ") {
        cadena.push(<span> &nbsp;</span>);
      } else {
        cadena.push(texto[i]);
      }
    }

    return cadena;
  };

  let cadenaTitle_quienes = arrayPalabras(textos_about.title_quienes);
  let cadenaTitle_somos = arrayPalabras(textos_about.title_somos);

  return (
    <div className="about" id="about">
      <div className="containerAbout">
        <div className="containerTitle_about">
          <div className="container_titulo_line">
            <div className="line_title_abut"></div>

            <div className="box_title_about">
              <div className="quienes">
                {cadenaTitle_quienes.map((index, key) => {
                  return (
                    <p key={key} className="about_title">
                      {index}{" "}
                    </p>
                  );
                })}
              </div>

              <div className="somos">
                {cadenaTitle_somos.map((index, key) => {
                  return (
                    <p key={key} className="about_title">
                      {index}{" "}
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="logo_about">
            <img
              width="300"
              height="300"
              className="logo_about_bottom"
              src={logo}
              alt="logo"
            />
          </div>
        </div>

        <div className="text_about">
          <div className="logo_about">
            <img
              width="450"
              height="450"
              className="logo_about_top"
              src={logo}
              alt="logo"
            />
          </div>
          <div className="box_text_about">
            <div className="cadenaAbout cadena1_about">
              <div className="subtites_about">
                <div className="marco1"></div>
                <h3>Arco Academia de futbol</h3>
                <div className="marco2"></div>
              </div>

              <p className="p_text_about">
                En ARCO queremos que sus hijos vengan a aprender, practicar y
                mejorar sus aptitudes en el deporte más lindo del mundo, el que
                iguala a todos los estratos sociales, ese en el que, cuando la
                pelota rueda, no distingue entre clases sociales sino que sólo
                harán diferencias aquellos que mas pasión y entrega puedan darle
                a la redonda.
              </p>
            </div>

            <div className="cadenaAbout cadena2_about">
              <div className="subtites_about subtites_about2">
                <div className="marco1"></div>
                <h3>Objetivos</h3>
                <div className="marco2"></div>
              </div>
              <p className="p_text_about">
                Para nosotros los que conformamos ARCO son fundamentales y nos
                encargamos de transmitir en todo momento a los jugadores, los
                valores del ser humano ante todo, los pilares conceptuales de la
                academia serán trabajo individual y en equipo, perseverancia,
                sacrificio, compañerismo, cuidado de su salud, buena
                alimentación, entre otros.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(About);
