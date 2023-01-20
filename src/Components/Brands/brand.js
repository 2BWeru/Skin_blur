import {TiShoppingCart} from "react-icons/ti";
import React, { useEffect } from "react";
import { SkinProducts } from "../../data/products";
import {useState} from "react";
import "./brand.css";
import {BiMessageSquareAdd,BiMessageSquareMinus} from "react-icons/bi"
// modal
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { handleClose,handleOpen} from "../Cart/cart";
// success message
import css from "classnames";

import Cart from "../Cart/cart";
import { ImCart } from "react-icons/im";


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1000,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };


function Brands () {
    // modal
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    const [cart, setCart] = useState([]);
    const [count,setCount] = useState(0);
    const [isShow, setIsShow] = useState(true);
    const [isCartEmpty,setisCartEmpty] = useState(false);
  
    const [MenuProducts,setMenuProducts] = useState(SkinProducts);

    const filter=(collections)=>{
        setMenuProducts(SkinProducts.filter((product)=>(
            product.detail === collections
        )))
    }

    
  
    const addToCart = (product) =>{
            setCart([...cart,product]);
            console.log(cart.length);
        
       
    }

    
    const deleteCart = (product) =>{
            setCart(cart.filter((prevItem)=>(
                prevItem.name != product
            ),
            console.log(cart.length)

            ))
    }

    const addCartCount = (products) =>{
        setCount(cart.filter((cartItems)=>(
            cartItems.name === products
        )))   
    }

    // see if array is empty
   
    
 
    // calculate total 
    const calculateCart = cart.reduce((prevVal,currentVal)=>{
        return (parseInt(prevVal) + parseInt(currentVal.price))
    },0) 
    
    const totalPrice = calculateCart;
 
    return(
        <>
            <div className="c-container">
                <div>
                    <div className="c-nav">
                    <ul className="c-list">
                        <li onClick={()=>setMenuProducts(SkinProducts)}>All</li>
                        <li onClick={()=>filter("Toner")}>Toner</li>
                        <li onClick={()=>filter("Vitamin C")}>Vitamin C</li>
                        <li onClick={()=>filter("Cleanser")} >Cleanser</li>
                        <li onClick={()=>filter("Moisturizer")}>Moisturizer</li>
                        <li onClick={handleOpen}><TiShoppingCart  />{count}</li>

                    </ul>
                    </div>
                </div>
            </div>
            <div className="c-wrapper">
              {MenuProducts.map((product,i)=>(
                <div className="c-card">
                        
                            <div>
                                <img src={product.img} alt="collection" className="image-brand"/>
                                    <div className="c-text">
                                        <br />
                                      <span className="name">{product.name}</span> 
                                     <TiShoppingCart className="c-icon" onClick={()=>addToCart(product)} />

                                      <span>{product.price} $</span>
                                    </div>
                            </div>                        
                </div>
              ))}
            </div>

    {/* modal*/}
    <div>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
        <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
            SKINBLUR
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Cart Items:
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
             {cart.length === 0 && <p>Cart is Empty</p>}
        </Typography>
        
        <table className="styled-table">
            <thead>
                <tr>
                    <th>Brand Name</th>
                    <th>Price $</th>
                    <th>Image</th>
                    <th>Add more items</th>
                    <th>Remove item</th>
                    <th> </th>
                </tr>
            </thead>
            <tbody>
                {cart.map((cartItems,i)=>(
                    
                <tr>
                    <td>{cartItems.name}</td>
                    <td>{cartItems.price}</td>
                    <td><img src={cartItems.img} className="cart-image"/></td>
                    <td><BiMessageSquareAdd onClick={()=>addCartCount(cartItems.name)}/> {count} </td>
                    <td><BiMessageSquareMinus /></td>
                    <td><button onClick={()=>deleteCart(cartItems.name)}>Delete</button></td>

                </tr>

                ))}  
            </tbody>
            <div>
                <p>Total Amount :{totalPrice}$</p> 
                <button>Checkout</button>
                <p></p>  
            </div>   
            </table>
        </Box>
        </Modal>
    </div>


   
        </>
    )
}

export default Brands;