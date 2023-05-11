import React, { useState, useRef } from 'react';
import "./Reproductor.css";
import ReactPlayer from "react-player";
import Lavander from "/./imgs/lavander.jpg";
import Anti from "/./imgs/anti-hero.jpg";
import Beje from "/./imgs/bejeweled.jpg";
import Play from "/./imgs/icply.png";
import next from "/./imgs/acw.png";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Reproductor() {

    const [currentSlide, setCurrentSlide] = useState(0);
    const sliderRef = useRef();
  
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: currentSlide,
      beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex)
    };
  
    const goToSlide = (index) => {
      setCurrentSlide(index);
      sliderRef.current.slickGoTo(index);
    };
    
    return (
        <div className="Reproductor-container">
            <Slider ref={sliderRef} {...settings}>
                <div className="slide">
                    <div className="video-reproduction">
                        <   img src={Lavander} alt="Slide 1" />
                        <div className="text-video">
                            <h2>LAVANDER HAZE (OFFICIAL MUSIC VIDEO)</h2>
                        </div>
                        <div className="play">
                            <img src={Play} alt="Play button" />
                        </div>
                    </div>
                
                </div>
            </Slider>


            <div className='next-button'>
                <img
                    src={next}
                    alt="Change Slide"
                    onClick={() => goToSlide((currentSlide + 1) % 3)}
                    style={{ cursor: 'pointer' }}
                />
            </div>
           
        </div>
    );
}

export default Reproductor;
