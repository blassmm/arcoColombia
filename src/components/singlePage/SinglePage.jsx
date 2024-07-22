import React from "react";
import { lazy, Suspense } from "react";
const Services = lazy(() => import("./services/Services"));
const About = lazy(() => import("./about/About"));
const Contact = lazy(() => import("./contact/Contact"));
const Arco = lazy(() => import("./arco/Arco"));
const Faqs = lazy(() => import("./faqs/Faqs"));
const Footer = lazy(() => import("./footer/Footer"));
const Home = lazy(() => import("./home/Home"));

const SinglePage = () => {
  return (
    <Suspense fallback={""}>
      <Home />
      <About />
      <Services />
      <Contact />
      <Faqs />
      <Arco />
      <Footer />
    </Suspense>
  );
};

export default SinglePage;
