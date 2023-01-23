import React from 'react';
import s from './Blog.module.css';

const Blog = () => {
  return (
    <section name="Blog" className={s.container}>
      {' '}
      <div className={s.imgWrapper}></div>
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
    </section>
  );
};

export default Blog;
