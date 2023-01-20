import React from 'react';
// import blogImg_JPG from '../../images/home/blog.jpg';
// import blogImg_2x_JPG from '../../images/home/blog@2x.jpg';
// import blogImg from '../../images/home/blog.webp';
// import blogImg_2x from '../../images/home/blog@2x.webp';
import s from './Blog.module.css';

const Blog = () => {
  return (
    <section className={s.container}>
      {' '}
      <div className={s.imgWrapper}></div>
      {/* <picture className={s.img}>
        {' '}
        <source srcSet={`${blogImg} 1x ${blogImg_2x} 2x`} type="image/webp" />
        <img
          srcSet={`${blogImg_JPG} 1x ${blogImg_2x_JPG} 2x`}
          src={blogImg_JPG}
          alt="Blog_JPG"
          type="image/jpeg"
        />
      </picture> */}
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
