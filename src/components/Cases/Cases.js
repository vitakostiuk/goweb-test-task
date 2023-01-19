import React from 'react';
import Cases1 from 'images/cases/cases1.jpg';
import Cases1_2x from 'images/cases/cases1@2x.jpg';
import Cases2 from 'images/cases/cases2.jpg';
import Cases2_2x from 'images/cases/cases2@2x.jpg';
import Cases3 from 'images/cases/cases3.jpg';
import Cases3_2x from 'images/cases/cases3@2x.jpg';
import Cases4 from 'images/cases/cases4.jpg';
import Cases4_2x from 'images/cases/cases4@2x.jpg';
import Cases5 from 'images/cases/cases5.jpg';
import Cases5_2x from 'images/cases/cases5@2x.jpg';
import Cases6 from 'images/cases/cases6.jpg';
import Cases6_2x from 'images/cases/cases6@2x.jpg';
import Cases7 from 'images/cases/cases7.jpg';
import Cases7_2x from 'images/cases/cases7@2x.jpg';
import Cases8 from 'images/cases/cases8.jpg';
import Cases8_2x from 'images/cases/cases8@2x.jpg';
import s from './Cases.module.css';

const Cases = () => {
  return (
    <div className={s.container}>
      <div className={s.textBlock}>
        <h3 className={s.subtitle}>This is what we do</h3>
        <h3 className={s.title}>Business Cases</h3>
        <p className={s.text}>
          Lorem ipsum dolor sit amet
          <br /> consectetur adipisicing elit.
          <br /> Architecto, sapiente!
        </p>
      </div>
      <div className={s.galleryBlock}>
        <img
          srcSet={`${Cases1} 1x ${Cases1_2x} 2x`}
          src={Cases1}
          alt="Cases1"
          className={s.img}
        />
        <img
          srcSet={`${Cases2} 1x ${Cases2_2x} 2x`}
          src={Cases2}
          alt="Cases2"
          className={s.img}
        />
        <img
          srcSet={`${Cases3} 1x ${Cases3_2x} 2x`}
          src={Cases3}
          alt="Cases3"
          className={s.img}
        />
        <img
          srcSet={`${Cases4} 1x ${Cases4_2x} 2x`}
          src={Cases4}
          alt="Cases4"
          className={s.img}
        />
        <img
          srcSet={`${Cases5} 1x ${Cases5_2x} 2x`}
          src={Cases5}
          alt="Cases5"
          className={s.img}
        />
        <img
          srcSet={`${Cases6} 1x ${Cases6_2x} 2x`}
          src={Cases6}
          alt="Cases6"
          className={s.img}
        />
        <img
          srcSet={`${Cases7} 1x ${Cases7_2x} 2x`}
          src={Cases7}
          alt="Cases7"
          className={s.img}
        />
        <img
          srcSet={`${Cases8} 1x ${Cases8_2x} 2x`}
          src={Cases8}
          alt="Cases8"
          className={s.img}
        />
      </div>
    </div>
  );
};

export default Cases;
