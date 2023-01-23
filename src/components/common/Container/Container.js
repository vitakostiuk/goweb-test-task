import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Events, animateScroll as scroll } from 'react-scroll';
import s from './Container.module.css';

const Container = ({ children }) => {
  useEffect(() => {
    Events.scrollEvent.register('begin', function () {
      // console.log('begin', arguments);
    });

    Events.scrollEvent.register('end', function () {
      // console.log('end', arguments);
    });
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      {' '}
      <div className={s.container}>
        {children}
        <button className={s.toTop} type="button" onClick={scrollToTop}>
          To the top!
        </button>
      </div>
      ;
    </>
  );
};

export default Container;

Container.propTypes = {
  children: PropTypes.node.isRequired,
};
