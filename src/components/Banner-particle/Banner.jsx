import React, { useEffect, useRef } from 'react';
import './Banner.scss'

const Banner = ({topTitle, title, left, id}) => {
    const particlesRef = useRef(null);

    useEffect(() => {
            particlesJS(id, {
                "particles": {
                    "number": {
                      "value": 337,
                      "density": {
                        "enable": true,
                        "value_area": 800
                      }
                    },
                    "color": {
                      "value": "#006eff"
                    },
                    "shape": {
                      "type": "polygon",
                      "stroke": {
                        "width": 0,
                        "color": "#000000"
                      },
                      "polygon": {
                        "nb_sides": 5
                      },
                      "image": {
                        "src": "img/github.svg",
                        "width": 100,
                        "height": 100
                      }
                    },
                    "opacity": {
                      "value": 0.43292125643369117,
                      "random": true,
                      "anim": {
                        "enable": false,
                        "speed": 0.9744926547616141,
                        "opacity_min": 0.13805312609122866,
                        "sync": false
                      }
                    },
                    "size": {
                      "value": 1,
                      "random": true,
                      "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 0.1,
                        "sync": false
                      }
                    },
                    "line_linked": {
                      "enable": true,
                      "distance": 150,
                      "color": "#4a98ff",
                      "opacity": 0.4,
                      "width": 1
                    },
                    "move": {
                      "enable": true,
                      "speed": 11.22388442605866,
                      "direction": "none",
                      "random": true,
                      "straight": false,
                      "out_mode": "bounce",
                      "bounce": false,
                      "attract": {
                        "enable": false,
                        "rotateX": 3848.1889460772545,
                        "rotateY": 3046.4829156444935
                      }
                    }
                  },
                  "interactivity": {
                    "detect_on": "canvas",
                    "events": {
                      "onhover": {
                        "enable": false,
                        "mode": "grab"
                      },
                      "onclick": {
                        "enable": false,
                        "mode": "repulse"
                      },
                      "resize": true
                    },
                    "modes": {
                      "grab": {
                        "distance": 400,
                        "line_linked": {
                          "opacity": 1
                        }
                      },
                      "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                      },
                      "repulse": {
                        "distance": 200,
                        "duration": 0.4
                      },
                      "push": {
                        "particles_nb": 4
                      },
                      "remove": {
                        "particles_nb": 2
                      }
                    }
                  },
                  "retina_detect": true
            });
    }, []);

    return (
        <div className="banner">
            <div className="container">
            <div className={`banner-content ${left ? "left" : ""}`}>
                <span className='h6'>{topTitle}</span>
                <h2>{title}</h2>
            </div>
            </div>
            <div ref={particlesRef} className='banner-particle' id={id} ></div>
        </div>
    );
};

export default Banner;