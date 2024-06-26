import React from 'react';


import Header from '../components/header';
import SliderStandby from '../components/Slider_Standby';
import Kite from '../assets/kite.png';
import Kite1 from '../assets/kite1.png';
import Star from '../assets/star1.png';

import './page.css';

const HomeStandby = () => {
    return (
        <div>
            <Header />
            
            <div className='interactive-slider-container'>
                <SliderStandby />
                <img src={Kite} alt="Kite" className='kite'/>
                <img src={Kite1} alt="Kite" className='kite1'/>
                <img src={Star} alt="Star" className='star'/>
            </div>
        </div>
    )
}

export default HomeStandby;
