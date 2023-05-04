import React from 'react';
import ImageLazy from '../Image';
import '../../styles/services/Projects.css';

import Glider from 'react-glider';
import 'glider-js/glider.min.css';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Website',
      description: 'A modern e-commerce website for your online store. Features include a fully functional shopping cart, product search, and secure checkout. Our team will work with you to create a customized design that reflects your brand and appeals to your customers.',
      image: '/project-1.jpg',
    },
    {
      title: 'Mobile App Development',
      description: 'We develop mobile apps for iOS and Android devices. Whether you need a simple app or a complex solution, we can help. Our team will work with you to create a design that is both functional and visually appealing.',
      image: '/project-2.jpg',
    },
    {
      title: 'Responsive Web Design',
      description: 'We design responsive websites that look great on all devices. Our team will work with you to create a customized design that reflects your brand and appeals to your customers. Features include a user-friendly interface, easy navigation, and optimized content.',
      image: '/project-3.jpg',
    },
    {
      title: 'Digital Marketing',
      description: 'We provide a range of digital marketing services, including SEO, PPC, social media marketing, and email marketing. Our team will work with you to create a customized strategy that reaches your target audience and drives conversions.',
      image: '/project-4.jpg',
    },
    {
      title: 'Graphic Design',
      description: 'Our graphic design services include branding, logo design, print design, and digital design. We can help you create a brand identity that stands out in a crowded market, and design marketing materials that effectively communicate your message to your target audience.',
      image: '/project-1.jpg',
    },
    {
      title: 'UI/UX Design',
      description: 'We design user interfaces and user experiences that are intuitive, easy to use, and visually appealing. Our team will work with you to create a design that meets your specific needs and requirements, and delivers a seamless user experience for your customers.',
      image: '/project-2.jpg',
    },
    {
      title: 'Content Creation',
      description: 'We create high-quality content that engages your audience and drives conversions. Our services include blog writing, copywriting, video production, and social media content. We can help you tell your brand story in a way that resonates with your target audience.',
      image: '/project-3.jpg',
    },
    {
      title: 'Website Maintenance',
      description: 'We provide ongoing website maintenance and support to ensure your website is always up-to-date and running smoothly. Our services include software updates, security patches, backups, and technical support. We can help you keep your website secure, fast, and reliable.',
      image: '/project-4.jpg',
    },
    {
      title: 'Custom Web Development',
      description: 'We develop custom web applications that are tailored to your specific needs and requirements. Our team has experience with a wide range of programming languages and frameworks, and can build solutions that are scalable, reliable, and secure.',
      image: '/project-3.jpg',
    },
    {
      title: 'Consulting Services',
      description: 'We offer consulting services to help you grow your business and achieve your goals. Our team has experience with a range of industries and can provide guidance on strategy, marketing, and technology. We can help you make informed decisions that drive results.',
      image: '/project-2.jpg',
    },
  ];

  return (
    <section className="projects">
      <h2 className="projects__title">Our Latest Projects</h2>
      <Glider className="glider-container project__list" hasDots draggable slidesToShow={3.1}>
        {projects.map((item, index) => (
          <div className="project" key={index}>
            <ImageLazy src={`/services/${item.image}`} alt={item.title} className="project__image" />
            <div className="project--title">{item.title}</div>
            <span className="project--desc">{item.description}</span>
          </div>
        ))}
      </Glider>
    </section>
  );
};

export default Projects;
