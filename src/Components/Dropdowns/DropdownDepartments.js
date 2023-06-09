import React, { useState } from 'react';
import { MenuItems } from '../MenuItems';
import { Link } from 'react-router-dom';
import './DropdownDepartments.css';
import { MenuItemsDepartments } from '../Dropdowns/MenuItemsDepartments';



function Dropdown () {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    
        return (
        <>
            <ul 
                onClick={handleClick}
                className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
            >
                {MenuItemsDepartments.map((item, index) => {
                    return (
                        <li key={index}>
                            <Link 
                            className={item.cName} 
                                  to={item.path}
                                  onClick={() => setClick(false)}
                            >
                                {item.title}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </>
        );
}


export default Dropdown;
