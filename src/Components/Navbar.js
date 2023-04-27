import React, { useState } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import DropdownAbout from './Dropdowns/DropdownAbout';
import DropdownDepartments from './Dropdowns/DropdownDepartments';
import DropdownAcademics from './Dropdowns/DropdownAcademics';
import DropdownSchoolBoard from './Dropdowns/DropdownSchoolBoard';
import DropdownAthletics from './Dropdowns/DropdownAthletics';
import DropdownCommunity from './Dropdowns/DropdownCommunity';
import DropdownCovid from './Dropdowns/DropdownCovid';
import DropdownEnrollment from './Dropdowns/DropdownEnrollment';
import Dropdown from './Dropdown';


function Navbar() {
const[click, setClick] = useState(false)
const [dropdown, setDropdown] = useState(false);
const [dropdownAbout, setDropdownAbout] = useState(false);
const [dropdownDepartments, setDropdownDepartments] = useState(false);
const [dropdownAcademics, setDropdownAcademics] = useState(false);
const [dropdownSchoolBoard, setDropdownSchoolBoard] = useState(false);
const [dropdownAthletics, setDropdownAthletics] = useState(false);
const [dropdownCommunity, setDropdownCommunity] = useState(false);
const [dropdownCovid, setDropdownCovid] = useState(false);
const [dropdownEnrollment, setDropdownEnrollment] = useState(false);


const handleClick = () => setClick(!click)
const closeMobileMenu = () => setClick(false);

const onMouseEnter = () => {
    if(window.innerWidth < 960) {
        setDropdown(false)
    } else {
        setDropdown(true)
    }
};

const onMouseEnterAbout = () => {
    if(window.innerWidth < 960) {
        setDropdownAbout(false)
    } else {
        setDropdownAbout(true)
    }
};

const onMouseEnterDepartments = () => {
    if(window.innerWidth < 960) {
        setDropdownDepartments(false)
    } else {
        setDropdownDepartments(true)
    }
};

const onMouseEnterAcademics = () => {
    if(window.innerWidth < 960) {
        setDropdownAcademics(false)
    } else {
        setDropdownAcademics(true)
    }
};

const onMouseEnterSchoolBoard = () => {
    if(window.innerWidth < 960) {
        setDropdownSchoolBoard(false)
    } else {
        setDropdownSchoolBoard(true)
    }
};

const onMouseEnterAthletics = () => {
    if(window.innerWidth < 960) {
        setDropdownAthletics(false)
    } else {
        setDropdownAthletics(true)
    }
};

const onMouseEnterCommunity = () => {
    if(window.innerWidth < 960) {
        setDropdownCommunity(false)
    } else {
        setDropdownCommunity(true)
    }
};

const onMouseEnterCovid = () => {
    if(window.innerWidth < 960) {
        setDropdownCovid(false)
    } else {
        setDropdownCovid(true)
    }
};

const onMouseEnterEnrollment = () => {
    if(window.innerWidth < 960) {
        setDropdownEnrollment(false)
    } else {
        setDropdownEnrollment(true)
    }
};

const onMouseLeave = () => {
    if(window.innerWidth < 960) {
        setDropdown(false)
    } else {
        setDropdown(false)
    }
}

const onMouseLeaveAbout = () => {
    if(window.innerWidth < 960) {
        setDropdownAbout(false)
    } else {
        setDropdownAbout(false)
    }
}

const onMouseLeaveDepartments = () => {
    if(window.innerWidth < 960) {
        setDropdownDepartments(false)
    } else {
        setDropdownDepartments(false)
    }
}

const onMouseLeaveAcademics = () => {
    if(window.innerWidth < 960) {
        setDropdownAcademics(false)
    } else {
        setDropdownAcademics(false)
    }
}

const onMouseLeaveSchoolBoard = () => {
    if(window.innerWidth < 960) {
        setDropdownSchoolBoard(false)
    } else {
        setDropdownSchoolBoard(false)
    }
}

const onMouseLeaveAthletics = () => {
    if(window.innerWidth < 960) {
        setDropdownAthletics(false)
    } else {
        setDropdownAthletics(false)
    }
}

const onMouseLeaveCommunity = () => {
    if(window.innerWidth < 960) {
        setDropdownCommunity(false)
    } else {
        setDropdownCommunity(false)
    }
}

const onMouseLeaveCovid = () => {
    if(window.innerWidth < 960) {
        setDropdownCovid(false)
    } else {
        setDropdownCovid(false)
    }
}

const onMouseLeaveEnrollment = () => {
    if(window.innerWidth < 960) {
        setDropdownEnrollment(false)
    } else {
        setDropdownEnrollment(false)
    }
}

    return (
    <>
        <nav className='navbar'>
          
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'}
                />
        
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
               
                <li 
                className='nav-item'
                onMouseEnter={onMouseEnterAbout}
                onMouseLeave={onMouseLeaveAbout}
                >
                    <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                        About NFEI <i className='fas fa-caret-down' />
                    </Link>
                    {dropdownAbout && <DropdownAbout />}
                </li>
                <li 
                className='nav-item'
                onMouseEnter={onMouseEnterDepartments}
                onMouseLeave={onMouseLeaveDepartments}
                >
                    <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                        Departments <i className='fas fa-caret-down' />
                    </Link>
                    {dropdownDepartments && <DropdownDepartments />}
                </li>
                <li 
                className='nav-item'
                onMouseEnter={onMouseEnterAcademics}
                onMouseLeave={onMouseLeaveAcademics}
                >
                    <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                        Academics <i className='fas fa-caret-down' />
                    </Link>
                    {dropdownAcademics && <DropdownAcademics />}
                </li>
                <li 
                className='nav-item'
                onMouseEnter={onMouseEnterSchoolBoard}
                onMouseLeave={onMouseLeaveSchoolBoard}
                >
                    <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                        School Board <i className='fas fa-caret-down' />
                    </Link>
                    {dropdownSchoolBoard && <DropdownSchoolBoard />}
                </li>
                <li 
                className='nav-item'
                onMouseEnter={onMouseEnterAthletics}
                onMouseLeave={onMouseLeaveAthletics}
                >
                    <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                        Athletics <i className='fas fa-caret-down' />
                    </Link>
                    {dropdownAthletics && <DropdownAthletics />}
                </li>
                <li 
                className='nav-item'
                onMouseEnter={onMouseEnterCommunity}
                onMouseLeave={onMouseLeaveCommunity}
                >
                    <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                        Community <i className='fas fa-caret-down' />
                    </Link>
                    {dropdownCommunity && <DropdownCommunity />}
                </li>
                <li 
                className='nav-item'
                onMouseEnter={onMouseEnterCovid}
                onMouseLeave={onMouseLeaveCovid}
                >
                    <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                        COVID-19 <i className='fas fa-caret-down' />
                    </Link>
                    {dropdownCovid && <DropdownCovid />}
                </li>
                <li 
                className='nav-item'
                onMouseEnter={onMouseEnterEnrollment}
                onMouseLeave={onMouseLeaveEnrollment}
                >
                    <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                        Enrollment <i className='fas fa-caret-down' />
                    </Link>
                    {dropdownEnrollment && <DropdownEnrollment />}
                </li>
                
            </ul>
        </nav>
    </>
    );
}

export default Navbar;