import React from "react";
import css from "./products.module.css";
import { useState } from "react";
import plane from "../../Assets/img1.jpg";

import {SkinProducts} from "../../data/products";

function Products (){

    const [MenuProducts,setMenuProducts] = useState(SkinProducts);

    const filter = (type) => {
         setMenuProducts(SkinProducts.filter((product)=>(
             product.detail === type
         )))
    }

    return(

        <div className={css.container}>
            <h1>Our Featured Products</h1>

            <div className={css.products}>
                <ul className={css.menu}>
                    <li onClick={()=>setMenuProducts(SkinProducts)}>All</li>
                    <li onClick={()=>filter("Cleanser")}>Cleanser</li>
                    <li onClick={()=>filter("Moisturizer")}>Moisturizer</li>
                    <li onClick={()=>filter("Vitamin C")}>Vitamin C</li>
                    <li onClick={()=>filter("Toner")}>Toner</li>
                </ul>

                <div className={css.list}>
                    {MenuProducts.map((product,i) => (
                            <div className={css.product}>
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
    )
}

export default Products;