import React, { useState, useEffect } from "react";
import "./Header.scss";
import Logo from "../../assets/images/logo-long-white.svg";
import LogoShort from '../../assets/images/logo-short-white.svg';
import LogoDark from "../../assets/images/logo-long.svg";
import LogoShortDark from '../../assets/images/logo-short.svg';

const Header = ({ screenSize, reachedBanner, themeColor }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [logo, setLogo] = useState("");

 // Mettre à jour le logo lorsque reachedBanner change ou lorsque themeColor change
 useEffect(() => {
  const determineLogo = () => {
    if (screenSize.width > 501) {
      if (themeColor === 'dark'){
        setLogo(Logo);
      } else if (themeColor === 'light'){
        setLogo(reachedBanner? LogoDark : Logo);
      }
    } else {
      if (themeColor === 'dark'){
        setLogo(LogoShort);
      } else if (themeColor === 'light'){
        setLogo(reachedBanner? LogoShortDark : LogoShort);
      }
    }
  };

  determineLogo();
}, [screenSize.width, reachedBanner, themeColor]);


  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <header className={`${reachedBanner ? "reached-banner-header" : ""}`}>
      <div className="navbar">
       <div className="container">
       <div className="navbar-brand">
          <a href="/">
            <img src={logo} alt="logo" />
          </a>
        </div>

        <button className="btn-mobile" onClick={toggleMenu}>
          <div className="btn-line">
            <span className="line-top"></span>
            <span className="line-bottom"></span>
          </div>
          <span className="btn-text">menu</span>
        </button>

        <nav className={`nav ${openMenu ? "active-nav" : ""} ${reachedBanner ? "reached-banner-nav" : ""}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <a href="" className="nav-link active">
                accueil
              </a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link">
                à propos
              </a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link">
                services
              </a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link">
                processus
              </a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link">
                projets
              </a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link">
                testimonials
              </a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link">
                contact
              </a>
            </li>
          </ul>
        </nav>
       </div>
      </div>
    </header>
  );
};

export default Header;
