import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";

const ServicesScroll = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let sections = gsap.utils.toArray(".panel");

    const handleResize = () => {
      if (window.innerWidth > 670) {
        /* section antimation */
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".container_services",
            start: "top top",
            end: "100% 100%",
          },
        });
        tl.to(sections, {
          xPercent: -100 * (sections.length - 1),
          ease: "none",
          scrollTrigger: {
            trigger: ".container_services",
            pin: true,
            scrub: 1.5,
            snap: 1 / (sections.length - 1),
            end: () =>
              "+=" + document.querySelector(".container_services").offsetWidth,
          },
        });

        /* circle animation */
        let tl_punt;

        if (window.innerWidth > 1440) {
          tl_punt = gsap.timeline({
            scrollTrigger: {
              trigger: ".contact",
              start: "-900px top",
              end: "+=1000",
              scrub: 2,
            },
          });
        } else {
          tl_punt = gsap.timeline({
            scrollTrigger: {
              trigger: ".contact",
              start: "-780px top",
              end: "+=1000",
              scrub: 2,
            },
          });
        }

        tl_punt.to(".e", { duration: 0.1, opacity: 0 });

        tl_punt.to(".line-container", { display: "none", duration: 0 });

        tl_punt.from(".circle-wrapper", {
          duration: 1,
          height: "0vh",
          width: "0vw",
          opacity: 1,
          border: 0,
        });

        /* titles animation */
        let titlesService = gsap.utils.toArray(".strong_title-panel1");

        const tl_titles = gsap.timeline({
          scrollTrigger: {
            trigger: ".container_services",
            start: "-450px top",
            end: "+=500",
          },
        });

        tl_titles.to(".e", {
          duration: 0.1,
          stroke: "#fffb29",
          scrollTrigger: {
            trigger: ".container_services",
            start: "-300px top",
            end: "100% 100%",
            scrub: true,
          },
        });

        tl_titles.from(".boxCuadro", { opacity: 0, duration: 0.2, x: -20 });

        tl_titles.from(titlesService, {
          opacity: 0,
          duration: 0.7,
          stagger: 0.2,
        });

        tl_titles.from(".textPanel", {
          opacity: 0,
          y: -20,
          duration: 0.7,
          stagger: 0.2,
        });
      }
    };

    handleResize();

    return () => {
      handleResize();
    };
  }, []);

  return (
    <div className="container_services">
      <section className="panel panel1">
        <div className="titlePanel1">
          <div className="boxCuadro boxCuadro1"></div>
          <strong className="strong_title-panel1">
            Entrenamientos Innovadores
          </strong>
          <div className="boxCuadro boxCuadro2"></div>
        </div>

        <div className="textPanel">
          <p>
            Desarrollo de acciones técnico <strong>/</strong> tácticas
            innovadoras
          </p>
          <div className="lineYellow"></div>
        </div>
      </section>

      <section className="panel panel2">
        <div className="titlePanel1">
          <div className="boxCuadro boxCuadro1"></div>
          <strong className="strong_title-panel1">Futbol Mixto</strong>
          <div className="boxCuadro boxCuadro2"></div>
        </div>

        <div className="textPanel">
          <p>Esperamos niños y niñas de entre 8 y 12 años</p>
          <div className="lineYellow"></div>
        </div>
      </section>

      <section className="panel panel3">
        <div className="titlePanel1">
          <div className="boxCuadro boxCuadro1"></div>
          <strong className="strong_title-panel1">
            Informes Personalizados{" "}
          </strong>
          <div className="boxCuadro boxCuadro2"></div>
        </div>

        <div className="textPanel">
          <p>
            Cada joven será evaluado y recibirá notificaciones escritas durante
            el cuatrimestre vigente
          </p>
          <div className="lineYellow"></div>
        </div>

        <div className="circle-wrapper">
          <div className="punt1"></div>
        </div>
      </section>
    </div>
  );
};

export default ServicesScroll;
