import React, {useEffect, useState, useRef, useCallback} from 'react'
import "./audioLoader.css"
import muchachosAudio from "../assets/audio/muchachosInstru.mp3"
import ReactGA from 'react-ga4'


const AudioLoader = () => {
    const [activeSound , setActiveSound] = useState(false)

    const handlerActiveSound = () => {
        setActiveSound(!activeSound)
        if(!activeSound){          
            ReactGA.event({
                category: "Interaccion",
                action: "Musica Encendida",
                label: "Un usuario encendio la musica",
                nonInteraction: false
            });
        }else{
            ReactGA.event({
                category: "Interaccion",
                action: "Musica Apagada",
                label: "Un usuario apago la musica",
                nonInteraction: false
            });
        }
    }

    const audioAmbiente = useRef(null)

    const playAudio = useCallback(() => {
        if (activeSound){
            audioAmbiente.current.play()
            audioAmbiente.current.volume= 0.1
        }else{
            audioAmbiente.current.pause()
        }
    }, [activeSound, audioAmbiente])

    useEffect(() => {
        playAudio()
    }, [playAudio])


    const [soundOff, setSoundOff] = useState(true)

    const handlerSound = () => {
        setSoundOff(!soundOff)
    }


  return (
    <div className="loader" onClick={handlerActiveSound}>
      <div className="loaderBox">
          <div className="circleBlur"></div>
          <svg className='circle' xmlns="https://www.w3.org/2000/svg" xmlLang="en" xmlnsXlink="https://www.w3.org/1999/xlink" viewBox="0 0 500 500" onClick={handlerSound}>
            <defs>
              <path id="textcircle" d="M250,400
                          a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z" transform="rotate(12,250,250)" />
            </defs>
            {
              soundOff ?
                <g className="textcircle">
                  <text className='textCircle' textLength="942">
                    <textPath 
                              xlinkHref="#textcircle" 
                              aria-label="SOUND ON" 
                              textLength="942">  • PRENDER MUSICA • PRENDER MUSICA &nbsp;
                    </textPath>
                  </text>
                </g>

              :

              <g className="textcircle">
                <text className='textCircle' textLength="942">
                  <textPath 
                            xlinkHref="#textcircle" 
                            aria-label="SOUND ON" 
                            textLength="942">  • APAGAR MUSICA • APAGAR MUSICA  &nbsp;
                  </textPath>
                </text>
              </g>

            }

          </svg>


          <audio ref={audioAmbiente} src={muchachosAudio}  autoPlay loop ></audio>
        {
            activeSound ? 
              <div id="bars">
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
              </div>
            :

            <div id="bar_line">
              <div className="bar_out"></div>
              <div className="bar_out"></div>
              <div className="bar_out"></div>
              <div className="bar_out"></div>
              <div className="bar_out"></div>
              <div className="bar_out"></div>
              <div className="bar_out"></div>
              <div className="bar_out"></div>
              <div className="bar_out"></div>
              <div className="bar_out"></div>
              <div className="bar_out"></div>
            </div>
        }


      </div>
     
    </div>
  )
}

export default AudioLoader