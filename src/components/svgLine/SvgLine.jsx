import React, { useEffect, useRef } from "react";
import "./svgLine.css";

const SvgLine = () => {
  const svgRef = useRef(null);

  useEffect(() => {
    let path = svgRef.current.querySelector("path");

    let pathLength = path.getTotalLength();

    path.style.strokeDasharray = pathLength + " " + pathLength;
    path.style.strokeDashoffset = pathLength;

    window.addEventListener("scroll", () => {
      let scrollPercentage =
        (document.documentElement.scrollTop + document.body.scrollTop) /
        (document.documentElement.scrollHeight +
          document.documentElement.clientHeight);
      let drawLength = pathLength * scrollPercentage;
      path.style.strokeDashoffset = pathLength - drawLength;
    });
  });

  return (
    <div className="line-container">
      <svg
        ref={svgRef}
        className="svgLine"
        viewBox="0 0 1398 132"
        fill="none"
        xmlns="https://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMax meet"
      >
        <path
          className="e"
          d="M1 120.832C1 120.832 671 167.332 652 43.3322C633 -80.6678 1296.5 120.832 1296.5 120.832"
          stroke="rgb(54, 174, 255)"
          strokeWidth="3"
        />
      </svg>
    </div>
  );
};

export default SvgLine;

/*    
    window.addEventListener("scroll" , () => {
        let path = svgRef.current.querySelectorAll("path");
        let scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight + document.documentElement.clientHeight)
        


    for ( let i = 0 ; i < path.length; i++){
        let paths = path[i]
        let pathLength = paths.getTotalLength()
        paths.style.strokeDasharray = pathLength + " " + pathLength;
        paths.style.strokeDashoffset = pathLength;

        let drawLength = pathLength * scrollPercentage;
        paths.style.strokeDashoffset = pathLength - drawLength
    }

})
 */
