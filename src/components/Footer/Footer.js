import React from 'react';
import { ReactComponent as Facebook } from '../../images/facebook.svg';
import { ReactComponent as Twitter } from '../../images/twitter.svg';
import { ReactComponent as Youtube } from '../../images/youtube.svg';
import { ReactComponent as Linkedin } from '../../images/linkedin.svg';
import s from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={s.footerContainer}>
      <div className={s.socialWrpper}>
        <Facebook className={s.socialIcon} />
        <Twitter className={s.socialIcon} />
        <Youtube className={s.socialIcon} />
        <Linkedin className={s.socialIcon} />
      </div>
      <p className={s.copyright}>Copyright © 2021 - FinanceLedger</p>
    </footer>
  );
};

export default Footer;
