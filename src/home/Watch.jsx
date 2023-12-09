import React, { useState } from "react";
import styles from "./watch.module.css";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { ColorButton } from "../styled";
import arrowup from "../assets/arrowup.svg";
import arrowdown from "../assets/arrowdown.svg";

const Watch = () => {
  const [start, setStart] = useState(false);

  const [sec, setSec] = useState(0);

  const [resetKey, setResetKey] = useState(0);

  const audio = new Audio("/bell.wav");

  function incSec(x) {
    setSec((prev) => prev + x);
  }

  function decSec(x) {
    setSec((prev) => prev - x);
  }

  function secondsToTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    const formattedHours = hours.toString().padStart(2, "0");
    const formattedMinutes = minutes.toString().padStart(2, "0");
    const formattedSeconds = remainingSeconds.toString().padStart(2, "0");

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  }

  return (
    <div className={styles.box}>
      <div className={styles.watch}>
        <CountdownCircleTimer
          isPlaying={start}
          trailColor="transparent"
          duration={sec}
          colors="#FF6A6A"
          key={resetKey}
          size={160}
          onComplete={() => {
            setStart(false);
            setResetKey((key) => key + 1);
            audio.play();
          }}
        >
          {({ remainingTime }) => secondsToTime(remainingTime)}
        </CountdownCircleTimer>
      </div>
      <div className={styles.timer}>
        <div className={styles.clock}>
          <div className={styles.inc}>
            <ColorButton $bgColor="transparent" onClick={() => incSec(3600)}>
              <img src={arrowup} alt="" />{" "}
            </ColorButton>
            <ColorButton $bgColor="transparent" onClick={() => incSec(60)}>
              <img src={arrowup} alt="" />
            </ColorButton>
            <ColorButton $bgColor="transparent" onClick={() => incSec(1)}>
              <img src={arrowup} alt="" />
            </ColorButton>
          </div>
          <h1>{secondsToTime(sec)}</h1>
          <div className={styles.dec}>
            <ColorButton
              $bgColor="transparent"
              onClick={() => {
                if (sec >= 3600) {
                  decSec(3600);
                }
              }}
            >
              <img src={arrowdown} alt="" />
            </ColorButton>
            <ColorButton
              $bgColor="transparent"
              onClick={() => {
                if (sec >= 60) {
                  decSec(60);
                }
              }}
            >
              <img src={arrowdown} alt="" />
            </ColorButton>
            <ColorButton
              $bgColor="transparent"
              onClick={() => {
                if (sec >= 1) {
                  decSec(1);
                }
              }}
            >
              <img src={arrowdown} alt="" />
            </ColorButton>
          </div>
        </div>

        <ColorButton
          onClick={() => setStart(!start)}
          className={styles.browse}
          $bgColor="#FF6A6A"
        >
          {start ? "pause" : "start"}
        </ColorButton>
      </div>
    </div>
  );
};

export default Watch;
