import React from 'react';
import styles from './Section.module.css';

const Section = () => {
  const banners = [
    {
      image: '/image/HistoryBaner.png',
      text: 'HISTORY',
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

  const handleBannerClick = (text) => {
    console.log(`${text} banner clicked`);
  };

  return (
    <div className={styles.sectionContainer}>
      {banners.map((banner, index) => (
        <div
          key={index}
          className={styles.banner}
          onClick={() => handleBannerClick(banner.text)}
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
