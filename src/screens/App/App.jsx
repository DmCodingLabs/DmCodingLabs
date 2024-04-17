import React, { useState, useEffect } from "react";
import Banner from "../../components/Banner-particle/Banner";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import "../../assets/scss/reset.scss";
import "../../assets/scss/root.scss";
import HomeSlider from "../../components/slider/homeSlider/HomeSlider";
import About from "../Sections/about/About";
import Mission from "../Sections/mission/Mission";
import Services from "../Sections/services/Services";
import Process from "../Sections/process/Process";
import Projects from "../Sections/projects/Projects";
import Contact from "../Sections/contact/Contact";

function App() {
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [headerReachedBanner, setHeaderReachedBanner] = useState(false);

  useEffect(() => {
    const updateScreenSize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", updateScreenSize);

    return () => {
      window.removeEventListener("resize", updateScreenSize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('header');
      const banner = document.querySelector('.home');
      
      if (header && banner) {
        const headerBottom = header.getBoundingClientRect().bottom;
        const bannerTop = banner.getBoundingClientRect().bottom - 100;
        
        if (headerBottom >= bannerTop) {
          setHeaderReachedBanner(true);
        } else {
          setHeaderReachedBanner(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [headerReachedBanner]);

  return (
    <>
      <Header screenSize={screenSize} reachedBanner={headerReachedBanner} />
      <main>
        <HomeSlider />
        <Banner topTitle={'Qui je suis ?'} title={'à propos'} left={false} id={'banner-about'} />
        <About />
        <Mission />
        <Banner topTitle={'Services'} title={'mes services'} left={true} id={'banner-services'} />
        <Services />
        <Banner topTitle={'processus'} title={'mon processus'} left={false} id={'banner-process'} />
        <Process />
        <Banner topTitle={'projets'} title={'mes projets'} left={false} id={'banner-project'} />
        <Projects />
        <Banner topTitle={'contact'} title={'me contacter'} left={true} id={'banner-contact'} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
