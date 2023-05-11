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
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: currentSlide,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
    arrows: false, // Oculta los botones "Next" y "Previous"

  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    sliderRef.current.slickGoTo(index);
  };

  const getSlideText = () => {
    switch (currentSlide) {
      case 0:
        return 'LAVANDER HAZE (OFFICIAL MUSIC VIDEO)';
      case 1:
        return 'ANTI-HERO (OFFICIAL MUSIC VIDEO)';
      case 2:
        return 'BEJEWELED (OFFICIAL MUSIC VIDEO)';
      default:
        return '';
    }
  };

  return (
    <div className="Reproductor-container">
      <Slider ref={sliderRef} {...settings}>
        <div className="slide">
          <div className="video-reproduction">
            <img src={Lavander} alt="Slide 1" />
            <div className="text-video">
              <h2>{getSlideText()}</h2>
            </div>
            <div className="play">
              <img src={Play} alt="Play button" />
            </div>
          </div>
        </div>
        <div className="slide2">
          <div className="video-reproduction2">
            <img src={Anti} alt="Slide 2" />
            <div className="text-video2">
              <h2>{getSlideText()}</h2>
            </div>
            <div className="play2">
              <img src={Play} alt="Play button" />
            </div>
          </div>
        </div>
        <div className="slide3">
          <div className="video-reproduction3">
            <img src={Beje} alt="Slide 3" />
            <div className="text-video">
              <h2>BEJEWELED (OFFICIAL MUSIC VIDEO)</h2>
            </div>
            <div className="play">
              <img src={Play} alt="Play button" />
            </div>
          </div>
        </div>
       
      </Slider>

      <div className="next-button">
        <img
          src={next}
          alt="Change Slide"
          onClick={() => goToSlide((currentSlide + 1) % 3)}
          style={{ cursor: 'pointer' }}
        />
      </div>

      <div className="prev-button">
        <img
        src={next}
        alt="Previous Slide"
        onClick={() => goToSlide((currentSlide - 1 + 3) % 3)}
        style={{ cursor: 'pointer' }}
        />
</div>

    </div>
  );
}

export default Reproductor;
