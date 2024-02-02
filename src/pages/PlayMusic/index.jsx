import React from "react";
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
} from "./styled";
import { useNavigate } from "react-router-dom";
//이거 하드코딩으로 데이터 박아둔거
import BackgroundImage from "../../assets/dummy/background.png";
import ThumbImage from "../../assets/dummy/thumb.png";
//-------------------------

import Arrow from "../../assets/images/arrow_down.svg";
import Microphone from "../../assets/images/microphone.svg";
import MusicPlayer from "../../components/MusicPlayer";

const PlayMusic = () => {
  const navigate = useNavigate();
  const [music, setMusic] = React.useState({
    title: "숲",
    artist: "최유리",
    aiArtist: "아이유",
    thumb: ThumbImage,
    backgroundImage: BackgroundImage,
    src: "https://ccrma.stanford.edu/~jos/mp3/harpsi-cs.mp3",
  });

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
                {music.artist} {"->"} <StyledSpan>{music.aiArtist}</StyledSpan>
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
