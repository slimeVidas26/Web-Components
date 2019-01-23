import React from 'react';
import {Link,NavLink} from 'react-router-dom';

const Navbar = ()=>{
    return(
    <nav className="nav-wrapper red darken-3">
       <div className="container">
           <a href="/" className="brand-logo">PokeTime</a>
           <ul className="right">
               <li><Link to="/">Home</Link></li>
               <li><NavLink to="/date-picker">Date picker</NavLink></li>
               <li><NavLink to="/contact">Contact</NavLink></li>
           </ul>


       </div>
    </nav>
    )
}

export default Navbar;