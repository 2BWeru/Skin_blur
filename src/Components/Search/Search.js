import React from "react";
import { SkinProducts } from "../../data/products";
import "./search.css";


function Search ({filteredResults,searchInput,SkinProducts}) {
    return(
        <>
        {searchInput.length > 1 ? (
            filteredResults.map((item)=>{
                <div className="card">
                <div className="image"><span class="text">This is a chair.</span></div>
                    <h2 className="title">{item.name}</h2>
                    <span className="price">${item.price}</span>
                </div>
            })
        ):(
            SkinProducts.map((item)=>{
                <div className="card">
                <div className="image"><span class="text">This is a chair.</span></div>
                    <h2 className="title">{item.name}</h2>
                    <span className="price">${item.price}</span>
                </div>
            })
        ) }
        </>
    )
}
export default Search;