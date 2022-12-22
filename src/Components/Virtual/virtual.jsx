import React from "react";
import css from "./virtual.module.css";
import imgface from "../../Assets/img8.jpg";
import ReactCompareImage from "react-compare-image";
import before from "../../Assets/img15.jpg";
import after from "../../Assets/img16.jpg";

function Virtual() {
    return(
        <div className={css.Virtual}>
            {/* left side */}
            <div className={css.left}>
                <span>Virtual Try On</span>
                <span>Never Buy The Wrong Shade Again</span>
                <span>Try Now</span>
                {/* <img src={imgface} alt="face" width={200}></img> */}

            </div>


            {/* right side */}
            <div className={css.right}>
                <div className={css.wrapper}>
                <ReactCompareImage
                    leftImage={before}
                    rightImage={after}
                >

                </ReactCompareImage>
                </div>
            </div>
        </div>
    )
}

export default Virtual;