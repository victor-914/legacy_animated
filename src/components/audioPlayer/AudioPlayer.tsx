// components/AudioPlayer.js
"use client"
import React, { useState, useRef } from 'react';
import styles from '../audioPlayer/audioplayer.module.css';
import styled from 'styled-components';

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const discRef = useRef<HTMLDivElement>(null);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef?.current?.pause();
      discRef?.current?.classList.remove(styles.playing);
    } else {
      audioRef?.current?.play();
      discRef?.current?.classList.add(styles.playing);
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <StyledAudio className={styles.audioPlayer}>
      <div className={styles.disc} ref={discRef}></div>
      <button onClick={togglePlayPause} className={styles.playPauseButton}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
      <audio ref={audioRef} src="/audio/videoplayback.mp3" />



    </StyledAudio>
  );
}







const StyledAudio = styled.div`
height: auto;


button{
  background-color:black;
color:#fff;
}

`