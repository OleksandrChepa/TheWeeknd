import React, { createContext, useContext, useEffect, useRef, useState } from 'react';

const AudioContext = createContext();

export const AudioProvider = ({ children }) => {
  const [selectedSong, setSelectedSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio());

  useEffect(() => {
    if (selectedSong) {
      audioRef.current.src = selectedSong.src;
      if (isPlaying) {
        audioRef.current.play().catch((error) => console.error("Error playing audio:", error));
      } else {
        audioRef.current.pause();
      }
    }

    const handleAudioEnd = () => {
      setIsPlaying(false);
    };

    audioRef.current.addEventListener('ended', handleAudioEnd);

    return () => {
      audioRef.current.pause();
      audioRef.current.removeEventListener('ended', handleAudioEnd);
    };
  }, [selectedSong, isPlaying]);

  return (
    <AudioContext.Provider value={{ selectedSong, setSelectedSong, isPlaying, setIsPlaying, audioRef }}>
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = () => {
  return useContext(AudioContext);
};
