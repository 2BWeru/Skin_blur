import React from "react";
import "./collection.css";
import {TiShoppingCart} from "react-icons/ti";
import {useState} from "react";
import { SkinProducts } from "../../data/products";
import footer from "../Hero/footer.module.css";
import {ImLocation2,ImUsers} from "react-icons/im";
import {RiInboxArchiveFill} from "react-icons/ri";
import {HiArrowNarrowRight} from "react-icons/hi";
import {BiLink} from "react-icons/bi";
import {IoIosHand} from "react-icons/io";
import logo from "../../Assets/logo2.png";


function Collections () {
    const [MenuProducts,setMenuProducts] = useState(SkinProducts);

    const filter=(collections)=>{
        setMenuProducts(SkinProducts.filter((product)=>(
            product.brand === collections
        )))
    }
    return(
        <>
            <div className="c-container">
                <div>
                <h3 className="collection-text">We have a variety of Products from the Best Brands!!
                </h3>


                    <div className="c-nav">
                    <ul className="c-list">
                        <li onClick={()=>setMenuProducts(SkinProducts)}>All</li>
                        <li onClick={()=>filter("Hanahana Beauty")}>Hanahana Beauty</li>
                        <li onClick={()=>filter("Unsun")}>Unsun </li>
                        <li onClick={()=>filter("Hyper Skin")} >Hyper Skin</li>
                        <li onClick={()=>filter("Sharni daden")}>Sharni daden</li>
                    </ul>
                    </div>
                </div>
            </div>
                <div className="c-wrapper">
                 {MenuProducts.map((product,i)=>(
                   <div class="card">
                   <div class="card-img"><img src={product.img} /></div>
                    <div class="card-info">
                      <p class="text-title">{product.name}</p>
                      <p class="text-body">{product.detail}</p>
                    </div>
                   <div class="card-footer">
                    <span class="text-title">${product.price}</span>
                     
                    </div>
                   </div>
          
                 ))}
                    
                </div>
            {/* </div> */}
        
           {/* Footer */}

           <div className={footer.cFooterWrapper}>
          <hr/> 

          <div className={footer.cFooter}>
              <div className={footer.logo}>
                <img src={logo} alt="logo"/>
                    {/* <span>SkinBlur</span> */}
              </div>

              <div className={footer.Block}>
                <div className={footer.detail}>
                    <p className={footer.headtext}>Contact Us</p>
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
                    <p className={footer.headtext}>Resources</p>
                    <span className={footer.pngLine}>
                        <IoIosHand className={footer.icon}/>
                        <span>Sign In</span>
                    </span>
                </div>
              </div>

              <div className={footer.Block}>
                <div className={footer.detail}>
                    <p className={footer.headtext}>Company</p>
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

export default Collections;