// components/AudioPlayer.js
"use client"
import React, { useState, useRef } from 'react';
import styles from '../audioPlayer/audioplayer.module.css';
import styled from 'styled-components';
import { BsPauseCircleFill } from "react-icons/bs";
import { IoPlayCircle } from "react-icons/io5";

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
      {/* <div className={styles.disc} ref={discRef}></div> */}
      <button onClick={togglePlayPause} className={styles.playPauseButton}>
        {isPlaying ? <BsPauseCircleFill   className='playIcons' /> : <IoPlayCircle className='playIcons' />}
      </button>
      <audio ref={audioRef} src="/audio/videoplayback.mp3" />

      <div className="container-audio">
        <div className="colum1">
          <div className="row"></div>
        </div>
        <div className="colum1">
          <div className="row"></div>
        </div>
        <div className="colum1">
          <div className="row"></div>
        </div>
        <div className="colum1">
          <div className="row"></div>
        </div>
        <div className="colum1">
          <div className="row"></div>
        </div>
        <div className="colum1">
          <div className="row"></div>
        </div>
        <div className="colum1">
          <div className="row"></div>
        </div>
        <div className="colum1">
          <div className="row"></div>
        </div>
        <div className="colum1">
          <div className="row"></div>
        </div>
        <div className="colum1">
          <div className="row"></div>
        </div>
        <div className="colum1">
          <div className="row"></div>
        </div>
        <div className="colum1">
          <div className="row"></div>
        </div>
        <div className="colum1">
          <div className="row"></div>
        </div>
        <div className="colum1">
          <div className="row"></div>
        </div>
        <div className="colum1">
          <div className="row"></div>
        </div>
        <div className="colum1">
          <div className="row"></div>
        </div>
        <div className="colum1">
          <div className="row"></div>
        </div>
        <div className="colum1">
          <div className="row"></div>
        </div>
        {/* <div className="colum1">
        <div className="row"></div>
    </div>
    <div className="colum1">
        <div className="row"></div>
    </div>
    <div className="colum1">
        <div className="row"></div>
    </div>
    <div className="colum1">
        <div className="row"></div>
    </div>
    <div className="colum1">
        <div className="row"></div>
    </div> */}
      </div>



    </StyledAudio>
  );
}







const StyledAudio = styled.div`
height: auto;
display:flex;
flex-direction:row;
justify-content: flex-start;
align-items: flex-end;
background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);


button{
color:#fff;
border:none;
height:100%;
outline: none;
}

button:hover{
  background-color: none;
}

.playIcons{
font-size: 20px;
color:#000;
border-radius: 55%;
background: linear-gradient(45deg, #ffb700, yellow, #738000);
}


.container-audio {
    width: auto;
    height: 100%;
    padding: 0px;
    border-radius: 5px;
    /* background-color: green; */
    color: #444;
    margin-bottom:14px;
    overflow: hidden;
}
/* audio {
  width:100%;
}
audio:nth-child(2), audio:nth-child(4), audio:nth-child(6) {
    margin: 0;
} */
.container-audio .colum1 {
    width: 10px;
    height: 2em;
    border-radius: 5px;
    margin: 0 7px 0 0;
    display: inline-block;
    position: relative;
}
.container-audio .colum1:last-child {
    margin: 0;
}
.container-audio .colum1 .row {
    width: 100%;
    height: 100%;
    border-radius: 5px;
    background: linear-gradient(to up, #7700aa, #8800ff);
    position: absolute;
    -webkit-animation: Rofa 10s infinite ease-in-out;
    animation: Rofa 10s infinite ease-in-out;
    bottom: 0;
}
.container-audio .colum1:nth-of-type(1) .row {
    -webkit-animation-delay: 3.99s;
    animation-delay: 3.99s;
}
.container-audio .colum1:nth-of-type(2) .row {
    -webkit-animation-delay: 3.80s;
    animation-delay: 3.80s;
}
.container-audio .colum1:nth-of-type(3) .row {
    -webkit-animation-delay: 3.70s;
    animation-delay: 3.70s;
}
.container-audio .colum1:nth-of-type(4) .row {
    -webkit-animation-delay: 3.60s;
    animation-delay: 3.60s;
}
.container-audio .colum1:nth-of-type(5) .row {
    -webkit-animation-delay: 3.50s;
    animation-delay: 3.50s;
}
.container-audio .colum1:nth-of-type(6) .row {
    -webkit-animation-delay: 3.40s;
    animation-delay: 3.40s;
}
.container-audio .colum1:nth-of-type(7) .row {
    -webkit-animation-delay: 3.30s;
    animation-delay: 3.30s;
}
.container-audio .colum1:nth-of-type(8) .row {
    -webkit-animation-delay: 3.20s;
    animation-delay: 3.20s;
}
.container-audio .colum1:nth-of-type(9) .row {
    -webkit-animation-delay: 3.10s;
    animation-delay: 3.10s;
}
.container-audio .colum1:nth-of-type(10) .row {
    -webkit-animation-delay: 2.1s;
    animation-delay: 2.1s;
}
.container-audio .colum1:nth-of-type(11) .row {
    -webkit-animation-delay: 2.1s;
    animation-delay: 2.1s;
}
.container-audio .colum1:nth-of-type(12) .row {
    -webkit-animation-delay: 2.10s;
    animation-delay: 2.10s;
}
.container-audio .colum1:nth-of-type(13) .row {
    -webkit-animation-delay: 2.20s;
    animation-delay: 2.20s;
}
.container-audio .colum1:nth-of-type(14) .row {
    -webkit-animation-delay: 1.30s;
    animation-delay: 1.30s;
}
.container-audio .colum1:nth-of-type(15) .row {
    -webkit-animation-delay: 1.40s;
    animation-delay: 1.40s;
}
.container-audio .colum1:nth-of-type(16) .row {
    -webkit-animation-delay: 1.50s;
    animation-delay: 1.50s;
}
.container-audio .colum1:nth-of-type(17) .row {
    -webkit-animation-delay: 1.60s;
    animation-delay: 1.60s;
}
.container-audio .colum1:nth-of-type(18) .row {
    -webkit-animation-delay: 1.70s;
    animation-delay: 1.70s;
}
.container-audio .colum1:nth-of-type(19) .row {
    -webkit-animation-delay: 1.80s;
    animation-delay: 1.80s;
}
.container-audio .colum1:nth-of-type(20) .row {
    -webkit-animation-delay: 2s;
    animation-delay: 2s;
}

@-webkit-keyframes Rofa {
    0% {
        height: 0%;
        -webkit-transform: translatey(0);
        transform: translatey(0);
        background-color: transparent;
    }

    5% {
        height: 100%;
        -webkit-transform: translatey(15px);
        transform: translatey(15px);
        background-color: transparent;
    }
    10% {
        height: 90%;
        transform: translatey(0);
        -webkit-transform: translatey(0);
        background-color: transparent;
    }

    15% {
        height: 80%;
        -webkit-transform: translatey(0);
        transform: translatey(0);

        background-color: #ce9934;
    }
    20% {
        height: 70%;
        -webkit-transform: translatey(0);
        transform: translatey(0);
        background-color: #ce9934;
    }
    25% {
        height: 0%;
        -webkit-transform: translatey(0);
        transform: translatey(0);
        background-color: #ce9934;
    }
    30% {
        height: 70%;
        -webkit-transform: translatey(0);
        transform: translatey(0);
        background-color: #ce9934;
    }
    35% {
        height: 0%;
        -webkit-transform: translatey(0);
        transform: translatey(0);

        background-color: #ce9934;
    }
    40% {
        height: 60%;
        -webkit-transform: translatey(0);
        transform: translatey(0);

        background-color: #ce9934;
    }
    45% {
        height: 0%;
        -webkit-transform: translatey(0);
        transform: translatey(0);

        background-color: #ce9934;
    }
    50% {
        height: 50%;
        -webkit-transform: translatey(0);
        transform: translatey(0);

        background-color: #ce9934;
    }
    55% {
        height: 0%;
        -webkit-transform: translatey(0);
        transform: translatey(0);

        background-color: #ce9934;
    }
    60% {
        height: 40%;
        -webkit-transform: translatey(0);
        transform: translatey(0);

        background-color: #ce9934;
    }
    65% {
        height: 0%;
        -webkit-transform: translatey(0);
        transform: translatey(0);

        background-color: #ce9934;
    }
    70% {
        height: 30%;
        -webkit-transform: translatey(0);
        transform: translatey(0);

        background-color: #ce9934;
    }
    75% {
        height: 0%;
        -webkit-transform: translatey(0);
        transform: translatey(0);

        background-color: #ce9934;
    }
    80% {
        height: 20%;
        -webkit-transform: translatey(0);
        transform: translatey(0);

        background-color: #ce9934;
    }
    85% {
        height: 0%;
        -webkit-transform: translatey(0);
        transform: translatey(0);

        background-color: #ce9934;
    }
    90% {
        height: 10%;
        -webkit-transform: translatey(0);
        transform: translatey(0);

        background-color: #ce9934;
    }
    95% {
        height: 5%;
        -webkit-transform: translatey(0);
        transform: translatey(0);

        background-color: #ce9934;
    }
    100% {
        height: 0;
        -webkit-transform: translatey(0);
        transform: translatey(0);

        background-color: #ce9934;
    }
}


`