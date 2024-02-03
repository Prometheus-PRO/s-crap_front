import React from 'react';
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
  ColorText,
} from './styled';
import { useNavigate } from 'react-router-dom';
import PlayIcon from '../../assets/images/play_music.svg';
import BackButtonIcon from '../../assets/images/back_button.svg';
import PlusIcon from '../../assets/images/plus.svg';
import ShareIcon from '../../assets/images/share.svg';
//더미 데이터 --------------------------------

import BackgroundImage from '../../assets/images/leemu.svg';
import song1 from '../../assets/images/mu1.svg';
import song2 from '../../assets/images/mu2.svg';
import song3 from '../../assets/images/mu3.svg';

//--------------------------------
const WhoList = () => {
  const navigate = useNavigate();
  const playList = {
    condition: '언제든지,',
    thumb: BackgroundImage,
    artist: '이무진',
    music: [
      {
        title: '이 밤을 빌려 말해요',
        artist: '10cm',
        aiArtist: '이무진',
        thumb: song1,
      },
      {
        title: '노래방에서',
        artist: '장범준',
        aiArtist: '이무진',
        thumb: song2,
      },
      {
        title: '사월의 눈',
        artist: '허각',
        aiArtist: '이무진',
        thumb: song3,
      },
    ],
  };

  const clickShareButton = () => {};
  //추가 버튼 클릭 이벤트
  const clickPlusButton = () => {};
  //재생버튼 추가
  const clickPlayButton = () => {};
  const handleItemClick = () => {
    navigate('/whoplay');
  };

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
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <Raw>
          <div />
          <BackButton src={BackButtonIcon} onClick={() => navigate(-1)} />
        </Raw>
        <Raw>
          <Title>
            {playList.condition}
            <br />
            <ColorText> {playList.artist}</ColorText>로 s'Crap
          </Title>
          <PlayButton src={PlayIcon} onClick={clickPlayButton} />
        </Raw>
      </LinearGradient>
      <ListContainer>
        {playList.music.map((music, idx) => {
          return (
            <Item key={idx} onClick={handleItemClick}>
              <MusicThumb src={music.thumb} />
              <MusicInfo>
                <MusicTitle>{music.title}</MusicTitle>
                <MusicArtist>
                  {music.artist} {'->'}{' '}
                  <MusicAiArtist>{music.aiArtist}</MusicAiArtist>{' '}
                </MusicArtist>
              </MusicInfo>
            </Item>
          );
        })}
      </ListContainer>
    </Container>
  );
};

export default WhoList;
