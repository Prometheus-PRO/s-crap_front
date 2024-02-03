import React from 'react';
import { useRecoilState } from 'recoil';
import { songState } from '../../store/atoms';
import {
  Container,
  Text,
  StyledText,
  Image,
  Card,
  CardWrapper,
  Singer,
  TextWrapper,
  Left,
  CheckImage,
} from './styled';

import uncheck from '../../assets/images/uncheck.svg';
import check from '../../assets/images/check.svg';
import song1 from '../../assets/images/song.svg';
import song2 from '../../assets/images/song2.svg';
import song3 from '../../assets/images/song3.svg';
import song4 from '../../assets/images/song4.svg';
import mu1 from '../../assets/images/mu1.svg';
import mu2 from '../../assets/images/mu2.svg';
import mu3 from '../../assets/images/mu3.svg';
import mu4 from '../../assets/images/mu4.svg';

const RecommendSong = ({ flag }) => {
  const [selectedSongs, setSelectedSongs] = useRecoilState(songState);
  let songData;

  if (flag === 2) {
    songData = [
      { id: 1, imgSrc: mu1, title: '이 밤을 빌려 말해요', singer: '10cm' },
      { id: 2, imgSrc: mu2, title: '노래방에서', singer: '장범준' },
      { id: 3, imgSrc: mu3, title: '사월의 눈', singer: '허각' },
      { id: 4, imgSrc: mu4, title: '예뻐서', singer: '유승우' },
    ];
  } else {
    songData = [
      { id: 1, imgSrc: song1, title: '숲', singer: '최유리' },
      { id: 2, imgSrc: song2, title: '우산', singer: '윤하' },
      { id: 3, imgSrc: song3, title: '비도 오고 그래서', singer: '헤이즈' },
      { id: 4, imgSrc: song4, title: '북두칠성', singer: '로이킴' },
    ];
  }

  const handleCardClick = (selectedId) => {
    const isAlreadySelected = selectedSongs.some(
      (song) => song.id === selectedId
    );

    if (isAlreadySelected) {
      // Deselect the song
      const updatedSongs = selectedSongs.filter(
        (song) => song.id !== selectedId
      );
      setSelectedSongs(updatedSongs);
    } else {
      // Select the song
      const selectedSong = songData.find((song) => song.id === selectedId);
      setSelectedSongs([...selectedSongs, selectedSong]);
    }
  };

  return (
    <Container>
      <Text>AI 추천 노래</Text>
      <CardWrapper>
        {songData.map((song) => (
          <Card
            key={song.id}
            selected={selectedSongs.some(
              (selectedSong) => selectedSong.id === song.id
            )}
            onClick={() => handleCardClick(song.id)}
          >
            <Left>
              <Image src={song.imgSrc} alt={song.title} />
              <TextWrapper>
                <StyledText>{song.title}</StyledText>
                <Singer>{song.singer}</Singer>
              </TextWrapper>
            </Left>
            <CheckImage
              src={
                selectedSongs.some(
                  (selectedSong) => selectedSong.id === song.id
                )
                  ? check
                  : uncheck
              }
            />
          </Card>
        ))}
      </CardWrapper>
    </Container>
  );
};

export default RecommendSong;
