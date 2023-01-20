import React from 'react';
import Person1_JPG from 'images/team/person1.jpg';
import Person1_2x_JPG from 'images/team/person1@2x.jpg';
import Person2_JPG from 'images/team/person2.jpg';
import Person2_2x_JPG from 'images/team/person2@2x.jpg';
import Person3_JPG from 'images/team/person3.jpg';
import Person3_2x_JPG from 'images/team/person3@2x.jpg';
import Person1 from 'images/team/person1.webp';
import Person1_2x from 'images/team/person1@2x.webp';
import Person2 from 'images/team/person2.webp';
import Person2_2x from 'images/team/person2@2x.webp';
import Person3 from 'images/team/person3.webp';
import Person3_2x from 'images/team/person3@2x.webp';
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
          <picture className={s.img}>
            <source
              srcSet={`${Person1} 1x ${Person1_2x} 2x`}
              type="image/webp"
            />
            <img
              srcSet={`${Person1_JPG} 1x ${Person1_2x_JPG} 2x`}
              src={Person1_JPG}
              alt="Person1_JPG"
              type="image/jpeg"
            />
          </picture>
          <p className={s.name}>John Doe</p>
          <p className={s.position}>President</p>
        </div>
        <div className={s.imgWrapper}>
          {' '}
          <picture className={s.img}>
            <source
              srcSet={`${Person2} 1x ${Person2_2x} 2x`}
              type="image/webp"
            />
            <img
              srcSet={`${Person2_JPG} 1x ${Person2_2x_JPG} 2x`}
              src={Person2_JPG}
              alt="Person2_JPG"
              type="image/jpeg"
            />
          </picture>
          <p className={s.name}>Jane Doe</p>
          <p className={s.position}>Vice President</p>
        </div>
        <div className={s.imgWrapper}>
          {' '}
          <picture className={s.img}>
            <source
              srcSet={`${Person3} 1x ${Person3_2x} 2x`}
              type="image/webp"
            />
            <img
              srcSet={`${Person3_JPG} 1x ${Person3_2x_JPG} 2x`}
              src={Person3_JPG}
              alt="Person3_JPG"
              type="image/jpeg"
            />
          </picture>
          <p className={s.name}>Steve Smith</p>
          <p className={s.position}>Marketing Head</p>
        </div>
      </div>
    </div>
  );
};

export default Team;
