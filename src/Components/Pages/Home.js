import React from 'react'
import '../../App.css';
import NFEI from './img/nfei logo.png';
import NFEIgrads from './img/NFEI grads.jpg';
import Kids from '../img/IMG_1936.jpg';
import KidObama from '../img/IMG_4069.JPG';
import NSC from '../img/IMG_1969.jpg';
import WSC from '../img/IMG_4069.JPG';
import SafeSay from '../img/safe 2 say pic.jpg';
import SACS from '../img/accred-seal-blues-1.png';
import './Home.css';



export default function Home () {
    return (
        <>
        <div className="Body">
             <div className="BodyTwo">
              
              <img src={Kids} className="NFEIgrads" alt="" />

              </div>
              <div className="BodyThree">
                <div className="BB"> 

                <div className="B3a"></div>
                <img src={KidObama} className="NFEIgrads2" alt="" />
                 
                 </div>
                <div className="BB1">  
                <div className="BB1a"> Welcome to North Florida Educational Institute </div>
                <div className="BB1b"> North Florida Educational Institute is compromised of two campuses: North Side and West Side serving students K-12. </div>
                <div className="BB1c"> EXPLORE NFEI </div>

                </div>

              </div>
              <div className="BodyFour">
                <div className="BC"> News & Events </div>
              <div className="BD"> There's always something happening in Eagle Land. Check here often for a complete listing of district and building events plus news and announcements about our students and staff. 
</div>
              </div>
              <div className="BodyFive">
              <div className="B5a">Latest News</div>
              <div className="B5b">Upcoming Events</div>

              </div>
              <div className="BodySix">
              <div>
                <div className="B6a"> Everything on Two campus</div>
                <div className="B6aa"> From the first day of kindergarten to graduation day</div>
              </div>
                  <div className="Body6x">
                    <div className="Body6z">
                        <img src={WSC} className="B6b" alt=""/>
                        <img src={NSC} className="B6c" alt=""/>
                    </div>
                        <div className="B6ba"> </div>
                  </div>
              </div>
             
            </div>
            <div className="Body2">
              <div className="Body2Left">
          

              </div>
              <div className="Body2Middle">
                <div className='B2M1'>
                  <div className='B2M1A'></div>
                </div>
                <div className='B2M2'>
                <div className='B2M2A'></div>
                </div>
                <div className='B2M3'></div>
                <div className='B2M4'></div>
                <div className='B2M5'></div>
                <div className='B2M6'></div>
              </div>
              <div className="Body2Right">
                <div className='B2R1'></div>
                <div className='B2R3'></div>

              </div>
             
            </div>
            <div className="Bottom1">
          
           
            <img src= {SafeSay} className='B1b' alt=""/>
            <img src= {SACS} className='B1c' alt=""/>
           

            </div>
            <h1 className='home'>NFEI</h1>
            
        </>
    )
}