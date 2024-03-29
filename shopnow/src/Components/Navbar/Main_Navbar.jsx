import React from "react";
 import "./Main_Navbar.css"
import logo from "../../images/ShopNow.png";
import { BsFillPencilFill } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { HiShoppingCart } from "react-icons/hi";
import { Link } from "react-router-dom";
import { User } from "../../Pages/Signup_Login/User";

const Navbar = () => {
  const handleSearch=()=>{
    return <input type="text" />
  }
  return (
    <>
      <header>
        <div className="container">
          <Link to="/">
            <div className="logo">
              <img width={180} src={logo} alt="" />
            </div>
          </Link>
          <nav>
            <ul>
              <li className="hover-effect">
                <a href="#">WOMEN</a>
              </li>
              <li className="hover-effect">
                <Link to="/products">
                  <a href="#">MEN</a>
                </Link>
                <div className="mega-menu">
                  <div className="mega-menu-items">
                    <h3>Top Wears</h3>
                    <ul>
                      <li>
                        <a href="#">T-Shirts</a>
                      </li>
                      <li>
                        <a href="#">Polo T Shirts</a>
                      </li>
                      <li>
                        <a href="#">Casual Shirts</a>
                      </li>
                      <li>
                        <a href="#">Formal Shirts</a>
                      </li>
                      <li>
                        <a href="#">Suits & Blazers</a>
                      </li>
                      <li>
                        <a href="#">Jackets</a>
                      </li>
                      <li>
                        <a href="#">Sweaters & Sweatshirts</a>
                      </li>
                    </ul>
                  </div>

                  <div className="mega-menu-items">
                    <h3>Ethnic Wear</h3>
                    <ul>
                      <li>
                        <a href="#">Kurtas</a>
                      </li>
                      <li>
                        <a href="#">Ethnic Wear Sets</a>
                      </li>
                      <li>
                        <a href="#">Nehru Jackets</a>
                      </li>
                      <li>
                        <a href="#">Ethnic Bottom Wear</a>
                      </li>
                    </ul>
                  </div>

                  <div className="mega-menu-items">
                    <h3>Footwear</h3>
                    <ul>
                      <li>
                        <a href="#">Casual Shoes</a>
                      </li>
                      <li>
                        <a href="#">Sports Shoes</a>
                      </li>
                      <li>
                        <a href="#">Casual Shirts</a>
                      </li>
                      <li>
                        <a href="#">Formal Shoes</a>
                      </li>
                      <li>
                        <a href="#">Jutis And Mojaris</a>
                      </li>
                      <li>
                        <a href="#">Slippers & Sandals</a>
                      </li>
                      <li>
                        <a href="#">Socks</a>
                      </li>
                    </ul>
                  </div>

                  <div className="mega-menu-items">
                    <h3>Accessories</h3>
                    <ul>
                      <li>
                        <a href="#">Caps And Hats</a>
                      </li>
                      <li>
                        <a href="#">Lapel Pins & Brooch</a>
                      </li>
                      <li>
                        <a href="#">Ties & Pocket Squares</a>
                      </li>
                      <li>
                        <a href="#">Cufflinks & Bracelets</a>
                      </li>
                      <li>
                        <a href="#">Suits & Blazers</a>
                      </li>
                      <li>
                        <a href="#">Handkerchiefs</a>
                      </li>
                      <li>
                        <a href="#">Headphones & Speakers</a>
                      </li>
                    </ul>
                  </div>

                  <div className="mega-menu-items">
                    <h3>Brands</h3>
                    <ul>
                      <li>
                        <a href="#">Arrow</a>
                      </li>
                      <li>
                        <a href="#">US Polo Assn</a>
                      </li>
                      <li>
                        <a href="#">Aeropostale</a>
                      </li>
                      <li>
                        <a href="#">Campus Sutra</a>
                      </li>
                      <li>
                        <a href="#">Ruggers</a>
                      </li>
                      <li>
                        <a href="#">Canary London</a>
                      </li>
                      <li>
                        <a href="#">Hang Up</a>
                      </li>
                    </ul>
                  </div>
                  <div className="mega-menu-items">
                    <h3>Bottom Wear</h3>
                    <ul>
                      <li>
                        <a href="#">Jeans</a>
                      </li>
                      <li>
                        <a href="#">Casual Trousers</a>
                      </li>
                      <li>
                        <a href="#">Formal Trousers</a>
                      </li>
                      <li>
                        <a href="#">Campus Sutra</a>
                      </li>
                      <li>
                        <a href="#">Joggers</a>
                      </li>
                      <li>
                        <a href="#">Shorts</a>
                      </li>
                    </ul>
                  </div>
                  <div className="mega-menu-items">
                    <h3>Sports Wear</h3>
                    <ul>
                      <li>
                        <a href="#">T-Shirts</a>
                      </li>
                      <li>
                        <a href="#">Shorts</a>
                      </li>
                      <li>
                        <a href="#">Formal Trousers</a>
                      </li>
                      <li>
                        <a href="#">Track Pants</a>
                      </li>
                      <li>
                        <a href="#">Track Suits</a>
                      </li>
                    </ul>
                  </div>
                  <div className="mega-menu-items">
                    <h3>Fragrances</h3>
                  </div>
                </div>
              </li>
              <li className="hover-effect">
                <a href="#">KIDS</a>
              </li>
              <li className="hover-effect">
                <a href="/">HOME</a>
              </li>
              <li className="hover-effect">
                <a style={{ color: "red", fontWeigth: "bold" }} href="#">
                  OFFERS
                </a>
              </li>
            </ul>
          </nav>

          <div className="header-item item-right">
            <div className="icon-box">
              <span className="icon-div">
                <BsFillPencilFill className="header-icon" />
                <p className="icon-name">SCRAPBOOKS</p>
              </span>

              <span className="icon-div">
                <AiOutlineSearch className="header-icon" onClick={handleSearch}/>
                <p className="icon-name">SEARCH</p>
              </span>

              <Link to="/cart">
                <span className="icon-div">
                  <HiShoppingCart className="header-icon" />
                  <p className="icon-name">CART</p>
                </span>
              </Link>

              <div className="icon-div">
                <User />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
