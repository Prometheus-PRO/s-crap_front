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
import songimg from '../../assets/images/song.svg';

const RecommendSong = () => {
  const [selectedSongs, setSelectedSongs] = useRecoilState(songState);
  const songData = [
    { id: 1, imgSrc: songimg, title: '숲', singer: '최유리' },
    { id: 2, imgSrc: songimg, title: '우산', singer: '윤하' },
    { id: 3, imgSrc: songimg, title: '비도 오고 그래서', singer: '헤이즈' },
    { id: 4, imgSrc: songimg, title: '북두칠성', singer: '로이킴' },
  ];

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
