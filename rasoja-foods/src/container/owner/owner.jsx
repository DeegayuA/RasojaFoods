import React from 'react';

import './Owner.css';
import { images } from '../../constants'
import { SubHeading } from '../../components'


const Owner = () => (
  <div className="app__bg app__wrapper Section__padding">
      <div className="app__wrapper_img app__wrapper img-reverse">
        <img src={images.chef} alt="Owner" />
      </div>

      <div className="app__wrapper_info">
        <SubHeading title = "Owner's Word" />
        <h1 className="headtext__cormorant">What We Believe In</h1>
        <div className="app__owner-content">
          <div className="app__owner-content_quote">
           
            <p className="p__opensans">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos molestias, laborum id voluptatum quis hic aperiam explicabo placeat inventore illo labore ad ea unde.</p>
          </div>
          <p className="p__opensans">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, suscipit.</p>
        </div>
        <div className="app__owner-sign">
          <p>Mr. XXXX XXXXXXXXXX</p>
          <p className="p__opensans">Owner and Founder</p>
          <img src={images.sign} alt="sign" />
        </div>
      </div>
  </div>
);

export default Owner;
