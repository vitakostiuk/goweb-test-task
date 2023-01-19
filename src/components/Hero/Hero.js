import React from 'react';
import Header from 'components/Header';
import Home from 'components/Home';
import s from './Hero.module.css';

const Hero = () => {
  return (
    <div className={s.container}>
      <Header />
      <Home />
    </div>
  );
};

export default Hero;
