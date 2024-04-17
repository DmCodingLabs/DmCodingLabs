import React, { useState, useRef, useEffect } from 'react';
import './Process.scss';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';

const Process = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderContainerRef = useRef(null);
  const totalSlides = cards.length;
  const [btnNextVisible, setNextVisible] = useState(false)

  const nextSlide = () => {
    console.log(isLastCardVisible);
    if (isLastCardVisible()) {
      return;
    }
    setCurrentSlide((prevSlide) => (prevSlide === totalSlides -1  ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? totalSlides - 1 : prevSlide - 1));
  };

  const isLastCardVisible = () => {
    if (sliderContainerRef.current) {
      const containerRect = sliderContainerRef.current.getBoundingClientRect();
      const lastCardRect = sliderContainerRef.current.lastElementChild.getBoundingClientRect();

      if(lastCardRect.right - 220 <= containerRect.right){
        setNextVisible(true)
        return true;
      } else {
        setNextVisible(false)
        return false;
      }
    }
  };

  useEffect(() => {
    isLastCardVisible();
  })

  return (
    <section className="process">
      <div className="container">
        <div className="slider">
          <div className="slider-container" ref={sliderContainerRef}>
            <ul className="slider-list" style={{ transform: `translateX(-${currentSlide * (100 / totalSlides)}%)` }}>
              {cards.map((card, index) => (
                <li key={index} className="card">
                  <div className="card-container">
                    <span className="number border">0{index + 1}</span>
                    <div className="title">
                      <h3>{card.title}</h3>
                    </div>
                    <p className="text">{card.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="btn-container">
            <button className="btn-prev" onClick={prevSlide} style={{ display: currentSlide === 0 ? 'none' : 'block' }}>
              <IoIosArrowBack />
            </button>
            <button className="btn-next" onClick={nextSlide} style={{ display: btnNextVisible ? 'none' : 'block' }}>
              <IoIosArrowForward />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const cards = [
  {
    title: 'Prise de rendez-vous',
    description: 'Un rendez-vous sera fixé (téléphonique ou sur place dans vos locaux) mais surtout en fonction de vos disponibilités.',
  },
  {
    title: 'Cahier des charges',
    description: 'Un cahier des charges sera mis en place pour faciliter la compréhension de vos attentes pendant le processus de création.',
  },
  {
    title: 'Design',
    description: 'Un cahier des charges sera mis en place pour faciliter la compréhension de vos attentes pendant le processus de création.',
  },
  {
    title: 'Développement',
    description: 'Un cahier des charges sera mis en place pour faciliter la compréhension de vos attentes pendant le processus de création.',
  },
  {
    title: 'Mise en production',
    description: 'Un cahier des charges sera mis en place pour faciliter la compréhension de vos attentes pendant le processus de création.',
  },
  {
    title: 'Mise en production',
    description: 'Un cahier des charges sera mis en place pour faciliter la compréhension de vos attentes pendant le processus de création.',
  },
  {
    title: 'Mise en production',
    description: 'Un cahier des charges sera mis en place pour faciliter la compréhension de vos attentes pendant le processus de création.',
  },
  {
    title: 'Mise en production',
    description: 'Un cahier des charges sera mis en place pour faciliter la compréhension de vos attentes pendant le processus de création.',
  },
  {
    title: 'Mise en production',
    description: 'Un cahier des charges sera mis en place pour faciliter la compréhension de vos attentes pendant le processus de création.',
  },
  {
    title: 'Mise en production',
    description: 'Un cahier des charges sera mis en place pour faciliter la compréhension de vos attentes pendant le processus de création.',
  },
  {
    title: 'Mise en production',
    description: 'Un cahier des charges sera mis en place pour faciliter la compréhension de vos attentes pendant le processus de création.',
  },

];

export default Process;