import React from 'react';
import '../../styles/blog/BlogTop.css';
import { BiSearch } from 'react-icons/bi';

const BlogTop = () => {
  const categories = ['HTML', 'CSS', 'JavaScript', 'React', 'WordPress', 'Bootstrap'];

  return (
    <section className="blogtop">
      <h2 className="blogtop--title" data-aos="fade-up">
        Latest News <span>Updates</span>
      </h2>
      <span className="blogtop--desc" data-aos="fade-up" data-aos-delay="400">Our blog is your go-to source for the latest insights and trends in web development, mobile applications, and virtual reality.</span>
      <form action="" className="blogtop__search">
        <BiSearch className='icon' />
        <input type="text" autoComplete="true" placeholder="search..." className='input' />
      </form>
      <div className="blog__categories">
        {categories.map((category, index) => (
          <button className="blog__category" key={index}>
            {category}
          </button>
        ))}
      </div>
    </section>
  );
};

export default BlogTop;
