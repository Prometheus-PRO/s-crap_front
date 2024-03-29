import React, { useEffect, useState } from 'react';
import {
  Container,
  MusicContainer,
  Header,
  BackIcon,
  PlayerContainer,
  ThumbContainer,
  ControllerContainer,
  ChangeButton,
  MicrophoneIcon,
  ChangeText,
  Thumb,
  MusicInfo,
  MusicTitle,
  MusicArtist,
  StyledSpan,
} from './styled';
import { useNavigate } from 'react-router-dom';
import { axiosInstance } from '../../apis';
import BackgroundImage from '../../assets/dummy/background.png';
import ThumbImage from '../../assets/dummy/thumb.png';
import Arrow from '../../assets/images/arrow_down.svg';
import Microphone from '../../assets/images/microphone.svg';
import MusicPlayer from '../../components/MusicPlayer';

const PlayMusic = () => {
  const navigate = useNavigate();
  const [music, setMusic] = useState({
    title: '숲',
    artist: '최유리',
    aiArtist: '아이유',
    thumb: ThumbImage,
    backgroundImage: BackgroundImage,
    src: '',
  });

  useEffect(() => {
    const getSong = async () => {
      try {
        const response = await axiosInstance.get(`/IU-Forrest.mp3`);
        console.log(response.data);
        setMusic((prevMusic) => ({
          ...prevMusic,
          src: 'http://218.156.133.227:8080/IU-Forrest.mp3',
        }));
      } catch (error) {
        console.error(error);
      }
    };
    getSong();
  }, []); // 빈 배열을 넣어 한 번만 실행되도록 설정

  return (
    <Container style={{ backgroundImage: `url(${music.backgroundImage})` }}>
      <MusicContainer>
        <Header>
          <BackIcon
            src={Arrow}
            alt="back"
            onClick={() => {
              navigate(-1);
            }}
          />
        </Header>
        <PlayerContainer>
          <ThumbContainer>
            <ChangeButton>
              <MicrophoneIcon src={Microphone} />
              <ChangeText>원곡으로 전환</ChangeText>
            </ChangeButton>
            <Thumb src={ThumbImage} />
            <MusicInfo>
              <MusicTitle>{music.title}</MusicTitle>
              <MusicArtist>
                {music.artist} {'->'} <StyledSpan>{music.aiArtist}</StyledSpan>
              </MusicArtist>
            </MusicInfo>
          </ThumbContainer>
          <ControllerContainer>
            <MusicPlayer src={music.src} />
          </ControllerContainer>
        </PlayerContainer>
      </MusicContainer>
    </Container>
  );
};

export default PlayMusic;
