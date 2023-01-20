import React from 'react';
import { ReactComponent as Logo } from 'images/logo.svg';
import s from './Header.module.css';

const Header = () => {
  return (
    <header className={s.container}>
      <div className={s.logoWrapper}>
        <Logo />
        <p className={s.logoText}>
          Finance <span className={s.logoTextWhite}>Ledger</span>
        </p>
      </div>
      <nav>
        {' '}
        <ul className={s.list}>
          <li className={s.item}>Home</li>
          <li className={s.item}>About</li>
          <li className={s.item}>Cases</li>
          <li className={s.item}>Blog</li>
          <li className={s.item}>Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
