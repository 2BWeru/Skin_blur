import React from "react";
import "./collection.css";
import {TiShoppingCart} from "react-icons/ti";
import {useState} from "react";
import { SkinProducts } from "../../data/products";

function Collections () {
    const [MenuProducts,setMenuProducts] = useState(SkinProducts);

    const filter=(collections)=>{
        setMenuProducts(SkinProducts.filter((product)=>(
            product.detail === collections
        )))
    }
    return(
        <>
            <div className="c-container">
                <div>
                    <div className="c-nav">
                    <ul className="c-list">
                        <li onClick={()=>filter("Toner")}>Toner</li>
                        <li onClick={()=>filter("Vitamin C")}>Vitamin C</li>
                        <li onClick={()=>filter("Cleanser")} >Cleanser</li>
                        <li onClick={()=>filter("Moisturizer")}>Moisturizer</li>
                    </ul>
                    </div>
                </div>
            </div>
                <div className="c-wrapper">
                 {MenuProducts.map((product,i)=>(
                    <div className="c-card">
                        <div >
                            <TiShoppingCart className="c-icon"/>
                        </div>
                            <div>
                                <img src={product.img} alt="collection"/>
                                    <div className="c-text">
                                        <span>Name:{product.name}</span>
                                        <span>{product.price}Ksh</span>
                                    </div>
                            </div>                        
                    </div>
                 ))}
                    
                </div>
            {/* </div> */}
        
        </>
    )
}

export default Collections;