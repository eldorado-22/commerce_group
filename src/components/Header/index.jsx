import React from 'react';
import "./style.css"

const Header = () => {
    return (
        <>
          <header id='header'>
            <div className="container">
                <div className="header">
                    <div className="header-text">
                        <h1>create x</h1>
                        <nav className="navbar">
                            {/* <a href="#">Women</a>
                            <a href="#">Men</a>
                            <a href="#">Girls</a>
                            <a href="#">Boys</a>
                            <a href="#">Sale</a> */}
                        </nav>
                    </div>
                    <div className="header-input">
                        <input type="search" placeholder='Search for products' />
                        <div className="logos">
                         <div className="love">
                            {/* <span>Love</span> */}
                            <span>2</span>
                            </div>
                            <div className="line"></div>
                            <div className="basket">
                            {/* <span>BASKET</span> */}
                            <h2>4</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </header>  
        </>
    );
};

export default Header;