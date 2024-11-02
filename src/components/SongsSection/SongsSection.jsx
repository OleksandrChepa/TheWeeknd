import React, { useState } from 'react';
import styles from './SongsSection.module.css';

const songsData = [
  {
    id: 1,
    title: "Blinding Lights",
    artist: "The Weeknd",
    cover: "/image/SongBlindingLights.png",
  },
  {
    id: 2,
    title: "Save Your Tears",
    artist: "The Weeknd",
    cover: "/image/SongSaveYourTears.jpg",
  },
  {
    id: 3,
    title: "Starboy",
    artist: "The Weeknd",
    cover: "/image/SongStarBoy.png",

  },
  {
    id: 4,
    title: "After Hours",
    artist: "The Weeknd",
    cover: "/image/SongAfterHours.jpg",
  },
  {
    id: 5,
    title: "One Of The Girls",
    artist: "The Weeknd feat. Madonna & Playboi Carti",
    cover: "/image/SongOneOfTheGirls.jpg",
  },
  {
    id: 6,
    title: "Popular",
    artist: "The Weeknd",
    cover: "/image/SongPopular.webp",
  }
];

const SongsSection = () => {
  const [selectedSong, setSelectedSong] = useState(songsData[0]);
  const [category,] = useState("All");

  const handleSongSelect = (song) => {
    setSelectedSong(song);
  };

  return (
    <div className={styles.songsContainer}>
      <div className={styles.selectedSong}>
        <div className={styles.songDetails}>
          <div className={styles.diskContainer}>
            <img src="/image/Disk.png" alt="Disk" className={styles.diskImage} />
            <img src={selectedSong.cover} alt={selectedSong.title} className={styles.songCover} />
          </div>
          <div className={styles.songInfo}>
            <h3 className={styles.songTitle}>{selectedSong.title}</h3>
            <p className={styles.artistName}>{selectedSong.artist}</p>
            <audio controls className={styles.audioPlayer}>
              <source src={selectedSong.src} type="audio/mpeg" />
              Ваш браузер не підтримує відтворення аудіо.
            </audio>
          </div>
        </div>
      </div>
      <div className={styles.popularSongsHeader}>
        <div className={styles.line}></div>
        <h2>ALL SONGS</h2>
        <img src="/image/Menu.png" alt="Menu" className={styles.menuIcon} />
        <div className={styles.line}></div>
      </div>
      <div className={styles.songList}>
        {songsData.filter(song => song.category === category || category === "All").map((song) => (
          <div
            key={song.id}
            className={`${styles.songItem} ${selectedSong.id === song.id ? styles.active : ''}`}
            onClick={() => handleSongSelect(song)}
            role="button"
            tabIndex={0}
          >
            <img src={song.cover} alt={song.title} className={styles.songThumbnail} />
            <div>
              <span className={styles.songTitleList}>{song.title}</span>
              <span className={styles.artistList}>{song.artist}</span>
            </div>
            <img src="/image/PlayCircle.png" alt="Play" className={styles.playIcon} />
            <img src="/image/Download.png" alt="Download" className={styles.downloadIcon} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SongsSection;
