import React from 'react';
import s from './About.module.css';

const About = () => {
  return (
    <section className={s.container}>
      {' '}
      <div className={s.imgWrapper}></div>
      <div className={s.textBlock}>
        <h3 className={s.subtitle}>What you are looking for</h3>
        <h3 className={s.title}>We provide bespoke solutions</h3>
        <p className={s.text}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate,
          ipsum dignissimos quae laudantium asperiores nam aliquid impedit harum
          illum dolore explicabo ab dolores itaque rerum temporibus doloribus
          iste maiores deleniti?
        </p>
        <button className={s.btn} type="button">
          Read More
        </button>
      </div>
    </section>
  );
};

export default About;
