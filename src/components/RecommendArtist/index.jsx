import React from 'react';
import { useRecoilState } from 'recoil';
import { artistState } from '../../store/atoms';
import { Container, Text, Image, Card, CardWrapper } from './styled';

import iu from '../../assets/images/iu.svg';
import lee from '../../assets/images/lee.svg';
import bruno from '../../assets/images/bruno.svg';
import billie from '../../assets/images/billie.svg';

const RecommendSong = () => {
  const [selectedArtist, setSelectedArtist] = useRecoilState(artistState);
  const artistData = ['아이유', '이무진', 'BrunoMars', 'BillieEilish'];
  const imgData = [iu, lee, bruno, billie];

  const handleCardClick = (selectedArtist) => {
    setSelectedArtist(selectedArtist);
  };

  return (
    <Container>
      <Text>AI 추천 아티스트</Text>
      <CardWrapper>
        {artistData.map((artist, index) => (
          <Card
            key={index}
            selected={selectedArtist === artist}
            onClick={() => handleCardClick(artist)}
          >
            <Image src={imgData[index]} alt={artist} />
          </Card>
        ))}
      </CardWrapper>
    </Container>
  );
};

export default RecommendSong;
