import React from 'react';
import Container from '../component/Container';
import BlogTop from '../component/blog/BlogTop';
import BlogList from '../component/blog/BlogList';

const Blog = () => {
  return (
    <Container>
      <BlogTop />
      <BlogList />
    </Container>
  );
};

export default Blog;
