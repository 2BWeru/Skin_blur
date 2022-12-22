import React from "react";
import "./slider.css";
import {Swiper,SwiperSlide} from "swiper/react";
import { Pagination,Navigation } from "swiper";

// import swipper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { SliderProducts  } from "../../data/products"


function Slider(){
 return(
     <div className="s-container">

       {/* install swipper library   npm i swiper */}
       <Swiper 
       modules={[Pagination,Navigation]}
       className="mySwiper"
       navigation={true}

       loopFillGroupWithBlank={true}
       slidesPerView={3} slidesPerGroup={1} spaceBetween={40} loop={true}>
            {SliderProducts.map((slide,i) => (
                <SwiperSlide>
                    <div className="left-side">
                        <div className="name">
                            <span>{slide.name}</span>
                            <span>{slide.detail}</span>
                        </div>
                            <span>{slide.price}$</span>
                        <div>Shop Now</div>
                    </div> 
                    <img src={slide.img} alt="product" className="img-p"></img> 
                </SwiperSlide> 
            ))}           
       </Swiper>
    </div>
 )
}

export default Slider;