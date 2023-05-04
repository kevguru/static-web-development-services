import React from 'react';
import { AiOutlineLayout, AiOutlineTag, AiOutlineMobile } from 'react-icons/ai';
import { BsHeadsetVr } from 'react-icons/bs';
import '../../styles/home/Offer.css';

const Offer = () => {
  const offers = [
    { title: 'Web Application', class: 'web', icon: <AiOutlineLayout className="offer--icon" />, desc: 'Create web-based applications.' },
    { title: 'SEO', class: 'seo', icon: <AiOutlineTag className="offer--icon" />, desc: 'Optimize search engine ranking.' },
    { title: 'AR/VR Solutions', class: 'vr', icon: <BsHeadsetVr className="offer--icon" />, desc: 'Create augmented or virtual reality solutions.' },
    { title: 'Mobile Applications', class: 'mobile', icon: <AiOutlineMobile className="offer--icon" />, desc: 'Develop mobile applications for devices.' },
  ];

  return (
    <section className="offers">
      {offers.map((item, index) => (
        <div className="offer" key={index}>
          <div className={`offer__item--bg ${item.class}`}>{item.icon}</div>
          <div className="offer__text">
            <h3 className="offer__text--top">{item.title}</h3>
            <span className="offer__text--bottom">{item.desc}</span>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Offer;
