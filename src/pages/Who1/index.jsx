import React, { useEffect } from 'react';
import {
  WhoStepHeader,
  StepText,
  Search,
  RecommendArtist,
} from '../../components';
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
import { songState } from '../../store/atoms';
import { artistState } from '../../store/atoms';
import { useNavigate } from 'react-router-dom';

const Who1 = () => {
  const songs = useRecoilValue(songState);
  const artist = useRecoilValue(artistState);
  const navigate = useNavigate();

  const handleButtonClick = () => {
    if (artist !== 'none') {
      navigate('/who2');
    }
  };

  useEffect(() => {}, [songs]);

  return (
    <Container>
      <WhoStepHeader step={1} />
      <StepText topText="어떤 아티스트의" bottomText="s'Crap을 만들까요?" />
      <Detail>
        선택한 아티스트의 AI 보이스로 플레이리스트를 만들 수 있어요.
      </Detail>
      <Search info="아티스트 이름을 검색하세요." />
      <RecommendArtist />
      <Button onClick={handleButtonClick} disabled={artist === 'none'}>
        다음
      </Button>
    </Container>
  );
};

export default Who1;
