import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import {ReactComponent as Logo} from './crown.svg';
import './header.scss';
const Header=()=>{
    return(
    <Router>
        <div className='header'>
            <Link to='/' className='logo-container'><Logo/></Link>
            <div className='options'>
              <Link to="/shop" className='option'>SHOP</Link>
              <Link to="/contact" className='option'>CONTACT</Link>
            </div>
        </div>
    </Router>
    );
}
export default Header;