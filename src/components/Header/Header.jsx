import PropTypes from 'prop-types';
import React from 'react';
import styles from './Header.module.css';

const Header = ({ title, subTitle, }) => {
  const logo = "/image/logoo.png";
  return (
    <header className={styles.container}>
      <div className={styles.headerContent}>
        {logo && <img src={logo} alt="Logo" className={styles.logo} />}
        <div>
          <h1>{title}</h1>
          <p>{subTitle}</p>
        </div>
      </div>
      <nav className={styles.nav}>
        <a href="mailto:theWeeknd@example.com" target="_blank" rel="noopener noreferrer" className={styles.envelopeLink}>
          <img src="/image/EnvelopeIcon.png" alt="Email" className={styles.envelopeIcon} />
        </a>
        <a href="https://www.facebook.com/TheWeeknd" target="_blank" rel="noopener noreferrer" className={styles.facebookLink}>
          <img src="/image/FacebookIcon.png" alt="Facebook" className={styles.facebookIcon} />
        </a>
        <a href="https://twitter.com/TheWeeknd" target="_blank" rel="noopener noreferrer" className={styles.twitterLink}>
          <img src="/image/TwitterIcon.png" alt="Twitter" className={styles.twitterIcon} />
        </a>
        <a href="https://www.instagram.com/theweeknd" target="_blank" rel="noopener noreferrer" className={styles.instagramLink}>
          <img src="/image/InstagramIcon.png" alt="Instagram" className={styles.instagramIcon} />
        </a>
        <button className={styles.loginButton}>Login</button>
      </nav>
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  logo: PropTypes.string,
};

export default Header;
