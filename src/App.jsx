import "./App.css";
import { lazy, Suspense } from "react";
import Loader from "./components/assets/loader/Loader";
import Nav from "./components/nav/Nav";
import AudioLoader from "./components/audioLoader/AudioLoader";

const PreLoader = lazy(() => import("./components/preLoader/PreLoader"));
const SinglePage = lazy(() => import("./components/singlePage/SinglePage"));
const SvgLine = lazy(() => import("./components/svgLine/SvgLine"));

import ReactGA from "react-ga4";
import ClickAudio from "./components/audioLoader/ClickAudio";

const GOOGLE_ANALYTICS_ID = "G-S708FDQT0H";

ReactGA.initialize(GOOGLE_ANALYTICS_ID);

ReactGA.send({ hitType: "pageview", page: "arcoacademia.co" });

function App() {
  return (
    <>
      <ClickAudio />
      <Suspense fallback={<Loader />}>
        <div className="App">
          <PreLoader />
          <Nav />
          <SinglePage />
          <SvgLine />
          <AudioLoader />
        </div>
      </Suspense>
    </>
  );
}

export default App;
