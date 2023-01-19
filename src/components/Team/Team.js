import React from 'react';
import Person1 from 'images/team/person1.jpg';
import Person1_2x from 'images/team/person1@2x.jpg';
import Person2 from 'images/team/person2.jpg';
import Person2_2x from 'images/team/person2@2x.jpg';
import Person3 from 'images/team/person3.jpg';
import Person3_2x from 'images/team/person3@2x.jpg';
import s from './Team.module.css';

const Team = () => {
  return (
    <div className={s.container}>
      <div className={s.textBlock}>
        <h3 className={s.subtitle}>Who we are</h3>
        <h3 className={s.title}>Our Professional Team</h3>
        <p className={s.text}>
          Lorem ipsum dolor sit amet
          <br /> consectetur adipisicing elit.
          <br /> Architecto, sapiente!
        </p>
      </div>
      <div className={s.galleryBlock}>
        <div className={s.imgWrapper}>
          {' '}
          <img
            srcSet={`${Person1} 1x ${Person1_2x} 2x`}
            src={Person1}
            alt="Person1"
            className={s.img}
          />
          <p className={s.name}>John Doe</p>
          <p className={s.position}>President</p>
        </div>
        <div className={s.imgWrapper}>
          {' '}
          <img
            srcSet={`${Person2} 1x ${Person2_2x} 2x`}
            src={Person2}
            alt="Person2"
            className={s.img}
          />
          <p className={s.name}>Jane Doe</p>
          <p className={s.position}>Vice President</p>
        </div>
        <div className={s.imgWrapper}>
          {' '}
          <img
            srcSet={`${Person3} 1x ${Person3_2x} 2x`}
            src={Person3}
            alt="Person3"
            className={s.img}
          />
          <p className={s.name}>Steve Smith</p>
          <p className={s.position}>Marketing Head</p>
        </div>
      </div>
    </div>
  );
};

export default Team;
