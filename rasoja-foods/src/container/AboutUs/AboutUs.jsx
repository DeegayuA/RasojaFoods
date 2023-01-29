import React from 'react';

import './AboutUs.css';
import { images } from '../../constants'

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='aboutus'>
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="g letter" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about-spoon" />
        <p className="p__opensans"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum delectus doloremque nesciunt magni quaerat iure ipsam cupiditate commodi, obcaecati dicta?</p>
        <button className="custom__button">more info</button>
      </div>
    </div>

     <div className="app__aboutus-content_knife flex__center">
      <img src={images.knife} alt="image of a knife" />
     </div>

     <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about-spoon" />
        <p className="p__opensans"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum delectus doloremque nesciunt magni quaerat iure ipsam cupiditate commodi, obcaecati dicta?</p>
        <button className="custom__button">more info</button>
      </div>
    </div>

  </div>
);

export default AboutUs;
