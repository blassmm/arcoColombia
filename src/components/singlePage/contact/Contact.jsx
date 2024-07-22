import React, { useEffect } from "react";
import "./contact.css";
import telIcon from "../../assets/src/icons/contact.svg";
import emailIcon from "../../assets/src/icons/email.svg";
import ubiIcon from "../../assets/src/icons/ubi.svg";
import followIcon from "../../assets/src/icons/follow.svg";
import instaIcon from "../../assets/src/icons/insta.svg";
import faceIcon from "../../assets/src/icons/facebook.svg";

import gsap from "gsap";
import { Power4 } from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";

const Contact = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      ease: Power4.easeOut,
      scrollTrigger: {
        trigger: ".container_contact",
        start: "-200px top",
      },
    });

    if (window.innerWidth > 671) {
      tl.to(".line_title_contact", {
        width: "60rem",
        x: -100,
      });

      tl.from(".contactTitle", {
        opacity: 0,
        duration: 0.5,
        y: 20,
      });

      tl.from(".cont", {
        opacity: 0,
        duration: 0.5,
        stagger: 0.4,
        y: 20,
      });

      tl.from(".map", {
        opacity: 0,
        duration: 0.5,
        y: 20,
      });
    }
  }, []);

  return (
    <div className="contact" id="contact">
      <div className="container_contact">
        <div className="line_title_contact"></div>
        <h2 className="contactTitle">Contacto</h2>

        <div className="box_contact">
          <div className="cont tel">
            <hr className="hr_contact" />

            <div className="iconContac">
              <img
                width="70"
                height="70"
                className="iconContact"
                src={telIcon}
                alt="icon Telefono"
              />
            </div>
            <div className="boxTitleContact">
              <h2>Telefono</h2>
              <p>+54 9 221 593 5034</p>
            </div>
          </div>

          <div className="cont email">
            <hr className="hr_contact" />

            <div className="iconContac">
              <img
                width="70"
                height="70"
                className="emailIcon"
                src={emailIcon}
                alt="icon Email"
              />
            </div>
            <div className="boxTitleContact">
              <h2>Email</h2>
              <p>info@arcoacademia.co</p>
            </div>
          </div>

          <div className="cont ubi">
            <hr className="hr_contact" />

            <div className="iconContac">
              <img
                width="70"
                height="70"
                className="iconContact"
                src={ubiIcon}
                alt="icon Ubicacion"
              />
            </div>
            <div className="boxTitleContact">
              <h2>Ubicacion</h2>
              <p>
                Ac 24 #48-53 Bogotá, Colombia <br /> <br />
                (Wembley Estadio Futbol 5){" "}
              </p>
            </div>
          </div>

          <div className="cont follow">
            <hr className="hr_contact" />

            <div className="iconContac">
              <img
                width="70"
                height="70"
                className="iconFollow"
                src={followIcon}
                alt="icon Follow"
              />
            </div>
            <div className="boxTitleContact">
              <h2>Seguinos en</h2>
              <div className="redes">
                <a
                  href="https://www.instagram.com/arcoacademia/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="boxiconInstagram">
                    <img
                      className="iconInsta"
                      src={instaIcon}
                      width="60"
                      height="60"
                      alt="icon insta"
                    />
                  </div>
                </a>
                <a
                  href="https://www.facebook.com/arcoacademia.co"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="boxiconInstagram">
                    <img
                      className="iconInsta"
                      src={faceIcon}
                      width="60"
                      height="60"
                      alt="icon insta"
                    />
                  </div>
                </a>
              </div>
            </div>
            <hr className="hr_contact" />
          </div>
        </div>

        <div className="map">
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.759331677659!2d-74.09780119999999!3d4.6369709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9b64c2a6885b%3A0xac84df75fe3c72bf!2sWembley%20Estadio%20Futbol%205!5e0!3m2!1ses-419!2sar!4v1676063246703!5m2!1ses-419!2sar"
            width="900"
            height="430"
            referrerPolicy="no-referrer-when-downgrade"
            loading="lazy"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
