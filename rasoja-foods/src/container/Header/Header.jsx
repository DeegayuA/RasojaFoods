import React from 'react';

import { images } from '../../constants'
import './Header.css';
import { SubHeading } from '../../components';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Discover the Art of Flavor with Our Gourmet Selection" />
      <h1 className="app__header-h1">Lorem ipsum dolor sit amet.</h1>
      <p className="p__opensans" styles= {{margin: '2rem 0'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et turpis sit amet orci euismod sodales. Quisque pellentesque ex tristique tempor pretium. Integer mattis, felis sit amet congue fringilla, lectus elit feugiat nulla, vel suscipit enim magna non velit. Etiam urna elit, fermentum eu interdum quis, dapibus non nulla.</p>
      <button className="custom__button">Explore Products</button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.welcome} alt="welcome image" />
    </div>

  </div>
);

export default Header;
