import React, { useEffect } from 'react';
import {
  StepHeader,
  StepText,
  Search,
  RecommendArtist,
  RollingBanner,
} from '../../../components';
import {
  Container,
  Button,
  Detail,
  ListButton,
  Image,
  ButtonWrapper,
  Badge,
} from './styled';
import { useRecoilValue } from 'recoil';
import { songState } from '../../../store/atoms';
import { artistState } from '../../../store/atoms';
import { useNavigate } from 'react-router-dom';

const CreateList4 = () => {
  const songs = useRecoilValue(songState);
  const artist = useRecoilValue(artistState);
  const navigate = useNavigate();

  const handleButtonClick = () => {
    if (artist !== 'none') {
      navigate('/step4');
    }
  };

  useEffect(() => {}, [songs]);

  return (
    <Container>
      <StepHeader step={4} />
      <StepText topText="s'Crap의 커버 사진을" bottomText="선택해주세요." />
      <Detail>
        선택한 상황, 노래, 아티스티에 어울리는 커버를 추천해드려요.
      </Detail>
      <RollingBanner flag="coverImg" />
      <Button onClick={handleButtonClick} disabled={artist === 'none'}>
        다음
      </Button>
    </Container>
  );
};

export default CreateList4;
