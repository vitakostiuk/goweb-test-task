import React from 'react';
import Header from 'components/Header';
import Home from 'components/Home';
import s from './Hero.module.css';

const Hero = () => {
  return (
    <section className={s.container}>
      <Header />
      <div className={s.homeWrapper}>
        {' '}
        <Home />
      </div>
    </section>
  );
};

export default Hero;
