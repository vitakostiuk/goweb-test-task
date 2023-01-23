import React from 'react';
import { ReactComponent as ArowRight } from 'images/gallery/next.svg';
import s from './Home.module.css';

const Home = () => {
  return (
    <section name="Home" className={s.textBlock}>
      <h1 className={s.title}>The Sky Is The Limit</h1>
      <h2 className={s.subtitle}>
        We provide world class financial assistance
      </h2>
      <div className={s.btnWrapper}>
        <button className={s.btn} type="button">
          <ArowRight />
          <span className={s.textBtn}>Read More</span>
        </button>
      </div>
    </section>
  );
};

export default Home;
