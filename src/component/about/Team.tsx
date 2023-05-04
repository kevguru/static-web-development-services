import React from 'react';
import '../../styles/about/Team.css';
import ImageLazy from '../Image';

// Carousel Library
import Glider from 'react-glider';
import 'glider-js/glider.min.css';

const Team = () => {
  const employees = [
    {
      name: 'John Doe',
      position: 'Front-end Developer',
      image: '/about/profile-1.webp',
    },
    {
      name: 'Jane Smith',
      position: 'Back-end Developer',
      image: '/about/profile-2.webp',
    },
    {
      name: 'Bob Johnson',
      position: 'Full-stack Developer',
      image: '/about/profile-3.webp',
    },
    {
      name: 'Sarah Lee',
      position: 'UI/UX Designer',
      image: '/about/profile-4.webp',
    },
    {
      name: 'David Chen',
      position: 'Project Manager',
      image: '/about/profile-5.webp',
    },
    {
      name: 'Mary Wang',
      position: 'Marketing Manager',
      image: '/about/profile-6.webp',
    },
  ];

  return (
    <section className="team">
      <h2 className="team__title">Our Team</h2>
      <Glider
      draggable
      hasDots
      slidesToShow={4}
      slidesToScroll={1}
      className='team__list'
    >
        {employees.map((item, index) => (
          <div className="team__card" key={index}>
            <ImageLazy src={item.image} alt={item.name} className="team__profile" />
            <span className="team__position">{item.position}</span>
            <span className="team__name">{item.name}</span>
          </div>
        ))}
      </Glider>
    </section>
  );
};

export default Team;
