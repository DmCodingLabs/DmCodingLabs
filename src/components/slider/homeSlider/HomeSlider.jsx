import React, { useState, useEffect, useRef } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { IoIosArrowBack } from 'react-icons/io';
import './HomeSlider.scss';

const HomeSlider = () => {
  const slides = [
    {
      title: 'Développeur web',
      subtitle: 'Freelance'
    },
    {
      title: 'Web design',
      subtitle: 'Interface & expérience utilisateur'
    },
    {
      title: 'Web développement',
      subtitle: 'De la création jusqu’à la mise en production'
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [intervalId, setIntervalId] = useState(null); // Stocke l'ID de l'intervalle

  // Fonction pour passer au slide suivant
  const nextSlide = () => {
    setCurrentSlide(prevSlide => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
  };

  // Fonction pour passer au slide précédent
  const moveSlideLeft = () => {
    setCurrentSlide(prevSlide => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
  };

  // Effet secondaire pour démarrer le timer lors du montage du composant
  useEffect(() => {
    // Démarrer un nouvel intervalle
    const id = setInterval(nextSlide, 3500);
    setIntervalId(id);

    // Nettoyer l'intervalle lors du démontage du composant
    return () => clearInterval(id);
  }, []);

  // Fonction pour gérer le clic sur le bouton suivant
  const handleNextClick = () => {
    nextSlide(); // Passer au prochain slide
    clearInterval(intervalId); // Nettoyer l'intervalle existant
    const newIntervalId = setInterval(nextSlide, 3500); // Démarrer un nouvel intervalle
    setIntervalId(newIntervalId); // Mettre à jour l'ID de l'intervalle
  };

  // Fonction pour gérer le clic sur le bouton précédent
  const handlePrevClick = () => {
    moveSlideLeft(); // Passer au slide précédent
    clearInterval(intervalId); // Nettoyer l'intervalle existant
    const newIntervalId = setInterval(nextSlide, 2500); // Démarrer un nouvel intervalle
    setIntervalId(newIntervalId); // Mettre à jour l'ID de l'intervalle
  };



  return (
    <section className="home">
      <div className="slider">
        <div className="slider-inner">
          <button className="btn-slider left" onClick={handlePrevClick}>
            <IoIosArrowBack />
          </button>
          <ul className="slider-content" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            {slides.map((slide, index) => (
              <li className="slider-item" key={index}>
                <div className="slider-content-inner">
                  <h1 title={slide.title}>
                    <span className="slider-content-title">{slide.title}</span>
                    <span className="border">{slide.subtitle}</span>
                  </h1>
                </div>
              </li>
            ))}
          </ul>
          <button className="btn-slider right" onClick={handleNextClick}>
            <IoIosArrowForward />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeSlider;
