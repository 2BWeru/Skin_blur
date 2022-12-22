import React from "react";
import css from "./hero.module.css"
import {FaOpencart} from "react-icons/fa"
import {BsArrowRight} from "react-icons/bs"
import hero from "../../Assets/hero.png"

function Hero () {
    return(
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
    )
}

export default Hero;

