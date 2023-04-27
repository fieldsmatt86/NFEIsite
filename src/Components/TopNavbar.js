import React, { useState } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './TopNavbar.css';
import Dropdown from './Dropdown';


function TopNavbar() {
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
            <nav className='topnavbar'>
             
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}
                    />
            
                </div>
                <ul className={click ? 'topnav-menu active' : 'topnav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li 
                    className='nav-item'
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                    >
                        <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                            Services <i className='fas fa-caret-down' />
                        </Link>
                        {dropdown && <Dropdown />}
                    </li>
                  
                  
                </ul>
            </nav>
        </>
        );
    }
    
    export default TopNavbar;