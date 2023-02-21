import React from 'react';

import {images, data} from '../../constants'
import { SubHeading, MenuItem } from '../../components';
import './SpecialMenu.css';
import { GiWineBottle } from 'react-icons/gi';

const SpecialMenu = () => (
  <div className='app__specialMenu flex__center section__padding' id='products' >
    <div className="app__specialMenu-title">
      <SubHeading title=" Best Sri Lankan Spices"/>
      <h1 className= "headtext__cormorant"> Products </h1>
    </div>
    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_spices flex__center">
        <p className='app__specialMenu_menu_heading'>Spices</p>
        <div className="app__specialMenu_menu_items">
            {data.spices.map((spice,index) => (
              <MenuItem key={spice.title + index} title = {spice.title} price = {spice.price} tags = {spice.tags}/>
            ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <img src={images.menu} alt="" />
      </div>

      <div className="app__specialMenu-menu_other flex__center">
        <p className='app__specialMenu_menu_heading'>Others</p>
        <div className="app__specialMenu_menu_items">
            {data.others.map((other,index) => (
              <MenuItem key={other.title + index} title = {other.title}  price = {other.price} tags = {other.tags}/>
            ))}
        </div>
      </div>

    </div>
            
    <div style={{marginTop: '15px'}}>
      <button type="button" className="custom__button">View More</button>
    </div>
  </div>
);

export default SpecialMenu;
