import React from "react";
import css from "./hero.module.css"
import {FaOpencart} from "react-icons/fa"
import {BsArrowRight} from "react-icons/bs"
import hero from "../../Assets/hero.png"

import "./slider.css";
import {Swiper,SwiperSlide} from "swiper/react";
import { Pagination,Navigation } from "swiper";

// import swipper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { SliderProducts  } from "../../data/products"

import virtual from "./virtual.module.css";
import imgface from "../../Assets/img8.jpg";
import ReactCompareImage from "react-compare-image";
import before from "../../Assets/img15.jpg";
import after from "../../Assets/img16.jpg";

import products from "./products.module.css";
import { useState } from "react";

import {SkinProducts} from "../../data/products";

import footer from "./footer.module.css";
import logo from "../../Assets/logo2.png";
import {ImLocation2,ImUsers} from "react-icons/im";
import {RiInboxArchiveFill} from "react-icons/ri"
import {HiArrowNarrowRight} from "react-icons/hi"
import {BiLink} from "react-icons/bi"
import {IoIosHand} from "react-icons/io"

function Hero () {
    const [MenuProducts,setMenuProducts] = useState(SkinProducts);

    const filter = (type) => {
         setMenuProducts(SkinProducts.filter((product)=>(
             product.detail === type
         )))
    }

    return(
     <>
        <div className={css.container}>
            
            {/* first side */}
            <div className={css.h_sides}>
                <span className={css.text1}>Skin protection Cream</span>

                <div className={css.text2}>
                    <span>Trendy Collection</span>
                    <span>Trendy Collection</span>

                </div>
            </div>

            {/* middle side */}
            <div className={css.wrapper}>
                <div className={css.blueCircle}></div>
                <img src={hero} alt="hero"></img>

                <div className={css.cart2}>
                    <FaOpencart />
                </div>
                <div className={css.signup}>
                    <span>Best signup Offers</span>
                    <BsArrowRight />
                </div>
            </div>

            {/* last side */}
            <div className={css.h_sides}>
                <div className={css.traffic}>
                    <span>1.5M </span>
                    <span>Monthly Traffic</span>
                </div>
                <div className={css.customers}>
                    <span>100K </span>
                    <span>Happy Customers</span>
                </div>
            </div>
        </div>
        {/* slider */}
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
    {/* Virtual */}
    <div className={virtual.Virtual}>
            {/* left side */}
            <div className={virtual.left}>
                <span>Virtual Try On</span>
                <span>Never Buy The Wrong Shade Again</span>
                <span>Try Now</span>
                {/* <img src={imgface} alt="face" width={200}></img> */}

            </div>


            {/* right side */}
            <div className={virtual.right}>
                <div className={virtual.wrapper}>
                <ReactCompareImage
                    leftImage={before}
                    rightImage={after}
                >

                </ReactCompareImage>
                </div>
            </div>
        </div>

        {/* Products */}
        <div className={products.container}>
            <h1>Our Featured Products</h1>

            <div className={products.products}>
                <ul className={products.menu}>
                    <li onClick={()=>setMenuProducts(SkinProducts)}>All</li>
                    <li onClick={()=>filter("Cleanser")}>Cleanser</li>
                    <li onClick={()=>filter("Moisturizer")}>Moisturizer</li>
                    <li onClick={()=>filter("Vitamin C")}>Vitamin C</li>
                    <li onClick={()=>filter("Toner")}>Toner</li>
                </ul>

                <div className={products.list}>
                    {MenuProducts.map((product,i) => (
                            <div className={products.product}>
                                <div className="left-side">
                                    <div className="name">
                                        <span>{product.name}</span>
                                        <span>{product.detail}</span>
                                    </div>
                                        <span>{product.price}$</span>
                                        <div>Shop Now</div>
                                </div>

                                <img src={product.img} alt="product" className="img-p"></img>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>

        {/* Footer */}

        <div className={footer.cFooterWrapper}>
          <hr/> 

          <div className={footer.cFooter}>
              <div className={footer.logo}>
                <img src={logo} alt="logo"/>
                    <span>SkinBlur</span>
              </div>

              <div className={footer.Block}>
                <div className={footer.detail}>
                    <span>Contact Us</span>
                    <span className={footer.pngLine}>
                        <ImLocation2  className={footer.icon}/>
                        <span> Nairobi, Kenya</span>
                    </span>

                    <span className={footer.pngLine}>
                        <HiArrowNarrowRight  className={footer.icon}/>
                        <a href="tel:0111662345">+254111662345</a>
                    </span>

                    <span className={footer.pngLine}>
                        <RiInboxArchiveFill  className={footer.icon}/>
                        <a href="mailto:skinblur@gmail.com">skinblur@gmail.com</a>
                    </span>
                    
                </div>
              </div>

              <div className={footer.Block}>
                <div className={footer.detail}>
                    <span>Resources</span>
                    <span className={footer.pngLine}>
                        <IoIosHand className={footer.icon}/>
                        <span>Sign In</span>
                    </span>
                </div>
              </div>

              <div className={footer.Block}>
                <div className={footer.detail}>
                    <span>Company</span>
                    <span className={footer.pngLine}>
                        <BiLink  className={footer.icon}/>
                        <span>Safety Privacy & Terms</span>
                    </span>
                </div>
              </div>
           </div> 
           <div className={footer.Copyright}>
                    <span>Copyright @2022 by Skinblur .Inc</span>
                    <span>All Rights Reserved</span>
              </div>
        </div>
     </>
    )
}

export default Hero;

