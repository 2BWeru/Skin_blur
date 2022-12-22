import React from "react";
import css from "./footer.module.css";
import logo from "../../Assets/logo2.png";
import {ImLocation2,ImUsers} from "react-icons/im";
import {RiInboxArchiveFill} from "react-icons/ri"
import {HiArrowNarrowRight} from "react-icons/hi"
import {BiLink} from "react-icons/bi"
import {IoIosHand} from "react-icons/io"





function Footer() {
    return(
        <div className={css.cFooterWrapper}>
          <hr/> 

          <div className={css.cFooter}>
              <div className={css.logo}>
                <img src={logo} alt="logo"/>
                    <span>SkinBlur</span>
              </div>

              <div className={css.Block}>
                <div className={css.detail}>
                    <span>Contact Us</span>
                    <span className={css.pngLine}>
                        <ImLocation2  className={css.icon}/>
                        <span> Nairobi, Kenya</span>
                    </span>

                    <span className={css.pngLine}>
                        <HiArrowNarrowRight  className={css.icon}/>
                        <a href="tel:0111662345">+254111662345</a>
                    </span>

                    <span className={css.pngLine}>
                        <RiInboxArchiveFill  className={css.icon}/>
                        <a href="mailto:skinblur@gmail.com">skinblur@gmail.com</a>
                    </span>
                    
                </div>
              </div>

              <div className={css.Block}>
                <div className={css.detail}>
                    <span>Resources</span>
                    <span className={css.pngLine}>
                        <IoIosHand className={css.icon}/>
                        <span>Sign In</span>
                    </span>
                </div>
              </div>

              <div className={css.Block}>
                <div className={css.detail}>
                    <span>Company</span>
                    <span className={css.pngLine}>
                        <BiLink  className={css.icon}/>
                        <span>Safety Privacy & Terms</span>
                    </span>
                </div>
              </div>
           </div> 
           <div className={css.Copyright}>
                    <span>Copyright @2022 by Skinblur .Inc</span>
                    <span>All Rights Reserved</span>
              </div>
        </div>
        
    )
}

export default Footer;