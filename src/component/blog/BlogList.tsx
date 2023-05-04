import React from 'react';
import ImageLazy from '../Image';
import '../../styles/blog/BlogList.css';

const BlogList = () => {
  const blogData = [
    {
      title: 'Introduction to HTML',
      desc: 'Learn the basics of HTML and start building your own web pages today!',
      image: '/project-1.jpg',
      profile: 'Alice',
      profileImg: '/profile-1.webp',
      date: '2022-1-1',
    },
    {
      title: '10 CSS Tricks You Need to Know',
      desc: 'Discover 10 CSS tricks that will make your web pages stand out.',
      image: '/project-2.jpg',
      profile: 'Bob',
      profileImg: '/profile-2.webp',
      date: '2022-2-2',
    },
    {
      title: 'Building a Responsive Navigation Menu',
      desc: 'Learn how to create a responsive navigation menu that looks great on all devices.',
      image: '/project-3.jpg',
      profile: 'Charlie',
      profileImg: '/profile-3.webp',
      date: '2022-3-7',
    },
    {
      title: 'Getting Started with React',
      desc: 'Start building web applications with React today.',
      image: '/project-4.jpg',
      profile: 'Dave',
      profileImg: '/profile-4.webp',
      date: '2022-4-1',
    },
    {
      title: 'Creating a Custom WordPress Theme',
      desc: 'Learn how to create your own custom WordPress theme from scratch.',
      image: '/project-1.jpg',
      profile: 'Eve',
      profileImg: '/profile-5.webp',
      date: '2022-5-1',
    },
    {
      title: 'Building a Responsive Image Gallery',
      desc: 'Learn how to create a responsive image gallery using CSS Grid.',
      image: '/project-2.jpg',
      profile: 'Frank',
      profileImg: '/profile-6.webp',
      date: '2022-6-1',
    },
    {
      title: 'Introduction to JavaScript',
      desc: 'Learn the basics of JavaScript and start building interactive web pages.',
      image: '/project-3.jpg',
      profile: 'Alice',
      profileImg: '/profile-1.webp',
      date: '2022-7-9',
    },
    {
      title: 'Building a Simple Contact Form',
      desc: 'Learn how to build a simple contact form using HTML, CSS, and JavaScript.',
      image: '/project-4.jpg',
      profile: 'Bob',
      profileImg: '/profile-2.webp',
      date: '2022-8-4',
    },
    {
      title: '10 jQuery Plugins You Need to Know',
      desc: 'Discover 10 jQuery plugins that will make your web pages more interactive.',
      image: '/project-1.jpg',
      profile: 'Charlie',
      profileImg: '/profile-3.webp',
      date: '2022-9-2',
    },
    {
      title: 'Creating a Responsive Pricing Table',
      desc: 'Learn how to create a responsive pricing table using CSS Flexbox.',
      image: '/project-2.jpg',
      profile: 'Dave',
      profileImg: '/profile-4.webp',
      date: '2022-10-14',
    },
    {
      title: 'Building a Simple To-Do List',
      desc: 'Learn how to build a simple to-do list application using React.',
      image: '/project-3.jpg',
      profile: 'Eve',
      profileImg: '/profile-5.webp',
      date: '2022-10-17',
    },
    {
      title: 'Introduction to Bootstrap',
      desc: 'Learn how to use Bootstrap to quickly create beautiful, responsive web pages.',
      image: '/project-4.jpg',
      profile: 'Frank',
      profileImg: '/profile-6.webp',
      date: '2022-12-16',
    },
    {
      title: 'Creating a Responsive Video Player',
      desc: 'Learn how to create a responsive video player using HTML, CSS, and JavaScript.',
      image: '/project-1.jpg',
      profile: 'Alice',
      profileImg: '/profile-1.webp',
      date: '2022-08-14',
    },
  ];

  return (
    <section className="bloglist">
      {blogData.map((blog, index) => (
        <div className="blog" key={index}>
          <ImageLazy src={`/services/${blog.image}`} alt={blog.title} className="blog__image" />
          <div className="blog__body">
            <h3 className="blog--title">{blog.title}</h3>
            <span className="blog--desc">{blog.desc}</span>
            <div className="blog__writer">
              <ImageLazy src={`/about/${blog.profileImg}`} alt={blog.profile} className="profile__writer" />
              <div className="blog__writer--side">
                <h4 className="name">{blog.profile}</h4>
                <span className="date">{blog.date}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default BlogList;
