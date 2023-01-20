import React, { useRef } from 'react';
import Cases1_JPG from 'images/cases/cases1.jpg';
import Cases1_2x_JPG from 'images/cases/cases1@2x.jpg';
import Cases2_JPG from 'images/cases/cases2.jpg';
import Cases2_2x_JPG from 'images/cases/cases2@2x.jpg';
import Cases3_JPG from 'images/cases/cases3.jpg';
import Cases3_2x_JPG from 'images/cases/cases3@2x.jpg';
import Cases4_JPG from 'images/cases/cases4.jpg';
import Cases4_2x_JPG from 'images/cases/cases4@2x.jpg';
import Cases5_JPG from 'images/cases/cases5.jpg';
import Cases5_2x_JPG from 'images/cases/cases5@2x.jpg';
import Cases6_JPG from 'images/cases/cases6.jpg';
import Cases6_2x_JPG from 'images/cases/cases6@2x.jpg';
import Cases7_JPG from 'images/cases/cases7.jpg';
import Cases7_2x_JPG from 'images/cases/cases7@2x.jpg';
import Cases8_JPG from 'images/cases/cases8.jpg';
import Cases8_2x_JPG from 'images/cases/cases8@2x.jpg';
import Cases1 from 'images/cases/cases1.webp';
import Cases1_2x from 'images/cases/cases1@2x.webp';
import Cases2 from 'images/cases/cases2.webp';
import Cases2_2x from 'images/cases/cases2@2x.webp';
import Cases3 from 'images/cases/cases3.webp';
import Cases3_2x from 'images/cases/cases3@2x.webp';
import Cases4 from 'images/cases/cases4.webp';
import Cases4_2x from 'images/cases/cases4@2x.webp';
import Cases5 from 'images/cases/cases5.webp';
import Cases5_2x from 'images/cases/cases5@2x.webp';
import Cases6 from 'images/cases/cases6.webp';
import Cases6_2x from 'images/cases/cases6@2x.webp';
import Cases7 from 'images/cases/cases7.webp';
import Cases7_2x from 'images/cases/cases7@2x.webp';
import Cases8 from 'images/cases/cases8.webp';
import Cases8_2x from 'images/cases/cases8@2x.webp';
import s from './Cases.module.css';

const Cases = () => {
  const windowWidth = useRef(window.innerWidth);
  return (
    <section className={s.container}>
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
        <picture className={s.img}>
          {' '}
          <source srcSet={`${Cases1} 1x ${Cases1_2x} 2x`} type="image/webp" />
          <img
            srcSet={`${Cases1_JPG} 1x ${Cases1_2x_JPG} 2x`}
            src={Cases1_JPG}
            alt="Cases1_JPG"
            type="image/jpeg"
          />
        </picture>
        <picture className={s.img}>
          {' '}
          <source srcSet={`${Cases2} 1x ${Cases2_2x} 2x`} type="image/webp" />
          <img
            srcSet={`${Cases2_JPG} 1x ${Cases2_2x_JPG} 2x`}
            src={Cases2_JPG}
            alt="Cases2_JPG"
            type="image/jpeg"
          />
        </picture>
        <picture className={s.img}>
          {' '}
          <source srcSet={`${Cases3} 1x ${Cases3_2x} 2x`} type="image/webp" />
          <img
            srcSet={`${Cases3_JPG} 1x ${Cases3_2x_JPG} 2x`}
            src={Cases3_JPG}
            alt="Cases3_JPG"
            type="image/jpeg"
          />
        </picture>
        <picture className={s.img}>
          {' '}
          <source srcSet={`${Cases4} 1x ${Cases4_2x} 2x`} type="image/webp" />
          <img
            srcSet={`${Cases4_JPG} 1x ${Cases4_2x_JPG} 2x`}
            src={Cases4_JPG}
            alt="Cases4_JPG"
            type="image/jpeg"
          />
        </picture>
        <picture className={s.img}>
          {' '}
          <source srcSet={`${Cases5} 1x ${Cases5_2x} 2x`} type="image/webp" />
          <img
            srcSet={`${Cases5_JPG} 1x ${Cases5_2x_JPG} 2x`}
            src={Cases5_JPG}
            alt="Cases5_JPG"
            type="image/jpeg"
          />
        </picture>
        <picture className={s.img}>
          {' '}
          <source srcSet={`${Cases6} 1x ${Cases6_2x} 2x`} type="image/webp" />
          <img
            srcSet={`${Cases6_JPG} 1x ${Cases6_2x_JPG} 2x`}
            src={Cases6_JPG}
            alt="Cases6_JPG"
            type="image/jpeg"
          />
        </picture>
        {windowWidth.current < 768 && (
          <picture className={s.img}>
            {' '}
            <source srcSet={`${Cases7} 1x ${Cases7_2x} 2x`} type="image/webp" />
            <img
              srcSet={`${Cases7_JPG} 1x ${Cases7_2x_JPG} 2x`}
              src={Cases7_JPG}
              alt="Cases7_JPG"
              type="image/jpeg"
            />
          </picture>
        )}

        {windowWidth.current < 768 && (
          <picture className={s.img}>
            {' '}
            <source srcSet={`${Cases8} 1x ${Cases8_2x} 2x`} type="image/webp" />
            <img
              srcSet={`${Cases8_JPG} 1x ${Cases8_2x_JPG} 2x`}
              src={Cases8_JPG}
              alt="Cases8_JPG"
              type="image/jpeg"
            />
          </picture>
        )}
      </div>
    </section>
  );
};

export default Cases;
