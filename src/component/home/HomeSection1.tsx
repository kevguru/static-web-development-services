import React from 'react';
import HomeSectionText from './HomeSectionText';
import Image from '../Image';
import { sectionDataHome } from '../../../utils/datahome';

const HomeSection1 = () => {
  return (
    <div className="home-section">
      <div className="row-1" data-aos="fade-up-right" data-aos-duration="1000">
        <HomeSectionText data={sectionDataHome[0]} />
      </div>
      <div className="row-2" data-aos="fade-up-left" data-aos-duration="1400">
        <Image src="/home/home-section-1.png" alt="Image Section 1" className="home-section--image" />
      </div>
    </div>
  );
};

export default HomeSection1;
