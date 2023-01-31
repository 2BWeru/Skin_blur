import Hero from "./Components/Hero/hero";
import ProductDetail from "./Components/ProductDetail/productDetail";

import css from "./App.module.css";
import logo from "./Assets/logo2.png";
import {BrowserRouter as Router,Link,Routes,Route} from "react-router-dom";
import Brands from "./Components/Brands/brand";
import Collections from "./Components/Collections/collections";
import {useState} from "react";
import { SkinProducts } from "./data/products";
import {FaSearch} from "react-icons/fa";
import {GoThreeBars} from "react-icons/go";


// modal
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function App() {
  const [MenuProducts,setMenuProducts] = useState(SkinProducts);
  const [searchInput, setSearchInput] = useState('');
  const [filteredResults, setFilteredResults] = useState([]);
  const [cart,setCart] = useState([]);
  const [showMenu,setShowMenu]=useState(true);

  // modal
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const toggleNavbar=()=>{
    setShowMenu((showMenu)=>!showMenu)
  }
  // search
  const searchItems = (searchValue) => {
    setCart(SkinProducts.filter((item)=>(
      item.detail === searchValue,
      console.log(searchValue,MenuProducts,searchInput),
      console.log(item.detail === searchValue)
    )))
  }



  // find item in cart and add to cart
  const handleCartItem=(item)=>{
    const itemExists = cart.find((product)=>product.name === item.name);
    if(itemExists){
      setCart(cart.map((product)=>
        (product.name===item.name?
      {...itemExists,quantity:itemExists.quantity+1}:product),
      alert("Item "+cart.length +" Added To Cart")
      )
      );
    }else{
      setCart(([...cart,{...item,quantity:1}]),
      alert("Item "+cart.length +" Added To Cart"))
    }
  }

  // delete item in cart
  const deleteCartItem=(item)=>{
    const itemExists =  cart.find((product)=>product.name===item.name);
    if(itemExists.quantity === 1 ){
     setCart(cart.filter((product)=>product.name !== item.name))
    }else{
      setCart(cart.map((product)=>product.name===item.name?
      {...itemExists,quantity:itemExists.quantity-1}:product))
    }
  } 
// clear items in cart 
  const clearCartItems=()=>{
    setCart([])
  }

  const cartTotal = cart.reduce((price,cartItems)=>price+cartItems.quantity*cartItems.price,0)


  return (
    <>
      <Router>
        <div className={css.Header}>
          
          <div className={css.logo}>
            <img src={logo} alt="logo" height={100}></img>
            <span>SkinbLur</span>
          </div>
         
          <div className={css.right}>
             <div className={css.bars} onClick={toggleNavbar}>
                <GoThreeBars />
              </div>
            <div className={css.menu} style={{display:showMenu? 'inherit':'none'}}>
              <ul className={css.menu}>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="brands">Products</Link>
                </li>
                <li>
                  <Link to="collections">Collections</Link>
                </li>
                
              </ul>
            </div>
            {/* <input
              type="text"
              className={css.search}
              placeholder="Search"
              value={searchInput}
              onChange={(e)=>setSearchInput(e.target.value)}
            />
            <FaSearch onClick={() => (searchItems(searchInput),handleOpen())} className={css.searchIcon} />
             */}
          </div>
        </div>
        <div>
   
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {cart.length > 0?
          (cart.map((item)=>(
            <div>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                {item.name}
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
              </Typography>
            </div>
          )))
          :(
            <div>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              No product found!!!
            </Typography>
            </div>
          )
          }

        </Box>
      </Modal>
    </div>


        {/* Routing */}
        <Routes>
          <Route path="/brands" element={<Brands 
                 cart={cart} 
                 deleteCartItem={deleteCartItem} 
                 handleCartItem={handleCartItem} 
                 clearCartItems={clearCartItems}
                 cartTotal={cartTotal}
          />}/>
          <Route path="/" element={<Hero />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/product/:name" element={<ProductDetail />} SkinProducts={SkinProducts} handleCartItem={handleCartItem} deleteCartItem={deleteCartItem}/> 
        </Routes>
      </Router>
    </>
  );
}

export default App;
