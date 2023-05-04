import React from 'react';
import Container from '../component/Container';
import LazyImage from '../component/Image';
import '../../src/styles/NotFound.css';

const NotFound = () => {
  return (
    <Container>
      <section className="page-404">
        <LazyImage src="/404.png" alt="404 Not Found Page" className="image-404" />
        <h2 className="page-404--title">404 Not Found</h2>
        <span className="page-404--desc">Oops! The page you're looking for isn't here. Please use the navigation menu or search bar to find what you need. Thank you for visiting us at YaminDev.</span>
      </section>
    </Container>
  );
};

export default NotFound;
