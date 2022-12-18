import React from "react";
import css from "./slider.module.css";
import {Swiper,SwiperSlide} from "swiper/react";
import { Pagination,Navigation } from "swiper/react";

// import swipper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {SliderProducts} from "../../data/products"


function Slider(){
 return(
     <div className={css.s_container}>
       {/* install swipper library   npm i swiper */}
       <Swiper
       slidesPerView={3}
       slidesPerGroup={1}
       spaceBetween={40}
       loop={true}
       >
        {SliderProducts.map((slide,i)=>{
            <SwiperSlide>
                I am a product  
            </SwiperSlide> 
        })}

           
       </Swiper>
     </div>
 )
}

export default Slider;