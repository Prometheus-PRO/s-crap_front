import React, { useState } from "react";
import {
  Container,
  LinearGradient,
  Raw,
  PlayButton,
  Title,
  ListContainer,
  Item,
  MusicThumb,
  MusicInfo,
  MusicArtist,
  MusicAiArtist,
  MusicTitle,
  BackButton,
  BottomContainer,
  BottomMenu,
  BottomItem,
} from "./styled";
import { useNavigate } from "react-router-dom";
import PlayIcon from "../../assets/images/play_music.svg";
import BackButtonIcon from "../../assets/images/back_button.svg";
import PlusIcon from "../../assets/images/plus.svg";
import ShareIcon from "../../assets/images/share.svg";
//더미 데이터 --------------------------------
import BackgroundImage from "../../assets/dummy/background.png";
import ThumbImage from "../../assets/dummy/thumb.png";
//--------------------------------
const PlayList = () => {
  const navigate = useNavigate();
  const [playList, setPlayList] = useState({
    title: "비올떄, 아이유로 s'Crap",
    thumb: BackgroundImage,
    artist: "아이유",
    music: [
      {
        title: "숲",
        artist: "최유리",
        aiArtist: "아이유",
        thumb: ThumbImage,
      },
      {
        title: "숲",
        artist: "최유리",
        aiArtist: "아이유",
        thumb: ThumbImage,
      },
      {
        title: "숲",
        artist: "최유리",
        aiArtist: "아이유",
        thumb: ThumbImage,
      },
      {
        title: "숲",
        artist: "최유리",
        aiArtist: "아이유",
        thumb: ThumbImage,
      },
      {
        title: "숲",
        artist: "최유리",
        aiArtist: "아이유",
        thumb: ThumbImage,
      },
    ],
  });

  //공유버턴 클릭 이벤트
  const clickShareButton = () => {};
  //추가 버튼 클릭 이벤트
  const clickPlusButton = () => {};
  //재생버튼 추가
  const clickPlayButton = () => {};

  return (
    <Container>
      <BottomContainer>
        <BottomMenu>
          <BottomItem>
            <img src={PlusIcon} onClick={clickShareButton} />
            공유
          </BottomItem>
          <BottomItem>
            <img src={ShareIcon} onClick={clickPlusButton} />
            노래추가
          </BottomItem>
        </BottomMenu>
      </BottomContainer>
      <LinearGradient
        style={{
          background: `linear-gradient(180deg, rgba(16, 17, 18, 0.00) 0%, #000 100%), url(${playList.thumb}), lightgray 50%`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Raw>
          <div />
          <BackButton src={BackButtonIcon} onClick={() => navigate(-1)} />
        </Raw>
        <Raw>
          <Title>{playList.title}</Title>
          <PlayButton src={PlayIcon} onClick={clickPlayButton} />
        </Raw>
      </LinearGradient>
      <ListContainer>
        {playList.music.map((music, idx) => {
          return (
            <Item key={idx}>
              <MusicThumb src={music.thumb} />
              <MusicInfo>
                <MusicTitle>{music.title}</MusicTitle>
                <MusicArtist>
                  {music.artist} {"->"}{" "}
                  <MusicAiArtist>{music.aiArtist}</MusicAiArtist>{" "}
                </MusicArtist>
              </MusicInfo>
            </Item>
          );
        })}
      </ListContainer>
    </Container>
  );
};

export default PlayList;
