import PropTypes from 'prop-types';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './HistoryHeader.module.css';

const HistoryHeader = ({ title, subTitle }) => {
  const logo = "/image/logoo.png";
  const location = useLocation();

  const links = [
    { name: 'HISTORY', path: '/history' },
    { name: 'SONGS', path: '/songs' },
    { name: 'REVIEWS', path: '/reviews' },
    { name: 'HOME', path: '/' },
  ];

  const getOpacity = (index) => {
    if (index === 0) return 1;
    if (index === 1) return 0.8;
    if (index === 2) return 0.6;
    return 0.4;
  };

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
        <ul className={styles.navList}>
          {links.map((link, index) => (
            <li key={link.name}>
              <Link
                to={link.path}
                className={`${styles.navItem} ${location.pathname === link.path ? styles.active : ''}`}
                style={{
                  opacity: getOpacity(Math.abs(links.findIndex(l => l.path === location.pathname) - index)),
                }}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

HistoryHeader.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
};

export default HistoryHeader;
