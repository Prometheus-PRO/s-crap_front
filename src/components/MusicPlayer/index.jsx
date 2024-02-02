import React, { useState, useRef, useEffect, useCallback } from "react";
import {
  AudioPlayerContainer,
  ProgressBar,
  TimeText,
  TimeContainer,
} from "./styled";
import styled from "styled-components";
import useRecoilState from "recoil";
import "react-h5-audio-player/lib/styles.css";
import "./styled.css";
import AudioPlayer from "react-h5-audio-player";

// src : 음악 파일 경로 (필수)
// rewind : 이전 곡으로 넘어가는 함수 (선택)
// foward : 다음 곡으로 넘어가는 함수 (선택)
const MusicPlayer = ({ src, rewind, foward }) => {
  if (rewind) {
    document.body
      .querySelector("button[aria-label=Rewind]")
      .addEventListener("click", rewind);
  }
  if (foward) {
    document.body
      .querySelector("button[aria-label=Foward]")
      .addEventListener("click", foward);
  }
  return (
    <AudioPlayerContainer>
      <AudioPlayer autoPlay src={src} showSkipControls={false} />
    </AudioPlayerContainer>
  );
};

export default MusicPlayer;
