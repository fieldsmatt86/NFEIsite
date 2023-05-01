import React, { useState } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './BottomBar.css';
import DropdownAbout from './Dropdowns/DropdownAbout';
import DropdownDepartments from './Dropdowns/DropdownDepartments';
import DropdownAcademics from './Dropdowns/DropdownAcademics';
import DropdownSchoolBoard from './Dropdowns/DropdownSchoolBoard';
import DropdownAthletics from './Dropdowns/DropdownAthletics';
import DropdownCommunity from './Dropdowns/DropdownCommunity';
import DropdownCovid from './Dropdowns/DropdownCovid';
import DropdownEnrollment from './Dropdowns/DropdownEnrollment';
import Dropdown from './Dropdown';


function BottomBar() {


    return (
    <>
        <nav className='BottomBar'>
          
        
          
            <div className="Bottom2">
              <div className="Bottom2Left">
                
                <div className="B2L1"> North Florida Educational Institute </div>
                
                <div className="B2L2"> 
                <div> West Campus (VPK - 6th)</div>
                <div> 580 Lawton Ave - Jacksonville, Florida 32202</div>
                <div> Tel: (904) 574-8059</div>
                <div> Fax: (904) 647-8964</div>
                
                </div>
                <div className="B2L2"> 
                <div> North Campus (7th - 12th)</div>
                <div> 4206 Arques Rd - Jacksonville, Florida 33443</div>
                <div> Tel: (904) 574-8059</div>
                <div> Fax: (904) 647-8964</div>
                </div>
              
              
                <div className="B2M1"> CONTACT US </div>
                <div className="B2M2"> North Florida Educational Institute recognizes
                that each child has unique abilities, talents, and needs. The school is 
                committed to providing in an accountable partnership with parents and 
                community, opportunities for each learner to acquire the knowledge, dkills, 
                and values to become a responsible, productive citizen. 
                </div>
                </div>
              
             
              <div className="Bottom2Right">
                <div className = "B2R1">
                <i class= "fa-user"></i>
                <i class="fa-brands fa-facebook"></i>
                <div className = "B2R2"> 
                <div className = "B2R2a">
                 <div> Enroll </div>
                 <div> Staff </div>
                 <div> Directory </div>
                 <div> News </div>
                 <div> School Calendar</div>
                 <div> Menus </div>
                 <div> Map & Directories </div>
                 <div> Employment </div> 
                 </div>
                </div>
              </div>
            </div>
            <div className="Credits">
            </div>
            </div>
        </nav>
    </>
    );
}

export default BottomBar;