import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Section.module.css';

const Section = () => {
  const navigate = useNavigate();

  const banners = [
    {
      image: '/image/HistoryBaner.png',
      text: 'HISTORY',
      path: '/History',
    },
    {
      image: '/image/SongsBaner.png',
      text: 'SONGS',
    },
    {
      image: '/image/ReviewsBaner.png',
      text: 'REVIEWS',
    },
  ];

  const handleBannerClick = (path) => {
    if (path !== '#') {
      navigate(path);
    } else {
      console.log('This page is not yet available');
    }
  };

  return (
    <div className={styles.sectionContainer}>
      {banners.map((banner, index) => (
        <div
          key={index}
          className={styles.banner}
          onClick={() => handleBannerClick(banner.path)}
          role="button"
          tabIndex={0}
        >
          <img src={banner.image} alt={banner.text} className={styles.bannerImage} />
          <span className={styles.bannerText}>{banner.text}</span>
        </div>
      ))}
    </div>
  );
};

export default Section;
