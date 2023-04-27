import React, { useState } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './MidNavbar.css';
import Dropdown from './Dropdown';


function MidNavbar() {
    const[click, setClick] = useState(false)
    const [dropdown, setDropdown] = useState(false);
    
    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false);
    
    const onMouseEnter = () => {
        if(window.innerWidth < 960) {
            setDropdown(false)
        } else {
            setDropdown(true)
        }
    };
    
    const onMouseLeave = () => {
        if(window.innerWidth < 960) {
            setDropdown(false)
        } else {
            setDropdown(false)
        }
    }
    
        return (
        <>
            <nav className='midnavbar'>
                <Link to='/'
                className='navbar-logo'>
                    NFEI logo<i class='fab fa-firstdraft' />
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}
                    />
            
                </div>
                <ul className={click ? 'midnav-menu active' : 'midnav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Calendar
                        </Link>
                    </li>
                    <li 
                    className='nav-item'
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                    >
                        <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                            Quicklinks <i className='fas fa-caret-down' />
                        </Link>
                        {dropdown && <Dropdown />}
                    </li>
                    <li className='nav-item'>
                        <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                            Resources
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/contact-us' className='nav-links' onClick={closeMobileMenu}>
                            Search Icon
                        </Link>
                    </li>
                  
                </ul>
                
            </nav>
        </>
        );
    }
    
    export default MidNavbar;