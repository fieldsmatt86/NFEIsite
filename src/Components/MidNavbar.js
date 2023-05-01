import React, { useState } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './MidNavbar.css';
import Dropdown from './Dropdown';
import NFEI from '../Components/Pages/img/nfei logo.png';



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
                <Link to='/' className='midnavbar-logo'>
                <img src={NFEI} className="" alt="" />
                <i class='fab fa-firstdraft' />
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}
                    />
            
                </div>
                <ul className={click ? 'midnav-menu active' : 'midnav-menu'}>
                    <li className='midnav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Calendar
                        </Link>
                    </li>
                    <li 
                    className='midnav-item'
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                    >
                        <Link to='/services' className='midnav-links' onClick={closeMobileMenu}>
                            Quicklinks <i className='fas fa-caret-down' />
                        </Link>
                        {dropdown && <Dropdown />}
                    </li>
                    <li className='midnav-item'>
                        <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                            Resources
                        </Link>
                    </li>
                    <li className='midnav-item'>
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