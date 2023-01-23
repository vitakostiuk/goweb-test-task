import React, { useEffect } from 'react';
import { ReactComponent as Logo } from 'images/logo.svg';
import { Link, animateScroll as scroll } from 'react-scroll';
import s from './Header.module.css';
import './Header.css';

const Header = () => {
  // Sticky HEADER
  /* Method that will fix header after a specific scrollable */
  const isSticky = e => {
    const header = document.querySelector('.header-section');
    const scrollTop = window.scrollY;
    scrollTop >= 250
      ? header.classList.add('is-sticky')
      : header.classList.remove('is-sticky');
  };

  // Sticky Menu Area
  useEffect(() => {
    window.addEventListener('scroll', isSticky);
    return () => {
      window.removeEventListener('scroll', isSticky);
    };
  });

  return (
    <header className="header-section">
      <div className={s.logoWrapper}>
        <Logo />
        <p className={s.logoText}>
          Finance <span className={s.logoTextWhite}>Ledger</span>
        </p>
      </div>
      <nav>
        {' '}
        <ul className={s.list}>
          <li className={s.item}>
            <Link
              activeClass="active"
              className="Home"
              to="Home"
              spy={true}
              smooth={true}
              duration={1000}
            >
              Home
            </Link>
          </li>
          <li className={s.item}>
            <Link
              activeClass="active"
              className="About"
              to="About"
              spy={true}
              smooth={true}
              duration={1000}
            >
              About
            </Link>
          </li>
          <li className={s.item}>
            <Link
              activeClass="active"
              className="Cases"
              to="Cases"
              spy={true}
              smooth={true}
              duration={1000}
            >
              Cases
            </Link>
          </li>
          <li className={s.item}>
            <Link
              activeClass="active"
              className="Blog"
              to="Blog"
              spy={true}
              smooth={true}
              duration={1000}
            >
              Blog
            </Link>
          </li>
          <li className={s.item}>
            <Link
              activeClass="active"
              className="Contact"
              to="Contact"
              spy={true}
              smooth={true}
              duration={1000}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
