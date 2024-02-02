// CreateList2.js
import React, { useEffect } from 'react';
import { StepHeader, StepText, Search, RecommendSong } from '../../components';
import { Container, Button, Detail } from './styled';
import { useRecoilValue } from 'recoil';
import { songState } from '../../store/atoms';
import { useNavigate } from 'react-router-dom';

const CreateList2 = () => {
  const songs = useRecoilValue(songState);
  const navigate = useNavigate();

  const handleButtonClick = () => {
    if (songs.length !== 0) {
      navigate('/step3');
    }
  };

  useEffect(() => {}, [songs]);

  return (
    <Container>
      <StepHeader step={2} />
      <StepText topText="비올 때 듣고싶은" bottomText="노래를 담아주세요." />
      <Detail>선택한 상황에 어울리는 노래를 추천해드려요.</Detail>
      <Search info="노래, 가수를 입력하세요." />
      <RecommendSong />
      <Button onClick={handleButtonClick} disabled={songs.length === 0}>
        다음
      </Button>
    </Container>
  );
};

export default CreateList2;
