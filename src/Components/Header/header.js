import React from "react";
import css from "./header.module.css"
import {TiShoppingCart} from "react-icons/ti"
import logo from "../../Assets/logo2.png"

function Header() {
    return (
      <div className={css.Header}>
         
         <div className={css.logo}>
             <img src={logo} alt="logo" height={100}></img>
             <span>SkinbLur</span>
         </div>

         <div className={css.right}>
             <div className={css.menu}>
                <ul className={css.menu}>
                    <li>Brands</li>
                    <li>Collections</li>
                    <li>Sales</li>
                    <li>New</li>
                    <li>Eng</li>
                </ul>
             </div>

            <input type="text" className={css.search} placeholder="Search"></input>
                    <TiShoppingCart className={css.cart}/>  
        </div>
    </div>

      
    );
  }
  
  export default Header;
  