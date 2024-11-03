import React, { useEffect } from 'react';
import { useAudio } from '/src/components/SongsContext/SongsContext';
import styles from './SongsSection.module.css';

const songsData = [
  {
    id: 1,
    title: "Blinding Lights",
    artist: "The Weeknd",
    cover: "/image/SongBlindingLights.png",
    src: "/audio/BlindingLights.mp3"
  },
  {
    id: 2,
    title: "Save Your Tears",
    artist: "The Weeknd",
    cover: "/image/SongSaveYourTears.jpg",
    src: "/audio/SaveYourTears.mp3"
  },
  {
    id: 3,
    title: "Starboy",
    artist: "The Weeknd",
    cover: "/image/SongStarBoy.png",
    src: "/audio/Starboy.mp3"
  },
  {
    id: 4,
    title: "After Hours",
    artist: "The Weeknd",
    cover: "/image/SongAfterHours.jpg",
    src: "/audio/AfterHours.mp3"
  },
  {
    id: 5,
    title: "One Of The Girls",
    artist: "The Weeknd feat. Madonna & Playboi Carti",
    cover: "/image/SongOneOfTheGirls.jpg",
    src: "/audio/OneOfTheGirls.mp3"
  },
  {
    id: 6,
    title: "Popular",
    artist: "The Weeknd",
    cover: "/image/SongPopular.webp",
    src: "/audio/Popular.mp3"
  }
];

const SongsSection = () => {
  const { selectedSong, setSelectedSong, isPlaying, setIsPlaying, audioRef } = useAudio();

  useEffect(() => {
    if (!selectedSong) {
      setSelectedSong(songsData[0]);
    }
  }, [selectedSong, setSelectedSong]);

  const handleSongSelect = (song) => {
    if (selectedSong?.id !== song.id) {
      setSelectedSong(song);
      setIsPlaying(true);
    } else {
      setIsPlaying((prev) => !prev);
    }
  };

  return (
    <div className={styles.songsContainer}>
      <div className={styles.selectedSong}>
        {selectedSong && (
          <div className={styles.songDetails}>
            <div className={styles.diskContainer}>
              <img src="/image/Disk.png" alt="Disk" className={styles.diskImage} />
              <img src={selectedSong.cover} alt={selectedSong.title} className={styles.songCover} />
            </div>
            <div className={styles.songInfo}>
              <h3 className={styles.songTitle}>{selectedSong.title}</h3>
              <p className={styles.artistName}>{selectedSong.artist}</p>
              <audio controls className={styles.audioPlayer} ref={audioRef}>
                <source src={selectedSong.src} type="audio/mpeg" />
                Ваш браузер не підтримує відтворення аудіо.
              </audio>
            </div>
          </div>
        )}
      </div>

      <div className={styles.popularSongsHeader}>
        <div className={styles.line}></div>
        <h2>ALL SONGS</h2>
        <img src="/image/Menu.png" alt="Menu" className={styles.menuIcon} />
        <div className={styles.line}></div>
      </div>
      <div className={styles.songList}>
        {songsData.map((song) => (
          <div
            key={song.id}
            className={`${styles.songItem} ${selectedSong?.id === song.id ? styles.active : ''}`}
            onClick={() => handleSongSelect(song)}
            role="button"
            tabIndex={0}
          >
            <img src={song.cover} alt={song.title} className={styles.songThumbnail} />
            <div>
              <span className={styles.songTitleList}>{song.title}</span>
              <span className={styles.artistList}>{song.artist}</span>
            </div>
            {selectedSong?.id === song.id ? (
              isPlaying ? (
                <img src="/image/PauseCircle.png" alt="Pause" className={styles.playIcon} />
              ) : (
                <img src="/image/PlayCircle.png" alt="Play" className={styles.playIcon} />
              )
            ) : (
              <img src="/image/PlayCircle.png" alt="Play" className={styles.playIcon} />
            )}
            <a href={song.src} download className={styles.downloadIconWrapper}>
              <img src="/image/Download.png" alt="Download" className={styles.downloadIcon} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SongsSection;
