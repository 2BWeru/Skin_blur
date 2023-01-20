import Hero from "./Components/Hero/hero";


import css from "./App.module.css";
import logo from "./Assets/logo2.png";
import {BrowserRouter as Router,Link,Routes,Route} from "react-router-dom";
import Brands from "./Components/Brands/brand";
import Collections from "./Components/Collections/collections";
import {useState} from "react";


function App() {
  

  return (
    <>
      <Router>
        <div className={css.Header}>
          <div className={css.logo}>
            <img src={logo} alt="logo" height={100}></img>
            <span>SkinbLur</span>
          </div>

          <div className={css.right}>
            <div className={css.menu}>
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
                <li>Eng</li>
              </ul>
            </div>

            <input
              type="text"
              className={css.search}
              placeholder="Search"
            ></input>
            <Link to="cart">
            </Link>
          </div>
        </div>

        {/* Routing */}
        <Routes>
          <Route path="/brands" element={<Brands />}/>
          <Route path="/" element={<Hero />} />
          {/* <Route path="/cart" element={<Cart />} /> */}
          <Route path="/collections" element={<Collections />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
