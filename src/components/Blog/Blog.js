import React from 'react';
import blogImg from '../../images/home/blog.jpg';
import blogImg_2x from '../../images/home/blog@2x.jpg';
import s from './Blog.module.css';

const Blog = () => {
  return (
    <>
      {' '}
      <img
        srcSet={`${blogImg} 1x ${blogImg_2x} 2x`}
        src={blogImg}
        alt="Blog"
        className={s.img}
      />
      <div className={s.textBlock}>
        <h3 className={s.subtitle}>April 16 2020</h3>
        <h3 className={s.title}>Blog Post One</h3>
        <p className={s.text}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate,
          ipsum dignissimos quae laudantium asperiores nam aliquid impedit harum
          illum dolore explicabo ab dolores itaque rerum temporibus doloribus
          iste maiores deleniti?
        </p>
        <button className={s.btn} type="button">
          Read Our Blog
        </button>
      </div>
    </>
  );
};

export default Blog;
