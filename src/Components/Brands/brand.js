import { TiShoppingCart } from "react-icons/ti";
import React, { useEffect } from "react";
import { SkinProducts } from "../../data/products";
import { useState } from "react";
import "./brand.css";
import { BiMessageSquareAdd, BiMessageSquareMinus } from "react-icons/bi";
import footer from "../Hero/footer.module.css";
import { ImLocation2, ImUsers } from "react-icons/im";
import { RiInboxArchiveFill } from "react-icons/ri";
import { HiArrowNarrowRight } from "react-icons/hi";
import { BiLink } from "react-icons/bi";
import { IoIosHand } from "react-icons/io";
import logo from "../../Assets/logo2.png";

// modal
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Backdrop from "@mui/material/Backdrop";

import { Link } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1000,
  '@media (max-width: 669px)': {
    width: "50%",
  },
  width: 1000,
  '@media (max-width: 994px)': {
    width: "50%",
  },
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const styleCheckout = {
  position: "absolute",
  top: "50%",
  left: "50%",
  width: 1000,
  '@media (max-width: 669px)': {
    width: "50%",
    margin:"2%",
  },
  '@media (max-width: 994px)': {
    width: "50%",
    margin:"2%",
  },
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
function Brands({
  cart,
  handleCartItem,
  deleteCartItem,
  clearCartItems,
  cartTotal,
}) {
  // modal
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // checkoutmodal
  const [openCheckout, setOpenCheckout] = useState(false);
  const handleOpenCheckout = () => setOpenCheckout(true);
  const handleCloseCheckout = () => setOpenCheckout(false);

  const [count, setCount] = useState(0);
  const [MenuProducts, setMenuProducts] = useState(SkinProducts);

  const filter = (collections) => {
    setMenuProducts(
      SkinProducts.filter((product) => product.detail === collections)
    );
  };

  // see if array is empty
  const cartNum = cart.length;

  return (
    <>
      <div className="c-container">
        <div>
          <div className="c-nav">
            <ul className="c-list">
              <li onClick={() => setMenuProducts(SkinProducts)}>All</li>
              <li onClick={() => filter("Toner")}>Toner</li>
              <li onClick={() => filter("Vitamin C")}>Vitamin C</li>
              <li onClick={() => filter("Cleanser")}>Cleanser</li>
              <li onClick={() => filter("Sharni daden")}>Moisturizer</li>
              <li onClick={handleOpen}>
                <TiShoppingCart />
                {cartNum}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="c-wrapper">
        {MenuProducts.map((product, i) => (
          <div class="card">
            <div class="card-img">
              <Link to={`/product/${product.name}?${product.price}?${product.img}?${product.detail}?${product.brand}`}>
                <img src={product.img} />
              </Link>
            </div>
            <div class="card-info">
              <p class="text-title">{product.name}</p>
              <p class="text-body">{product.detail}</p>
            </div>
            <div class="card-footer">
              <span class="text-title">${product.price}</span>
              <div class="card-button">
                <svg
                  class="svg-icon"
                  viewBox="0 0 20 20"
                  onClick={() => handleCartItem(product)}
                >
                  <path d="M17.72,5.011H8.026c-0.271,0-0.49,0.219-0.49,0.489c0,0.271,0.219,0.489,0.49,0.489h8.962l-1.979,4.773H6.763L4.935,5.343C4.926,5.316,4.897,5.309,4.884,5.286c-0.011-0.024,0-0.051-0.017-0.074C4.833,5.166,4.025,4.081,2.33,3.908C2.068,3.883,1.822,4.075,1.795,4.344C1.767,4.612,1.962,4.853,2.231,4.88c1.143,0.118,1.703,0.738,1.808,0.866l1.91,5.661c0.066,0.199,0.252,0.333,0.463,0.333h8.924c0.116,0,0.22-0.053,0.308-0.128c0.027-0.023,0.042-0.048,0.063-0.076c0.026-0.034,0.063-0.058,0.08-0.099l2.384-5.75c0.062-0.151,0.046-0.323-0.045-0.458C18.036,5.092,17.883,5.011,17.72,5.011z"></path>
                  <path d="M8.251,12.386c-1.023,0-1.856,0.834-1.856,1.856s0.833,1.853,1.856,1.853c1.021,0,1.853-0.83,1.853-1.853S9.273,12.386,8.251,12.386z M8.251,15.116c-0.484,0-0.877-0.393-0.877-0.874c0-0.484,0.394-0.878,0.877-0.878c0.482,0,0.875,0.394,0.875,0.878C9.126,14.724,8.733,15.116,8.251,15.116z"></path>
                  <path d="M13.972,12.386c-1.022,0-1.855,0.834-1.855,1.856s0.833,1.853,1.855,1.853s1.854-0.83,1.854-1.853S14.994,12.386,13.972,12.386z M13.972,15.116c-0.484,0-0.878-0.393-0.878-0.874c0-0.484,0.394-0.878,0.878-0.878c0.482,0,0.875,0.394,0.875,0.878C14.847,14.724,14.454,15.116,13.972,15.116z"></path>
                </svg>
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
            <u>
              <Typography
                id="modal-modal-title"
                variant="h3"
                component="h5"
                sx={{ mt: 3 }}
              >
                SKINBLUR
              </Typography>
            </u>

            <Typography
              id="modal-modal-description"
              sx={{ mt: 2 }}
            ></Typography>
            {cart.length >= 1 && (
              <button onClick={() => clearCartItems()} className="clearButton">
                <span>Clear Cart</span>
              </button>
            )}

            <table id="responsive-table" className="body-table">
				<thead>
					<tr>
                    <th>Brand Name</th>
                    <th>Price $</th>
                    <th>Image</th>
                    <th>Add more items</th>
                    <th>Remove item</th>
                    <th> </th>
                    <th> </th>
						
					</tr>
				</thead>
				<tbody>
                {cart.map((cartItems, index) => (
                  <tr key={index}>
                    <td>{cartItems.name}</td>
                    <td>{cartItems.price}</td>
                    <td>
                      <img src={cartItems.img} className="cart-image" />
                    </td>
                    <td>
                      <BiMessageSquareAdd
                        onClick={() => handleCartItem(cartItems)}
                      />
                      {cartItems.quantity}
                    </td>
                    <td>
                      <BiMessageSquareMinus
                        onClick={() => deleteCartItem(cartItems)}
                      />
                      {cartItems.quantity}
                    </td>
                    <td>{cartItems.id}</td>
                    <td onClick={() => deleteCartItem(cartItems)}>Delete</td>
                  </tr>
                ))}
              <th>Total Amount :{cartTotal}$</th>

				</tbody>
			</table>

            {cart.length === 0 && (
              <button>
                <span>Cart Is Empty</span>
              </button>
            )}
            {cart.length >= 1 && (
              <button onClick={handleOpenCheckout}>
                <span>Checkout</span>
              </button>
            )}
          </Box>
        </Modal>
      </div>

      {/* checkout modal */}
      <div>
        <Button onClick={handleOpenCheckout}>Open modal</Button>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={openCheckout}
          onClose={handleCloseCheckout}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={openCheckout}>
            <Box sx={styleCheckout}>
              <Typography
                id="transition-modal-title"
                variant="h5"
                component="h4"
              >
                <h2>Thank You for Shopping with SkinBlur.</h2>
              </Typography>
              <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                We value our Customers and Hope to provide the best Shopping
                Exprience.
              </Typography>
              <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                <b>Total Cost: {cartTotal} $</b>
              </Typography>
              <Typography
                id="transition-modal-description"
                sx={{ mt: 2 }}
              ></Typography>
            </Box>
          </Fade>
        </Modal>
      </div>

      {/* Footer */}

      <div className={footer.cFooterWrapper}>
        <hr />

        <div className={footer.cFooter}>
          <div className={footer.logo}>
            <img src={logo} alt="logo" />
            {/* <span>SkinBlur</span> */}
          </div>

          <div className={footer.Block}>
            <div className={footer.detail}>
              <p className={footer.headtext}>Contact Us</p>
              <span className={footer.pngLine}>
                <ImLocation2 className={footer.icon} />
                <span> Nairobi, Kenya</span>
              </span>

              <span className={footer.pngLine}>
                <HiArrowNarrowRight className={footer.icon} />
                <a href="tel:0111662345">+254111662345</a>
              </span>

              <span className={footer.pngLine}>
                <RiInboxArchiveFill className={footer.icon} />
                <a href="mailto:skinblur@gmail.com">skinblur@gmail.com</a>
              </span>
            </div>
          </div>

          <div className={footer.Block}>
            <div className={footer.detail}>
              <p className={footer.headtext}>Resources</p>
              <span className={footer.pngLine}>
                <IoIosHand className={footer.icon} />
                <span>Sign In</span>
              </span>
            </div>
          </div>

          <div className={footer.Block}>
            <div className={footer.detail}>
              <p className={footer.headtext}>Company</p>
              <span className={footer.pngLine}>
                <BiLink className={footer.icon} />
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
  );
}

export default Brands;
