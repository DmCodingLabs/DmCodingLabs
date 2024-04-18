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

  const [colorScheme, setColorScheme] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
  );

  // Update color scheme based on user preference change
  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (event) => {
      setColorScheme(event.matches ? "dark" : "light");
    };

    darkModeMediaQuery.addEventListener("change", handleChange);

    return () => {
      darkModeMediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  // Update screen size on window resize
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

  // Update headerReachedBanner based on scrolling
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".navbar");
      const home = document.querySelector(".home");

      if (header && home) {
        const headerBottom = header.getBoundingClientRect().bottom;
        const homeTop = home.getBoundingClientRect().bottom;

        setHeaderReachedBanner(headerBottom > homeTop);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [headerReachedBanner]);

  return (
    <>
      <Header screenSize={screenSize} reachedBanner={headerReachedBanner} themeColor={colorScheme} />
      <main>
        <HomeSlider />
        <Banner
          topTitle={'Qui je suis ?'}
          title={'à propos'}
          left={false}
          id={'banner-about'}
          bgColor={colorScheme}
        />
        <About />
        <Mission />
        <Banner
          topTitle={'Services'}
          title={'mes services'}
          left={true}
          id={'banner-services'}
          bgColor={colorScheme}
        />
        <Services />
        <Banner
          topTitle={'processus'}
          title={'mon processus'}
          left={false}id={'banner-process'}
          bgColor={colorScheme}
        />
        <Process />
        <Banner
          topTitle={'projets'}
          title={'mes projets'}
          left={false}
          id={'banner-project'}
          bgColor={colorScheme}
        />
        <Projects />
        <Banner
          topTitle={'contact'}
          title={'me contacter'}
          left={true}
          id={'banner-contact'}
          bgColor={colorScheme}
        />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;