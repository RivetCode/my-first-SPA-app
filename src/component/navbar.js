import React from "react";

const Navbar = () => {
    return ( <nav className = "nav">
        <a href="/" className="site-title"> Site Name </a>
            <ul>
              <li> <a href="/pricing"> Pricing </a></li>
              <li> <a href="/About"> About </a></li>
            </ul>
        </nav>
    );
}

export default Navbar; 