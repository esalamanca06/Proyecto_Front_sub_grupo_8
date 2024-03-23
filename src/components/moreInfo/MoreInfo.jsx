import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./MoreInfo.css";

import publicidad1 from '../../assets/images/publicidad1.jpeg'
import publicidad2 from '../../assets/images/publicidad2.jpeg'
import publicidad3 from '../../assets/images/publicidad3.jpeg'
import publicidad4 from '../../assets/images/publicidad4.jpeg'
import publicidad5 from '../../assets/images/publicidad5.jpeg'
import publicidad6 from '../../assets/images/publicidad6.jpeg'
import publicidad7 from '../../assets/images/publicidad7.jpeg'
import publicidad8 from '../../assets/images/publicidad8.jpeg'
import publicidad9 from '../../assets/images/publicidad9.jpeg'
import publicidad10 from '../../assets/images/publicidad10.jpeg'

export const MoreInfo = () => {
  return (
    <>
      <section className="historyContainer" id="history">
        <Carousel showArrows={false} infiniteLoop={true} showThumbs={false} showStatus={false} autoPlay={true} interval={6100}>
          <div data-aos="fade-down" data-aos-delay="300">
            <div className="myCarouselImages">
              <img src={publicidad1} alt="" srcset="" />
            </div>
          </div>
          <div data-aos="fade-down" data-aos-delay="300">
            <div className="myCarouselImages">
              <img src={publicidad2} alt="" srcset="" />
            </div>
          </div>
          <div data-aos="fade-down" data-aos-delay="300">
            <div className="myCarouselImages">
              <img src={publicidad3} alt="" srcset="" />
            </div>
          </div>
          <div data-aos="fade-down" data-aos-delay="300">
            <div className="myCarouselImages">
              <img src={publicidad4} alt="" srcset="" />
            </div>
          </div>
          <div data-aos="fade-down" data-aos-delay="300">
            <div className="myCarouselImages">
              <img src={publicidad5} alt="" srcset="" />
            </div>
          </div>
          <div data-aos="fade-down" data-aos-delay="300">
            <div className="myCarouselImages">
              <img src={publicidad6} alt="" srcset="" />
            </div>
          </div>
          <div data-aos="fade-down" data-aos-delay="300">
            <div className="myCarouselImages">
              <img src={publicidad7} alt="" srcset="" />
            </div>
          </div>
          <div data-aos="fade-down" data-aos-delay="300">
            <div className="myCarouselImages">
              <img src={publicidad8} alt="" srcset="" />
            </div>
          </div>
          <div data-aos="fade-down" data-aos-delay="300">
            <div className="myCarouselImages">
              <img src={publicidad9} alt="" srcset="" />
            </div>
          </div>
          <div data-aos="fade-down" data-aos-delay="300">
            <div className="myCarouselImages">
              <img src={publicidad10} alt="" srcset="" />
            </div>
          </div>
        </Carousel>
      </section>
    </>
  );
};
