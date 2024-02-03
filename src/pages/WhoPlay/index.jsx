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
import BackgroundImage from '../../assets/images/leemu.svg';
import ThumbImage from '../../assets/images/mu2.svg';
import Arrow from '../../assets/images/arrow_down.svg';
import Microphone from '../../assets/images/microphone.svg';
import MusicPlayer from '../../components/MusicPlayer';

const PlayMusic = () => {
  const navigate = useNavigate();
  const [music, setMusic] = useState({
    title: '노래방에서',
    artist: '장범준',
    aiArtist: '이무진',
    thumb: ThumbImage,
    backgroundImage: BackgroundImage,
    src: '',
  });

  useEffect(() => {
    const getSong = async () => {
      try {
        const response = await axiosInstance.get(`/Lee mu jin-Karaoke.mp3`);
        console.log(response.data);
        setMusic((prevMusic) => ({
          ...prevMusic,
          src: 'http://218.156.133.227:8080/Lee mu jin-Karaoke.mp3',
        }));
      } catch (error) {
        console.error(error);
      }
    };
    getSong();
  }, []);

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
